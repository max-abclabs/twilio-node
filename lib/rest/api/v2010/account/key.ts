/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Api
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V2010 from "../../V2010";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
import { isValidPathParam } from "../../../../base/utility";

/**
 * Options to pass to update a KeyInstance
 */
export interface KeyContextUpdateOptions {
  /** A descriptive string that you create to describe the resource. It can be up to 64 characters long. */
  friendlyName?: string;
}
/**
 * Options to pass to each
 */
export interface KeyListInstanceEachOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: KeyInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface KeyListInstanceOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface KeyListInstancePageOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface KeyContext {
  /**
   * Remove a KeyInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a KeyInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed KeyInstance
   */
  fetch(
    callback?: (error: Error | null, item?: KeyInstance) => any
  ): Promise<KeyInstance>;

  /**
   * Update a KeyInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed KeyInstance
   */
  update(
    callback?: (error: Error | null, item?: KeyInstance) => any
  ): Promise<KeyInstance>;
  /**
   * Update a KeyInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed KeyInstance
   */
  update(
    params: KeyContextUpdateOptions,
    callback?: (error: Error | null, item?: KeyInstance) => any
  ): Promise<KeyInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface KeyContextSolution {
  accountSid: string;
  sid: string;
}

export class KeyContextImpl implements KeyContext {
  protected _solution: KeyContextSolution;
  protected _uri: string;

  constructor(protected _version: V2010, accountSid: string, sid: string) {
    if (!isValidPathParam(accountSid)) {
      throw new Error("Parameter 'accountSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { accountSid, sid };
    this._uri = `/Accounts/${accountSid}/Keys/${sid}.json`;
  }

  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.remove({
        uri: instance._uri,
        method: "delete",
      });

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  fetch(
    callback?: (error: Error | null, item?: KeyInstance) => any
  ): Promise<KeyInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new KeyInstance(
          operationVersion,
          payload,
          instance._solution.accountSid,
          instance._solution.sid
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(
    params?:
      | KeyContextUpdateOptions
      | ((error: Error | null, item?: KeyInstance) => any),
    callback?: (error: Error | null, item?: KeyInstance) => any
  ): Promise<KeyInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.update({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new KeyInstance(
          operationVersion,
          payload,
          instance._solution.accountSid,
          instance._solution.sid
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return this._solution;
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

interface KeyPayload extends TwilioResponsePayload {
  keys: KeyResource[];
}

interface KeyResource {
  sid: string;
  friendly_name: string;
  date_created: Date;
  date_updated: Date;
}

export class KeyInstance {
  protected _solution: KeyContextSolution;
  protected _context?: KeyContext;

  constructor(
    protected _version: V2010,
    payload: KeyResource,
    accountSid: string,
    sid?: string
  ) {
    this.sid = payload.sid;
    this.friendlyName = payload.friendly_name;
    this.dateCreated = deserialize.rfc2822DateTime(payload.date_created);
    this.dateUpdated = deserialize.rfc2822DateTime(payload.date_updated);

    this._solution = { accountSid, sid: sid || this.sid };
  }

  /**
   * The unique string that identifies the resource
   */
  sid: string;
  /**
   * The string that you assigned to describe the resource
   */
  friendlyName: string;
  /**
   * The RFC 2822 date and time in GMT that the resource was created
   */
  dateCreated: Date;
  /**
   * The RFC 2822 date and time in GMT that the resource was last updated
   */
  dateUpdated: Date;

  private get _proxy(): KeyContext {
    this._context =
      this._context ||
      new KeyContextImpl(
        this._version,
        this._solution.accountSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Remove a KeyInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
    return this._proxy.remove(callback);
  }

  /**
   * Fetch a KeyInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed KeyInstance
   */
  fetch(
    callback?: (error: Error | null, item?: KeyInstance) => any
  ): Promise<KeyInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a KeyInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed KeyInstance
   */
  update(
    callback?: (error: Error | null, item?: KeyInstance) => any
  ): Promise<KeyInstance>;
  /**
   * Update a KeyInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed KeyInstance
   */
  update(
    params: KeyContextUpdateOptions,
    callback?: (error: Error | null, item?: KeyInstance) => any
  ): Promise<KeyInstance>;

  update(
    params?: any,
    callback?: (error: Error | null, item?: KeyInstance) => any
  ): Promise<KeyInstance> {
    return this._proxy.update(params, callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      sid: this.sid,
      friendlyName: this.friendlyName,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface KeySolution {
  accountSid: string;
}

export interface KeyListInstance {
  _version: V2010;
  _solution: KeySolution;
  _uri: string;

  (sid: string): KeyContext;
  get(sid: string): KeyContext;

  /**
   * Streams KeyInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { KeyListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (item: KeyInstance, done: (err?: Error) => void) => void
  ): void;
  each(
    params: KeyListInstanceEachOptions,
    callback?: (item: KeyInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of KeyInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: KeyPage) => any
  ): Promise<KeyPage>;
  /**
   * Lists KeyInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { KeyListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: KeyInstance[]) => any
  ): Promise<KeyInstance[]>;
  list(
    params: KeyListInstanceOptions,
    callback?: (error: Error | null, items: KeyInstance[]) => any
  ): Promise<KeyInstance[]>;
  /**
   * Retrieve a single page of KeyInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { KeyListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: KeyPage) => any
  ): Promise<KeyPage>;
  page(
    params: KeyListInstancePageOptions,
    callback?: (error: Error | null, items: KeyPage) => any
  ): Promise<KeyPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function KeyListInstance(
  version: V2010,
  accountSid: string
): KeyListInstance {
  if (!isValidPathParam(accountSid)) {
    throw new Error("Parameter 'accountSid' is not valid.");
  }

  const instance = ((sid) => instance.get(sid)) as KeyListInstance;

  instance.get = function get(sid): KeyContext {
    return new KeyContextImpl(version, accountSid, sid);
  };

  instance._version = version;
  instance._solution = { accountSid };
  instance._uri = `/Accounts/${accountSid}/Keys.json`;

  instance.page = function page(
    params?:
      | KeyListInstancePageOptions
      | ((error: Error | null, items: KeyPage) => any),
    callback?: (error: Error | null, items: KeyPage) => any
  ): Promise<KeyPage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["pageSize"] !== undefined) data["PageSize"] = params["pageSize"];

    if (params.pageNumber !== undefined) data["Page"] = params.pageNumber;
    if (params.pageToken !== undefined) data["PageToken"] = params.pageToken;

    const headers: any = {};

    let operationVersion = version,
      operationPromise = operationVersion.page({
        uri: instance._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) => new KeyPage(operationVersion, payload, instance._solution)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: KeyPage) => any
  ): Promise<KeyPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) => new KeyPage(instance._version, payload, instance._solution)
    );
    pagePromise = instance._version.setPromiseCallback(pagePromise, callback);
    return pagePromise;
  };

  instance.toJSON = function toJSON() {
    return instance._solution;
  };

  instance[inspect.custom] = function inspectImpl(
    _depth: any,
    options: InspectOptions
  ) {
    return inspect(instance.toJSON(), options);
  };

  return instance;
}

export class KeyPage extends Page<V2010, KeyPayload, KeyResource, KeyInstance> {
  /**
   * Initialize the KeyPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V2010,
    response: Response<string>,
    solution: KeySolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of KeyInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: KeyResource): KeyInstance {
    return new KeyInstance(this._version, payload, this._solution.accountSid);
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

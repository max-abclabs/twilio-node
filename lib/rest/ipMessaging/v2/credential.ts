/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Ip_messaging
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V2 from "../V2";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
import { isValidPathParam } from "../../../base/utility";

type CredentialPushService = "gcm" | "apn" | "fcm";

/**
 * Options to pass to update a CredentialInstance
 */
export interface CredentialContextUpdateOptions {
  /**  */
  friendlyName?: string;
  /**  */
  certificate?: string;
  /**  */
  privateKey?: string;
  /**  */
  sandbox?: boolean;
  /**  */
  apiKey?: string;
  /**  */
  secret?: string;
}

/**
 * Options to pass to create a CredentialInstance
 */
export interface CredentialListInstanceCreateOptions {
  /**  */
  type: CredentialPushService;
  /**  */
  friendlyName?: string;
  /**  */
  certificate?: string;
  /**  */
  privateKey?: string;
  /**  */
  sandbox?: boolean;
  /**  */
  apiKey?: string;
  /**  */
  secret?: string;
}
/**
 * Options to pass to each
 */
export interface CredentialListInstanceEachOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: CredentialInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface CredentialListInstanceOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface CredentialListInstancePageOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface CredentialContext {
  /**
   * Remove a CredentialInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a CredentialInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed CredentialInstance
   */
  fetch(
    callback?: (error: Error | null, item?: CredentialInstance) => any
  ): Promise<CredentialInstance>;

  /**
   * Update a CredentialInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed CredentialInstance
   */
  update(
    callback?: (error: Error | null, item?: CredentialInstance) => any
  ): Promise<CredentialInstance>;
  /**
   * Update a CredentialInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed CredentialInstance
   */
  update(
    params: CredentialContextUpdateOptions,
    callback?: (error: Error | null, item?: CredentialInstance) => any
  ): Promise<CredentialInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface CredentialContextSolution {
  sid: string;
}

export class CredentialContextImpl implements CredentialContext {
  protected _solution: CredentialContextSolution;
  protected _uri: string;

  constructor(protected _version: V2, sid: string) {
    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { sid };
    this._uri = `/Credentials/${sid}`;
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
    callback?: (error: Error | null, item?: CredentialInstance) => any
  ): Promise<CredentialInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new CredentialInstance(
          operationVersion,
          payload,
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
      | CredentialContextUpdateOptions
      | ((error: Error | null, item?: CredentialInstance) => any),
    callback?: (error: Error | null, item?: CredentialInstance) => any
  ): Promise<CredentialInstance> {
    if (typeof params === "function") {
      callback = params as (
        error: Error | null,
        item?: CredentialInstance
      ) => any;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];
    if (params["certificate"] !== undefined)
      data["Certificate"] = params["certificate"];
    if (params["privateKey"] !== undefined)
      data["PrivateKey"] = params["privateKey"];
    if (params["sandbox"] !== undefined)
      data["Sandbox"] = serialize.bool(params["sandbox"]);
    if (params["apiKey"] !== undefined) data["ApiKey"] = params["apiKey"];
    if (params["secret"] !== undefined) data["Secret"] = params["secret"];

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
        new CredentialInstance(
          operationVersion,
          payload,
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

interface CredentialPayload extends TwilioResponsePayload {
  credentials: CredentialResource[];
}

interface CredentialResource {
  sid: string;
  account_sid: string;
  friendly_name: string;
  type: CredentialPushService;
  sandbox: string;
  date_created: Date;
  date_updated: Date;
  url: string;
}

export class CredentialInstance {
  protected _solution: CredentialContextSolution;
  protected _context?: CredentialContext;

  constructor(
    protected _version: V2,
    payload: CredentialResource,
    sid?: string
  ) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.friendlyName = payload.friendly_name;
    this.type = payload.type;
    this.sandbox = payload.sandbox;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.url = payload.url;

    this._solution = { sid: sid || this.sid };
  }

  sid: string;
  accountSid: string;
  friendlyName: string;
  type: CredentialPushService;
  sandbox: string;
  dateCreated: Date;
  dateUpdated: Date;
  url: string;

  private get _proxy(): CredentialContext {
    this._context =
      this._context ||
      new CredentialContextImpl(this._version, this._solution.sid);
    return this._context;
  }

  /**
   * Remove a CredentialInstance
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
   * Fetch a CredentialInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed CredentialInstance
   */
  fetch(
    callback?: (error: Error | null, item?: CredentialInstance) => any
  ): Promise<CredentialInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a CredentialInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed CredentialInstance
   */
  update(
    callback?: (error: Error | null, item?: CredentialInstance) => any
  ): Promise<CredentialInstance>;
  /**
   * Update a CredentialInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed CredentialInstance
   */
  update(
    params: CredentialContextUpdateOptions,
    callback?: (error: Error | null, item?: CredentialInstance) => any
  ): Promise<CredentialInstance>;

  update(
    params?: any,
    callback?: (error: Error | null, item?: CredentialInstance) => any
  ): Promise<CredentialInstance> {
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
      accountSid: this.accountSid,
      friendlyName: this.friendlyName,
      type: this.type,
      sandbox: this.sandbox,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface CredentialSolution {}

export interface CredentialListInstance {
  _version: V2;
  _solution: CredentialSolution;
  _uri: string;

  (sid: string): CredentialContext;
  get(sid: string): CredentialContext;

  /**
   * Create a CredentialInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed CredentialInstance
   */
  create(
    params: CredentialListInstanceCreateOptions,
    callback?: (error: Error | null, item?: CredentialInstance) => any
  ): Promise<CredentialInstance>;

  /**
   * Streams CredentialInstance records from the API.
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
   * @param { CredentialListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (item: CredentialInstance, done: (err?: Error) => void) => void
  ): void;
  each(
    params: CredentialListInstanceEachOptions,
    callback?: (item: CredentialInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of CredentialInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: CredentialPage) => any
  ): Promise<CredentialPage>;
  /**
   * Lists CredentialInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { CredentialListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: CredentialInstance[]) => any
  ): Promise<CredentialInstance[]>;
  list(
    params: CredentialListInstanceOptions,
    callback?: (error: Error | null, items: CredentialInstance[]) => any
  ): Promise<CredentialInstance[]>;
  /**
   * Retrieve a single page of CredentialInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { CredentialListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: CredentialPage) => any
  ): Promise<CredentialPage>;
  page(
    params: CredentialListInstancePageOptions,
    callback?: (error: Error | null, items: CredentialPage) => any
  ): Promise<CredentialPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function CredentialListInstance(version: V2): CredentialListInstance {
  const instance = ((sid) => instance.get(sid)) as CredentialListInstance;

  instance.get = function get(sid): CredentialContext {
    return new CredentialContextImpl(version, sid);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = `/Credentials`;

  instance.create = function create(
    params: CredentialListInstanceCreateOptions,
    callback?: (error: Error | null, item?: CredentialInstance) => any
  ): Promise<CredentialInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["type"] === null || params["type"] === undefined) {
      throw new Error("Required parameter \"params['type']\" missing.");
    }

    let data: any = {};

    data["Type"] = params["type"];
    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];
    if (params["certificate"] !== undefined)
      data["Certificate"] = params["certificate"];
    if (params["privateKey"] !== undefined)
      data["PrivateKey"] = params["privateKey"];
    if (params["sandbox"] !== undefined)
      data["Sandbox"] = serialize.bool(params["sandbox"]);
    if (params["apiKey"] !== undefined) data["ApiKey"] = params["apiKey"];
    if (params["secret"] !== undefined) data["Secret"] = params["secret"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";

    let operationVersion = version,
      operationPromise = operationVersion.create({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) => new CredentialInstance(operationVersion, payload)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.page = function page(
    params?:
      | CredentialListInstancePageOptions
      | ((error: Error | null, item?: CredentialPage) => any),
    callback?: (error: Error | null, item?: CredentialPage) => any
  ): Promise<CredentialPage> {
    if (typeof params === "function") {
      callback = params as (error: Error | null, item?: CredentialPage) => any;
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
      (payload) =>
        new CredentialPage(operationVersion, payload, instance._solution)
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
    callback?: (error: Error | null, items: CredentialPage) => any
  ): Promise<CredentialPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new CredentialPage(instance._version, payload, instance._solution)
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

export class CredentialPage extends Page<
  V2,
  CredentialPayload,
  CredentialResource,
  CredentialInstance
> {
  /**
   * Initialize the CredentialPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V2,
    response: Response<string>,
    solution: CredentialSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of CredentialInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: CredentialResource): CredentialInstance {
    return new CredentialInstance(this._version, payload);
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

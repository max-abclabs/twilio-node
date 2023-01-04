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
import Page, { TwilioResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V2010 from "../../../V2010";
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");
import { isValidPathParam } from "../../../../../base/utility";
import { CredentialListInstance as CredentialListInstanceImport } from "./credentialList/credential";

/**
 * Options to pass to update a CredentialListInstance
 */
export interface CredentialListContextUpdateOptions {
  /** A human readable descriptive text for a CredentialList, up to 64 characters long. */
  friendlyName: string;
}

/**
 * Options to pass to create a CredentialListInstance
 */
export interface CredentialListListInstanceCreateOptions {
  /** A human readable descriptive text that describes the CredentialList, up to 64 characters long. */
  friendlyName: string;
}
/**
 * Options to pass to each
 */
export interface CredentialListListInstanceEachOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (
    item: CredentialListInstance,
    done: (err?: Error) => void
  ) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface CredentialListListInstanceOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface CredentialListListInstancePageOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface CredentialListContext {
  credentials: CredentialListInstanceImport;

  /**
   * Remove a CredentialListInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a CredentialListInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed CredentialListInstance
   */
  fetch(
    callback?: (error: Error | null, item?: CredentialListInstance) => any
  ): Promise<CredentialListInstance>;

  /**
   * Update a CredentialListInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed CredentialListInstance
   */
  update(
    params: CredentialListContextUpdateOptions,
    callback?: (error: Error | null, item?: CredentialListInstance) => any
  ): Promise<CredentialListInstance>;
  update(params: any, callback?: any): Promise<CredentialListInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface CredentialListContextSolution {
  accountSid?: string;
  sid?: string;
}

export class CredentialListContextImpl implements CredentialListContext {
  protected _solution: CredentialListContextSolution;
  protected _uri: string;

  protected _credentials?: CredentialListInstanceImport;

  constructor(protected _version: V2010, accountSid: string, sid: string) {
    if (!isValidPathParam(accountSid)) {
      throw new Error("Parameter 'accountSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { accountSid, sid };
    this._uri = `/Accounts/${accountSid}/SIP/CredentialLists/${sid}.json`;
  }

  get credentials(): CredentialListInstanceImport {
    this._credentials =
      this._credentials ||
      CredentialListInstanceImport(
        this._version,
        this._solution.accountSid,
        this._solution.sid
      );
    return this._credentials;
  }

  remove(callback?: any): Promise<boolean> {
    let operationVersion = this._version,
      operationPromise = operationVersion.remove({
        uri: this._uri,
        method: "delete",
      });

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  fetch(callback?: any): Promise<CredentialListInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new CredentialListInstance(
          operationVersion,
          payload,
          this._solution.accountSid,
          this._solution.sid
        )
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(params: any, callback?: any): Promise<CredentialListInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (
      params["friendlyName"] === null ||
      params["friendlyName"] === undefined
    ) {
      throw new Error("Required parameter \"params['friendlyName']\" missing.");
    }

    let data: any = {};

    data["FriendlyName"] = params["friendlyName"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";

    let operationVersion = this._version,
      operationPromise = operationVersion.update({
        uri: this._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new CredentialListInstance(
          operationVersion,
          payload,
          this._solution.accountSid,
          this._solution.sid
        )
    );

    operationPromise = this._version.setPromiseCallback(
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

interface CredentialListPayload extends TwilioResponsePayload {
  credential_lists: CredentialListResource[];
}

interface CredentialListResource {
  account_sid?: string | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  friendly_name?: string | null;
  sid?: string | null;
  subresource_uris?: object | null;
  uri?: string | null;
}

export class CredentialListInstance {
  protected _solution: CredentialListContextSolution;
  protected _context?: CredentialListContext;

  constructor(
    protected _version: V2010,
    payload: CredentialListResource,
    accountSid: string,
    sid?: string
  ) {
    this.accountSid = payload.account_sid;
    this.dateCreated = deserialize.rfc2822DateTime(payload.date_created);
    this.dateUpdated = deserialize.rfc2822DateTime(payload.date_updated);
    this.friendlyName = payload.friendly_name;
    this.sid = payload.sid;
    this.subresourceUris = payload.subresource_uris;
    this.uri = payload.uri;

    this._solution = { accountSid, sid: sid || this.sid };
  }

  /**
   * The unique sid that identifies this account
   */
  accountSid?: string | null;
  /**
   * The date this resource was created
   */
  dateCreated?: Date | null;
  /**
   * The date this resource was last updated
   */
  dateUpdated?: Date | null;
  /**
   * Human readable descriptive text
   */
  friendlyName?: string | null;
  /**
   * A string that uniquely identifies this credential
   */
  sid?: string | null;
  /**
   * The list of credentials associated with this credential list.
   */
  subresourceUris?: object | null;
  /**
   * The URI for this resource
   */
  uri?: string | null;

  private get _proxy(): CredentialListContext {
    this._context =
      this._context ||
      new CredentialListContextImpl(
        this._version,
        this._solution.accountSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Remove a CredentialListInstance
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
   * Fetch a CredentialListInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed CredentialListInstance
   */
  fetch(
    callback?: (error: Error | null, item?: CredentialListInstance) => any
  ): Promise<CredentialListInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a CredentialListInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed CredentialListInstance
   */
  update(
    params: CredentialListContextUpdateOptions,
    callback?: (error: Error | null, item?: CredentialListInstance) => any
  ): Promise<CredentialListInstance>;
  update(params: any, callback?: any): Promise<CredentialListInstance> {
    return this._proxy.update(params, callback);
  }

  /**
   * Access the credentials.
   */
  credentials(): CredentialListInstanceImport {
    return this._proxy.credentials;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      accountSid: this.accountSid,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      friendlyName: this.friendlyName,
      sid: this.sid,
      subresourceUris: this.subresourceUris,
      uri: this.uri,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface CredentialListListInstance {
  (sid: string): CredentialListContext;
  get(sid: string): CredentialListContext;

  /**
   * Create a CredentialListInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed CredentialListInstance
   */
  create(
    params: CredentialListListInstanceCreateOptions,
    callback?: (error: Error | null, item?: CredentialListInstance) => any
  ): Promise<CredentialListInstance>;
  create(params: any, callback?: any): Promise<CredentialListInstance>;

  /**
   * Streams CredentialListInstance records from the API.
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
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (
      item: CredentialListInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  /**
   * Streams CredentialListInstance records from the API.
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
   * @param { CredentialListListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    params?: CredentialListListInstanceEachOptions,
    callback?: (
      item: CredentialListInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of CredentialListInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    callback?: (error: Error | null, items: CredentialListPage) => any
  ): Promise<CredentialListPage>;
  /**
   * Retrieve a single target page of CredentialListInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl?: string,
    callback?: (error: Error | null, items: CredentialListPage) => any
  ): Promise<CredentialListPage>;
  getPage(params?: any, callback?: any): Promise<CredentialListPage>;
  /**
   * Lists CredentialListInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: CredentialListInstance[]) => any
  ): Promise<CredentialListInstance[]>;
  /**
   * Lists CredentialListInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { CredentialListListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    params?: CredentialListListInstanceOptions,
    callback?: (error: Error | null, items: CredentialListInstance[]) => any
  ): Promise<CredentialListInstance[]>;
  list(params?: any, callback?: any): Promise<CredentialListInstance[]>;
  /**
   * Retrieve a single page of CredentialListInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: CredentialListPage) => any
  ): Promise<CredentialListPage>;
  /**
   * Retrieve a single page of CredentialListInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { CredentialListListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    params: CredentialListListInstancePageOptions,
    callback?: (error: Error | null, items: CredentialListPage) => any
  ): Promise<CredentialListPage>;
  page(params?: any, callback?: any): Promise<CredentialListPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface CredentialListSolution {
  accountSid?: string;
}

interface CredentialListListInstanceImpl extends CredentialListListInstance {}
class CredentialListListInstanceImpl implements CredentialListListInstance {
  _version?: V2010;
  _solution?: CredentialListSolution;
  _uri?: string;
}

export function CredentialListListInstance(
  version: V2010,
  accountSid: string
): CredentialListListInstance {
  if (!isValidPathParam(accountSid)) {
    throw new Error("Parameter 'accountSid' is not valid.");
  }

  const instance = ((sid) =>
    instance.get(sid)) as CredentialListListInstanceImpl;

  instance.get = function get(sid): CredentialListContext {
    return new CredentialListContextImpl(version, accountSid, sid);
  };

  instance._version = version;
  instance._solution = { accountSid };
  instance._uri = `/Accounts/${accountSid}/SIP/CredentialLists.json`;

  instance.create = function create(
    params: any,
    callback?: any
  ): Promise<CredentialListInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (
      params["friendlyName"] === null ||
      params["friendlyName"] === undefined
    ) {
      throw new Error("Required parameter \"params['friendlyName']\" missing.");
    }

    let data: any = {};

    data["FriendlyName"] = params["friendlyName"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";

    let operationVersion = version,
      operationPromise = operationVersion.create({
        uri: this._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new CredentialListInstance(
          operationVersion,
          payload,
          this._solution.accountSid
        )
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.page = function page(
    params?: any,
    callback?: any
  ): Promise<CredentialListPage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["pageSize"] !== undefined) data["PageSize"] = params["pageSize"];

    if (params.page !== undefined) data["Page"] = params.pageNumber;
    if (params.pageToken !== undefined) data["PageToken"] = params.pageToken;

    const headers: any = {};

    let operationVersion = version,
      operationPromise = operationVersion.page({
        uri: this._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new CredentialListPage(operationVersion, payload, this._solution)
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(
    targetUrl?: any,
    callback?: any
  ): Promise<CredentialListPage> {
    let operationPromise = this._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    operationPromise = operationPromise.then(
      (payload) =>
        new CredentialListPage(this._version, payload, this._solution)
    );
    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.toJSON = function toJSON() {
    return this._solution;
  };

  instance[inspect.custom] = function inspectImpl(
    _depth: any,
    options: InspectOptions
  ) {
    return inspect(this.toJSON(), options);
  };

  return instance;
}

export class CredentialListPage extends Page<
  V2010,
  CredentialListPayload,
  CredentialListResource,
  CredentialListInstance
> {
  /**
   * Initialize the CredentialListPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V2010,
    response: Response<string>,
    solution: CredentialListSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of CredentialListInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: CredentialListResource): CredentialListInstance {
    return new CredentialListInstance(
      this._version,
      payload,
      this._solution.accountSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

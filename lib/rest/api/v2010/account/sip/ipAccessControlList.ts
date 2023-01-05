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
import { IpAddressListInstance } from "./ipAccessControlList/ipAddress";

/**
 * Options to pass to update a IpAccessControlListInstance
 */
export interface IpAccessControlListContextUpdateOptions {
  /** A human readable descriptive text, up to 255 characters long. */
  friendlyName: string;
}

/**
 * Options to pass to create a IpAccessControlListInstance
 */
export interface IpAccessControlListListInstanceCreateOptions {
  /** A human readable descriptive text that describes the IpAccessControlList, up to 255 characters long. */
  friendlyName: string;
}
/**
 * Options to pass to each
 */
export interface IpAccessControlListListInstanceEachOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (
    item: IpAccessControlListInstance,
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
export interface IpAccessControlListListInstanceOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface IpAccessControlListListInstancePageOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface IpAccessControlListContext {
  ipAddresses: IpAddressListInstance;

  /**
   * Remove a IpAccessControlListInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a IpAccessControlListInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed IpAccessControlListInstance
   */
  fetch(
    callback?: (error: Error | null, item?: IpAccessControlListInstance) => any
  ): Promise<IpAccessControlListInstance>;

  /**
   * Update a IpAccessControlListInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed IpAccessControlListInstance
   */
  update(
    params: IpAccessControlListContextUpdateOptions,
    callback?: (error: Error | null, item?: IpAccessControlListInstance) => any
  ): Promise<IpAccessControlListInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface IpAccessControlListContextSolution {
  accountSid: string;
  sid: string;
}

export class IpAccessControlListContextImpl
  implements IpAccessControlListContext
{
  protected _solution: IpAccessControlListContextSolution;
  protected _uri: string;

  protected _ipAddresses?: IpAddressListInstance;

  constructor(protected _version: V2010, accountSid: string, sid: string) {
    if (!isValidPathParam(accountSid)) {
      throw new Error("Parameter 'accountSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { accountSid, sid };
    this._uri = `/Accounts/${accountSid}/SIP/IpAccessControlLists/${sid}.json`;
  }

  get ipAddresses(): IpAddressListInstance {
    this._ipAddresses =
      this._ipAddresses ||
      IpAddressListInstance(
        this._version,
        this._solution.accountSid,
        this._solution.sid
      );
    return this._ipAddresses;
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
    callback?: (error: Error | null, item?: IpAccessControlListInstance) => any
  ): Promise<IpAccessControlListInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new IpAccessControlListInstance(
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
    params:
      | IpAccessControlListContextUpdateOptions
      | ((error: Error | null, item?: IpAccessControlListInstance) => any),
    callback?: (error: Error | null, item?: IpAccessControlListInstance) => any
  ): Promise<IpAccessControlListInstance> {
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
        new IpAccessControlListInstance(
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

interface IpAccessControlListPayload extends TwilioResponsePayload {
  ip_access_control_lists: IpAccessControlListResource[];
}

interface IpAccessControlListResource {
  sid: string;
  account_sid: string;
  friendly_name: string;
  date_created: Date;
  date_updated: Date;
  subresource_uris: object;
  uri: string;
}

export class IpAccessControlListInstance {
  protected _solution: IpAccessControlListContextSolution;
  protected _context?: IpAccessControlListContext;

  constructor(
    protected _version: V2010,
    payload: IpAccessControlListResource,
    accountSid: string,
    sid?: string
  ) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.friendlyName = payload.friendly_name;
    this.dateCreated = deserialize.rfc2822DateTime(payload.date_created);
    this.dateUpdated = deserialize.rfc2822DateTime(payload.date_updated);
    this.subresourceUris = payload.subresource_uris;
    this.uri = payload.uri;

    this._solution = { accountSid, sid: sid || this.sid };
  }

  /**
   * A string that uniquely identifies this resource
   */
  sid: string;
  /**
   * The unique sid that identifies this account
   */
  accountSid: string;
  /**
   * A human readable description of this resource
   */
  friendlyName: string;
  /**
   * The date this resource was created
   */
  dateCreated: Date;
  /**
   * The date this resource was last updated
   */
  dateUpdated: Date;
  /**
   * The IP addresses associated with this resource.
   */
  subresourceUris: object;
  /**
   * The URI for this resource
   */
  uri: string;

  private get _proxy(): IpAccessControlListContext {
    this._context =
      this._context ||
      new IpAccessControlListContextImpl(
        this._version,
        this._solution.accountSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Remove a IpAccessControlListInstance
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
   * Fetch a IpAccessControlListInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed IpAccessControlListInstance
   */
  fetch(
    callback?: (error: Error | null, item?: IpAccessControlListInstance) => any
  ): Promise<IpAccessControlListInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a IpAccessControlListInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed IpAccessControlListInstance
   */
  update(
    params: IpAccessControlListContextUpdateOptions,
    callback?: (error: Error | null, item?: IpAccessControlListInstance) => any
  ): Promise<IpAccessControlListInstance>;

  update(
    params?: any,
    callback?: (error: Error | null, item?: IpAccessControlListInstance) => any
  ): Promise<IpAccessControlListInstance> {
    return this._proxy.update(params, callback);
  }

  /**
   * Access the ipAddresses.
   */
  ipAddresses(): IpAddressListInstance {
    return this._proxy.ipAddresses;
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
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      subresourceUris: this.subresourceUris,
      uri: this.uri,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface IpAccessControlListSolution {
  accountSid: string;
}

export interface IpAccessControlListListInstance {
  _version: V2010;
  _solution: IpAccessControlListSolution;
  _uri: string;

  (sid: string): IpAccessControlListContext;
  get(sid: string): IpAccessControlListContext;

  /**
   * Create a IpAccessControlListInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed IpAccessControlListInstance
   */
  create(
    params: IpAccessControlListListInstanceCreateOptions,
    callback?: (error: Error | null, item?: IpAccessControlListInstance) => any
  ): Promise<IpAccessControlListInstance>;

  /**
   * Streams IpAccessControlListInstance records from the API.
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
   * @param { IpAccessControlListListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (
      item: IpAccessControlListInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  each(
    params: IpAccessControlListListInstanceEachOptions,
    callback?: (
      item: IpAccessControlListInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  /**
   * Retrieve a single target page of IpAccessControlListInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: IpAccessControlListPage) => any
  ): Promise<IpAccessControlListPage>;
  /**
   * Lists IpAccessControlListInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { IpAccessControlListListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (
      error: Error | null,
      items: IpAccessControlListInstance[]
    ) => any
  ): Promise<IpAccessControlListInstance[]>;
  list(
    params: IpAccessControlListListInstanceOptions,
    callback?: (
      error: Error | null,
      items: IpAccessControlListInstance[]
    ) => any
  ): Promise<IpAccessControlListInstance[]>;
  /**
   * Retrieve a single page of IpAccessControlListInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { IpAccessControlListListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: IpAccessControlListPage) => any
  ): Promise<IpAccessControlListPage>;
  page(
    params: IpAccessControlListListInstancePageOptions,
    callback?: (error: Error | null, items: IpAccessControlListPage) => any
  ): Promise<IpAccessControlListPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function IpAccessControlListListInstance(
  version: V2010,
  accountSid: string
): IpAccessControlListListInstance {
  if (!isValidPathParam(accountSid)) {
    throw new Error("Parameter 'accountSid' is not valid.");
  }

  const instance = ((sid) =>
    instance.get(sid)) as IpAccessControlListListInstance;

  instance.get = function get(sid): IpAccessControlListContext {
    return new IpAccessControlListContextImpl(version, accountSid, sid);
  };

  instance._version = version;
  instance._solution = { accountSid };
  instance._uri = `/Accounts/${accountSid}/SIP/IpAccessControlLists.json`;

  instance.create = function create(
    params: IpAccessControlListListInstanceCreateOptions,
    callback?: (error: Error | null, items: IpAccessControlListInstance) => any
  ): Promise<IpAccessControlListInstance> {
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
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new IpAccessControlListInstance(
          operationVersion,
          payload,
          instance._solution.accountSid
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.page = function page(
    params?:
      | IpAccessControlListListInstancePageOptions
      | ((error: Error | null, items: IpAccessControlListPage) => any),
    callback?: (error: Error | null, items: IpAccessControlListPage) => any
  ): Promise<IpAccessControlListPage> {
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
      (payload) =>
        new IpAccessControlListPage(
          operationVersion,
          payload,
          instance._solution
        )
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
    callback?: (error: Error | null, items: IpAccessControlListPage) => any
  ): Promise<IpAccessControlListPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new IpAccessControlListPage(
          instance._version,
          payload,
          instance._solution
        )
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

export class IpAccessControlListPage extends Page<
  V2010,
  IpAccessControlListPayload,
  IpAccessControlListResource,
  IpAccessControlListInstance
> {
  /**
   * Initialize the IpAccessControlListPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V2010,
    response: Response<string>,
    solution: IpAccessControlListSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of IpAccessControlListInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(
    payload: IpAccessControlListResource
  ): IpAccessControlListInstance {
    return new IpAccessControlListInstance(
      this._version,
      payload,
      this._solution.accountSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

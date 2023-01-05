/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Microvisor
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
import { isValidPathParam } from "../../../base/utility";

/**
 * Options to pass to each
 */
export interface AppListInstanceEachOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: AppInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface AppListInstanceOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface AppListInstancePageOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface AppContext {
  /**
   * Remove a AppInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a AppInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed AppInstance
   */
  fetch(
    callback?: (error: Error | null, item?: AppInstance) => any
  ): Promise<AppInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface AppContextSolution {
  sid: string;
}

export class AppContextImpl implements AppContext {
  protected _solution: AppContextSolution;
  protected _uri: string;

  constructor(protected _version: V1, sid: string) {
    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { sid };
    this._uri = `/Apps/${sid}`;
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
    callback?: (error: Error | null, item?: AppInstance) => any
  ): Promise<AppInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new AppInstance(operationVersion, payload, instance._solution.sid)
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

interface AppPayload extends TwilioResponsePayload {
  apps: AppResource[];
}

interface AppResource {
  sid: string;
  account_sid: string;
  hash: string;
  unique_name: string;
  date_created: Date;
  date_updated: Date;
  url: string;
}

export class AppInstance {
  protected _solution: AppContextSolution;
  protected _context?: AppContext;

  constructor(protected _version: V1, payload: AppResource, sid?: string) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.hash = payload.hash;
    this.uniqueName = payload.unique_name;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.url = payload.url;

    this._solution = { sid: sid || this.sid };
  }

  /**
   * A string that uniquely identifies this App.
   */
  sid: string;
  /**
   * The Account SID.
   */
  accountSid: string;
  /**
   * App manifest hash represented as hash_algorithm:hash_value.
   */
  hash: string;
  /**
   * An developer-defined string that uniquely identifies the App.
   */
  uniqueName: string;
  /**
   * The date that this App was created.
   */
  dateCreated: Date;
  /**
   * The date that this App was last updated.
   */
  dateUpdated: Date;
  /**
   * The URL of this resource.
   */
  url: string;

  private get _proxy(): AppContext {
    this._context =
      this._context || new AppContextImpl(this._version, this._solution.sid);
    return this._context;
  }

  /**
   * Remove a AppInstance
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
   * Fetch a AppInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed AppInstance
   */
  fetch(
    callback?: (error: Error | null, item?: AppInstance) => any
  ): Promise<AppInstance> {
    return this._proxy.fetch(callback);
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
      hash: this.hash,
      uniqueName: this.uniqueName,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface AppSolution {}

export interface AppListInstance {
  _version: V1;
  _solution: AppSolution;
  _uri: string;

  (sid: string): AppContext;
  get(sid: string): AppContext;

  /**
   * Streams AppInstance records from the API.
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
   * @param { AppListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (item: AppInstance, done: (err?: Error) => void) => void
  ): void;
  each(
    params: AppListInstanceEachOptions,
    callback?: (item: AppInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of AppInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: AppPage) => any
  ): Promise<AppPage>;
  /**
   * Lists AppInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { AppListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: AppInstance[]) => any
  ): Promise<AppInstance[]>;
  list(
    params: AppListInstanceOptions,
    callback?: (error: Error | null, items: AppInstance[]) => any
  ): Promise<AppInstance[]>;
  /**
   * Retrieve a single page of AppInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { AppListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: AppPage) => any
  ): Promise<AppPage>;
  page(
    params: AppListInstancePageOptions,
    callback?: (error: Error | null, items: AppPage) => any
  ): Promise<AppPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function AppListInstance(version: V1): AppListInstance {
  const instance = ((sid) => instance.get(sid)) as AppListInstance;

  instance.get = function get(sid): AppContext {
    return new AppContextImpl(version, sid);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = `/Apps`;

  instance.page = function page(
    params?:
      | AppListInstancePageOptions
      | ((error: Error | null, items: AppPage) => any),
    callback?: (error: Error | null, items: AppPage) => any
  ): Promise<AppPage> {
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
      (payload) => new AppPage(operationVersion, payload, instance._solution)
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
    callback?: (error: Error | null, items: AppPage) => any
  ): Promise<AppPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) => new AppPage(instance._version, payload, instance._solution)
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

export class AppPage extends Page<V1, AppPayload, AppResource, AppInstance> {
  /**
   * Initialize the AppPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: AppSolution) {
    super(version, response, solution);
  }

  /**
   * Build an instance of AppInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: AppResource): AppInstance {
    return new AppInstance(this._version, payload);
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

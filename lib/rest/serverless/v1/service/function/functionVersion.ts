/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Serverless
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V1 from "../../../V1";
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");
import { isValidPathParam } from "../../../../../base/utility";
import { FunctionVersionContentListInstance } from "./functionVersion/functionVersionContent";

type FunctionVersionVisibility = "public" | "private" | "protected";

/**
 * Options to pass to each
 */
export interface FunctionVersionListInstanceEachOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (
    item: FunctionVersionInstance,
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
export interface FunctionVersionListInstanceOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface FunctionVersionListInstancePageOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface FunctionVersionContext {
  functionVersionContent: FunctionVersionContentListInstance;

  /**
   * Fetch a FunctionVersionInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed FunctionVersionInstance
   */
  fetch(
    callback?: (error: Error | null, item?: FunctionVersionInstance) => any
  ): Promise<FunctionVersionInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface FunctionVersionContextSolution {
  serviceSid?: string;
  functionSid?: string;
  sid?: string;
}

export class FunctionVersionContextImpl implements FunctionVersionContext {
  protected _solution: FunctionVersionContextSolution;
  protected _uri: string;

  protected _functionVersionContent?: FunctionVersionContentListInstance;

  constructor(
    protected _version: V1,
    serviceSid: string,
    functionSid: string,
    sid: string
  ) {
    if (!isValidPathParam(serviceSid)) {
      throw new Error("Parameter 'serviceSid' is not valid.");
    }

    if (!isValidPathParam(functionSid)) {
      throw new Error("Parameter 'functionSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { serviceSid, functionSid, sid };
    this._uri = `/Services/${serviceSid}/Functions/${functionSid}/Versions/${sid}`;
  }

  get functionVersionContent(): FunctionVersionContentListInstance {
    this._functionVersionContent =
      this._functionVersionContent ||
      FunctionVersionContentListInstance(
        this._version,
        this._solution.serviceSid,
        this._solution.functionSid,
        this._solution.sid
      );
    return this._functionVersionContent;
  }

  fetch(callback?: any): Promise<FunctionVersionInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new FunctionVersionInstance(
          operationVersion,
          payload,
          this._solution.serviceSid,
          this._solution.functionSid,
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

interface FunctionVersionPayload extends TwilioResponsePayload {
  function_versions: FunctionVersionResource[];
}

interface FunctionVersionResource {
  sid?: string | null;
  account_sid?: string | null;
  service_sid?: string | null;
  function_sid?: string | null;
  path?: string | null;
  visibility?: FunctionVersionVisibility;
  date_created?: Date | null;
  url?: string | null;
  links?: object | null;
}

export class FunctionVersionInstance {
  protected _solution: FunctionVersionContextSolution;
  protected _context?: FunctionVersionContext;

  constructor(
    protected _version: V1,
    payload: FunctionVersionResource,
    serviceSid: string,
    functionSid: string,
    sid?: string
  ) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.serviceSid = payload.service_sid;
    this.functionSid = payload.function_sid;
    this.path = payload.path;
    this.visibility = payload.visibility;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.url = payload.url;
    this.links = payload.links;

    this._solution = { serviceSid, functionSid, sid: sid || this.sid };
  }

  /**
   * The unique string that identifies the Function Version resource
   */
  sid?: string | null;
  /**
   * The SID of the Account that created the Function Version resource
   */
  accountSid?: string | null;
  /**
   * The SID of the Service that the Function Version resource is associated with
   */
  serviceSid?: string | null;
  /**
   * The SID of the Function resource that is the parent of the Function Version resource
   */
  functionSid?: string | null;
  /**
   * The URL-friendly string by which the Function Version resource can be referenced
   */
  path?: string | null;
  visibility?: FunctionVersionVisibility;
  /**
   * The ISO 8601 date and time in GMT when the Function Version resource was created
   */
  dateCreated?: Date | null;
  /**
   * The absolute URL of the Function Version resource
   */
  url?: string | null;
  links?: object | null;

  private get _proxy(): FunctionVersionContext {
    this._context =
      this._context ||
      new FunctionVersionContextImpl(
        this._version,
        this._solution.serviceSid,
        this._solution.functionSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Fetch a FunctionVersionInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed FunctionVersionInstance
   */
  fetch(
    callback?: (error: Error | null, item?: FunctionVersionInstance) => any
  ): Promise<FunctionVersionInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Access the functionVersionContent.
   */
  functionVersionContent(): FunctionVersionContentListInstance {
    return this._proxy.functionVersionContent;
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
      serviceSid: this.serviceSid,
      functionSid: this.functionSid,
      path: this.path,
      visibility: this.visibility,
      dateCreated: this.dateCreated,
      url: this.url,
      links: this.links,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface FunctionVersionListInstance {
  (sid: string): FunctionVersionContext;
  get(sid: string): FunctionVersionContext;

  /**
   * Streams FunctionVersionInstance records from the API.
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
      item: FunctionVersionInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  /**
   * Streams FunctionVersionInstance records from the API.
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
   * @param { FunctionVersionListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    params?: FunctionVersionListInstanceEachOptions,
    callback?: (
      item: FunctionVersionInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of FunctionVersionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    callback?: (error: Error | null, items: FunctionVersionPage) => any
  ): Promise<FunctionVersionPage>;
  /**
   * Retrieve a single target page of FunctionVersionInstance records from the API.
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
    callback?: (error: Error | null, items: FunctionVersionPage) => any
  ): Promise<FunctionVersionPage>;
  getPage(params?: any, callback?: any): Promise<FunctionVersionPage>;
  /**
   * Lists FunctionVersionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: FunctionVersionInstance[]) => any
  ): Promise<FunctionVersionInstance[]>;
  /**
   * Lists FunctionVersionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { FunctionVersionListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    params?: FunctionVersionListInstanceOptions,
    callback?: (error: Error | null, items: FunctionVersionInstance[]) => any
  ): Promise<FunctionVersionInstance[]>;
  list(params?: any, callback?: any): Promise<FunctionVersionInstance[]>;
  /**
   * Retrieve a single page of FunctionVersionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: FunctionVersionPage) => any
  ): Promise<FunctionVersionPage>;
  /**
   * Retrieve a single page of FunctionVersionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { FunctionVersionListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    params: FunctionVersionListInstancePageOptions,
    callback?: (error: Error | null, items: FunctionVersionPage) => any
  ): Promise<FunctionVersionPage>;
  page(params?: any, callback?: any): Promise<FunctionVersionPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface FunctionVersionSolution {
  serviceSid?: string;
  functionSid?: string;
}

interface FunctionVersionListInstanceImpl extends FunctionVersionListInstance {}
class FunctionVersionListInstanceImpl implements FunctionVersionListInstance {
  _version?: V1;
  _solution?: FunctionVersionSolution;
  _uri?: string;
}

export function FunctionVersionListInstance(
  version: V1,
  serviceSid: string,
  functionSid: string
): FunctionVersionListInstance {
  if (!isValidPathParam(serviceSid)) {
    throw new Error("Parameter 'serviceSid' is not valid.");
  }

  if (!isValidPathParam(functionSid)) {
    throw new Error("Parameter 'functionSid' is not valid.");
  }

  const instance = ((sid) =>
    instance.get(sid)) as FunctionVersionListInstanceImpl;

  instance.get = function get(sid): FunctionVersionContext {
    return new FunctionVersionContextImpl(
      version,
      serviceSid,
      functionSid,
      sid
    );
  };

  instance._version = version;
  instance._solution = { serviceSid, functionSid };
  instance._uri = `/Services/${serviceSid}/Functions/${functionSid}/Versions`;

  instance.page = function page(
    params?: any,
    callback?: any
  ): Promise<FunctionVersionPage> {
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
        new FunctionVersionPage(operationVersion, payload, this._solution)
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
  ): Promise<FunctionVersionPage> {
    let operationPromise = this._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    operationPromise = operationPromise.then(
      (payload) =>
        new FunctionVersionPage(this._version, payload, this._solution)
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

export class FunctionVersionPage extends Page<
  V1,
  FunctionVersionPayload,
  FunctionVersionResource,
  FunctionVersionInstance
> {
  /**
   * Initialize the FunctionVersionPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: FunctionVersionSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of FunctionVersionInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: FunctionVersionResource): FunctionVersionInstance {
    return new FunctionVersionInstance(
      this._version,
      payload,
      this._solution.serviceSid,
      this._solution.functionSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

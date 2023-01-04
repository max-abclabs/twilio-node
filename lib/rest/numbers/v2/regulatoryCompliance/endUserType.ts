/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Numbers
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V2 from "../../V2";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
import { isValidPathParam } from "../../../../base/utility";

/**
 * Options to pass to each
 */
export interface EndUserTypeListInstanceEachOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: EndUserTypeInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface EndUserTypeListInstanceOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface EndUserTypeListInstancePageOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface EndUserTypeContext {
  /**
   * Fetch a EndUserTypeInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed EndUserTypeInstance
   */
  fetch(
    callback?: (error: Error | null, item?: EndUserTypeInstance) => any
  ): Promise<EndUserTypeInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface EndUserTypeContextSolution {
  sid?: string;
}

export class EndUserTypeContextImpl implements EndUserTypeContext {
  protected _solution: EndUserTypeContextSolution;
  protected _uri: string;

  constructor(protected _version: V2, sid: string) {
    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { sid };
    this._uri = `/RegulatoryCompliance/EndUserTypes/${sid}`;
  }

  fetch(callback?: any): Promise<EndUserTypeInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new EndUserTypeInstance(operationVersion, payload, this._solution.sid)
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

interface EndUserTypePayload extends TwilioResponsePayload {
  end_user_types: EndUserTypeResource[];
}

interface EndUserTypeResource {
  sid?: string | null;
  friendly_name?: string | null;
  machine_name?: string | null;
  fields?: Array<any> | null;
  url?: string | null;
}

export class EndUserTypeInstance {
  protected _solution: EndUserTypeContextSolution;
  protected _context?: EndUserTypeContext;

  constructor(
    protected _version: V2,
    payload: EndUserTypeResource,
    sid?: string
  ) {
    this.sid = payload.sid;
    this.friendlyName = payload.friendly_name;
    this.machineName = payload.machine_name;
    this.fields = payload.fields;
    this.url = payload.url;

    this._solution = { sid: sid || this.sid };
  }

  /**
   * The unique string that identifies the End-User Type resource
   */
  sid?: string | null;
  /**
   * A human-readable description of the End-User Type resource
   */
  friendlyName?: string | null;
  /**
   * A machine-readable description of the End-User Type resource
   */
  machineName?: string | null;
  /**
   * The required information for creating an End-User.
   */
  fields?: Array<any> | null;
  /**
   * The absolute URL of the End-User Type resource
   */
  url?: string | null;

  private get _proxy(): EndUserTypeContext {
    this._context =
      this._context ||
      new EndUserTypeContextImpl(this._version, this._solution.sid);
    return this._context;
  }

  /**
   * Fetch a EndUserTypeInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed EndUserTypeInstance
   */
  fetch(
    callback?: (error: Error | null, item?: EndUserTypeInstance) => any
  ): Promise<EndUserTypeInstance> {
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
      friendlyName: this.friendlyName,
      machineName: this.machineName,
      fields: this.fields,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface EndUserTypeListInstance {
  (sid: string): EndUserTypeContext;
  get(sid: string): EndUserTypeContext;

  /**
   * Streams EndUserTypeInstance records from the API.
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
    callback?: (item: EndUserTypeInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Streams EndUserTypeInstance records from the API.
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
   * @param { EndUserTypeListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    params?: EndUserTypeListInstanceEachOptions,
    callback?: (item: EndUserTypeInstance, done: (err?: Error) => void) => void
  ): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of EndUserTypeInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    callback?: (error: Error | null, items: EndUserTypePage) => any
  ): Promise<EndUserTypePage>;
  /**
   * Retrieve a single target page of EndUserTypeInstance records from the API.
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
    callback?: (error: Error | null, items: EndUserTypePage) => any
  ): Promise<EndUserTypePage>;
  getPage(params?: any, callback?: any): Promise<EndUserTypePage>;
  /**
   * Lists EndUserTypeInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: EndUserTypeInstance[]) => any
  ): Promise<EndUserTypeInstance[]>;
  /**
   * Lists EndUserTypeInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { EndUserTypeListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    params?: EndUserTypeListInstanceOptions,
    callback?: (error: Error | null, items: EndUserTypeInstance[]) => any
  ): Promise<EndUserTypeInstance[]>;
  list(params?: any, callback?: any): Promise<EndUserTypeInstance[]>;
  /**
   * Retrieve a single page of EndUserTypeInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: EndUserTypePage) => any
  ): Promise<EndUserTypePage>;
  /**
   * Retrieve a single page of EndUserTypeInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { EndUserTypeListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    params: EndUserTypeListInstancePageOptions,
    callback?: (error: Error | null, items: EndUserTypePage) => any
  ): Promise<EndUserTypePage>;
  page(params?: any, callback?: any): Promise<EndUserTypePage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface EndUserTypeSolution {}

interface EndUserTypeListInstanceImpl extends EndUserTypeListInstance {}
class EndUserTypeListInstanceImpl implements EndUserTypeListInstance {
  _version?: V2;
  _solution?: EndUserTypeSolution;
  _uri?: string;
}

export function EndUserTypeListInstance(version: V2): EndUserTypeListInstance {
  const instance = ((sid) => instance.get(sid)) as EndUserTypeListInstanceImpl;

  instance.get = function get(sid): EndUserTypeContext {
    return new EndUserTypeContextImpl(version, sid);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = `/RegulatoryCompliance/EndUserTypes`;

  instance.page = function page(
    params?: any,
    callback?: any
  ): Promise<EndUserTypePage> {
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
        new EndUserTypePage(operationVersion, payload, this._solution)
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
  ): Promise<EndUserTypePage> {
    let operationPromise = this._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    operationPromise = operationPromise.then(
      (payload) => new EndUserTypePage(this._version, payload, this._solution)
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

export class EndUserTypePage extends Page<
  V2,
  EndUserTypePayload,
  EndUserTypeResource,
  EndUserTypeInstance
> {
  /**
   * Initialize the EndUserTypePage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V2,
    response: Response<string>,
    solution: EndUserTypeSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of EndUserTypeInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: EndUserTypeResource): EndUserTypeInstance {
    return new EndUserTypeInstance(this._version, payload);
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

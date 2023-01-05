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
export interface SupportingDocumentTypeListInstanceEachOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (
    item: SupportingDocumentTypeInstance,
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
export interface SupportingDocumentTypeListInstanceOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface SupportingDocumentTypeListInstancePageOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface SupportingDocumentTypeContext {
  /**
   * Fetch a SupportingDocumentTypeInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed SupportingDocumentTypeInstance
   */
  fetch(
    callback?: (
      error: Error | null,
      item?: SupportingDocumentTypeInstance
    ) => any
  ): Promise<SupportingDocumentTypeInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface SupportingDocumentTypeContextSolution {
  sid: string;
}

export class SupportingDocumentTypeContextImpl
  implements SupportingDocumentTypeContext
{
  protected _solution: SupportingDocumentTypeContextSolution;
  protected _uri: string;

  constructor(protected _version: V2, sid: string) {
    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { sid };
    this._uri = `/RegulatoryCompliance/SupportingDocumentTypes/${sid}`;
  }

  fetch(
    callback?: (
      error: Error | null,
      item?: SupportingDocumentTypeInstance
    ) => any
  ): Promise<SupportingDocumentTypeInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new SupportingDocumentTypeInstance(
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

interface SupportingDocumentTypePayload extends TwilioResponsePayload {
  supporting_document_types: SupportingDocumentTypeResource[];
}

interface SupportingDocumentTypeResource {
  sid: string;
  friendly_name: string;
  machine_name: string;
  fields: Array<any>;
  url: string;
}

export class SupportingDocumentTypeInstance {
  protected _solution: SupportingDocumentTypeContextSolution;
  protected _context?: SupportingDocumentTypeContext;

  constructor(
    protected _version: V2,
    payload: SupportingDocumentTypeResource,
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
   * The unique string that identifies the Supporting Document Type resource
   */
  sid: string;
  /**
   * A human-readable description of the Supporting Document Type resource
   */
  friendlyName: string;
  /**
   * The machine-readable description of the Supporting Document Type resource
   */
  machineName: string;
  /**
   * The required information for creating a Supporting Document
   */
  fields: Array<any>;
  /**
   * The absolute URL of the Supporting Document Type resource
   */
  url: string;

  private get _proxy(): SupportingDocumentTypeContext {
    this._context =
      this._context ||
      new SupportingDocumentTypeContextImpl(this._version, this._solution.sid);
    return this._context;
  }

  /**
   * Fetch a SupportingDocumentTypeInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed SupportingDocumentTypeInstance
   */
  fetch(
    callback?: (
      error: Error | null,
      item?: SupportingDocumentTypeInstance
    ) => any
  ): Promise<SupportingDocumentTypeInstance> {
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

export interface SupportingDocumentTypeSolution {}

export interface SupportingDocumentTypeListInstance {
  _version: V2;
  _solution: SupportingDocumentTypeSolution;
  _uri: string;

  (sid: string): SupportingDocumentTypeContext;
  get(sid: string): SupportingDocumentTypeContext;

  /**
   * Streams SupportingDocumentTypeInstance records from the API.
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
   * @param { SupportingDocumentTypeListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (
      item: SupportingDocumentTypeInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  each(
    params: SupportingDocumentTypeListInstanceEachOptions,
    callback?: (
      item: SupportingDocumentTypeInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  /**
   * Retrieve a single target page of SupportingDocumentTypeInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: SupportingDocumentTypePage) => any
  ): Promise<SupportingDocumentTypePage>;
  /**
   * Lists SupportingDocumentTypeInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { SupportingDocumentTypeListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (
      error: Error | null,
      items: SupportingDocumentTypeInstance[]
    ) => any
  ): Promise<SupportingDocumentTypeInstance[]>;
  list(
    params: SupportingDocumentTypeListInstanceOptions,
    callback?: (
      error: Error | null,
      items: SupportingDocumentTypeInstance[]
    ) => any
  ): Promise<SupportingDocumentTypeInstance[]>;
  /**
   * Retrieve a single page of SupportingDocumentTypeInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { SupportingDocumentTypeListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: SupportingDocumentTypePage) => any
  ): Promise<SupportingDocumentTypePage>;
  page(
    params: SupportingDocumentTypeListInstancePageOptions,
    callback?: (error: Error | null, items: SupportingDocumentTypePage) => any
  ): Promise<SupportingDocumentTypePage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function SupportingDocumentTypeListInstance(
  version: V2
): SupportingDocumentTypeListInstance {
  const instance = ((sid) =>
    instance.get(sid)) as SupportingDocumentTypeListInstance;

  instance.get = function get(sid): SupportingDocumentTypeContext {
    return new SupportingDocumentTypeContextImpl(version, sid);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = `/RegulatoryCompliance/SupportingDocumentTypes`;

  instance.page = function page(
    params?:
      | SupportingDocumentTypeListInstancePageOptions
      | ((error: Error | null, items: SupportingDocumentTypePage) => any),
    callback?: (error: Error | null, items: SupportingDocumentTypePage) => any
  ): Promise<SupportingDocumentTypePage> {
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
        new SupportingDocumentTypePage(
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
    callback?: (error: Error | null, items: SupportingDocumentTypePage) => any
  ): Promise<SupportingDocumentTypePage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new SupportingDocumentTypePage(
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

export class SupportingDocumentTypePage extends Page<
  V2,
  SupportingDocumentTypePayload,
  SupportingDocumentTypeResource,
  SupportingDocumentTypeInstance
> {
  /**
   * Initialize the SupportingDocumentTypePage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V2,
    response: Response<string>,
    solution: SupportingDocumentTypeSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of SupportingDocumentTypeInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(
    payload: SupportingDocumentTypeResource
  ): SupportingDocumentTypeInstance {
    return new SupportingDocumentTypeInstance(this._version, payload);
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

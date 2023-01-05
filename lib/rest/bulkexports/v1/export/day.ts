/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Bulkexports
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
import { isValidPathParam } from "../../../../base/utility";

/**
 * Options to pass to each
 */
export interface DayListInstanceEachOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: DayInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface DayListInstanceOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface DayListInstancePageOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface DayContext {
  /**
   * Fetch a DayInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed DayInstance
   */
  fetch(
    callback?: (error: Error | null, item?: DayInstance) => any
  ): Promise<DayInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface DayContextSolution {
  resourceType: string;
  day: string;
}

export class DayContextImpl implements DayContext {
  protected _solution: DayContextSolution;
  protected _uri: string;

  constructor(protected _version: V1, resourceType: string, day: string) {
    if (!isValidPathParam(resourceType)) {
      throw new Error("Parameter 'resourceType' is not valid.");
    }

    if (!isValidPathParam(day)) {
      throw new Error("Parameter 'day' is not valid.");
    }

    this._solution = { resourceType, day };
    this._uri = `/Exports/${resourceType}/Days/${day}`;
  }

  fetch(
    callback?: (error: Error | null, item?: DayInstance) => any
  ): Promise<DayInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new DayInstance(
          operationVersion,
          payload,
          instance._solution.resourceType,
          instance._solution.day
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

interface DayPayload extends TwilioResponsePayload {
  days: DayResource[];
}

interface DayResource {
  redirect_to: string;
  day: string;
  size: number;
  create_date: string;
  friendly_name: string;
  resource_type: string;
}

export class DayInstance {
  protected _solution: DayContextSolution;
  protected _context?: DayContext;

  constructor(
    protected _version: V1,
    payload: DayResource,
    resourceType: string,
    day?: string
  ) {
    this.redirectTo = payload.redirect_to;
    this.day = payload.day;
    this.size = deserialize.integer(payload.size);
    this.createDate = payload.create_date;
    this.friendlyName = payload.friendly_name;
    this.resourceType = payload.resource_type;

    this._solution = { resourceType, day: day || this.day };
  }

  redirectTo: string;
  /**
   * The date of the data in the file
   */
  day: string;
  /**
   * Size of the file in bytes
   */
  size: number;
  /**
   * The date when resource is created
   */
  createDate: string;
  /**
   * The friendly name specified when creating the job
   */
  friendlyName: string;
  /**
   * The type of communication – Messages, Calls, Conferences, and Participants
   */
  resourceType: string;

  private get _proxy(): DayContext {
    this._context =
      this._context ||
      new DayContextImpl(
        this._version,
        this._solution.resourceType,
        this._solution.day
      );
    return this._context;
  }

  /**
   * Fetch a DayInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed DayInstance
   */
  fetch(
    callback?: (error: Error | null, item?: DayInstance) => any
  ): Promise<DayInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      redirectTo: this.redirectTo,
      day: this.day,
      size: this.size,
      createDate: this.createDate,
      friendlyName: this.friendlyName,
      resourceType: this.resourceType,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface DaySolution {
  resourceType: string;
}

export interface DayListInstance {
  _version: V1;
  _solution: DaySolution;
  _uri: string;

  (day: string): DayContext;
  get(day: string): DayContext;

  /**
   * Streams DayInstance records from the API.
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
   * @param { DayListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (item: DayInstance, done: (err?: Error) => void) => void
  ): void;
  each(
    params: DayListInstanceEachOptions,
    callback?: (item: DayInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of DayInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: DayPage) => any
  ): Promise<DayPage>;
  /**
   * Lists DayInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { DayListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: DayInstance[]) => any
  ): Promise<DayInstance[]>;
  list(
    params: DayListInstanceOptions,
    callback?: (error: Error | null, items: DayInstance[]) => any
  ): Promise<DayInstance[]>;
  /**
   * Retrieve a single page of DayInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { DayListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: DayPage) => any
  ): Promise<DayPage>;
  page(
    params: DayListInstancePageOptions,
    callback?: (error: Error | null, items: DayPage) => any
  ): Promise<DayPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function DayListInstance(
  version: V1,
  resourceType: string
): DayListInstance {
  if (!isValidPathParam(resourceType)) {
    throw new Error("Parameter 'resourceType' is not valid.");
  }

  const instance = ((day) => instance.get(day)) as DayListInstance;

  instance.get = function get(day): DayContext {
    return new DayContextImpl(version, resourceType, day);
  };

  instance._version = version;
  instance._solution = { resourceType };
  instance._uri = `/Exports/${resourceType}/Days`;

  instance.page = function page(
    params?:
      | DayListInstancePageOptions
      | ((error: Error | null, items: DayPage) => any),
    callback?: (error: Error | null, items: DayPage) => any
  ): Promise<DayPage> {
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
      (payload) => new DayPage(operationVersion, payload, instance._solution)
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
    callback?: (error: Error | null, items: DayPage) => any
  ): Promise<DayPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) => new DayPage(instance._version, payload, instance._solution)
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

export class DayPage extends Page<V1, DayPayload, DayResource, DayInstance> {
  /**
   * Initialize the DayPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: DaySolution) {
    super(version, response, solution);
  }

  /**
   * Build an instance of DayInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: DayResource): DayInstance {
    return new DayInstance(this._version, payload, this._solution.resourceType);
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

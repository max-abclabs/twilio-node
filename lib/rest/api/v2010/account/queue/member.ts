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

/**
 * Options to pass to update a MemberInstance
 */
export interface MemberContextUpdateOptions {
  /** The absolute URL of the Queue resource. */
  url: string;
  /** How to pass the update request data. Can be &#x60;GET&#x60; or &#x60;POST&#x60; and the default is &#x60;POST&#x60;. &#x60;POST&#x60; sends the data as encoded form data and &#x60;GET&#x60; sends the data as query parameters. */
  method?: string;
}
/**
 * Options to pass to each
 */
export interface MemberListInstanceEachOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: MemberInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface MemberListInstanceOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface MemberListInstancePageOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface MemberContext {
  /**
   * Fetch a MemberInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed MemberInstance
   */
  fetch(
    callback?: (error: Error | null, item?: MemberInstance) => any
  ): Promise<MemberInstance>;

  /**
   * Update a MemberInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed MemberInstance
   */
  update(
    params: MemberContextUpdateOptions,
    callback?: (error: Error | null, item?: MemberInstance) => any
  ): Promise<MemberInstance>;
  update(params: any, callback?: any): Promise<MemberInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface MemberContextSolution {
  accountSid?: string;
  queueSid?: string;
  callSid?: string;
}

export class MemberContextImpl implements MemberContext {
  protected _solution: MemberContextSolution;
  protected _uri: string;

  constructor(
    protected _version: V2010,
    accountSid: string,
    queueSid: string,
    callSid: string
  ) {
    if (!isValidPathParam(accountSid)) {
      throw new Error("Parameter 'accountSid' is not valid.");
    }

    if (!isValidPathParam(queueSid)) {
      throw new Error("Parameter 'queueSid' is not valid.");
    }

    if (!isValidPathParam(callSid)) {
      throw new Error("Parameter 'callSid' is not valid.");
    }

    this._solution = { accountSid, queueSid, callSid };
    this._uri = `/Accounts/${accountSid}/Queues/${queueSid}/Members/${callSid}.json`;
  }

  fetch(callback?: any): Promise<MemberInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new MemberInstance(
          operationVersion,
          payload,
          this._solution.accountSid,
          this._solution.queueSid,
          this._solution.callSid
        )
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(params: any, callback?: any): Promise<MemberInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["url"] === null || params["url"] === undefined) {
      throw new Error("Required parameter \"params['url']\" missing.");
    }

    let data: any = {};

    data["Url"] = params["url"];
    if (params["method"] !== undefined) data["Method"] = params["method"];

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
        new MemberInstance(
          operationVersion,
          payload,
          this._solution.accountSid,
          this._solution.queueSid,
          this._solution.callSid
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

interface MemberPayload extends TwilioResponsePayload {
  queue_members: MemberResource[];
}

interface MemberResource {
  call_sid?: string | null;
  date_enqueued?: Date | null;
  position?: number | null;
  uri?: string | null;
  wait_time?: number | null;
  queue_sid?: string | null;
}

export class MemberInstance {
  protected _solution: MemberContextSolution;
  protected _context?: MemberContext;

  constructor(
    protected _version: V2010,
    payload: MemberResource,
    accountSid: string,
    queueSid: string,
    callSid?: string
  ) {
    this.callSid = payload.call_sid;
    this.dateEnqueued = deserialize.rfc2822DateTime(payload.date_enqueued);
    this.position = deserialize.integer(payload.position);
    this.uri = payload.uri;
    this.waitTime = deserialize.integer(payload.wait_time);
    this.queueSid = payload.queue_sid;

    this._solution = { accountSid, queueSid, callSid: callSid || this.callSid };
  }

  /**
   * The SID of the Call the resource is associated with
   */
  callSid?: string | null;
  /**
   * The date the member was enqueued
   */
  dateEnqueued?: Date | null;
  /**
   * This member\'s current position in the queue.
   */
  position?: number | null;
  /**
   * The URI of the resource, relative to `https://api.twilio.com`
   */
  uri?: string | null;
  /**
   * The number of seconds the member has been in the queue.
   */
  waitTime?: number | null;
  /**
   * The SID of the Queue the member is in
   */
  queueSid?: string | null;

  private get _proxy(): MemberContext {
    this._context =
      this._context ||
      new MemberContextImpl(
        this._version,
        this._solution.accountSid,
        this._solution.queueSid,
        this._solution.callSid
      );
    return this._context;
  }

  /**
   * Fetch a MemberInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed MemberInstance
   */
  fetch(
    callback?: (error: Error | null, item?: MemberInstance) => any
  ): Promise<MemberInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a MemberInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed MemberInstance
   */
  update(
    params: MemberContextUpdateOptions,
    callback?: (error: Error | null, item?: MemberInstance) => any
  ): Promise<MemberInstance>;
  update(params: any, callback?: any): Promise<MemberInstance> {
    return this._proxy.update(params, callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      callSid: this.callSid,
      dateEnqueued: this.dateEnqueued,
      position: this.position,
      uri: this.uri,
      waitTime: this.waitTime,
      queueSid: this.queueSid,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface MemberListInstance {
  (callSid: string): MemberContext;
  get(callSid: string): MemberContext;

  /**
   * Streams MemberInstance records from the API.
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
    callback?: (item: MemberInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Streams MemberInstance records from the API.
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
   * @param { MemberListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    params?: MemberListInstanceEachOptions,
    callback?: (item: MemberInstance, done: (err?: Error) => void) => void
  ): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of MemberInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    callback?: (error: Error | null, items: MemberPage) => any
  ): Promise<MemberPage>;
  /**
   * Retrieve a single target page of MemberInstance records from the API.
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
    callback?: (error: Error | null, items: MemberPage) => any
  ): Promise<MemberPage>;
  getPage(params?: any, callback?: any): Promise<MemberPage>;
  /**
   * Lists MemberInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: MemberInstance[]) => any
  ): Promise<MemberInstance[]>;
  /**
   * Lists MemberInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { MemberListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    params?: MemberListInstanceOptions,
    callback?: (error: Error | null, items: MemberInstance[]) => any
  ): Promise<MemberInstance[]>;
  list(params?: any, callback?: any): Promise<MemberInstance[]>;
  /**
   * Retrieve a single page of MemberInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: MemberPage) => any
  ): Promise<MemberPage>;
  /**
   * Retrieve a single page of MemberInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { MemberListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    params: MemberListInstancePageOptions,
    callback?: (error: Error | null, items: MemberPage) => any
  ): Promise<MemberPage>;
  page(params?: any, callback?: any): Promise<MemberPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface MemberSolution {
  accountSid?: string;
  queueSid?: string;
}

interface MemberListInstanceImpl extends MemberListInstance {}
class MemberListInstanceImpl implements MemberListInstance {
  _version?: V2010;
  _solution?: MemberSolution;
  _uri?: string;
}

export function MemberListInstance(
  version: V2010,
  accountSid: string,
  queueSid: string
): MemberListInstance {
  if (!isValidPathParam(accountSid)) {
    throw new Error("Parameter 'accountSid' is not valid.");
  }

  if (!isValidPathParam(queueSid)) {
    throw new Error("Parameter 'queueSid' is not valid.");
  }

  const instance = ((callSid) =>
    instance.get(callSid)) as MemberListInstanceImpl;

  instance.get = function get(callSid): MemberContext {
    return new MemberContextImpl(version, accountSid, queueSid, callSid);
  };

  instance._version = version;
  instance._solution = { accountSid, queueSid };
  instance._uri = `/Accounts/${accountSid}/Queues/${queueSid}/Members.json`;

  instance.page = function page(
    params?: any,
    callback?: any
  ): Promise<MemberPage> {
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
      (payload) => new MemberPage(operationVersion, payload, this._solution)
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
  ): Promise<MemberPage> {
    let operationPromise = this._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    operationPromise = operationPromise.then(
      (payload) => new MemberPage(this._version, payload, this._solution)
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

export class MemberPage extends Page<
  V2010,
  MemberPayload,
  MemberResource,
  MemberInstance
> {
  /**
   * Initialize the MemberPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V2010,
    response: Response<string>,
    solution: MemberSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of MemberInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: MemberResource): MemberInstance {
    return new MemberInstance(
      this._version,
      payload,
      this._solution.accountSid,
      this._solution.queueSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

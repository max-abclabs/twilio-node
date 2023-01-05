/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Preview
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import Understand from "../../../Understand";
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");
import { isValidPathParam } from "../../../../../base/utility";

/**
 * Options to pass to create a FieldInstance
 */
export interface FieldListInstanceCreateOptions {
  /** The unique name or sid of the FieldType. It can be any [Built-in Field Type](https://www.twilio.com/docs/assistant/api/built-in-field-types) or the unique_name or the Field Type sid of a custom Field Type. */
  fieldType: string;
  /** A user-provided string that uniquely identifies this resource as an alternative to the sid. Unique up to 64 characters long. */
  uniqueName: string;
}
/**
 * Options to pass to each
 */
export interface FieldListInstanceEachOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: FieldInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface FieldListInstanceOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface FieldListInstancePageOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface FieldContext {
  /**
   * Remove a FieldInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a FieldInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed FieldInstance
   */
  fetch(
    callback?: (error: Error | null, item?: FieldInstance) => any
  ): Promise<FieldInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface FieldContextSolution {
  assistantSid: string;
  taskSid: string;
  sid: string;
}

export class FieldContextImpl implements FieldContext {
  protected _solution: FieldContextSolution;
  protected _uri: string;

  constructor(
    protected _version: Understand,
    assistantSid: string,
    taskSid: string,
    sid: string
  ) {
    if (!isValidPathParam(assistantSid)) {
      throw new Error("Parameter 'assistantSid' is not valid.");
    }

    if (!isValidPathParam(taskSid)) {
      throw new Error("Parameter 'taskSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { assistantSid, taskSid, sid };
    this._uri = `/Assistants/${assistantSid}/Tasks/${taskSid}/Fields/${sid}`;
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
    callback?: (error: Error | null, item?: FieldInstance) => any
  ): Promise<FieldInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new FieldInstance(
          operationVersion,
          payload,
          instance._solution.assistantSid,
          instance._solution.taskSid,
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

interface FieldPayload extends TwilioResponsePayload {
  fields: FieldResource[];
}

interface FieldResource {
  account_sid: string;
  date_created: Date;
  date_updated: Date;
  field_type: string;
  task_sid: string;
  assistant_sid: string;
  sid: string;
  unique_name: string;
  url: string;
}

export class FieldInstance {
  protected _solution: FieldContextSolution;
  protected _context?: FieldContext;

  constructor(
    protected _version: Understand,
    payload: FieldResource,
    assistantSid: string,
    taskSid: string,
    sid?: string
  ) {
    this.accountSid = payload.account_sid;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.fieldType = payload.field_type;
    this.taskSid = payload.task_sid;
    this.assistantSid = payload.assistant_sid;
    this.sid = payload.sid;
    this.uniqueName = payload.unique_name;
    this.url = payload.url;

    this._solution = { assistantSid, taskSid, sid: sid || this.sid };
  }

  /**
   * The unique ID of the Account that created this Field.
   */
  accountSid: string;
  /**
   * The date that this resource was created
   */
  dateCreated: Date;
  /**
   * The date that this resource was last updated
   */
  dateUpdated: Date;
  /**
   * The Field Type of this field. It can be any Built-in Field Type or unique_name or the Field Type sid of a custom Field Type.
   */
  fieldType: string;
  /**
   * The unique ID of the Task associated with this Field.
   */
  taskSid: string;
  /**
   * The unique ID of the parent Assistant.
   */
  assistantSid: string;
  /**
   * A 34 character string that uniquely identifies this resource.
   */
  sid: string;
  /**
   * A user-provided string that uniquely identifies this resource as an alternative to the sid. Unique up to 64 characters long.
   */
  uniqueName: string;
  url: string;

  private get _proxy(): FieldContext {
    this._context =
      this._context ||
      new FieldContextImpl(
        this._version,
        this._solution.assistantSid,
        this._solution.taskSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Remove a FieldInstance
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
   * Fetch a FieldInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed FieldInstance
   */
  fetch(
    callback?: (error: Error | null, item?: FieldInstance) => any
  ): Promise<FieldInstance> {
    return this._proxy.fetch(callback);
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
      fieldType: this.fieldType,
      taskSid: this.taskSid,
      assistantSid: this.assistantSid,
      sid: this.sid,
      uniqueName: this.uniqueName,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface FieldSolution {
  assistantSid: string;
  taskSid: string;
}

export interface FieldListInstance {
  _version: Understand;
  _solution: FieldSolution;
  _uri: string;

  (sid: string): FieldContext;
  get(sid: string): FieldContext;

  /**
   * Create a FieldInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed FieldInstance
   */
  create(
    params: FieldListInstanceCreateOptions,
    callback?: (error: Error | null, item?: FieldInstance) => any
  ): Promise<FieldInstance>;

  /**
   * Streams FieldInstance records from the API.
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
   * @param { FieldListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (item: FieldInstance, done: (err?: Error) => void) => void
  ): void;
  each(
    params: FieldListInstanceEachOptions,
    callback?: (item: FieldInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of FieldInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: FieldPage) => any
  ): Promise<FieldPage>;
  /**
   * Lists FieldInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { FieldListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: FieldInstance[]) => any
  ): Promise<FieldInstance[]>;
  list(
    params: FieldListInstanceOptions,
    callback?: (error: Error | null, items: FieldInstance[]) => any
  ): Promise<FieldInstance[]>;
  /**
   * Retrieve a single page of FieldInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { FieldListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: FieldPage) => any
  ): Promise<FieldPage>;
  page(
    params: FieldListInstancePageOptions,
    callback?: (error: Error | null, items: FieldPage) => any
  ): Promise<FieldPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function FieldListInstance(
  version: Understand,
  assistantSid: string,
  taskSid: string
): FieldListInstance {
  if (!isValidPathParam(assistantSid)) {
    throw new Error("Parameter 'assistantSid' is not valid.");
  }

  if (!isValidPathParam(taskSid)) {
    throw new Error("Parameter 'taskSid' is not valid.");
  }

  const instance = ((sid) => instance.get(sid)) as FieldListInstance;

  instance.get = function get(sid): FieldContext {
    return new FieldContextImpl(version, assistantSid, taskSid, sid);
  };

  instance._version = version;
  instance._solution = { assistantSid, taskSid };
  instance._uri = `/Assistants/${assistantSid}/Tasks/${taskSid}/Fields`;

  instance.create = function create(
    params: FieldListInstanceCreateOptions,
    callback?: (error: Error | null, items: FieldInstance) => any
  ): Promise<FieldInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["fieldType"] === null || params["fieldType"] === undefined) {
      throw new Error("Required parameter \"params['fieldType']\" missing.");
    }

    if (params["uniqueName"] === null || params["uniqueName"] === undefined) {
      throw new Error("Required parameter \"params['uniqueName']\" missing.");
    }

    let data: any = {};

    data["FieldType"] = params["fieldType"];

    data["UniqueName"] = params["uniqueName"];

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
        new FieldInstance(
          operationVersion,
          payload,
          instance._solution.assistantSid,
          instance._solution.taskSid
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
      | FieldListInstancePageOptions
      | ((error: Error | null, items: FieldPage) => any),
    callback?: (error: Error | null, items: FieldPage) => any
  ): Promise<FieldPage> {
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
      (payload) => new FieldPage(operationVersion, payload, instance._solution)
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
    callback?: (error: Error | null, items: FieldPage) => any
  ): Promise<FieldPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) => new FieldPage(instance._version, payload, instance._solution)
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

export class FieldPage extends Page<
  Understand,
  FieldPayload,
  FieldResource,
  FieldInstance
> {
  /**
   * Initialize the FieldPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: Understand,
    response: Response<string>,
    solution: FieldSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of FieldInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: FieldResource): FieldInstance {
    return new FieldInstance(
      this._version,
      payload,
      this._solution.assistantSid,
      this._solution.taskSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

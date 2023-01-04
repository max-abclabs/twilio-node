/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Taskrouter
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import V1 from "../../../V1";
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");
import { isValidPathParam } from "../../../../../base/utility";

/**
 * Options to pass to fetch a WorkerStatisticsInstance
 */
export interface WorkerStatisticsContextFetchOptions {
  /** Only calculate statistics since this many minutes in the past. The default 15 minutes. This is helpful for displaying statistics for the last 15 minutes, 240 minutes (4 hours), and 480 minutes (8 hours) to see trends. */
  minutes?: number;
  /** Only calculate statistics from this date and time and later, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
  startDate?: Date;
  /** Only include usage that occurred on or before this date, specified in GMT as an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time. */
  endDate?: Date;
  /** Only calculate statistics on this TaskChannel. Can be the TaskChannel\&#39;s SID or its &#x60;unique_name&#x60;, such as &#x60;voice&#x60;, &#x60;sms&#x60;, or &#x60;default&#x60;. */
  taskChannel?: string;
}

export interface WorkerStatisticsContext {
  /**
   * Fetch a WorkerStatisticsInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed WorkerStatisticsInstance
   */
  fetch(
    callback?: (error: Error | null, item?: WorkerStatisticsInstance) => any
  ): Promise<WorkerStatisticsInstance>;
  /**
   * Fetch a WorkerStatisticsInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed WorkerStatisticsInstance
   */
  fetch(
    params: WorkerStatisticsContextFetchOptions,
    callback?: (error: Error | null, item?: WorkerStatisticsInstance) => any
  ): Promise<WorkerStatisticsInstance>;
  fetch(params?: any, callback?: any): Promise<WorkerStatisticsInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface WorkerStatisticsContextSolution {
  workspaceSid?: string;
  workerSid?: string;
}

export class WorkerStatisticsContextImpl implements WorkerStatisticsContext {
  protected _solution: WorkerStatisticsContextSolution;
  protected _uri: string;

  constructor(protected _version: V1, workspaceSid: string, workerSid: string) {
    if (!isValidPathParam(workspaceSid)) {
      throw new Error("Parameter 'workspaceSid' is not valid.");
    }

    if (!isValidPathParam(workerSid)) {
      throw new Error("Parameter 'workerSid' is not valid.");
    }

    this._solution = { workspaceSid, workerSid };
    this._uri = `/Workspaces/${workspaceSid}/Workers/${workerSid}/Statistics`;
  }

  fetch(params?: any, callback?: any): Promise<WorkerStatisticsInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["minutes"] !== undefined) data["Minutes"] = params["minutes"];
    if (params["startDate"] !== undefined)
      data["StartDate"] = serialize.iso8601DateTime(params["startDate"]);
    if (params["endDate"] !== undefined)
      data["EndDate"] = serialize.iso8601DateTime(params["endDate"]);
    if (params["taskChannel"] !== undefined)
      data["TaskChannel"] = params["taskChannel"];

    const headers: any = {};

    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new WorkerStatisticsInstance(
          operationVersion,
          payload,
          this._solution.workspaceSid,
          this._solution.workerSid
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

interface WorkerStatisticsPayload extends WorkerStatisticsResource {}

interface WorkerStatisticsResource {
  account_sid?: string | null;
  cumulative?: any | null;
  worker_sid?: string | null;
  workspace_sid?: string | null;
  url?: string | null;
}

export class WorkerStatisticsInstance {
  protected _solution: WorkerStatisticsContextSolution;
  protected _context?: WorkerStatisticsContext;

  constructor(
    protected _version: V1,
    payload: WorkerStatisticsResource,
    workspaceSid: string,
    workerSid: string
  ) {
    this.accountSid = payload.account_sid;
    this.cumulative = payload.cumulative;
    this.workerSid = payload.worker_sid;
    this.workspaceSid = payload.workspace_sid;
    this.url = payload.url;

    this._solution = { workspaceSid, workerSid };
  }

  /**
   * The SID of the Account that created the resource
   */
  accountSid?: string | null;
  /**
   * An object that contains the cumulative statistics for the Worker
   */
  cumulative?: any | null;
  /**
   * The SID of the Worker that contains the WorkerChannel
   */
  workerSid?: string | null;
  /**
   * The SID of the Workspace that contains the WorkerChannel
   */
  workspaceSid?: string | null;
  /**
   * The absolute URL of the WorkerChannel statistics resource
   */
  url?: string | null;

  private get _proxy(): WorkerStatisticsContext {
    this._context =
      this._context ||
      new WorkerStatisticsContextImpl(
        this._version,
        this._solution.workspaceSid,
        this._solution.workerSid
      );
    return this._context;
  }

  /**
   * Fetch a WorkerStatisticsInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed WorkerStatisticsInstance
   */
  fetch(
    callback?: (error: Error | null, item?: WorkerStatisticsInstance) => any
  ): Promise<WorkerStatisticsInstance>;
  /**
   * Fetch a WorkerStatisticsInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed WorkerStatisticsInstance
   */
  fetch(
    params: WorkerStatisticsContextFetchOptions,
    callback?: (error: Error | null, item?: WorkerStatisticsInstance) => any
  ): Promise<WorkerStatisticsInstance>;
  fetch(params?: any, callback?: any): Promise<WorkerStatisticsInstance> {
    return this._proxy.fetch(params, callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      accountSid: this.accountSid,
      cumulative: this.cumulative,
      workerSid: this.workerSid,
      workspaceSid: this.workspaceSid,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface WorkerStatisticsListInstance {
  (): WorkerStatisticsContext;
  get(): WorkerStatisticsContext;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface WorkerStatisticsSolution {
  workspaceSid?: string;
  workerSid?: string;
}

interface WorkerStatisticsListInstanceImpl
  extends WorkerStatisticsListInstance {}
class WorkerStatisticsListInstanceImpl implements WorkerStatisticsListInstance {
  _version?: V1;
  _solution?: WorkerStatisticsSolution;
  _uri?: string;
}

export function WorkerStatisticsListInstance(
  version: V1,
  workspaceSid: string,
  workerSid: string
): WorkerStatisticsListInstance {
  if (!isValidPathParam(workspaceSid)) {
    throw new Error("Parameter 'workspaceSid' is not valid.");
  }

  if (!isValidPathParam(workerSid)) {
    throw new Error("Parameter 'workerSid' is not valid.");
  }

  const instance = (() => instance.get()) as WorkerStatisticsListInstanceImpl;

  instance.get = function get(): WorkerStatisticsContext {
    return new WorkerStatisticsContextImpl(version, workspaceSid, workerSid);
  };

  instance._version = version;
  instance._solution = { workspaceSid, workerSid };
  instance._uri = ``;

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

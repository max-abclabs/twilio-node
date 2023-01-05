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
 * Options to pass to fetch a WorkflowStatisticsInstance
 */
export interface WorkflowStatisticsContextFetchOptions {
  /** Only calculate statistics since this many minutes in the past. The default 15 minutes. This is helpful for displaying statistics for the last 15 minutes, 240 minutes (4 hours), and 480 minutes (8 hours) to see trends. */
  minutes?: number;
  /** Only calculate statistics from this date and time and later, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
  startDate?: Date;
  /** Only calculate statistics from this date and time and earlier, specified in GMT as an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time. */
  endDate?: Date;
  /** Only calculate real-time statistics on this TaskChannel. Can be the TaskChannel\'s SID or its `unique_name`, such as `voice`, `sms`, or `default`. */
  taskChannel?: string;
  /** A comma separated list of values that describes the thresholds, in seconds, to calculate statistics on. For each threshold specified, the number of Tasks canceled and reservations accepted above and below the specified thresholds in seconds are computed. For example, `5,30` would show splits of Tasks that were canceled or accepted before and after 5 seconds and before and after 30 seconds. This can be used to show short abandoned Tasks or Tasks that failed to meet an SLA. */
  splitByWaitTime?: string;
}

export interface WorkflowStatisticsContext {
  /**
   * Fetch a WorkflowStatisticsInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed WorkflowStatisticsInstance
   */
  fetch(
    callback?: (error: Error | null, item?: WorkflowStatisticsInstance) => any
  ): Promise<WorkflowStatisticsInstance>;
  /**
   * Fetch a WorkflowStatisticsInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed WorkflowStatisticsInstance
   */
  fetch(
    params: WorkflowStatisticsContextFetchOptions,
    callback?: (error: Error | null, item?: WorkflowStatisticsInstance) => any
  ): Promise<WorkflowStatisticsInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface WorkflowStatisticsContextSolution {
  workspaceSid: string;
  workflowSid: string;
}

export class WorkflowStatisticsContextImpl
  implements WorkflowStatisticsContext
{
  protected _solution: WorkflowStatisticsContextSolution;
  protected _uri: string;

  constructor(
    protected _version: V1,
    workspaceSid: string,
    workflowSid: string
  ) {
    if (!isValidPathParam(workspaceSid)) {
      throw new Error("Parameter 'workspaceSid' is not valid.");
    }

    if (!isValidPathParam(workflowSid)) {
      throw new Error("Parameter 'workflowSid' is not valid.");
    }

    this._solution = { workspaceSid, workflowSid };
    this._uri = `/Workspaces/${workspaceSid}/Workflows/${workflowSid}/Statistics`;
  }

  fetch(
    params?:
      | WorkflowStatisticsContextFetchOptions
      | ((error: Error | null, item?: WorkflowStatisticsInstance) => any),
    callback?: (error: Error | null, item?: WorkflowStatisticsInstance) => any
  ): Promise<WorkflowStatisticsInstance> {
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
    if (params["splitByWaitTime"] !== undefined)
      data["SplitByWaitTime"] = params["splitByWaitTime"];

    const headers: any = {};

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new WorkflowStatisticsInstance(
          operationVersion,
          payload,
          instance._solution.workspaceSid,
          instance._solution.workflowSid
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

interface WorkflowStatisticsPayload extends WorkflowStatisticsResource {}

interface WorkflowStatisticsResource {
  account_sid: string;
  cumulative: any;
  realtime: any;
  workflow_sid: string;
  workspace_sid: string;
  url: string;
}

export class WorkflowStatisticsInstance {
  protected _solution: WorkflowStatisticsContextSolution;
  protected _context?: WorkflowStatisticsContext;

  constructor(
    protected _version: V1,
    payload: WorkflowStatisticsResource,
    workspaceSid: string,
    workflowSid: string
  ) {
    this.accountSid = payload.account_sid;
    this.cumulative = payload.cumulative;
    this.realtime = payload.realtime;
    this.workflowSid = payload.workflow_sid;
    this.workspaceSid = payload.workspace_sid;
    this.url = payload.url;

    this._solution = { workspaceSid, workflowSid };
  }

  /**
   * The SID of the Account that created the resource
   */
  accountSid: string;
  /**
   * An object that contains the cumulative statistics for the Workflow
   */
  cumulative: any;
  /**
   * An object that contains the real-time statistics for the Workflow
   */
  realtime: any;
  /**
   * Returns the list of Tasks that are being controlled by the Workflow with the specified SID value
   */
  workflowSid: string;
  /**
   * The SID of the Workspace that contains the Workflow
   */
  workspaceSid: string;
  /**
   * The absolute URL of the Workflow statistics resource
   */
  url: string;

  private get _proxy(): WorkflowStatisticsContext {
    this._context =
      this._context ||
      new WorkflowStatisticsContextImpl(
        this._version,
        this._solution.workspaceSid,
        this._solution.workflowSid
      );
    return this._context;
  }

  /**
   * Fetch a WorkflowStatisticsInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed WorkflowStatisticsInstance
   */
  fetch(
    callback?: (error: Error | null, item?: WorkflowStatisticsInstance) => any
  ): Promise<WorkflowStatisticsInstance>;
  /**
   * Fetch a WorkflowStatisticsInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed WorkflowStatisticsInstance
   */
  fetch(
    params: WorkflowStatisticsContextFetchOptions,
    callback?: (error: Error | null, item?: WorkflowStatisticsInstance) => any
  ): Promise<WorkflowStatisticsInstance>;

  fetch(
    params?: any,
    callback?: (error: Error | null, item?: WorkflowStatisticsInstance) => any
  ): Promise<WorkflowStatisticsInstance> {
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
      realtime: this.realtime,
      workflowSid: this.workflowSid,
      workspaceSid: this.workspaceSid,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface WorkflowStatisticsSolution {
  workspaceSid: string;
  workflowSid: string;
}

export interface WorkflowStatisticsListInstance {
  _version: V1;
  _solution: WorkflowStatisticsSolution;
  _uri: string;

  (): WorkflowStatisticsContext;
  get(): WorkflowStatisticsContext;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function WorkflowStatisticsListInstance(
  version: V1,
  workspaceSid: string,
  workflowSid: string
): WorkflowStatisticsListInstance {
  if (!isValidPathParam(workspaceSid)) {
    throw new Error("Parameter 'workspaceSid' is not valid.");
  }

  if (!isValidPathParam(workflowSid)) {
    throw new Error("Parameter 'workflowSid' is not valid.");
  }

  const instance = (() => instance.get()) as WorkflowStatisticsListInstance;

  instance.get = function get(): WorkflowStatisticsContext {
    return new WorkflowStatisticsContextImpl(
      version,
      workspaceSid,
      workflowSid
    );
  };

  instance._version = version;
  instance._solution = { workspaceSid, workflowSid };
  instance._uri = ``;

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

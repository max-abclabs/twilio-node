/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Insights
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import V1 from "../../V1";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
import { isValidPathParam } from "../../../../base/utility";

type AnnotationAnsweredBy = "unknown_answered_by" | "human" | "machine";

type AnnotationConnectivityIssue =
  | "unknown_connectivity_issue"
  | "no_connectivity_issue"
  | "invalid_number"
  | "caller_id"
  | "dropped_call"
  | "number_reachability";

/**
 * Options to pass to update a AnnotationInstance
 */
export interface AnnotationContextUpdateOptions {
  /**  */
  answeredBy?: AnnotationAnsweredBy;
  /**  */
  connectivityIssue?: AnnotationConnectivityIssue;
  /** Specify if the call had any subjective quality issues. Possible values, one or more of:  no_quality_issue, low_volume, choppy_robotic, echo, dtmf, latency, owa, static_noise. Use comma separated values to indicate multiple quality issues for the same call */
  qualityIssues?: string;
  /** Specify if the call was a spam call. Use this to provide feedback on whether calls placed from your account were marked as spam, or if inbound calls received by your account were unwanted spam. Is of type Boolean: true, false. Use true if the call was a spam call. */
  spam?: boolean;
  /** Specify the call score. This is of type integer. Use a range of 1-5 to indicate the call experience score, with the following mapping as a reference for rating the call [5: Excellent, 4: Good, 3 : Fair, 2 : Poor, 1: Bad]. */
  callScore?: number;
  /** Specify any comments pertaining to the call. This of type string with a max limit of 100 characters. Twilio does not treat this field as PII, so don’t put any PII in here. */
  comment?: string;
  /** Associate this call with an incident or support ticket. This is of type string with a max limit of 100 characters. Twilio does not treat this field as PII, so don’t put any PII in here. */
  incident?: string;
}

export interface AnnotationContext {
  /**
   * Fetch a AnnotationInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed AnnotationInstance
   */
  fetch(
    callback?: (error: Error | null, item?: AnnotationInstance) => any
  ): Promise<AnnotationInstance>;

  /**
   * Update a AnnotationInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed AnnotationInstance
   */
  update(
    callback?: (error: Error | null, item?: AnnotationInstance) => any
  ): Promise<AnnotationInstance>;
  /**
   * Update a AnnotationInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed AnnotationInstance
   */
  update(
    params: AnnotationContextUpdateOptions,
    callback?: (error: Error | null, item?: AnnotationInstance) => any
  ): Promise<AnnotationInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface AnnotationContextSolution {
  callSid: string;
}

export class AnnotationContextImpl implements AnnotationContext {
  protected _solution: AnnotationContextSolution;
  protected _uri: string;

  constructor(protected _version: V1, callSid: string) {
    if (!isValidPathParam(callSid)) {
      throw new Error("Parameter 'callSid' is not valid.");
    }

    this._solution = { callSid };
    this._uri = `/Voice/${callSid}/Annotation`;
  }

  fetch(
    callback?: (error: Error | null, item?: AnnotationInstance) => any
  ): Promise<AnnotationInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new AnnotationInstance(
          operationVersion,
          payload,
          instance._solution.callSid
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(
    params?:
      | AnnotationContextUpdateOptions
      | ((error: Error | null, item?: AnnotationInstance) => any),
    callback?: (error: Error | null, item?: AnnotationInstance) => any
  ): Promise<AnnotationInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["answeredBy"] !== undefined)
      data["AnsweredBy"] = params["answeredBy"];
    if (params["connectivityIssue"] !== undefined)
      data["ConnectivityIssue"] = params["connectivityIssue"];
    if (params["qualityIssues"] !== undefined)
      data["QualityIssues"] = params["qualityIssues"];
    if (params["spam"] !== undefined)
      data["Spam"] = serialize.bool(params["spam"]);
    if (params["callScore"] !== undefined)
      data["CallScore"] = params["callScore"];
    if (params["comment"] !== undefined) data["Comment"] = params["comment"];
    if (params["incident"] !== undefined) data["Incident"] = params["incident"];

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
        new AnnotationInstance(
          operationVersion,
          payload,
          instance._solution.callSid
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

interface AnnotationPayload extends AnnotationResource {}

interface AnnotationResource {
  call_sid: string;
  account_sid: string;
  answered_by: AnnotationAnsweredBy;
  connectivity_issue: AnnotationConnectivityIssue;
  quality_issues: Array<string>;
  spam: boolean;
  call_score: number;
  comment: string;
  incident: string;
  url: string;
}

export class AnnotationInstance {
  protected _solution: AnnotationContextSolution;
  protected _context?: AnnotationContext;

  constructor(
    protected _version: V1,
    payload: AnnotationResource,
    callSid: string
  ) {
    this.callSid = payload.call_sid;
    this.accountSid = payload.account_sid;
    this.answeredBy = payload.answered_by;
    this.connectivityIssue = payload.connectivity_issue;
    this.qualityIssues = payload.quality_issues;
    this.spam = payload.spam;
    this.callScore = deserialize.integer(payload.call_score);
    this.comment = payload.comment;
    this.incident = payload.incident;
    this.url = payload.url;

    this._solution = { callSid };
  }

  /**
   * Call SID.
   */
  callSid: string;
  /**
   * Account SID.
   */
  accountSid: string;
  answeredBy: AnnotationAnsweredBy;
  connectivityIssue: AnnotationConnectivityIssue;
  /**
   * Indicates if the call had audio quality issues.
   */
  qualityIssues: Array<string>;
  /**
   * Call spam indicator
   */
  spam: boolean;
  /**
   * Call Score
   */
  callScore: number;
  /**
   * User comments
   */
  comment: string;
  /**
   * Call tag for incidents or support ticket
   */
  incident: string;
  /**
   * The URL of this resource.
   */
  url: string;

  private get _proxy(): AnnotationContext {
    this._context =
      this._context ||
      new AnnotationContextImpl(this._version, this._solution.callSid);
    return this._context;
  }

  /**
   * Fetch a AnnotationInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed AnnotationInstance
   */
  fetch(
    callback?: (error: Error | null, item?: AnnotationInstance) => any
  ): Promise<AnnotationInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a AnnotationInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed AnnotationInstance
   */
  update(
    callback?: (error: Error | null, item?: AnnotationInstance) => any
  ): Promise<AnnotationInstance>;
  /**
   * Update a AnnotationInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed AnnotationInstance
   */
  update(
    params: AnnotationContextUpdateOptions,
    callback?: (error: Error | null, item?: AnnotationInstance) => any
  ): Promise<AnnotationInstance>;

  update(
    params?: any,
    callback?: (error: Error | null, item?: AnnotationInstance) => any
  ): Promise<AnnotationInstance> {
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
      accountSid: this.accountSid,
      answeredBy: this.answeredBy,
      connectivityIssue: this.connectivityIssue,
      qualityIssues: this.qualityIssues,
      spam: this.spam,
      callScore: this.callScore,
      comment: this.comment,
      incident: this.incident,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface AnnotationSolution {
  callSid: string;
}

export interface AnnotationListInstance {
  _version: V1;
  _solution: AnnotationSolution;
  _uri: string;

  (): AnnotationContext;
  get(): AnnotationContext;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function AnnotationListInstance(
  version: V1,
  callSid: string
): AnnotationListInstance {
  if (!isValidPathParam(callSid)) {
    throw new Error("Parameter 'callSid' is not valid.");
  }

  const instance = (() => instance.get()) as AnnotationListInstance;

  instance.get = function get(): AnnotationContext {
    return new AnnotationContextImpl(version, callSid);
  };

  instance._version = version;
  instance._solution = { callSid };
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

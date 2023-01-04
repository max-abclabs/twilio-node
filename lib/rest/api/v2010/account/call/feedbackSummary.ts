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
import V2010 from "../../../V2010";
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");
import { isValidPathParam } from "../../../../../base/utility";

type CallFeedbackSummaryStatus =
  | "queued"
  | "in-progress"
  | "completed"
  | "failed";

/**
 * Options to pass to create a FeedbackSummaryInstance
 */
export interface FeedbackSummaryListInstanceCreateOptions {
  /** Only include feedback given on or after this date. Format is &#x60;YYYY-MM-DD&#x60; and specified in UTC. */
  startDate: Date;
  /** Only include feedback given on or before this date. Format is &#x60;YYYY-MM-DD&#x60; and specified in UTC. */
  endDate: Date;
  /** Whether to also include Feedback resources from all subaccounts. &#x60;true&#x60; includes feedback from all subaccounts and &#x60;false&#x60;, the default, includes feedback from only the specified account. */
  includeSubaccounts?: boolean;
  /** The URL that we will request when the feedback summary is complete. */
  statusCallback?: string;
  /** The HTTP method (&#x60;GET&#x60; or &#x60;POST&#x60;) we use to make the request to the &#x60;StatusCallback&#x60; URL. */
  statusCallbackMethod?: string;
}

export interface FeedbackSummaryContext {
  /**
   * Remove a FeedbackSummaryInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a FeedbackSummaryInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed FeedbackSummaryInstance
   */
  fetch(
    callback?: (error: Error | null, item?: FeedbackSummaryInstance) => any
  ): Promise<FeedbackSummaryInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface FeedbackSummaryContextSolution {
  accountSid?: string;
  sid?: string;
}

export class FeedbackSummaryContextImpl implements FeedbackSummaryContext {
  protected _solution: FeedbackSummaryContextSolution;
  protected _uri: string;

  constructor(protected _version: V2010, accountSid: string, sid: string) {
    if (!isValidPathParam(accountSid)) {
      throw new Error("Parameter 'accountSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { accountSid, sid };
    this._uri = `/Accounts/${accountSid}/Calls/FeedbackSummary/${sid}.json`;
  }

  remove(callback?: any): Promise<boolean> {
    let operationVersion = this._version,
      operationPromise = operationVersion.remove({
        uri: this._uri,
        method: "delete",
      });

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  fetch(callback?: any): Promise<FeedbackSummaryInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new FeedbackSummaryInstance(
          operationVersion,
          payload,
          this._solution.accountSid,
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

interface FeedbackSummaryPayload extends FeedbackSummaryResource {}

interface FeedbackSummaryResource {
  account_sid?: string | null;
  call_count?: number | null;
  call_feedback_count?: number | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  end_date?: Date | null;
  include_subaccounts?: boolean | null;
  issues?: Array<any> | null;
  quality_score_average?: number | null;
  quality_score_median?: number | null;
  quality_score_standard_deviation?: number | null;
  sid?: string | null;
  start_date?: Date | null;
  status?: CallFeedbackSummaryStatus;
}

export class FeedbackSummaryInstance {
  protected _solution: FeedbackSummaryContextSolution;
  protected _context?: FeedbackSummaryContext;

  constructor(
    protected _version: V2010,
    payload: FeedbackSummaryResource,
    accountSid: string,
    sid?: string
  ) {
    this.accountSid = payload.account_sid;
    this.callCount = deserialize.integer(payload.call_count);
    this.callFeedbackCount = deserialize.integer(payload.call_feedback_count);
    this.dateCreated = deserialize.rfc2822DateTime(payload.date_created);
    this.dateUpdated = deserialize.rfc2822DateTime(payload.date_updated);
    this.endDate = deserialize.iso8601Date(payload.end_date);
    this.includeSubaccounts = payload.include_subaccounts;
    this.issues = payload.issues;
    this.qualityScoreAverage = payload.quality_score_average;
    this.qualityScoreMedian = payload.quality_score_median;
    this.qualityScoreStandardDeviation =
      payload.quality_score_standard_deviation;
    this.sid = payload.sid;
    this.startDate = deserialize.iso8601Date(payload.start_date);
    this.status = payload.status;

    this._solution = { accountSid, sid: sid || this.sid };
  }

  /**
   * The unique sid that identifies this account
   */
  accountSid?: string | null;
  /**
   * The total number of calls
   */
  callCount?: number | null;
  /**
   * The total number of calls with a feedback entry
   */
  callFeedbackCount?: number | null;
  /**
   * The date this resource was created
   */
  dateCreated?: Date | null;
  /**
   * The date this resource was last updated
   */
  dateUpdated?: Date | null;
  /**
   * The latest feedback entry date in the summary
   */
  endDate?: Date | null;
  /**
   * Whether the feedback summary includes subaccounts
   */
  includeSubaccounts?: boolean | null;
  /**
   * Issues experienced during the call
   */
  issues?: Array<any> | null;
  /**
   * The average QualityScore of the feedback entries
   */
  qualityScoreAverage?: number | null;
  /**
   * The median QualityScore of the feedback entries
   */
  qualityScoreMedian?: number | null;
  /**
   * The standard deviation of the quality scores
   */
  qualityScoreStandardDeviation?: number | null;
  /**
   * A string that uniquely identifies this feedback entry
   */
  sid?: string | null;
  /**
   * The earliest feedback entry date in the summary
   */
  startDate?: Date | null;
  status?: CallFeedbackSummaryStatus;

  private get _proxy(): FeedbackSummaryContext {
    this._context =
      this._context ||
      new FeedbackSummaryContextImpl(
        this._version,
        this._solution.accountSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Remove a FeedbackSummaryInstance
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
   * Fetch a FeedbackSummaryInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed FeedbackSummaryInstance
   */
  fetch(
    callback?: (error: Error | null, item?: FeedbackSummaryInstance) => any
  ): Promise<FeedbackSummaryInstance> {
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
      callCount: this.callCount,
      callFeedbackCount: this.callFeedbackCount,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      endDate: this.endDate,
      includeSubaccounts: this.includeSubaccounts,
      issues: this.issues,
      qualityScoreAverage: this.qualityScoreAverage,
      qualityScoreMedian: this.qualityScoreMedian,
      qualityScoreStandardDeviation: this.qualityScoreStandardDeviation,
      sid: this.sid,
      startDate: this.startDate,
      status: this.status,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface FeedbackSummaryListInstance {
  (sid: string): FeedbackSummaryContext;
  get(sid: string): FeedbackSummaryContext;

  /**
   * Create a FeedbackSummaryInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed FeedbackSummaryInstance
   */
  create(
    params: FeedbackSummaryListInstanceCreateOptions,
    callback?: (error: Error | null, item?: FeedbackSummaryInstance) => any
  ): Promise<FeedbackSummaryInstance>;
  create(params: any, callback?: any): Promise<FeedbackSummaryInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface FeedbackSummarySolution {
  accountSid?: string;
}

interface FeedbackSummaryListInstanceImpl extends FeedbackSummaryListInstance {}
class FeedbackSummaryListInstanceImpl implements FeedbackSummaryListInstance {
  _version?: V2010;
  _solution?: FeedbackSummarySolution;
  _uri?: string;
}

export function FeedbackSummaryListInstance(
  version: V2010,
  accountSid: string
): FeedbackSummaryListInstance {
  if (!isValidPathParam(accountSid)) {
    throw new Error("Parameter 'accountSid' is not valid.");
  }

  const instance = ((sid) =>
    instance.get(sid)) as FeedbackSummaryListInstanceImpl;

  instance.get = function get(sid): FeedbackSummaryContext {
    return new FeedbackSummaryContextImpl(version, accountSid, sid);
  };

  instance._version = version;
  instance._solution = { accountSid };
  instance._uri = `/Accounts/${accountSid}/Calls/FeedbackSummary.json`;

  instance.create = function create(
    params: any,
    callback?: any
  ): Promise<FeedbackSummaryInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["startDate"] === null || params["startDate"] === undefined) {
      throw new Error("Required parameter \"params['startDate']\" missing.");
    }

    if (params["endDate"] === null || params["endDate"] === undefined) {
      throw new Error("Required parameter \"params['endDate']\" missing.");
    }

    let data: any = {};

    data["StartDate"] = serialize.iso8601Date(params["startDate"]);

    data["EndDate"] = serialize.iso8601Date(params["endDate"]);
    if (params["includeSubaccounts"] !== undefined)
      data["IncludeSubaccounts"] = serialize.bool(params["includeSubaccounts"]);
    if (params["statusCallback"] !== undefined)
      data["StatusCallback"] = params["statusCallback"];
    if (params["statusCallbackMethod"] !== undefined)
      data["StatusCallbackMethod"] = params["statusCallbackMethod"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";

    let operationVersion = version,
      operationPromise = operationVersion.create({
        uri: this._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new FeedbackSummaryInstance(
          operationVersion,
          payload,
          this._solution.accountSid
        )
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

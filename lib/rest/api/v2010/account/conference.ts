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
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V2010 from "../../V2010";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
import { isValidPathParam } from "../../../../base/utility";
import { ParticipantListInstance } from "./conference/participant";
import { RecordingListInstance } from "./conference/recording";

type ConferenceReasonConferenceEnded =
  | "conference-ended-via-api"
  | "participant-with-end-conference-on-exit-left"
  | "participant-with-end-conference-on-exit-kicked"
  | "last-participant-kicked"
  | "last-participant-left";

type ConferenceStatus = "init" | "in-progress" | "completed";

type ConferenceUpdateStatus = "completed";

/**
 * Options to pass to update a ConferenceInstance
 *
 * @property { ConferenceUpdateStatus } [status]
 * @property { string } [announceUrl] The URL we should call to announce something into the conference. The URL may return an MP3 file, a WAV file, or a TwiML document that contains `<Play>`, `<Say>`, `<Pause>`, or `<Redirect>` verbs.
 * @property { string } [announceMethod] The HTTP method used to call `announce_url`. Can be: `GET` or `POST` and the default is `POST`
 */
export interface ConferenceContextUpdateOptions {
  status?: ConferenceUpdateStatus;
  announceUrl?: string;
  announceMethod?: string;
}
/**
 * Options to pass to each
 *
 * @property { Date } [dateCreated] The `date_created` value, specified as `YYYY-MM-DD`, of the resources to read. To read conferences that started on or before midnight on a date, use `<=YYYY-MM-DD`, and to specify  conferences that started on or after midnight on a date, use `>=YYYY-MM-DD`.
 * @property { Date } [dateCreatedBefore] The `date_created` value, specified as `YYYY-MM-DD`, of the resources to read. To read conferences that started on or before midnight on a date, use `<=YYYY-MM-DD`, and to specify  conferences that started on or after midnight on a date, use `>=YYYY-MM-DD`.
 * @property { Date } [dateCreatedAfter] The `date_created` value, specified as `YYYY-MM-DD`, of the resources to read. To read conferences that started on or before midnight on a date, use `<=YYYY-MM-DD`, and to specify  conferences that started on or after midnight on a date, use `>=YYYY-MM-DD`.
 * @property { Date } [dateUpdated] The `date_updated` value, specified as `YYYY-MM-DD`, of the resources to read. To read conferences that were last updated on or before midnight on a date, use `<=YYYY-MM-DD`, and to specify conferences that were last updated on or after midnight on a given date, use  `>=YYYY-MM-DD`.
 * @property { Date } [dateUpdatedBefore] The `date_updated` value, specified as `YYYY-MM-DD`, of the resources to read. To read conferences that were last updated on or before midnight on a date, use `<=YYYY-MM-DD`, and to specify conferences that were last updated on or after midnight on a given date, use  `>=YYYY-MM-DD`.
 * @property { Date } [dateUpdatedAfter] The `date_updated` value, specified as `YYYY-MM-DD`, of the resources to read. To read conferences that were last updated on or before midnight on a date, use `<=YYYY-MM-DD`, and to specify conferences that were last updated on or after midnight on a given date, use  `>=YYYY-MM-DD`.
 * @property { string } [friendlyName] The string that identifies the Conference resources to read.
 * @property { ConferenceStatus } [status] The status of the resources to read. Can be: `init`, `in-progress`, or `completed`.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { Function } [callback] -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property { Function } [done] - Function to be called upon completion of streaming
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface ConferenceListInstanceEachOptions {
  dateCreated?: Date;
  dateCreatedBefore?: Date;
  dateCreatedAfter?: Date;
  dateUpdated?: Date;
  dateUpdatedBefore?: Date;
  dateUpdatedAfter?: Date;
  friendlyName?: string;
  status?: ConferenceStatus;
  pageSize?: number;
  callback?: (item: ConferenceInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
}

/**
 * Options to pass to list
 *
 * @property { Date } [dateCreated] The `date_created` value, specified as `YYYY-MM-DD`, of the resources to read. To read conferences that started on or before midnight on a date, use `<=YYYY-MM-DD`, and to specify  conferences that started on or after midnight on a date, use `>=YYYY-MM-DD`.
 * @property { Date } [dateCreatedBefore] The `date_created` value, specified as `YYYY-MM-DD`, of the resources to read. To read conferences that started on or before midnight on a date, use `<=YYYY-MM-DD`, and to specify  conferences that started on or after midnight on a date, use `>=YYYY-MM-DD`.
 * @property { Date } [dateCreatedAfter] The `date_created` value, specified as `YYYY-MM-DD`, of the resources to read. To read conferences that started on or before midnight on a date, use `<=YYYY-MM-DD`, and to specify  conferences that started on or after midnight on a date, use `>=YYYY-MM-DD`.
 * @property { Date } [dateUpdated] The `date_updated` value, specified as `YYYY-MM-DD`, of the resources to read. To read conferences that were last updated on or before midnight on a date, use `<=YYYY-MM-DD`, and to specify conferences that were last updated on or after midnight on a given date, use  `>=YYYY-MM-DD`.
 * @property { Date } [dateUpdatedBefore] The `date_updated` value, specified as `YYYY-MM-DD`, of the resources to read. To read conferences that were last updated on or before midnight on a date, use `<=YYYY-MM-DD`, and to specify conferences that were last updated on or after midnight on a given date, use  `>=YYYY-MM-DD`.
 * @property { Date } [dateUpdatedAfter] The `date_updated` value, specified as `YYYY-MM-DD`, of the resources to read. To read conferences that were last updated on or before midnight on a date, use `<=YYYY-MM-DD`, and to specify conferences that were last updated on or after midnight on a given date, use  `>=YYYY-MM-DD`.
 * @property { string } [friendlyName] The string that identifies the Conference resources to read.
 * @property { ConferenceStatus } [status] The status of the resources to read. Can be: `init`, `in-progress`, or `completed`.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface ConferenceListInstanceOptions {
  dateCreated?: Date;
  dateCreatedBefore?: Date;
  dateCreatedAfter?: Date;
  dateUpdated?: Date;
  dateUpdatedBefore?: Date;
  dateUpdatedAfter?: Date;
  friendlyName?: string;
  status?: ConferenceStatus;
  pageSize?: number;
  limit?: number;
}

/**
 * Options to pass to page
 *
 * @property { Date } [dateCreated] The `date_created` value, specified as `YYYY-MM-DD`, of the resources to read. To read conferences that started on or before midnight on a date, use `<=YYYY-MM-DD`, and to specify  conferences that started on or after midnight on a date, use `>=YYYY-MM-DD`.
 * @property { Date } [dateCreatedBefore] The `date_created` value, specified as `YYYY-MM-DD`, of the resources to read. To read conferences that started on or before midnight on a date, use `<=YYYY-MM-DD`, and to specify  conferences that started on or after midnight on a date, use `>=YYYY-MM-DD`.
 * @property { Date } [dateCreatedAfter] The `date_created` value, specified as `YYYY-MM-DD`, of the resources to read. To read conferences that started on or before midnight on a date, use `<=YYYY-MM-DD`, and to specify  conferences that started on or after midnight on a date, use `>=YYYY-MM-DD`.
 * @property { Date } [dateUpdated] The `date_updated` value, specified as `YYYY-MM-DD`, of the resources to read. To read conferences that were last updated on or before midnight on a date, use `<=YYYY-MM-DD`, and to specify conferences that were last updated on or after midnight on a given date, use  `>=YYYY-MM-DD`.
 * @property { Date } [dateUpdatedBefore] The `date_updated` value, specified as `YYYY-MM-DD`, of the resources to read. To read conferences that were last updated on or before midnight on a date, use `<=YYYY-MM-DD`, and to specify conferences that were last updated on or after midnight on a given date, use  `>=YYYY-MM-DD`.
 * @property { Date } [dateUpdatedAfter] The `date_updated` value, specified as `YYYY-MM-DD`, of the resources to read. To read conferences that were last updated on or before midnight on a date, use `<=YYYY-MM-DD`, and to specify conferences that were last updated on or after midnight on a given date, use  `>=YYYY-MM-DD`.
 * @property { string } [friendlyName] The string that identifies the Conference resources to read.
 * @property { ConferenceStatus } [status] The status of the resources to read. Can be: `init`, `in-progress`, or `completed`.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface ConferenceListInstancePageOptions {
  dateCreated?: Date;
  dateCreatedBefore?: Date;
  dateCreatedAfter?: Date;
  dateUpdated?: Date;
  dateUpdatedBefore?: Date;
  dateUpdatedAfter?: Date;
  friendlyName?: string;
  status?: ConferenceStatus;
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}

export interface ConferenceContext {
  participants: ParticipantListInstance;
  recordings: RecordingListInstance;

  /**
   * Fetch a ConferenceInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ConferenceInstance
   */
  fetch(
    callback?: (error: Error | null, item?: ConferenceInstance) => any
  ): Promise<ConferenceInstance>;

  /**
   * Update a ConferenceInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ConferenceInstance
   */
  update(
    callback?: (error: Error | null, item?: ConferenceInstance) => any
  ): Promise<ConferenceInstance>;
  /**
   * Update a ConferenceInstance
   *
   * @param { ConferenceContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ConferenceInstance
   */
  update(
    params: ConferenceContextUpdateOptions,
    callback?: (error: Error | null, item?: ConferenceInstance) => any
  ): Promise<ConferenceInstance>;
  update(params?: any, callback?: any): Promise<ConferenceInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface ConferenceContextSolution {
  accountSid?: string;
  sid?: string;
}

export class ConferenceContextImpl implements ConferenceContext {
  protected _solution: ConferenceContextSolution;
  protected _uri: string;

  protected _participants?: ParticipantListInstance;
  protected _recordings?: RecordingListInstance;

  constructor(protected _version: V2010, accountSid: string, sid: string) {
    if (!isValidPathParam(accountSid)) {
      throw new Error("Parameter 'accountSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { accountSid, sid };
    this._uri = `/Accounts/${accountSid}/Conferences/${sid}.json`;
  }

  get participants(): ParticipantListInstance {
    this._participants =
      this._participants ||
      ParticipantListInstance(
        this._version,
        this._solution.accountSid,
        this._solution.sid
      );
    return this._participants;
  }

  get recordings(): RecordingListInstance {
    this._recordings =
      this._recordings ||
      RecordingListInstance(
        this._version,
        this._solution.accountSid,
        this._solution.sid
      );
    return this._recordings;
  }

  fetch(callback?: any): Promise<ConferenceInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new ConferenceInstance(
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

  update(params?: any, callback?: any): Promise<ConferenceInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["status"] !== undefined) data["Status"] = params["status"];
    if (params["announceUrl"] !== undefined)
      data["AnnounceUrl"] = params["announceUrl"];
    if (params["announceMethod"] !== undefined)
      data["AnnounceMethod"] = params["announceMethod"];

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
        new ConferenceInstance(
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

interface ConferencePayload extends TwilioResponsePayload {
  conferences: ConferenceResource[];
}

interface ConferenceResource {
  account_sid?: string | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  api_version?: string | null;
  friendly_name?: string | null;
  region?: string | null;
  sid?: string | null;
  status?: ConferenceStatus;
  uri?: string | null;
  subresource_uris?: object | null;
  reason_conference_ended?: ConferenceReasonConferenceEnded;
  call_sid_ending_conference?: string | null;
}

export class ConferenceInstance {
  protected _solution: ConferenceContextSolution;
  protected _context?: ConferenceContext;

  constructor(
    protected _version: V2010,
    payload: ConferenceResource,
    accountSid: string,
    sid?: string
  ) {
    this.accountSid = payload.account_sid;
    this.dateCreated = deserialize.rfc2822DateTime(payload.date_created);
    this.dateUpdated = deserialize.rfc2822DateTime(payload.date_updated);
    this.apiVersion = payload.api_version;
    this.friendlyName = payload.friendly_name;
    this.region = payload.region;
    this.sid = payload.sid;
    this.status = payload.status;
    this.uri = payload.uri;
    this.subresourceUris = payload.subresource_uris;
    this.reasonConferenceEnded = payload.reason_conference_ended;
    this.callSidEndingConference = payload.call_sid_ending_conference;

    this._solution = { accountSid, sid: sid || this.sid };
  }

  /**
   * The SID of the Account that created this resource
   */
  accountSid?: string | null;
  /**
   * The RFC 2822 date and time in GMT that this resource was created
   */
  dateCreated?: Date | null;
  /**
   * The RFC 2822 date and time in GMT that this resource was last updated
   */
  dateUpdated?: Date | null;
  /**
   * The API version used to create this conference
   */
  apiVersion?: string | null;
  /**
   * A string that you assigned to describe this conference room
   */
  friendlyName?: string | null;
  /**
   * A string that represents the Twilio Region where the conference was mixed
   */
  region?: string | null;
  /**
   * The unique string that identifies this resource
   */
  sid?: string | null;
  status?: ConferenceStatus;
  /**
   * The URI of this resource, relative to `https://api.twilio.com`
   */
  uri?: string | null;
  /**
   * A list of related resources identified by their relative URIs
   */
  subresourceUris?: object | null;
  reasonConferenceEnded?: ConferenceReasonConferenceEnded;
  /**
   * The call SID that caused the conference to end
   */
  callSidEndingConference?: string | null;

  private get _proxy(): ConferenceContext {
    this._context =
      this._context ||
      new ConferenceContextImpl(
        this._version,
        this._solution.accountSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Fetch a ConferenceInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ConferenceInstance
   */
  fetch(
    callback?: (error: Error | null, item?: ConferenceInstance) => any
  ): Promise<ConferenceInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a ConferenceInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ConferenceInstance
   */
  update(
    callback?: (error: Error | null, item?: ConferenceInstance) => any
  ): Promise<ConferenceInstance>;
  /**
   * Update a ConferenceInstance
   *
   * @param { ConferenceContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ConferenceInstance
   */
  update(
    params: ConferenceContextUpdateOptions,
    callback?: (error: Error | null, item?: ConferenceInstance) => any
  ): Promise<ConferenceInstance>;
  update(params?: any, callback?: any): Promise<ConferenceInstance> {
    return this._proxy.update(params, callback);
  }

  /**
   * Access the participants.
   */
  participants(): ParticipantListInstance {
    return this._proxy.participants;
  }

  /**
   * Access the recordings.
   */
  recordings(): RecordingListInstance {
    return this._proxy.recordings;
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
      apiVersion: this.apiVersion,
      friendlyName: this.friendlyName,
      region: this.region,
      sid: this.sid,
      status: this.status,
      uri: this.uri,
      subresourceUris: this.subresourceUris,
      reasonConferenceEnded: this.reasonConferenceEnded,
      callSidEndingConference: this.callSidEndingConference,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface ConferenceListInstance {
  (sid: string): ConferenceContext;
  get(sid: string): ConferenceContext;

  /**
   * Streams ConferenceInstance records from the API.
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
    callback?: (item: ConferenceInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Streams ConferenceInstance records from the API.
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
   * @param { ConferenceListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    params?: ConferenceListInstanceEachOptions,
    callback?: (item: ConferenceInstance, done: (err?: Error) => void) => void
  ): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of ConferenceInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    callback?: (error: Error | null, items: ConferencePage) => any
  ): Promise<ConferencePage>;
  /**
   * Retrieve a single target page of ConferenceInstance records from the API.
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
    callback?: (error: Error | null, items: ConferencePage) => any
  ): Promise<ConferencePage>;
  getPage(params?: any, callback?: any): Promise<ConferencePage>;
  /**
   * Lists ConferenceInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: ConferenceInstance[]) => any
  ): Promise<ConferenceInstance[]>;
  /**
   * Lists ConferenceInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { ConferenceListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    params?: ConferenceListInstanceOptions,
    callback?: (error: Error | null, items: ConferenceInstance[]) => any
  ): Promise<ConferenceInstance[]>;
  list(params?: any, callback?: any): Promise<ConferenceInstance[]>;
  /**
   * Retrieve a single page of ConferenceInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: ConferencePage) => any
  ): Promise<ConferencePage>;
  /**
   * Retrieve a single page of ConferenceInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { ConferenceListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    params: ConferenceListInstancePageOptions,
    callback?: (error: Error | null, items: ConferencePage) => any
  ): Promise<ConferencePage>;
  page(params?: any, callback?: any): Promise<ConferencePage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface ConferenceSolution {
  accountSid?: string;
}

interface ConferenceListInstanceImpl extends ConferenceListInstance {}
class ConferenceListInstanceImpl implements ConferenceListInstance {
  _version?: V2010;
  _solution?: ConferenceSolution;
  _uri?: string;
}

export function ConferenceListInstance(
  version: V2010,
  accountSid: string
): ConferenceListInstance {
  if (!isValidPathParam(accountSid)) {
    throw new Error("Parameter 'accountSid' is not valid.");
  }

  const instance = ((sid) => instance.get(sid)) as ConferenceListInstanceImpl;

  instance.get = function get(sid): ConferenceContext {
    return new ConferenceContextImpl(version, accountSid, sid);
  };

  instance._version = version;
  instance._solution = { accountSid };
  instance._uri = `/Accounts/${accountSid}/Conferences.json`;

  instance.page = function page(
    params?: any,
    callback?: any
  ): Promise<ConferencePage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["dateCreated"] !== undefined)
      data["DateCreated"] = serialize.iso8601Date(params["dateCreated"]);
    if (params["dateCreatedBefore"] !== undefined)
      data["DateCreated<"] = serialize.iso8601Date(params["dateCreatedBefore"]);
    if (params["dateCreatedAfter"] !== undefined)
      data["DateCreated>"] = serialize.iso8601Date(params["dateCreatedAfter"]);
    if (params["dateUpdated"] !== undefined)
      data["DateUpdated"] = serialize.iso8601Date(params["dateUpdated"]);
    if (params["dateUpdatedBefore"] !== undefined)
      data["DateUpdated<"] = serialize.iso8601Date(params["dateUpdatedBefore"]);
    if (params["dateUpdatedAfter"] !== undefined)
      data["DateUpdated>"] = serialize.iso8601Date(params["dateUpdatedAfter"]);
    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];
    if (params["status"] !== undefined) data["Status"] = params["status"];
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
      (payload) => new ConferencePage(operationVersion, payload, this._solution)
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
  ): Promise<ConferencePage> {
    let operationPromise = this._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    operationPromise = operationPromise.then(
      (payload) => new ConferencePage(this._version, payload, this._solution)
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

export class ConferencePage extends Page<
  V2010,
  ConferencePayload,
  ConferenceResource,
  ConferenceInstance
> {
  /**
   * Initialize the ConferencePage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V2010,
    response: Response<string>,
    solution: ConferenceSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of ConferenceInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: ConferenceResource): ConferenceInstance {
    return new ConferenceInstance(
      this._version,
      payload,
      this._solution.accountSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

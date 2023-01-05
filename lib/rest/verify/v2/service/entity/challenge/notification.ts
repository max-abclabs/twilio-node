/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Verify
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import V2 from "../../../../V2";
const deserialize = require("../../../../../../base/deserialize");
const serialize = require("../../../../../../base/serialize");
import { isValidPathParam } from "../../../../../../base/utility";

/**
 * Options to pass to create a NotificationInstance
 */
export interface NotificationListInstanceCreateOptions {
  /** How long, in seconds, the notification is valid. Can be an integer between 0 and 300. Default is 300. Delivery is attempted until the TTL elapses, even if the device is offline. 0 means that the notification delivery is attempted immediately, only once, and is not stored for future delivery. */
  ttl?: number;
}

export interface NotificationSolution {
  serviceSid: string;
  identity: string;
  challengeSid: string;
}

export interface NotificationListInstance {
  _version: V2;
  _solution: NotificationSolution;
  _uri: string;

  /**
   * Create a NotificationInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed NotificationInstance
   */
  create(
    callback?: (error: Error | null, item?: NotificationInstance) => any
  ): Promise<NotificationInstance>;
  /**
   * Create a NotificationInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed NotificationInstance
   */
  create(
    params: NotificationListInstanceCreateOptions,
    callback?: (error: Error | null, item?: NotificationInstance) => any
  ): Promise<NotificationInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function NotificationListInstance(
  version: V2,
  serviceSid: string,
  identity: string,
  challengeSid: string
): NotificationListInstance {
  if (!isValidPathParam(serviceSid)) {
    throw new Error("Parameter 'serviceSid' is not valid.");
  }

  if (!isValidPathParam(identity)) {
    throw new Error("Parameter 'identity' is not valid.");
  }

  if (!isValidPathParam(challengeSid)) {
    throw new Error("Parameter 'challengeSid' is not valid.");
  }

  const instance = {} as NotificationListInstance;

  instance._version = version;
  instance._solution = { serviceSid, identity, challengeSid };
  instance._uri = `/Services/${serviceSid}/Entities/${identity}/Challenges/${challengeSid}/Notifications`;

  instance.create = function create(
    params?:
      | NotificationListInstanceCreateOptions
      | ((error: Error | null, items: NotificationInstance) => any),
    callback?: (error: Error | null, items: NotificationInstance) => any
  ): Promise<NotificationInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["ttl"] !== undefined) data["Ttl"] = params["ttl"];

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
        new NotificationInstance(
          operationVersion,
          payload,
          instance._solution.serviceSid,
          instance._solution.identity,
          instance._solution.challengeSid
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
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

interface NotificationPayload extends NotificationResource {}

interface NotificationResource {
  sid: string;
  account_sid: string;
  service_sid: string;
  entity_sid: string;
  identity: string;
  challenge_sid: string;
  priority: string;
  ttl: number;
  date_created: Date;
}

export class NotificationInstance {
  constructor(
    protected _version: V2,
    payload: NotificationResource,
    serviceSid: string,
    identity: string,
    challengeSid: string
  ) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.serviceSid = payload.service_sid;
    this.entitySid = payload.entity_sid;
    this.identity = payload.identity;
    this.challengeSid = payload.challenge_sid;
    this.priority = payload.priority;
    this.ttl = deserialize.integer(payload.ttl);
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
  }

  /**
   * A string that uniquely identifies this Notification.
   */
  sid: string;
  /**
   * Account Sid.
   */
  accountSid: string;
  /**
   * Service Sid.
   */
  serviceSid: string;
  /**
   * Entity Sid.
   */
  entitySid: string;
  /**
   * Unique external identifier of the Entity
   */
  identity: string;
  /**
   * Challenge Sid.
   */
  challengeSid: string;
  /**
   * The priority of the notification.
   */
  priority: string;
  /**
   * How long, in seconds, the notification is valid.
   */
  ttl: number;
  /**
   * The date this Notification was created
   */
  dateCreated: Date;

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      sid: this.sid,
      accountSid: this.accountSid,
      serviceSid: this.serviceSid,
      entitySid: this.entitySid,
      identity: this.identity,
      challengeSid: this.challengeSid,
      priority: this.priority,
      ttl: this.ttl,
      dateCreated: this.dateCreated,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

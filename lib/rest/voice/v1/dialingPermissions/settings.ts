/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Voice
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

/**
 * Options to pass to update a SettingsInstance
 */
export interface SettingsContextUpdateOptions {
  /** &#x60;true&#x60; for the sub-account to inherit voice dialing permissions from the Master Project; otherwise &#x60;false&#x60;. */
  dialingPermissionsInheritance?: boolean;
}

export interface SettingsContext {
  /**
   * Fetch a SettingsInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed SettingsInstance
   */
  fetch(
    callback?: (error: Error | null, item?: SettingsInstance) => any
  ): Promise<SettingsInstance>;

  /**
   * Update a SettingsInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed SettingsInstance
   */
  update(
    callback?: (error: Error | null, item?: SettingsInstance) => any
  ): Promise<SettingsInstance>;
  /**
   * Update a SettingsInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed SettingsInstance
   */
  update(
    params: SettingsContextUpdateOptions,
    callback?: (error: Error | null, item?: SettingsInstance) => any
  ): Promise<SettingsInstance>;
  update(params?: any, callback?: any): Promise<SettingsInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface SettingsContextSolution {}

export class SettingsContextImpl implements SettingsContext {
  protected _solution: SettingsContextSolution;
  protected _uri: string;

  constructor(protected _version: V1) {
    this._solution = {};
    this._uri = `/Settings`;
  }

  fetch(callback?: any): Promise<SettingsInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) => new SettingsInstance(operationVersion, payload)
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(params?: any, callback?: any): Promise<SettingsInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["dialingPermissionsInheritance"] !== undefined)
      data["DialingPermissionsInheritance"] = serialize.bool(
        params["dialingPermissionsInheritance"]
      );

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
      (payload) => new SettingsInstance(operationVersion, payload)
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

interface SettingsPayload extends SettingsResource {}

interface SettingsResource {
  dialing_permissions_inheritance?: boolean | null;
  url?: string | null;
}

export class SettingsInstance {
  protected _solution: SettingsContextSolution;
  protected _context?: SettingsContext;

  constructor(protected _version: V1, payload: SettingsResource) {
    this.dialingPermissionsInheritance =
      payload.dialing_permissions_inheritance;
    this.url = payload.url;

    this._solution = {};
  }

  /**
   * `true` if the sub-account will inherit voice dialing permissions from the Master Project; otherwise `false`
   */
  dialingPermissionsInheritance?: boolean | null;
  /**
   * The absolute URL of this resource
   */
  url?: string | null;

  private get _proxy(): SettingsContext {
    this._context = this._context || new SettingsContextImpl(this._version);
    return this._context;
  }

  /**
   * Fetch a SettingsInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed SettingsInstance
   */
  fetch(
    callback?: (error: Error | null, item?: SettingsInstance) => any
  ): Promise<SettingsInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a SettingsInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed SettingsInstance
   */
  update(
    callback?: (error: Error | null, item?: SettingsInstance) => any
  ): Promise<SettingsInstance>;
  /**
   * Update a SettingsInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed SettingsInstance
   */
  update(
    params: SettingsContextUpdateOptions,
    callback?: (error: Error | null, item?: SettingsInstance) => any
  ): Promise<SettingsInstance>;
  update(params?: any, callback?: any): Promise<SettingsInstance> {
    return this._proxy.update(params, callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      dialingPermissionsInheritance: this.dialingPermissionsInheritance,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface SettingsListInstance {
  (): SettingsContext;
  get(): SettingsContext;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface SettingsSolution {}

interface SettingsListInstanceImpl extends SettingsListInstance {}
class SettingsListInstanceImpl implements SettingsListInstance {
  _version?: V1;
  _solution?: SettingsSolution;
  _uri?: string;
}

export function SettingsListInstance(version: V1): SettingsListInstance {
  const instance = (() => instance.get()) as SettingsListInstanceImpl;

  instance.get = function get(): SettingsContext {
    return new SettingsContextImpl(version);
  };

  instance._version = version;
  instance._solution = {};
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

/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Lookups
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import V1 from "../V1";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");

/**
 * Options to pass to fetch a PhoneNumberInstance
 *
 * @property { string } [countryCode] The [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) of the phone number to fetch. This is used to specify the country when the phone number is provided in a national format.
 * @property { Array<string> } [type] The type of information to return. Can be: `carrier` or `caller-name`. The default is null.  Carrier information costs $0.005 per phone number looked up.  Caller Name information is currently available only in the US and costs $0.01 per phone number looked up.  To retrieve both types on information, specify this parameter twice; once with `carrier` and once with `caller-name` as the value.
 * @property { Array<string> } [addOns] The `unique_name` of an Add-on you would like to invoke. Can be the `unique_name` of an Add-on that is installed on your account. You can specify multiple instances of this parameter to invoke multiple Add-ons. For more information about  Add-ons, see the [Add-ons documentation](https://www.twilio.com/docs/add-ons).
 * @property { object } [addOnsData] Data specific to the add-on you would like to invoke. The content and format of this value depends on the add-on.
 */
export interface PhoneNumberContextFetchOptions {
  countryCode?: string;
  type?: Array<string>;
  addOns?: Array<string>;
  addOnsData?: object;
}

export interface PhoneNumberContext {
  /**
   * Fetch a PhoneNumberInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed PhoneNumberInstance
   */
  fetch(
    callback?: (error: Error | null, item?: PhoneNumberInstance) => any
  ): Promise<PhoneNumberInstance>;
  /**
   * Fetch a PhoneNumberInstance
   *
   * @param { PhoneNumberContextFetchOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed PhoneNumberInstance
   */
  fetch(
    params: PhoneNumberContextFetchOptions,
    callback?: (error: Error | null, item?: PhoneNumberInstance) => any
  ): Promise<PhoneNumberInstance>;
  fetch(params?: any, callback?: any): Promise<PhoneNumberInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface PhoneNumberContextSolution {
  phoneNumber?: string;
}

export class PhoneNumberContextImpl implements PhoneNumberContext {
  protected _solution: PhoneNumberContextSolution;
  protected _uri: string;

  constructor(protected _version: V1, phoneNumber: string) {
    this._solution = { phoneNumber };
    this._uri = `/PhoneNumbers/${phoneNumber}`;
  }

  fetch(params?: any, callback?: any): Promise<PhoneNumberInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["countryCode"] !== undefined)
      data["CountryCode"] = params["countryCode"];
    if (params["type"] !== undefined)
      data["Type"] = serialize.map(params["type"], (e) => e);
    if (params["addOns"] !== undefined)
      data["AddOns"] = serialize.map(params["addOns"], (e) => e);
    if (params["addOnsData"] !== undefined)
      data = {
        ...data,
        ...serialize.prefixedCollapsibleMap(params["addOnsData"], "AddOns"),
      };

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
        new PhoneNumberInstance(
          operationVersion,
          payload,
          this._solution.phoneNumber
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

interface PhoneNumberPayload extends PhoneNumberResource {}

interface PhoneNumberResource {
  caller_name?: any | null;
  country_code?: string | null;
  phone_number?: string | null;
  national_format?: string | null;
  carrier?: any | null;
  add_ons?: any | null;
  url?: string | null;
}

export class PhoneNumberInstance {
  protected _solution: PhoneNumberContextSolution;
  protected _context?: PhoneNumberContext;

  constructor(
    protected _version: V1,
    payload: PhoneNumberPayload,
    phoneNumber?: string
  ) {
    this.callerName = payload.caller_name;
    this.countryCode = payload.country_code;
    this.phoneNumber = payload.phone_number;
    this.nationalFormat = payload.national_format;
    this.carrier = payload.carrier;
    this.addOns = payload.add_ons;
    this.url = payload.url;

    this._solution = { phoneNumber: phoneNumber || this.phoneNumber };
  }

  /**
   * The name of the phone number\'s owner
   */
  callerName?: any | null;
  /**
   * The ISO country code for the phone number
   */
  countryCode?: string | null;
  /**
   * The phone number in E.164 format
   */
  phoneNumber?: string | null;
  /**
   * The phone number, in national format
   */
  nationalFormat?: string | null;
  /**
   * The telecom company that provides the phone number
   */
  carrier?: any | null;
  /**
   * A JSON string with the results of the Add-ons you specified
   */
  addOns?: any | null;
  /**
   * The absolute URL of the resource
   */
  url?: string | null;

  private get _proxy(): PhoneNumberContext {
    this._context =
      this._context ||
      new PhoneNumberContextImpl(this._version, this._solution.phoneNumber);
    return this._context;
  }

  /**
   * Fetch a PhoneNumberInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed PhoneNumberInstance
   */
  fetch(
    callback?: (error: Error | null, item?: PhoneNumberInstance) => any
  ): Promise<PhoneNumberInstance>;
  /**
   * Fetch a PhoneNumberInstance
   *
   * @param { PhoneNumberContextFetchOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed PhoneNumberInstance
   */
  fetch(
    params: PhoneNumberContextFetchOptions,
    callback?: (error: Error | null, item?: PhoneNumberInstance) => any
  ): Promise<PhoneNumberInstance>;
  fetch(params?: any, callback?: any): Promise<PhoneNumberInstance> {
    return this._proxy.fetch(params, callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      callerName: this.callerName,
      countryCode: this.countryCode,
      phoneNumber: this.phoneNumber,
      nationalFormat: this.nationalFormat,
      carrier: this.carrier,
      addOns: this.addOns,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface PhoneNumberListInstance {
  (phoneNumber: string): PhoneNumberContext;
  get(phoneNumber: string): PhoneNumberContext;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface PhoneNumberSolution {}

interface PhoneNumberListInstanceImpl extends PhoneNumberListInstance {}
class PhoneNumberListInstanceImpl implements PhoneNumberListInstance {
  _version?: V1;
  _solution?: PhoneNumberSolution;
  _uri?: string;
}

export function PhoneNumberListInstance(version: V1): PhoneNumberListInstance {
  const instance = ((phoneNumber) =>
    instance.get(phoneNumber)) as PhoneNumberListInstanceImpl;

  instance.get = function get(phoneNumber): PhoneNumberContext {
    return new PhoneNumberContextImpl(version, phoneNumber);
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

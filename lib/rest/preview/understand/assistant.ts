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
import Page from "../../../base/Page";
import Response from "../../../http/response";
import Understand from "../Understand";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
import { AssistantFallbackActionsListInstance } from "./assistant/assistantFallbackActions";
import { AssistantInitiationActionsListInstance } from "./assistant/assistantInitiationActions";
import { DialogueListInstance } from "./assistant/dialogue";
import { FieldTypeListInstance } from "./assistant/fieldType";
import { ModelBuildListInstance } from "./assistant/modelBuild";
import { QueryListInstance } from "./assistant/query";
import { StyleSheetListInstance } from "./assistant/styleSheet";
import { TaskListInstance } from "./assistant/task";




/**
 * Options to pass to update a AssistantInstance
 *
 * @property { string } [friendlyName] A text description for the Assistant. It is non-unique and can up to 255 characters long.
 * @property { boolean } [logQueries] A boolean that specifies whether queries should be logged for 30 days further training. If false, no queries will be stored, if true, queries will be stored for 30 days and deleted thereafter. Defaults to true if no value is provided.
 * @property { string } [uniqueName] A user-provided string that uniquely identifies this resource as an alternative to the sid. Unique up to 64 characters long.
 * @property { string } [callbackUrl] A user-provided URL to send event callbacks to.
 * @property { string } [callbackEvents] Space-separated list of callback events that will trigger callbacks.
 * @property { any } [fallbackActions] The JSON actions to be executed when the user\\\&#39;s input is not recognized as matching any Task.
 * @property { any } [initiationActions] The JSON actions to be executed on inbound phone calls when the Assistant has to say something first.
 * @property { any } [styleSheet] The JSON object that holds the style sheet for the assistant
 */
export interface AssistantContextUpdateOptions {
  "friendlyName"?: string;
  "logQueries"?: boolean;
  "uniqueName"?: string;
  "callbackUrl"?: string;
  "callbackEvents"?: string;
  "fallbackActions"?: any;
  "initiationActions"?: any;
  "styleSheet"?: any;
}

/**
 * Options to pass to create a AssistantInstance
 *
 * @property { string } [friendlyName] A text description for the Assistant. It is non-unique and can up to 255 characters long.
 * @property { boolean } [logQueries] A boolean that specifies whether queries should be logged for 30 days further training. If false, no queries will be stored, if true, queries will be stored for 30 days and deleted thereafter. Defaults to true if no value is provided.
 * @property { string } [uniqueName] A user-provided string that uniquely identifies this resource as an alternative to the sid. Unique up to 64 characters long.
 * @property { string } [callbackUrl] A user-provided URL to send event callbacks to.
 * @property { string } [callbackEvents] Space-separated list of callback events that will trigger callbacks.
 * @property { any } [fallbackActions] The JSON actions to be executed when the user\\\&#39;s input is not recognized as matching any Task.
 * @property { any } [initiationActions] The JSON actions to be executed on inbound phone calls when the Assistant has to say something first.
 * @property { any } [styleSheet] The JSON object that holds the style sheet for the assistant
 */
export interface AssistantListInstanceCreateOptions {
  "friendlyName"?: string;
  "logQueries"?: boolean;
  "uniqueName"?: string;
  "callbackUrl"?: string;
  "callbackEvents"?: string;
  "fallbackActions"?: any;
  "initiationActions"?: any;
  "styleSheet"?: any;
}
/**
 * Options to pass to each
 *
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
export interface AssistantListInstanceEachOptions {
  "pageSize"?: number;
  callback?: (item: AssistantInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
}

/**
 * Options to pass to list
 *
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface AssistantListInstanceOptions {
  "pageSize"?: number;
  limit?: number;
}

/**
 * Options to pass to page
 *
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface AssistantListInstancePageOptions {
  "pageSize"?: number;
  pageNumber?: number;
  pageToken?: string;
}



export interface AssistantContext {

  assistantFallbackActions: AssistantFallbackActionsListInstance;
  assistantInitiationActions: AssistantInitiationActionsListInstance;
  dialogues: DialogueListInstance;
  fieldTypes: FieldTypeListInstance;
  modelBuilds: ModelBuildListInstance;
  queries: QueryListInstance;
  styleSheet: StyleSheetListInstance;
  tasks: TaskListInstance;

  /**
   * Remove a AssistantInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>


  /**
   * Fetch a AssistantInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed AssistantInstance
   */
  fetch(callback?: (error: Error | null, item?: AssistantInstance) => any): Promise<AssistantInstance>


  /**
   * Update a AssistantInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed AssistantInstance
   */
  update(callback?: (error: Error | null, item?: AssistantInstance) => any): Promise<AssistantInstance>;
  /**
   * Update a AssistantInstance
   *
   * @param { AssistantContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed AssistantInstance
   */
  update(params: AssistantContextUpdateOptions, callback?: (error: Error | null, item?: AssistantInstance) => any): Promise<AssistantInstance>;
  update(params?: any, callback?: any): Promise<AssistantInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface AssistantContextSolution {
  "sid"?: string;
}

export class AssistantContextImpl implements AssistantContext {
  protected _solution: AssistantContextSolution;
  protected _uri: string;

  protected _assistantFallbackActions?: AssistantFallbackActionsListInstance;
  protected _assistantInitiationActions?: AssistantInitiationActionsListInstance;
  protected _dialogues?: DialogueListInstance;
  protected _fieldTypes?: FieldTypeListInstance;
  protected _modelBuilds?: ModelBuildListInstance;
  protected _queries?: QueryListInstance;
  protected _styleSheet?: StyleSheetListInstance;
  protected _tasks?: TaskListInstance;

  constructor(protected _version: Understand, sid: string) {
    this._solution = { sid };
    this._uri = `/Assistants/${sid}`;
  }

  get assistantFallbackActions(): AssistantFallbackActionsListInstance {
    this._assistantFallbackActions = this._assistantFallbackActions || AssistantFallbackActionsListInstance(this._version, this._solution.sid);
    return this._assistantFallbackActions;
  }

  get assistantInitiationActions(): AssistantInitiationActionsListInstance {
    this._assistantInitiationActions = this._assistantInitiationActions || AssistantInitiationActionsListInstance(this._version, this._solution.sid);
    return this._assistantInitiationActions;
  }

  get dialogues(): DialogueListInstance {
    this._dialogues = this._dialogues || DialogueListInstance(this._version, this._solution.sid);
    return this._dialogues;
  }

  get fieldTypes(): FieldTypeListInstance {
    this._fieldTypes = this._fieldTypes || FieldTypeListInstance(this._version, this._solution.sid);
    return this._fieldTypes;
  }

  get modelBuilds(): ModelBuildListInstance {
    this._modelBuilds = this._modelBuilds || ModelBuildListInstance(this._version, this._solution.sid);
    return this._modelBuilds;
  }

  get queries(): QueryListInstance {
    this._queries = this._queries || QueryListInstance(this._version, this._solution.sid);
    return this._queries;
  }

  get styleSheet(): StyleSheetListInstance {
    this._styleSheet = this._styleSheet || StyleSheetListInstance(this._version, this._solution.sid);
    return this._styleSheet;
  }

  get tasks(): TaskListInstance {
    this._tasks = this._tasks || TaskListInstance(this._version, this._solution.sid);
    return this._tasks;
  }

  remove(callback?: any): Promise<boolean> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.remove({ uri: this._uri, method: "delete" });
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


  }

  fetch(callback?: any): Promise<AssistantInstance> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.fetch({ uri: this._uri, method: "get" });
    
    operationPromise = operationPromise.then(payload => new AssistantInstance(operationVersion, payload, this._solution.sid));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


  }

  update(params?: any, callback?: any): Promise<AssistantInstance> {
      if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};

    if (params["friendlyName"] !== undefined) data["FriendlyName"] = params["friendlyName"];
    if (params["logQueries"] !== undefined) data["LogQueries"] = serialize.bool(params["logQueries"]);
    if (params["uniqueName"] !== undefined) data["UniqueName"] = params["uniqueName"];
    if (params["callbackUrl"] !== undefined) data["CallbackUrl"] = params["callbackUrl"];
    if (params["callbackEvents"] !== undefined) data["CallbackEvents"] = params["callbackEvents"];
    if (params["fallbackActions"] !== undefined) data["FallbackActions"] = serialize.object(params["fallbackActions"]);
    if (params["initiationActions"] !== undefined) data["InitiationActions"] = serialize.object(params["initiationActions"]);
    if (params["styleSheet"] !== undefined) data["StyleSheet"] = serialize.object(params["styleSheet"]);

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded"

    let operationVersion = this._version,
        operationPromise = operationVersion.update({ uri: this._uri, method: "post", data, headers });
    
    operationPromise = operationPromise.then(payload => new AssistantInstance(operationVersion, payload, this._solution.sid));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
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

interface AssistantPayload extends AssistantResource, Page.TwilioResponsePayload {
}

interface AssistantResource {
  account_sid?: string | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  friendly_name?: string | null;
  latest_model_build_sid?: string | null;
  links?: object | null;
  log_queries?: boolean | null;
  sid?: string | null;
  unique_name?: string | null;
  url?: string | null;
  callback_url?: string | null;
  callback_events?: string | null;
}

export class AssistantInstance {
  protected _solution: AssistantContextSolution;
  protected _context?: AssistantContext;

  constructor(protected _version: Understand, payload: AssistantPayload, sid?: string) {
    this.accountSid = payload.account_sid;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.friendlyName = payload.friendly_name;
    this.latestModelBuildSid = payload.latest_model_build_sid;
    this.links = payload.links;
    this.logQueries = payload.log_queries;
    this.sid = payload.sid;
    this.uniqueName = payload.unique_name;
    this.url = payload.url;
    this.callbackUrl = payload.callback_url;
    this.callbackEvents = payload.callback_events;

    this._solution = { sid: sid || this.sid };
  }

  /**
   * The unique ID of the Account that created this Assistant.
   */
  accountSid?: string | null;
  /**
   * The date that this resource was created
   */
  dateCreated?: Date | null;
  /**
   * The date that this resource was last updated
   */
  dateUpdated?: Date | null;
  /**
   * A text description for the Assistant. It is non-unique and can up to 255 characters long.
   */
  friendlyName?: string | null;
  /**
   * The unique ID (Sid) of the latest model build. Null if no model has been built.
   */
  latestModelBuildSid?: string | null;
  links?: object | null;
  /**
   * A boolean that specifies whether queries should be logged for 30 days further training. If false, no queries will be stored, if true, queries will be stored for 30 days and deleted thereafter.
   */
  logQueries?: boolean | null;
  /**
   * A 34 character string that uniquely identifies this resource.
   */
  sid?: string | null;
  /**
   * A user-provided string that uniquely identifies this resource as an alternative to the sid. You can use the unique name in the URL path. Unique up to 64 characters long.
   */
  uniqueName?: string | null;
  url?: string | null;
  /**
   * A user-provided URL to send event callbacks to.
   */
  callbackUrl?: string | null;
  /**
   * Space-separated list of callback events that will trigger callbacks.
   */
  callbackEvents?: string | null;

  private get _proxy(): AssistantContext {
    this._context = this._context || new AssistantContextImpl(this._version, this._solution.sid);
    return this._context;
  }

  /**
   * Remove a AssistantInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>
     {
    return this._proxy.remove(callback);
  }

  /**
   * Fetch a AssistantInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed AssistantInstance
   */
  fetch(callback?: (error: Error | null, item?: AssistantInstance) => any): Promise<AssistantInstance>
     {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a AssistantInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed AssistantInstance
   */
  update(callback?: (error: Error | null, item?: AssistantInstance) => any): Promise<AssistantInstance>;
  /**
   * Update a AssistantInstance
   *
   * @param { AssistantContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed AssistantInstance
   */
  update(params: AssistantContextUpdateOptions, callback?: (error: Error | null, item?: AssistantInstance) => any): Promise<AssistantInstance>;
  update(params?: any, callback?: any): Promise<AssistantInstance>
     {
    return this._proxy.update(params, callback);
  }

  /**
   * Access the assistantFallbackActions.
   */
  assistantFallbackActions(): AssistantFallbackActionsListInstance {
    return this._proxy.assistantFallbackActions;
  }

  /**
   * Access the assistantInitiationActions.
   */
  assistantInitiationActions(): AssistantInitiationActionsListInstance {
    return this._proxy.assistantInitiationActions;
  }

  /**
   * Access the dialogues.
   */
  dialogues(): DialogueListInstance {
    return this._proxy.dialogues;
  }

  /**
   * Access the fieldTypes.
   */
  fieldTypes(): FieldTypeListInstance {
    return this._proxy.fieldTypes;
  }

  /**
   * Access the modelBuilds.
   */
  modelBuilds(): ModelBuildListInstance {
    return this._proxy.modelBuilds;
  }

  /**
   * Access the queries.
   */
  queries(): QueryListInstance {
    return this._proxy.queries;
  }

  /**
   * Access the styleSheet.
   */
  styleSheet(): StyleSheetListInstance {
    return this._proxy.styleSheet;
  }

  /**
   * Access the tasks.
   */
  tasks(): TaskListInstance {
    return this._proxy.tasks;
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
      friendlyName: this.friendlyName, 
      latestModelBuildSid: this.latestModelBuildSid, 
      links: this.links, 
      logQueries: this.logQueries, 
      sid: this.sid, 
      uniqueName: this.uniqueName, 
      url: this.url, 
      callbackUrl: this.callbackUrl, 
      callbackEvents: this.callbackEvents
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}


export interface AssistantListInstance {
  (sid: string): AssistantContext;
  get(sid: string): AssistantContext;


  /**
   * Create a AssistantInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed AssistantInstance
   */
  create(callback?: (error: Error | null, item?: AssistantInstance) => any): Promise<AssistantInstance>;
  /**
   * Create a AssistantInstance
   *
   * @param { AssistantListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed AssistantInstance
   */
  create(params: AssistantListInstanceCreateOptions, callback?: (error: Error | null, item?: AssistantInstance) => any): Promise<AssistantInstance>;
  create(params?: any, callback?: any): Promise<AssistantInstance>



  /**
   * Streams AssistantInstance records from the API.
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
  each(callback?: (item: AssistantInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams AssistantInstance records from the API.
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
   * @param { AssistantListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(params?: AssistantListInstanceEachOptions, callback?: (item: AssistantInstance, done: (err?: Error) => void) => void): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of AssistantInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: AssistantPage) => any): Promise<AssistantPage>;
  /**
   * Retrieve a single target page of AssistantInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: AssistantPage) => any): Promise<AssistantPage>;
  getPage(params?: any, callback?: any): Promise<AssistantPage>;
  /**
   * Lists AssistantInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: AssistantInstance[]) => any): Promise<AssistantInstance[]>;
  /**
   * Lists AssistantInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { AssistantListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(params?: AssistantListInstanceOptions, callback?: (error: Error | null, items: AssistantInstance[]) => any): Promise<AssistantInstance[]>;
  list(params?: any, callback?: any): Promise<AssistantInstance[]>;
  /**
   * Retrieve a single page of AssistantInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: AssistantPage) => any): Promise<AssistantPage>;
  /**
   * Retrieve a single page of AssistantInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { AssistantListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(params: AssistantListInstancePageOptions, callback?: (error: Error | null, items: AssistantPage) => any): Promise<AssistantPage>;
  page(params?: any, callback?: any): Promise<AssistantPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface AssistantSolution {
}

interface AssistantListInstanceImpl extends AssistantListInstance {}
class AssistantListInstanceImpl implements AssistantListInstance {
  _version?: Understand;
  _solution?: AssistantSolution;
  _uri?: string;

}

export function AssistantListInstance(version: Understand): AssistantListInstance {
  const instance = ((sid) => instance.get(sid)) as AssistantListInstanceImpl;

  instance.get = function get(sid): AssistantContext {
    return new AssistantContextImpl(version, sid);
  }

  instance._version = version;
  instance._solution = {  };
  instance._uri = `/Assistants`;

  instance.create = function create(params?: any, callback?: any): Promise<AssistantInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};

    if (params["friendlyName"] !== undefined) data["FriendlyName"] = params["friendlyName"];
    if (params["logQueries"] !== undefined) data["LogQueries"] = serialize.bool(params["logQueries"]);
    if (params["uniqueName"] !== undefined) data["UniqueName"] = params["uniqueName"];
    if (params["callbackUrl"] !== undefined) data["CallbackUrl"] = params["callbackUrl"];
    if (params["callbackEvents"] !== undefined) data["CallbackEvents"] = params["callbackEvents"];
    if (params["fallbackActions"] !== undefined) data["FallbackActions"] = serialize.object(params["fallbackActions"]);
    if (params["initiationActions"] !== undefined) data["InitiationActions"] = serialize.object(params["initiationActions"]);
    if (params["styleSheet"] !== undefined) data["StyleSheet"] = serialize.object(params["styleSheet"]);

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded"

    let operationVersion = version,
        operationPromise = operationVersion.create({ uri: this._uri, method: "post", data, headers });
    
    operationPromise = operationPromise.then(payload => new AssistantInstance(operationVersion, payload));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


    }

  instance.page = function page(params?: any, callback?: any): Promise<AssistantPage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};

    if (params["pageSize"] !== undefined) data["PageSize"] = params["pageSize"];
    if (params.page !== undefined) data["Page"] = params.pageNumber;
    if (params.pageToken !== undefined) data["PageToken"] = params.pageToken;

    const headers: any = {};

    let operationVersion = version,
        operationPromise = operationVersion.page({ uri: this._uri, method: "get", params: data, headers });
    
    operationPromise = operationPromise.then(payload => new AssistantPage(operationVersion, payload, this._solution));

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl?: any, callback?: any): Promise<AssistantPage> {
    let operationPromise = this._version._domain.twilio.request({method: "get", uri: targetUrl});

    operationPromise = operationPromise.then(payload => new AssistantPage(this._version, payload, this._solution));
    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;
  }


  instance.toJSON = function toJSON() {
    return this._solution;
  }

  instance[inspect.custom] = function inspectImpl(_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }

  return instance;
}


export class AssistantPage extends Page<Understand, AssistantPayload, AssistantResource, AssistantInstance> {
/**
* Initialize the AssistantPage
*
* @param version - Version of the resource
* @param response - Response from the API
* @param solution - Path solution
*/
constructor(version: Understand, response: Response<string>, solution: AssistantSolution) {
    super(version, response, solution);
    }

    /**
    * Build an instance of AssistantInstance
    *
    * @param payload - Payload response from the API
    */
    getInstance(payload: AssistantPayload): AssistantInstance {
    return new AssistantInstance(
    this._version,
    payload,
    );
    }

    [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
    }
    }


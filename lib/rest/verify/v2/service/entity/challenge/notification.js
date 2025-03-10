'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Q = require('q');  /* jshint ignore:line */
var _ = require('lodash');  /* jshint ignore:line */
var util = require('util');  /* jshint ignore:line */
var Page = require('../../../../../../base/Page');  /* jshint ignore:line */
var deserialize = require(
    '../../../../../../base/deserialize');  /* jshint ignore:line */
var values = require('../../../../../../base/values');  /* jshint ignore:line */

var NotificationList;
var NotificationPage;
var NotificationInstance;

/* jshint ignore:start */
/**
 * Initialize the NotificationList
 *
 * @constructor Twilio.Verify.V2.ServiceContext.EntityContext.ChallengeContext.NotificationList
 *
 * @param {Twilio.Verify.V2} version - Version of the resource
 * @param {string} serviceSid - Service Sid.
 * @param {string} identity - Unique external identifier of the Entity
 * @param {string} challengeSid - Challenge Sid.
 */
/* jshint ignore:end */
NotificationList = function NotificationList(version, serviceSid, identity,
                                              challengeSid) {
  /* jshint ignore:start */
  /**
   * @function notifications
   * @memberof Twilio.Verify.V2.ServiceContext.EntityContext.ChallengeContext#
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Verify.V2.ServiceContext.EntityContext.ChallengeContext.NotificationContext}
   */
  /* jshint ignore:end */
  function NotificationListInstance(sid) {
    return NotificationListInstance.get(sid);
  }

  NotificationListInstance._version = version;
  // Path Solution
  NotificationListInstance._solution = {
    serviceSid: serviceSid,
    identity: identity,
    challengeSid: challengeSid
  };
  NotificationListInstance._uri = `/Services/${serviceSid}/Entities/${identity}/Challenges/${challengeSid}/Notifications`;
  /* jshint ignore:start */
  /**
   * create a NotificationInstance
   *
   * @function create
   * @memberof Twilio.Verify.V2.ServiceContext.EntityContext.ChallengeContext.NotificationList#
   *
   * @param {object} [opts] - Options for request
   * @param {number} [opts.ttl] - How long, in seconds, the notification is valid.
   * @param {function} [callback] - Callback to handle processed record
   *
   * @returns {Promise} Resolves to processed NotificationInstance
   */
  /* jshint ignore:end */
  NotificationListInstance.create = function create(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({'Ttl': _.get(opts, 'ttl')});

    var promise = this._version.create({uri: this._uri, method: 'POST', data: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new NotificationInstance(this._version, payload));
    }.bind(this));

    promise.catch(function(error) {
      deferred.reject(error);
    });

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    return deferred.promise;
  };

  /* jshint ignore:start */
  /**
   * Provide a user-friendly representation
   *
   * @function toJSON
   * @memberof Twilio.Verify.V2.ServiceContext.EntityContext.ChallengeContext.NotificationList#
   *
   * @returns Object
   */
  /* jshint ignore:end */
  NotificationListInstance.toJSON = function toJSON() {
    return this._solution;
  };

  NotificationListInstance[util.inspect.custom] = function inspect(depth, options)
      {
    return util.inspect(this.toJSON(), options);
  };

  return NotificationListInstance;
};


/* jshint ignore:start */
/**
 * Initialize the NotificationPage
 *
 * @constructor Twilio.Verify.V2.ServiceContext.EntityContext.ChallengeContext.NotificationPage
 *
 * @param {V2} version - Version of the resource
 * @param {Response<string>} response - Response from the API
 * @param {NotificationSolution} solution - Path solution
 *
 * @returns NotificationPage
 */
/* jshint ignore:end */
NotificationPage = function NotificationPage(version, response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

_.extend(NotificationPage.prototype, Page.prototype);
NotificationPage.prototype.constructor = NotificationPage;

/* jshint ignore:start */
/**
 * Build an instance of NotificationInstance
 *
 * @function getInstance
 * @memberof Twilio.Verify.V2.ServiceContext.EntityContext.ChallengeContext.NotificationPage#
 *
 * @param {NotificationPayload} payload - Payload response from the API
 *
 * @returns NotificationInstance
 */
/* jshint ignore:end */
NotificationPage.prototype.getInstance = function getInstance(payload) {
  return new NotificationInstance(
    this._version,
    payload,
    this._solution.serviceSid,
    this._solution.identity,
    this._solution.challengeSid
  );
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Verify.V2.ServiceContext.EntityContext.ChallengeContext.NotificationPage#
 *
 * @returns Object
 */
/* jshint ignore:end */
NotificationPage.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

NotificationPage.prototype[util.inspect.custom] = function inspect(depth,
    options) {
  return util.inspect(this.toJSON(), options);
};


/* jshint ignore:start */
/**
 * Initialize the NotificationContext
 *
 * @constructor Twilio.Verify.V2.ServiceContext.EntityContext.ChallengeContext.NotificationInstance
 *
 * @property {string} sid - A string that uniquely identifies this Notification.
 * @property {string} accountSid - Account Sid.
 * @property {string} serviceSid - Service Sid.
 * @property {string} entitySid - Entity Sid.
 * @property {string} identity - Unique external identifier of the Entity
 * @property {string} challengeSid - Challenge Sid.
 * @property {string} priority - The priority of the notification.
 * @property {number} ttl - How long, in seconds, the notification is valid.
 * @property {Date} dateCreated - The date this Notification was created
 *
 * @param {V2} version - Version of the resource
 * @param {NotificationPayload} payload - The instance payload
 * @param {sid} serviceSid - Service Sid.
 * @param {string} identity - Unique external identifier of the Entity
 * @param {sid} challengeSid - Challenge Sid.
 */
/* jshint ignore:end */
NotificationInstance = function NotificationInstance(version, payload,
                                                      serviceSid, identity,
                                                      challengeSid) {
  this._version = version;

  // Marshaled Properties
  this.sid = payload.sid; // jshint ignore:line
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.serviceSid = payload.service_sid; // jshint ignore:line
  this.entitySid = payload.entity_sid; // jshint ignore:line
  this.identity = payload.identity; // jshint ignore:line
  this.challengeSid = payload.challenge_sid; // jshint ignore:line
  this.priority = payload.priority; // jshint ignore:line
  this.ttl = deserialize.integer(payload.ttl); // jshint ignore:line
  this.dateCreated = deserialize.iso8601DateTime(payload.date_created); // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {serviceSid: serviceSid, identity: identity, challengeSid: challengeSid, };
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Verify.V2.ServiceContext.EntityContext.ChallengeContext.NotificationInstance#
 *
 * @returns Object
 */
/* jshint ignore:end */
NotificationInstance.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

NotificationInstance.prototype[util.inspect.custom] = function inspect(depth,
    options) {
  return util.inspect(this.toJSON(), options);
};

module.exports = {
  NotificationList: NotificationList,
  NotificationPage: NotificationPage,
  NotificationInstance: NotificationInstance
};

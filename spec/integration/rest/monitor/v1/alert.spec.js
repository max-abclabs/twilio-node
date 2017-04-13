'use strict';

var _ = require('lodash');  /* jshint ignore:line */
var Holodeck = require('../../../holodeck');  /* jshint ignore:line */
var Request = require(
    '../../../../../lib/http/request');  /* jshint ignore:line */
var Response = require(
    '../../../../../lib/http/response');  /* jshint ignore:line */
var RestException = require(
    '../../../../../lib/base/RestException');  /* jshint ignore:line */
var Twilio = require('../../../../../lib');  /* jshint ignore:line */


var client;
var holodeck;

describe('Alert', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid fetch request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.monitor.v1.alerts('NOaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').fetch();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {
        sid: 'NOaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://monitor.twilio.com/v1/Alerts/<%= sid %>')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function() {
      var body = JSON.stringify({
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'alert_text': 'alert_text',
          'api_version': '2010-04-01',
          'date_created': '2015-07-30T20:00:00Z',
          'date_generated': '2015-07-30T20:00:00Z',
          'date_updated': '2015-07-30T20:00:00Z',
          'error_code': 'error_code',
          'log_level': 'log_level',
          'more_info': 'more_info',
          'request_method': 'GET',
          'request_url': 'http://www.example.com',
          'request_variables': 'request_variables',
          'resource_sid': 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'response_body': 'response_body',
          'response_headers': 'response_headers',
          'sid': 'NOaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'url': 'http://www.example.com'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.monitor.v1.alerts('NOaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').fetch();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid remove request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.monitor.v1.alerts('NOaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').remove();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {
        sid: 'NOaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://monitor.twilio.com/v1/Alerts/<%= sid %>')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'DELETE',
        url: url
      }));
    }
  );
  it('should generate valid delete response',
    function() {
      var body = JSON.stringify(null);

      holodeck.mock(new Response(204, body));

      var promise = client.monitor.v1.alerts('NOaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').remove();
      promise = promise.then(function(response) {
        expect(response).toBe(true);
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid list request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.monitor.v1.alerts.list();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var url = 'https://monitor.twilio.com/v1/Alerts';

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_empty response',
    function() {
      var body = JSON.stringify({
          'alerts': [],
          'meta': {
              'first_page_url': 'https://monitor.twilio.com/v1/Alerts?Page=0&PageSize=50',
              'key': 'alerts',
              'next_page_url': null,
              'page': 0,
              'page_size': 0,
              'previous_page_url': null,
              'url': 'https://monitor.twilio.com/v1/Alerts'
          }
      });

      holodeck.mock(new Response(200, body));

      var promise = client.monitor.v1.alerts.list();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid read_full response',
    function() {
      var body = JSON.stringify({
          'alerts': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'alert_text': 'alert_text',
                  'api_version': '2010-04-01',
                  'date_created': '2015-07-30T20:00:00Z',
                  'date_generated': '2015-07-30T20:00:00Z',
                  'date_updated': '2015-07-30T20:00:00Z',
                  'error_code': 'error_code',
                  'log_level': 'log_level',
                  'more_info': 'more_info',
                  'request_method': 'GET',
                  'request_url': 'http://www.example.com',
                  'resource_sid': 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'sid': 'NOaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'url': 'http://www.example.com'
              }
          ],
          'meta': {
              'first_page_url': 'https://monitor.twilio.com/v1/Alerts?Page=0&PageSize=50',
              'key': 'alerts',
              'next_page_url': null,
              'page': 0,
              'page_size': 1,
              'previous_page_url': null,
              'url': 'https://monitor.twilio.com/v1/Alerts'
          }
      });

      holodeck.mock(new Response(200, body));

      var promise = client.monitor.v1.alerts.list();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
});


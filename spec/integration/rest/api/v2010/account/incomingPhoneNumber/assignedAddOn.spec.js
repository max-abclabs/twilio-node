'use strict';

var _ = require('lodash');  /* jshint ignore:line */
var Holodeck = require('../../../../../holodeck');  /* jshint ignore:line */
var Request = require(
    '../../../../../../../lib/http/request');  /* jshint ignore:line */
var Response = require(
    '../../../../../../../lib/http/response');  /* jshint ignore:line */
var RestException = require(
    '../../../../../../../lib/base/RestException');  /* jshint ignore:line */
var Twilio = require('../../../../../../../lib');  /* jshint ignore:line */


var client;
var holodeck;

describe('AssignedAddOn', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid fetch request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.api.v2010.accounts('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                    .incomingPhoneNumbers('PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                    .assignedAddOns('XEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').fetch();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {
        accountSid: 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        resourceSid: 'PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        sid: 'XEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://api.twilio.com/2010-04-01/Accounts/<%= accountSid %>/IncomingPhoneNumbers/<%= resourceSid %>/AssignedAddOns/<%= sid %>.json')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function() {
      var body = JSON.stringify({
          'sid': 'XEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'resource_sid': 'PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'friendly_name': 'VoiceBase High Accuracy Transcription',
          'description': 'Automatic Transcription and Keyword Extract...',
          'configuration': {
              'bad_words': true
          },
          'unique_name': 'voicebase_high_accuracy_transcription',
          'date_created': 'Thu, 07 Apr 2016 23:52:28 +0000',
          'date_updated': 'Thu, 07 Apr 2016 23:52:28 +0000',
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IncomingPhoneNumbers/PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/AssignedAddOns/XEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.json',
          'subresource_uris': {
              'extensions': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IncomingPhoneNumbers/PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/AssignedAddOns/XEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Extensions.json'
          }
      });

      holodeck.mock(new Response(200, body));

      var promise = client.api.v2010.accounts('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                    .incomingPhoneNumbers('PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                    .assignedAddOns('XEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').fetch();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid list request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.api.v2010.accounts('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                    .incomingPhoneNumbers('PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                    .assignedAddOns.list();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {
        accountSid: 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        resourceSid: 'PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://api.twilio.com/2010-04-01/Accounts/<%= accountSid %>/IncomingPhoneNumbers/<%= resourceSid %>/AssignedAddOns.json')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_full response',
    function() {
      var body = JSON.stringify({
          'end': 0,
          'first_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IncomingPhoneNumbers/PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/AssignedAddOns.json?PageSize=50&Page=0',
          'next_page_uri': null,
          'page': 0,
          'page_size': 50,
          'previous_page_uri': null,
          'assigned_add_ons': [
              {
                  'sid': 'XEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'resource_sid': 'PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'friendly_name': 'VoiceBase High Accuracy Transcription',
                  'description': 'Automatic Transcription and Keyword Extract...',
                  'configuration': {
                      'bad_words': true
                  },
                  'unique_name': 'voicebase_high_accuracy_transcription',
                  'date_created': 'Thu, 07 Apr 2016 23:52:28 +0000',
                  'date_updated': 'Thu, 07 Apr 2016 23:52:28 +0000',
                  'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IncomingPhoneNumbers/PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/AssignedAddOns/XEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.json',
                  'subresource_uris': {
                      'extensions': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IncomingPhoneNumbers/PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/AssignedAddOns/XEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Extensions.json'
                  }
              }
          ],
          'start': 0,
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IncomingPhoneNumbers/PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/AssignedAddOns.json?PageSize=50&Page=0'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.api.v2010.accounts('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                    .incomingPhoneNumbers('PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                    .assignedAddOns.list();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid read_empty response',
    function() {
      var body = JSON.stringify({
          'end': 0,
          'first_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IncomingPhoneNumbers/PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/AssignedAddOns.json?PageSize=50&Page=0',
          'next_page_uri': null,
          'page': 0,
          'page_size': 50,
          'previous_page_uri': null,
          'assigned_add_ons': [],
          'start': 0,
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IncomingPhoneNumbers/PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/AssignedAddOns.json?PageSize=50&Page=0'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.api.v2010.accounts('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                    .incomingPhoneNumbers('PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                    .assignedAddOns.list();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid create request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var opts = {
        installedAddOnSid: 'XEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var promise = client.api.v2010.accounts('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                    .incomingPhoneNumbers('PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                    .assignedAddOns.create(opts);
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {
        accountSid: 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        resourceSid: 'PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://api.twilio.com/2010-04-01/Accounts/<%= accountSid %>/IncomingPhoneNumbers/<%= resourceSid %>/AssignedAddOns.json')(solution);

      var values = {
        InstalledAddOnSid: 'XEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      };
      holodeck.assertHasRequest(new Request({
          method: 'POST',
          url: url,
          data: values
      }));
    }
  );
  it('should generate valid create response',
    function() {
      var body = JSON.stringify({
          'sid': 'XEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'resource_sid': 'PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'friendly_name': 'VoiceBase High Accuracy Transcription',
          'description': 'Automatic Transcription and Keyword Extract...',
          'configuration': {
              'bad_words': true
          },
          'unique_name': 'voicebase_high_accuracy_transcription',
          'date_created': 'Thu, 07 Apr 2016 23:52:28 +0000',
          'date_updated': 'Thu, 07 Apr 2016 23:52:28 +0000',
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IncomingPhoneNumbers/PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/AssignedAddOns/XEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.json',
          'subresource_uris': {
              'extensions': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IncomingPhoneNumbers/PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/AssignedAddOns/XEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Extensions.json'
          }
      });

      holodeck.mock(new Response(201, body));

      var opts = {
        installedAddOnSid: 'XEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var promise = client.api.v2010.accounts('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                    .incomingPhoneNumbers('PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                    .assignedAddOns.create(opts);
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

      var promise = client.api.v2010.accounts('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                    .incomingPhoneNumbers('PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                    .assignedAddOns('XEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').remove();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {
        accountSid: 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        resourceSid: 'PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        sid: 'XEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://api.twilio.com/2010-04-01/Accounts/<%= accountSid %>/IncomingPhoneNumbers/<%= resourceSid %>/AssignedAddOns/<%= sid %>.json')(solution);

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

      var promise = client.api.v2010.accounts('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                    .incomingPhoneNumbers('PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                    .assignedAddOns('XEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').remove();
      promise = promise.then(function(response) {
        expect(response).toBe(true);
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
});


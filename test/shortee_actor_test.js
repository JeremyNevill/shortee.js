'use strict';

var shortee = require('../lib/shortee.js');

exports['parse'] = {
    setUp: function (done) {
        // setup here
        done();
    },
    'parses lowercase actor': function (test) {
        test.expect(1);
        // tests here
        test.equal(shortee.parser.parse('@freddie ate 1cheese 01/jan/2013').actor, 'freddie', 'should parse lowercase actor');
        test.done();
    },
    'parses uppercase actor': function (test) {
        test.expect(1);
        // tests here
        test.equal(shortee.parser.parse('@JANE ate 1cheese 01/jan/2013').actor, 'JANE', 'should parse uppercase actor');
        test.done();
    },
    'parses mixed case actor': function (test) {
        test.expect(1);
        // tests here
        test.equal(shortee.parser.parse('@Rod ate 1cheese 01/jan/2013').actor, 'Rod', 'should parse mixed case actor');
        test.done();
    }
};

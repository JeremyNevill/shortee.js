'use strict';

var shortee = require('../lib/shortee.js');

/*
 ======== A Handy Little Nodeunit Reference ========
 https://github.com/caolan/nodeunit

 Test methods:
 test.expect(numAssertions)
 test.done()
 Test assertions:
 test.ok(value, [message])
 test.equal(actual, expected, [message])
 test.notEqual(actual, expected, [message])
 test.deepEqual(actual, expected, [message])
 test.notDeepEqual(actual, expected, [message])
 test.strictEqual(actual, expected, [message])
 test.notStrictEqual(actual, expected, [message])
 test.throws(block, [error], [message])
 test.doesNotThrow(block, [error], [message])
 test.ifError(value)
 */

exports['parse'] = {
    setUp: function (done) {
        // setup here
        done();
    },
    'parses actor': function (test) {
        test.expect(1);
        test.equal(shortee.parser.parse('@fred ate 1cheese 01/jan/2013').actor, 'fred', 'should parse actor');
        test.done();
    },
    'parses action': function (test) {
        test.expect(1);
        test.equal(shortee.parser.parse('@fred ate 1cheese 01/jan/2013').action, 'ate', 'should parse action');
        test.done();
    },
    'parses amount': function (test) {
        test.expect(1);
        test.equal(shortee.parser.parse('@fred ate 1cheese 01/jan/2013').amount, '1', 'should parse amount');
        test.done();
    },
    'parses units': function (test) {
        test.expect(1);
        test.equal(shortee.parser.parse('@fred ate 1cheese 01/jan/2013').units, 'cheese', 'should parse units');
        test.done();
    },
    'parses date': function (test) {
        test.expect(1);
        test.equal(shortee.parser.parse('@fred ate 1cheese 01/jan/2013').date, '1/jan/2013', 'should parse date');
        test.done();
    },
};

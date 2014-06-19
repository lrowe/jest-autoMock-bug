/** @jsx React.DOM */
'use strict';

jest.autoMockOff();
jest.mock('lodash.isstring');
jest.dontMock('lodash.isnull');

describe('Tests pass when both jest.mock and jest.dontMock called', function() {
    it('may error when importing react', function() {
        require('react');
    });

    it('may be that keyMirror mocked', function() {
        var keyMirror = require('react/lib/keyMirror');
        // Fails when keymirrorkeyMirror has been mocked
        // console.log(keyMirror.toString());
        var x = keyMirror({x:null});
        expect(x).toBeDefined();
    });
});

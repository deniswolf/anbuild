/*jshint browser:true */
'use strict';

// load Angular
require( './vendor' )();

var appModule = require( '../index' );
// replaces ng-app="appName"
angular.element( document ).ready( function () {
  angular.bootstrap( document, [ appModule.name ], {
    //strictDi: true
  } );
} );
var myModule = angular.module( 'Angello', [] );

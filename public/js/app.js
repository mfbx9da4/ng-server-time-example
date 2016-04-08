'use strict';


// Declare app level module which depends on filters, and services
var app = angular.module('myApp', ['ng-server-time']);
app.factory('socket', function() {
   var socket = io.connect();
   return socket;
});
app.controller('AppCtrl', function($scope, ServerTime) {
	window.st = ServerTime;
	function updateTime() {
		$scope.server = moment(ServerTime.now()).format('H:m:SSSS');
		$scope.browser = moment(Date.now()).format('H:m:SSSS');

		// Date.now() on the server
		$scope.now = ServerTime.now();

		// new Date() on the server
		$scope.new = ServerTime.new();

		// get offset in milliseconds between current browser
		// time and server time
		$scope.getOffset = ServerTime.getOffset();
		setTimeout(updateTime, 100);
	}
	updateTime();
})

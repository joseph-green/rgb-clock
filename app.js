var RGBclock = angular.module('RGBclock', []);


RGBclock.filter('hex' , function () {
	return function (input) {
		var i = input.toString(16);
		if (i.length < 2) {
			return '0' + i.toUpperCase();
		}
		else {
			return i.toUpperCase();
		}

	};

});

RGBclock.controller('clockcontroller', function ($scope, $timeout, $interval, hexFilter) {
	//clock
	$scope.bruh = "loading...";
	$scope.r = '00';
	$scope.g = '00';
	$scope.b = '00';
	$scope.hexval = 'loading...';
	$scope.update = function () {
		$scope.bruh = Date.now();
		var date = new Date;
        $scope.r = hexFilter(date.getHours());
		$scope.g = hexFilter(date.getMinutes());
		$scope.b = hexFilter(date.getSeconds());
		$scope.rgb = $scope.r + $scope.g + $scope.b;
		$scope.hexval = "#" + $scope.rgb;
		$('html').css('background-color', $scope.hexval);

		$timeout($scope.update, 1000);

	};
	$timeout($scope.update, 1000);
	$interval(function () { $scope.update();}, 1000);

	






});

var main = function () {
	$('#hex').click(function(){
		$("#hexcode").css('display', 'inline');
		$("#timecode").css('display', 'none');


	});
	$('#time').click(function(){
		$("#timecode").css('display', 'inline');
		$("#hexcode").css('display', 'none');


	});

};
$(document).ready(main);

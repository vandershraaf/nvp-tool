var app = angular.module('websiterank-web',[]);


app.controller("mainController", function($scope, $http){
	var rootService = "http://websiterank.herokuapp.com/services";
	$scope.result = {};
	$scope.allDate = [];
	$scope.dateSelected = null;
	$scope.websiteSelected = null;
	// Initialize visit table 
    $scope.init = function() {
    	// TODO: Initialize value of filter form as well
    	var visitService  = rootService + "/visits/";
        getResult(visitService);
        
        var dateService = rootService + "/dateVisited/";
        $http.get(dateService).success(function(data) {
            console.log(data);
            $scope.allDate = data;
        }).error(function(error) {
 
        });
    };
    $scope.showByWebsite = function(){
    	var visitService  = rootService + "/visits/website/" + $scope.websiteSelected;
        getResult(visitService);
    };
    $scope.showByDate = function(){
    	var visitService  = rootService + "/visits/date/" + $scope.dateSelected;
        getResult(visitService);
    };
    $scope.showAll = function(){
    	var visitService  = rootService + "/visits/";
        getResult(visitService);
    }
    
    function getResult(url){
        $http.get(url).success(function(data) {
            console.log(data);
            $scope.result = data;
        }).error(function(error) {
 
        });
    }
 
});
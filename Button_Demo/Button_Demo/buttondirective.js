
var myModule = angular.module('myModule', []);

myModule.controller('Ctrl', ['$scope', function ($scope) {

    
        $scope.abc = "aaaaaaa";
   
}]);

//Directive Here

myModule.directive('onoff', function () {
    return {
        restrict: 'A',
        template: '<input value="" class="btn btn-success btn-lg">',
        link: function (scope, elem, attrs) {
            elem.bind("click", function () {
                console.log('onoff clicked', elem)
                if (elem.val() == "on") {
                    elem.val("off");
                } else {
                    elem.val("on");
                }
            })
        }
    }

});
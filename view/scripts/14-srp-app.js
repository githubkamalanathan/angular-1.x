// (function () {
//     var name = "myApp",
//         requires = [],
//         myApp = null

//     myApp = angular.module(name, requires);
//     myApp.controller('AppCtrl', function ($scope) {
//         $scope.operator = "+";
//         $scope.setOperator = function (operator) {
//             $scope.operator = operator;
//         };

//         $scope.calculate = function () {
//             if ($scope.operator === '+') {
//                 $scope.result = parseInt($scope.firstNum) + parseInt($scope.secondNum);
//             } else if ($scope.operator === '-') {
//                 $scope.result = parseInt($scope.firstNum) - parseInt($scope.secondNum);
//             }
//         }
//     });
// }());

(function () {
    var name = "myApp",
        requires = [],
        myApp = null

    myApp = angular.module(name, requires);

    myApp.service('addSvc', function () {//Note - it will be instantiated once in a lifetime.
        this.add = function (firstNum, secondNum) {
            return parseInt(firstNum) + parseInt(secondNum);
        }
    });
    myApp.service('subtractSvc', function () {//Note - it will be instantiated once in a lifetime.
        this.subtract = function (firstNum, secondNum) {
            return parseInt(firstNum) - parseInt(secondNum);
        }
    });
    myApp.controller('AppCtrl', function ($scope, addSvc, subtractSvc) {
        $scope.operator = "+";
        $scope.setOperator = function (operator) {
            $scope.operator = operator;
        };

        $scope.calculate = function (firstNum, secondNum) {
            if ($scope.operator === '+') {
                $scope.result = addSvc.add(firstNum, secondNum);
            } else if ($scope.operator === '-') {
                $scope.result = subtractSvc.subtract(firstNum, secondNum);
            }
        }
    });
}());
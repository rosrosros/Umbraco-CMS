function textAreaController($scope) {

    // macro parameter editor doesn't contains a config object,
    // so we create a new one to hold any properties 
    if (!$scope.model.config) {
        $scope.model.config = {};
    }
    $scope.model.count = 0;

    if (!$scope.model.config.maxChars) {
        $scope.model.config.maxChars = false;
    }

    $scope.model.maxlength = false;
    if ($scope.model.config && $scope.model.config.maxChars) {
        $scope.model.maxlength = true;
    }

    $scope.$on("formSubmitting", function() {
        if ($scope.isLengthValid()) {
            $scope.textareaFieldForm.textarea.$setValidity("maxChars", true);
        } else {
            $scope.textareaFieldForm.textarea.$setValidity("maxChars", false);
        }
    });

    $scope.isLengthValid = function() {
        if (!$scope.model.maxlength) {
            return true;
        } 
        return $scope.model.config.maxChars >= $scope.model.count;
    }

    $scope.model.change = function () {
        if ($scope.model.value) {
            $scope.model.count = $scope.model.value.length;
        }
    }
    $scope.model.change();
}
angular.module('umbraco').controller("Umbraco.PropertyEditors.textAreaController", textAreaController);

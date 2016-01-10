var EditBookDirective = (function () {

    var injectParams = ["URLS"];

    var editBookDirective = function (URLS) {
        return {
            restrict: 'E',
            scope: {
                text: '='
            },
            link: function (scope, element, attrs) {
                var fieldJson = angular.fromJson(attrs.field);
                scope.field = fieldJson;
            },
            templateUrl: URLS.viewBase + "edit/edit-book.html"
        }
    };

    editBookDirective.$inject = injectParams;
    angular.module('app.EditTemplate').directive('editBook', editBookDirective);

}());
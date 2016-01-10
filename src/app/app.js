(function () {

    var app = angular.module('app.EditTemplate', ['ngRoute', 'ngResource']);

    app.constant("URLS", {
        "viewBase": "app/view/"
    });

    app.config(['$routeProvider', "URLS", function ($routeProvider, URLS) {
        $routeProvider
            .when('/form', {
                controller: 'FormController',
                templateUrl: URLS.viewBase + 'form/form.html',
                controllerAs: 'edit'
            })
            .otherwise({redirectTo: '/form'});
    }]);

}());

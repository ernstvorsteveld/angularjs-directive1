(function () {

    var injectParams = ['$location', '$routeParams', '$scope'];

    var controller = function ($location, $routeParams, $scope) {

        var vm = {};

        var field = {
            "prompt" : "nickName",
            "scimAttributeName": "urn:scim:schemas:core:1.0:nickName",
            "attributeName": "nickName",
            "type": "text",
            "enabled" : true,
            "required" : true,
            "visible" : true,
            "minLength" : "1",
            "maxLength" : "10",
            "min-error" : "Jouw Nickname is te kort. Kies een Nickname met minimaal {0} karakters.",
            "max-error" : "Jouw Nickname is te lang. Kies een Nickname met maximaal {0} karakters.",
            "pattern" : "^[a-zA-Z0-9]$",
            "label" : "ssui.personal_details.profile.nickName.label",
            "description" : "ssui.common.type.description",
            "icon" : ""
        };

        var value = {
            "value" : "xx"
        };

        vm.field = field;
        vm.value = value;

        return vm;
    };

    controller.$inject = injectParams;
    angular.module('app.EditTemplate').controller('FormController', controller);

})();



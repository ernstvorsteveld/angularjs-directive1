describe("Edit book directive.", function () {

    var $compile;
    var $rootScope;
    var $httpBackend;

    var field = {
        "prompt": "nickName",
        "scimAttributeName": "urn:scim:schemas:core:1.0:nickName",
        "attributeName": "nickName",
        "type": "text",
        "enabled": true,
        "required": true,
        "visible": true,
        "minLength": "1",
        "maxLength": "10",
        "min-error": "Jouw Nickname is te kort. Kies een Nickname met minimaal {0} karakters.",
        "max-error": "Jouw Nickname is te lang. Kies een Nickname met maximaal {0} karakters.",
        "pattern": "^[a-zA-Z0-9]$",
        "label": "ssui.personal_details.profile.nickName.label",
        "description": "ssui.common.type.description",
        "icon": ""
    };

    beforeEach(module("app.EditTemplate"));

    beforeEach(module("app/view/edit/edit-book.html"));

    beforeEach(inject(function (_$compile_, _$rootScope_, _$httpBackend_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_.$new();
        $httpBackend = _$httpBackend_;
    }));

    String.prototype.normalizeSpace = function() {
        return this.replace(/\s\s+/g, ' ');
    };

    it("Directive should have scope fields.", function () {
        $rootScope.edit = {};
        $rootScope.edit.field = field;
        $rootScope.field = angular.fromJson(field);
        var element = $compile("<edit-book field='{{edit.field}}'></edit-book>")($rootScope);
        $rootScope.$digest();
        expect(element.html().normalizeSpace()).toBe("<span> <a class=\"ng-binding\">nickName</a> <input type=\"text\" maxlength=\"10\"></span>");
    });


});
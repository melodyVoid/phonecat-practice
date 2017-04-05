"user strict";

describe("PhoneListController", function () {

    beforeEach(module("phonecatApp"));

    it("shoud create a `phone` model with 3 phones",inject(function ($controller) {
        var scope = {};
        var ctrl = $controller("PhoneListController",{$scope:scope});
        expect(scope.phones.length).toBe(3);
    }));

});

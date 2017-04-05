angular.module("phonecatApp")
    .config(["$locationProvider", "$routeProvider", function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix("!");  //这句不太懂,记下来查阅

        $routeProvider
            .when("/phones", {
                template: "<phone-list></phone-list>"
            })
            .when("/phones/:phoneId", {
                template: "<phone-detail></phone-detail>"
            })
            .otherwise("/phones");
    }]);

angular.module("templates-main", ["app/first/first.tpl.html"]);

angular.module("app/first/first.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/first/first.tpl.html",
    "<div>\n" +
    "	{{firstCtrl.someText}}\n" +
    "</div>");
}]);

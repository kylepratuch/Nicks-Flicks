nicksFlicks.directive("nightMode", function() {
  return function(scope, element, attrs) {
    element.bind("click", function() {
      var body = angular.element(document).find('body');
      body.toggleClass('inverted');
    });
  }
});

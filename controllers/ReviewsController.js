nicksFlicks.controller('ReviewsCtrl', function ReviewsCtrl($scope, $stateParams, ReviewsFactory, UtilitiesFactory) {
  $scope.reviews = ReviewsFactory.reviews;
  $scope.ReviewsFactory = ReviewsFactory;

  $scope.review = UtilitiesFactory.findById(ReviewsFactory.reviews, $stateParams.id);

  $scope.addReview = function(){
    $scope.reviews.push({title: $scope.title, id: $scope.reviews.length + 1, text: $scope.text});
    $scope.title = null;
    $scope.text = null;
  }
});

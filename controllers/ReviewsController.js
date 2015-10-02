nicksFlicks.controller('ReviewsCtrl', function ReviewsCtrl($scope, ReviewsFactory) {
  $scope.reviews = ReviewsFactory.reviews;
  $scope.ReviewsFactory = ReviewsFactory;

  $scope.addReview = function(){
    $scope.reviews.push({title: $scope.title, reviewId: $scope.reviews.length + 1, text: $scope.text});
  }
});

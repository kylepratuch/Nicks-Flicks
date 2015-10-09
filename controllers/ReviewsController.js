nicksFlicks.controller('ReviewsCtrl', function ReviewsCtrl($scope, $stateParams, ReviewsFactory, UtilitiesFactory) {
  $scope.reviews = ReviewsFactory.reviews;
  $scope.ReviewsFactory = ReviewsFactory;

  $scope.review = null;



  if ($stateParams.reviewId){
    $scope.review = UtilitiesFactory.findById(ReviewsFactory.reviews, $stateParams.reviewId);
  }

  $scope.addReview = function(){
    $scope.reviews.push({title: $scope.title, reviewId: $scope.reviews.length + 1, text: $scope.text});
    $scope.title = null;
    $scope.text = null;
  }
});

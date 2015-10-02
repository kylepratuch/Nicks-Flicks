nicksFlicks.controller('ReviewsCtrl', function ReviewsCtrl($scope, $stateParams) {
  $scope.reviews = [{title:"Test Title 1", reviewId: 1,text:"Actually XOXO Helvetica Wes Anderson cornhole master cleanse, umami Truffaut kale chips health goth synth American Apparel small batch Carles. "},
    {title:"Test Title 2", reviewId: 2, text:"Actually XOXO Helvetica Wes Anderson cornhole master cleanse, umami Truffaut kale chips health goth synth American Apparel small batch Carles. "},
    {title:"Test Title 3", reviewId: 3, text:"Actually XOXO Helvetica Wes Anderson cornhole master cleanse, umami Truffaut kale chips health goth synth American Apparel small batch Carles. "},
    {title:"Test Title 4", reviewId: 4, text:"Actually XOXO Helvetica Wes Anderson cornhole master cleanse, umami Truffaut kale chips health goth synth American Apparel small batch Carles. "}
  ];

  $scope.addReview = function(){
    $scope.reviews.push({title: $scope.title, reviewId: $scope.reviews.length + 1, text: $scope.text});
  }


});

nicksFlicks.factory('UtilitiesFactory', function() {
  return {
    findById: function(collection, id) {
      for (var i = 0; i < collection.length; i++) {
        if (collection[i].reviewId == id) {
          return collection[i];
        }
      }
      return null;
    }
  };
});

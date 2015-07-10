var alienHaiku = {
  writePoem: function (){
    var poem = "";
    var chunks = ["hal", "ni", "ku", "po", "li", "zik", "bo", "yo", "re", "wa"];
    var addLine = function(lineLength){
      var line = "";
      for (var i = 0; i < lineLength; i++) {
        var chunk = Math.floor((Math.random() * chunks.length));
        line = line + chunks[chunk];
        var flip = Math.floor((Math.random() * 2) +1);
        if (flip <=1) {
          line = line + " ";
        }
      }
      return line + '<br>';
    };
    
    poem = poem + addLine(5);
    poem = poem + addLine(7);
    poem = poem + addLine(5);

    return poem;
  }
}

module.exports = alienHaiku;
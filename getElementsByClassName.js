// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node){
  var array = [];
  //beginning of tree
  node = node || document.body;
  //node classnames are received and split
  var classNode = node.className.split(" ");
  classNode.indexOf(className) >= 0 ? matches.push(node) : null;
  //if the node has children, call the function on it self
  if(node.children)
  {
    //loop through
    //matching class name elements get concatenated together
    for(var x = 0; x < node.children.length, x++)
    {
      array = array.concat(getElementsByClassName(className, node.children[x]))
    }
  }
  //return concatenated array
  return array;
};

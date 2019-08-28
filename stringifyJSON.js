// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {


  //check to see if object is function or undefined
  if(typeof obj === 'function' || typeof obj === 'undefined') 
  {
    return null;
  }
  //check to see if object is is number or boolean or null
  if(typeof obj === "boolean" || typeof obj === null || typeof obj === "number") 
  {
    //if so, run the string function on the object and return the result

   return String(obj);
  }
  //if object is of type string
  if(typeof obj === 'string') 
  {
    //return the obj, no need for change
    return '"' + obj + '"';
  }
  //check for values in array
  if(Array.isArray(obj)) 
  {
    //recursively go through the array
    return '[' + obj.map(function(value) 
    {
      //each value will have stringify run on it, returning the type of obj it is using the if statements above
      return stringifyJSON(value);
    }) + ']';
  }

  var value = "";
  var count = Object.keys(obj).length;
  //loop through object keys
  for(var k in obj) 
  {
    //
    if ( typeof obj[k] === 'undefined' || typeof obj[k] === 'function' ||) 
    {
      count--;
    } 
    else if (count > 1) 
    {
      value = value + stringifyJSON(k) + ':' + stringifyJSON(obj[k]) + ',';
      count--;
    } 
    else 
    {
      value = value + stringifyJSON(k) + ':' + stringifyJSON(obj[k]);
    }
  }
  return '{' + value + '}';
};

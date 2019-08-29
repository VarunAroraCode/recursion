// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  //check to see if object is function or undefined
    var value = '';

  if (typeof obj === 'function' || typeof obj === 'undefined') 
  {
    return null;
  }
  //check to see if object is is number or boolean or null
  if (typeof obj === 'number' || typeof obj === 'boolean' || obj === null) 
  {
    //if so, run the string function on the object and return the result
    return String(obj);
  }
  //if object is of type string
  if (typeof obj === 'string') 
  {
    //return the obj, no need for change
    return '"' + obj + '"';
  }
  //check if array is greater than length 0
  if (Array.isArray(obj) && obj.length === 0)
  {
    //if not, then return empty array
    return value+= '[]';
  }
  //check for values in array
  if (Array.isArray(obj) && obj.length > 0) 
  {
    //recursively go through function
    return '[' + obj.map(function(value) {
      return stringifyJSON(value);
    }) + ']';
    
  }

  var num = Object.keys(obj).length;
  for (var k in obj) 
  {
    if (typeof obj[k] === 'function' || typeof obj[k] === 'undefined') 
    {
      num--;
    } 
    else if (num > 1) 
    {
      value += stringifyJSON(k) + ':' + stringifyJSON(obj[k]) + ',';
      num--;
    } 
    else 
    {
      value += stringifyJSON(k) + ':' + stringifyJSON(obj[k]);
    }
  }
  return '{' + value + '}';
};

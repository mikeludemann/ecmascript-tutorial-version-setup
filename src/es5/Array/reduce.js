var arr = [12,25,66,88,128];

var context = arr.reduce(function (total, value, index, array) {

  return total + value;

});

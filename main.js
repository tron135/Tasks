function stringconcat(str){
  var arrayOfSplit = str.split(",");
  var arrayOfSplit2 = arrayOfSplit.map(hyphenSplit);
  var finalString = position(arrayOfSplit2) || "";

  return finalString;
  
}

function position(array) {
  var newString = [];
  array.forEach(function(i) {
    var string = i[0];
    document.write(string);
    for (var j = 1; j < i.length; i++){
      newString[i[j]] = string;
      document.write(newString);
    }
  });

  console.log(newString.join(""));
  return newString.join();
}

function hyphenSplit(str) {
  return str.split("-")
}

// function main(data) {
// 	var splitByComma  = data.split(",");
// 	var splitByHyphen = splitByComma.map(hyphenSplit);
// 	var finalString   = positioning(splitByHyphen) || "";

// 	return finalString;
//  }

// function hyphenSplit(str) {	
// 		return str.split("-");
// }

// //placing strings according to its index no//
// function positioning(arr) {
// 	var positionedString = [];
// 	arr.forEach((arr1) => {
// 	var str = arr1[0];
// 			for (var i = 1; i < arr1.length; i++) {
// 				positionedString[arr1[i]] = str;
// 			}
// 		});
// 	return positionedString.join("");
// }

stringconcat("ABCD-0-2,HIJK-1")
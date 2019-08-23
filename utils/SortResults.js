exports.sortResults=(searchKey,results)=>{
  const indices = []
  results.map((e)=>{
    const match = searchKey.exec(e.name)
    indices.push(match)
  })
    const combinedArr = []
    for (let i = 0; i < indices.length; i++) {
      combinedArr[i] = {index: indices[i].index, result: results[i]}
    }
    const sorted = quickSort(combinedArr)
    console.log(quickSort(combinedArr))
    return(quickSort(combinedArr).map(e=>e.result))

}

function quickSort(origArray) {
    if (origArray.length <= 1) { 
		return origArray;
	} else {
		var left = [];
		var right = [];
		var newArray = [];
		var pivot = origArray.pop();
		var length = origArray.length;

		for (var i = 0; i < length; i++) {
			if (origArray[i].index <= pivot.index) {
				left.push(origArray[i]);
			} else {
				right.push(origArray[i]);
			}
		}

		return newArray.concat(quickSort(left), pivot, quickSort(right));
  }
}
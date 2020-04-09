function tune(arr){
	let frequencies = [329.63, 246.94, 196, 146.83, 110, 82.41];
	var result = [];
	var percentage;
	var rounded;
	for(var index = 0; index < 6; index++){
		percentage = (arr[index]*100)/frequencies[index];
		if (percentage == 100){
			result[index] = "OK";
		}else if(percentage == 0){
			result[index] = " - ";
		}else if(percentage > 97 && percentage < 100) {
			result[index] = ">•";
		}else if(percentage <= 97){
			result[index] = ">>•";
		}else if(percentage < 103 && percentage > 100){
			result[index] = "•<";
		}else if(percentage >= 103){
			result[index] = "•<<";
		}
	}
	return result;
}

console.log(tune([0, 246.94, 0, 0, 0, 78]));    //[" - ", "OK", " - ", " - ", " - ", ">>•"]
console.log(tune([329.63, 246.94, 195, 146, 111, 82.41])); //["OK", "OK", ">•", ">•", "•<", "OK" ]
console.log(tune([329.63, 246.94, 196.00, 146.83, 110.00, 82.41]));  //["OK", "OK", "OK", "OK", "OK", "OK"]
// Find a unique number
        function findUniq(arr) {
  let arr1 = [];
  let arr2 = [];
  
  for (let i = 0; i < arr.length ; i++){
    if (arr[i] !== arr[i + 1]) {
      arr1.push(arr[i]);
    } else {
      arr2.push(arr[i]);
    }
  } 
        console.log(arr1);
        console.log(arr2);

        for (let i = 0; i < arr1.length ; i++){
            if (arr1[i] !== arr2[0]){
                return arr1[i];
                break;
            }
        }   
}









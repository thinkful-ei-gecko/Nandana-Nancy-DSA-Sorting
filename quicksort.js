//3 9 1 14 17 24 22 20
// The pivot could have been either 14 or 17

//14, 17, 13, 15, 19, 10, 3, 16, 9, 12
// when using the first item as pivot
// pivot = 12
// 9,17,13,15,19,10,3,16,14,12
// pivot = 9
// 3,9,10,12,19,14,17,16,13,15

// When using the first item on the list as a pivot
// //14, 17, 13, 15,  19, 10, 3, 16, 9, 12
// 14,13,10,3,  9, 12, 15, 16, 19, 17



function swap(array, i, j) {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
};

function quickSort(array, start = 0, end = array.length) {
  if (start >= end) {
    return array;
  }
  const middle = partition(array, start, end);
  array = quickSort(array, start, middle);
  array = quickSort(array, middle + 1, end);
  return array;
}
function partition(array, start, end) {
  const pivot = array[end - 1];
  let j = start;
  for (let i = start; i < end - 1; i++) {
    if (array[i] <= pivot) {
      swap(array, i, j);
      j++;
    }
  }
  swap(array, end-1, j);
  return j;
}

///////////// start as pivot attempt
// function swap(array, i, j) {
//   const tmp = array[i];
//   array[i] = array[j];
//   array[j] = tmp;
// };

// function quickSort(array, start = 0, end = array.length) {
//   if (start >= end) {
//     return array;
//   }
//   const middle = partition(array, start, end);
//   array = quickSort(array, start, middle - 1);
//   array = quickSort(array, middle + 1, end);
//   return array;
// }
// function partition(array, start, end) {
//   const pivot = array[start];
//   let j = start + 1;
//   for (let i = start + 1; i < end ; i++) {
//     if (array[i] <= pivot) {
//       swap(array, i, j);
//       j++;
//     }
//   }
//   swap(array, start, j);
//   return j;
// }

// console.log(quickSort([14, 17, 13, 15,  19, 10, 3, 16, 9, 12]))


/////////////////////////// 3. Implementing quicksort
function swap(arr, i, j){
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

function qSort(arr, start = 0, end = arr.length) {
  if(start >= end) {
    return arr;
  }

  const middle = partition(arr, start, end); 
  arr = qSort(arr, start, middle)
  arr = qSort(arr, middle + 1, end)
  return arr;
}

function partition(arr, start, end){
  const pivot = arr[end - 1]
  let j = start;
  for(let i = start; i < end - 1; i++){
    if(arr[i] <= pivot){
      swap(arr, i, j)
      j++
    }
  }
  swap(arr, end-1, j)
  return j
}
let string = '89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5' 
let arr = string.split(' ') 
let newArr = []
arr.forEach(number =>  newArr.push(Number(number)))
// console.log(newArr)

// console.log(qSort(newArr))

/////////////////////////// 4. Implementing merge sort

function mSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle)
  let right = array.slice(middle, array.length)

  left = mSort(left)
  right = mSort(right)
  return merge(left, right, array)
}

function merge(left, right, array) {
  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
          array[outputIndex++] = left[leftIndex++];
      }
      else {
          array[outputIndex++] = right[rightIndex++];
      }
  }

  for (let i = leftIndex; i < left.length; i++) {
      array[outputIndex++] = left[i];
  }

  for (let i = rightIndex; i < right.length; i++) {
      array[outputIndex++] = right[i];
  }
  return array;
};
// console.log(mSort(newArr))


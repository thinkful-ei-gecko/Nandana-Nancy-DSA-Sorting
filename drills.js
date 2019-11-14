// 21, 1, 26, 45, 2, 9, 29, 28,   16, 49, 39, 27, 43, 34, 46, 40
// 21, 1,  26, 45,

// 3rd recursive 
// [21,1] [26,45]

// 21,  1
// merge [1,21]
 
//16th recursion will give [2] [9]
//What are the first 2 lists to be merged? merge [1,21]

//7th merge [1,2,9,21,26,28,29,45]

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle); 0,7
  let right = array.slice(middle, array.length);

  left = mergeSort(left);
  right = mergeSort(right);
  return merge(left, right, array);
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
}
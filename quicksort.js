//3 9 1 14 17 24 22 20
// The pivot could have been either 14 or 17

//14, 17, 13, 15, 19, 10, 3, 16, 9, 12
// when using the first item as pivot
// pivot = 12
// 9,17,13,15,19,10,3,16,14,12
// pivot = 9
// 3,9,10,12,19,14,17,16,13,15

When using the first item on the list as a pivot
//14, 17, 13, 15,  19, 10, 3, 16, 9, 12
14,13,10,3,  9, 12, 15, 16, 19, 17



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
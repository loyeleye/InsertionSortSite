const results = document.getElementById("results");
const output = document.getElementById("output");

function clickHandler() {
  const input = document.getElementById("input").value;
  let list = input.split("\n");
  let result = "";
  try {
    list.forEach(function(value, index, array){array[index] = value|0});
  } catch(error) {
    console.error(error);
    return result.toString();
  }
  insertionSort(list);
  output.value = list.toString().replace(/,/g,"\n");
  results.className="notHidden";
}

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j+1] = arr[j];
      j--;
    }
    arr[j+1] = key;
  }
}

function parseNum(item, index) {
  return parseInt(item)
}

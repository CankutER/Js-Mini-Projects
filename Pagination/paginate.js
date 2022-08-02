function divide(array, unitLength) {
  let unitArray = [];
  for (let i = 0; i < unitLength; i++) {
    if (array[0]) {
      unitArray.push(array[0]);
      array.splice(0, 1);
    } else {
      break;
    }
  }

  return unitArray;
}

function paginate(array, unitLength) {
  let paginated = [];
  while (array.length > 0) {
    paginated.push(divide(array, unitLength));
  }
  return paginated;
}
export default paginate;

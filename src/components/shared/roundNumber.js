const roundNumber = (value) => {
  let num = +value;
  let rounded = num;
  if (Number.isInteger(num)) {
  } else {
    rounded = Math.round((num + Number.EPSILON) * 100) / 100;
    if (isNaN(rounded)) {
      //   console.log(num);
    }
  }

  return rounded;
};

export default roundNumber;

function repeat(string, count) {
  if (isNaN(count)) {
    throw new Error("count is not a number");
  } else if (count < 0) {
    throw new Error("negative numbers are not valid");
  } else if (count === 0) {
    return "";
  } else if (count === 1) {
    return string;
  } else {
    return string.repeat(count);
  }
}

module.exports = repeat;

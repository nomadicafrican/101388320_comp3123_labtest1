const mixedArray = ["Pizza", 10, true, 25, false, "Wings"];

function lowerCaseWords(array) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(array)) {
      // checks if array is not array
      reject("Please input an array");
    }

    const filter = array
      .filter((x) => typeof x == "string") // filters the indexes for only string
      .map((x) => x.toLowerCase()); // makes all the letters lowercase

    resolve(filter);
  });
}

lowerCaseWords(mixedArray)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

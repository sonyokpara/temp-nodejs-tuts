const { readFile, writeFile } = require("fs");
console.log("==========================================");
console.log("started...");

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }

  const first = result;
  console.log(` First file: ${first}`);

  console.log("next...");
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    console.log(`Second file: ${second}`);

    writeFile(
      "./content/result-async.txt",
      `${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("done...");
        console.log(result);
      }
    );
  });
});
console.log("finally...");

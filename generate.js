const fs = require("fs");
const path = require("path");

const dir = "./content/articles";

const files = fs.readdirSync(dir)
  .filter(f => f.endsWith(".md"));

fs.writeFileSync(
  "./content/articles/index.json",
  JSON.stringify(files, null, 2)
);

console.log("Index generated:", files);
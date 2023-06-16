const fs = require('fs');
const path = require('path');

const ruleFiles = fs.readdirSync(__dirname).filter((fileName) => fileName !== 'index.js');

const rules = Object.fromEntries(
  ruleFiles.map((filePath) => [path.basename(filePath, '.js'), require(`./${filePath}`)])
)

module.exports = {
  rules,
}

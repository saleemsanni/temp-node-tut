// npm
// package.json 1.manual approach 2.npm init 3.npm init -y
// once advanced then go for manual approach. now npm init

// usecase of lodash for example purpose
const _ = require("lodash")
const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)

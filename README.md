<h1 align="center">String Processor</h1>

<div align="center">

Lightweight package for processing strings in Javascript 

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/ptxd/stringprocessor.git/master/LICENSE)

</div>

## Installation

```sh
// with npm
npm install stringprocessor

// with yarn
yarn add stringprocessor

## Installation

Functionalities

* **StringToString:** Methods returns a string literal
* **StringToObject:** Methods require a key value and returns an object key-value pair

Current list of methods and usage:
lowercase
uppercase
capitalize
deletespaces

## Usage
```js
const {StringProc, StringToObject} = require('stringprocessor')

//StringProc only takes in a single argument

console.log(StringProc.capitalize('string')) // returns String

console.log(StringProc.deletespaces('cali f ornia') // returns 'california'

console.log(StringToObject.deletespaces('state','cali f ornia')) //returns {state:'california'}

console.log(StringToObject.deletespaces('state','cali f ornia')) //returns {state:'California'}

## License

[MIT licensed](./LICENSE).
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
```
## Functionalities


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

# console.log(StringProc.capitalize('california')) 
// returns California

# console.log(StringProc.deletespaces('cali f ornia') 
// returns 'california'

# console.log(StringToObject.deletespaces('state','cali f ornia')) 
//returns {state:'california'}

# console.log(StringToObject.deletespaces('state','cali f ornia')) 
//returns {state:'California'}
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT licensed](./LICENSE).
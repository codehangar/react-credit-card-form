# React Credit Card Form

[![Build Status](https://travis-ci.org/codehangar/react-credit-card-form.svg?branch=master)](https://travis-ci.org/codehangar/react-credit-card-form)

###
Contributing

## Getting Started
```shell
npm install
```

## How to Run
```shell
$ npm start
```

## Usage
```
import ReactCreditCardForm from 'ReactCreditCardForm';

const handleCCSubmit = (cc) => {
  console.log("App.js cc", cc)
}

...

<ReactCreditCardForm handleSubmit={(cc) => handleCCSubmit(cc)}/>

...


```
Import `ReactCreditCardForm`, add the component, and handle the submit callback as you wish.



## Directory Structure
- dev (development build files)
- dist (distribution files)
- node_modules
- src (app source code)
  - components (reusable elements)
    - Component
      - Component.js
      - Component.scss
  - index.html
  - entry.js
  - index.scss
- tests (automated tests)
- tools (build tools)
- LICENSE
- package.json
- README.md


# react-without-react
API-comptible replacement of React.  For use with create-react-app

## Project goals
* API-compatibility with react
* small build (less than 1 KB)

## To use
1. Copy files from src/ to your src/
2. Update your import statements to
```
import React from './react';
import ReactDOM from './react-dom';
```

## Functions currently provided
* React.createElement
* ReactDOM.render

## Features currently supported
* HTML
* JSX components

## Future work
* props
* state

## Out of scope
* context
* minimal rerendering

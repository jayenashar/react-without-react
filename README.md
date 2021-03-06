# react-without-react
API-comptible replacement of React.  For use with create-react-app

## Project goals
* API-compatibility with react
* small build (less than 1 KB)

## To use
1. Copy files from react-without-react/src/ to your-react-app/src/
2. Update your import statements to
```
import React from './react';
import ReactDOM from './react-dom';
```

## Functions currently provided
* `React.createElement`
* `ReactDOM.render`

## Features currently supported
* HTML
* class-based components
* state
* event handlers (e.g., `onClick`)
* props

## Future work
* svg
* modularity (e.g., disabling unused features like state with an environment variable `REACT_APP_WITHOUT_STATE`)
* controlled-component improvements
* refs

## Out of scope
* context
* automatic minimal rerendering (manual how-to coming soon)
* function-based components
* propTypes checking

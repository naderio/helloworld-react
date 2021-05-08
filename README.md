# Hello World Webapp (React/Redux with Material Design)

![pipeline status](https://gitlab.com/helloworld-nt/helloworld-react/badges/master/pipeline.svg)
![coverage report](https://gitlab.com/helloworld-nt/helloworld-react/badges/master/coverage.svg)
![dependencies](https://img.shields.io/david/naderio/helloworld-react.svg)

A boilerplate and reference implementation for web applications built with React, Redux, and React Material.

## Preview

- http://react.helloworld.nader.tech
- Access credentials:
  - email: `user@helloworld.nader.tech`
  - password: `password`

## Technology

- [React](https://reactjs.org/) + [Redux](https://redux.js.org/)
- [React Router](https://reacttraining.com/react-router)
- ...

## Requirements

- [Node.js](https://nodejs.org/)

## Usage

```sh
# install dependencies
npm install

# run app in development on port 3000
npm start

# run tests
npm run test

# build for production
npm run build

# lint code
npm run lint

# format code
npm run format
```

## Debugging

From DevTools

```javascript
// use logger
Logger.debug('Hello World!');

// check if there is an authenticated session
AuthService.isAuthenticated();

// get state from Redux store
$store.getState().MyModule.myField;

// dispatch action from Redux store
$store.dispatch($state.MyModule.$myAction(/* args */));
```

## References

- [Guidelines](https://github.com/naderio/helloworld-dev/tree/master/docs/guidelines)
- [API Specifications/Documentation](https://starterspecapi.docs.apiary.io/)
- [Documentation](./docs)

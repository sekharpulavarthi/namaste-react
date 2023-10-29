.favRestaurantInfoCard.restaurants

# Redux Tootlkit

- Install @reduxjs/toolkit and react-redux
- Build or own Store
- Connect our store to app
- We will create a cart slice
- Dispatch an action
- Selector

# Types of Testing

- Unit Testing - We test our React components in Isolation
- Integration Testing
- End to End Testing or e2e Testing

* Unit Testing

- Testing a small part/unit or component of the application
- _Ex:_ Checking whether the header component is rendered properly or not.

* Integration Testing

- There are multiple components, and they are talking to each other and we will develop a flow of an action in our react application, that we will test.
  _Ex:_ When the text is entered in search input field, components will be filtered and rendered

* End to End Testing or e2e Testing

- Testing a React application as soon as user lands on the website to the user leaves the website, we will test all the cases.
  Ex: clicking an add button item, searching items, etc..

We are going to use _React Testing Library_ to write test cases in our application.

React Testing Library uses Jest behind the scenes

Jest is a delightful Javascript Testing Framework with a focus on simplicity.

# Setting up Testing in our App

- Installed React Testing Library
- Installed Jest
- Installed Babel dependedncies for Jest
- Configured Babel - createing a file _babel.config.js_
- Configure parcel congif file to disable the default babel transpilation - creating a file _.parcelrc_
- Jest Configuration - _npx jest --init_
- Install JSDOM Library - _https://testing-library.com/docs/react-testing-library/setup#jest-28_
- Install @babel/preset-react - to make jsx work in test cases
- Include @babel/preset-react inside my Babel config
- Install npm i -D @testing-library/jest-dom

# Live Demo

<a title="Deployed on heroku" href="http://shopay-app.herokuapp.com/">
<img alt="Deployed on heroku" src="https://img.shields.io/badge/Deployed%20on%20heroku-%239E7CC1?style=plastic&logo=heroku&logoColor=white" width="200px" />
</a>

#### Logins

```
admin@admin.com
123123

jDoe@email.com
123123

dummy@email.com
12345
```

# Front-end

- [Create React App](https://create-react-app.dev/)
- [Axios](https://github.com/axios/axios)
- [Styled Components](https://styled-components.com/)
- [Storybook](https://storybook.js.org/)
- [React icons](https://react-icons.github.io/react-icons/)
- [React Paypal button (v2)](https://www.npmjs.com/package/react-paypal-button-v2)
- [Redux](https://react-redux.js.org/)
  - [Thunk](https://github.com/reduxjs/redux-thunk)

## Folder Structure

I used a Rails-style pattern [[ref](https://livebook.manning.com/book/redux-in-action/chapter-11/9)], so each file type resides in an appropriately named directory: actions, reducers, components, etc. I also used the [Atomic Design methodology](https://atomicdesign.bradfrost.com/chapter-2/) for separating components and make it easier to understand what does what at a glance.

```
┌───actions
│   └─ Collection of Redux action
├───reducers
│   └─ Collection of Redux reducers
├───types
│   └─ Constants used in Redux
├───components
│   ├───atoms
│   │   └─ The smallest part of a component
│   ├───molecules
│   │   └─ Small combinantions of atoms
│   └───organisms
│       └─ Larger combinations of atoms and molecules
├───pages
│   └─ Combination of organisms and deals with getting the data
└───styles
    └─ Global/Commonly used styles
```

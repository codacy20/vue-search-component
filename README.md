# Search Movies built using Vuejs [DEMO](https://focused-chandrasekhar-b4154d.netlify.app/)

```
@vue/cli 4.5.9
vue: 2.6.12
Node: 10.16.3
OS: darwin x64
deployed version: 
```

## Installation

Run `npm i` to install all dependencies.

## Development server

Run `npm run serve` for a dev server. Navigate to `http://localhost:8080/ `. The app will automatically reload if you change any of the source files.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `npm run test:unit` to execute the unit tests via [Mocha](https://mochajs.org/).

# Architecture, Explanation and more

To sum-up, the application has three simple `views`. Home, Movie (Lazy loaded) and PageNotFound. All Movie Search related components (6 components) are included in `components/Home`. And components in charge of rendering a sepecifc movie can be found under `components/Movie` just to have separation of concerns.

I always work with two things in mind. My code should be easy to change (future maintainability) and I do not like to repeat my code (DRY pattern).

While working on this small project I tried showing that I care about clean readable maintainable extendable code.

I have used "Layout" components (Home.vue and Movie.vue) and event emitters to reduce the size of the code,increase readibilty and ease of extendibility but communication between components can also be done using a state manager such as Vuex.

Data and events are managed in a single place (HomeContext.vue or MovieContext.vue depending on the route) and it's considered to be the state tree.

## Libraries, packages and components

I have not used any UI library (material UI, bootstrap or anything else). I like creating detailed custom components, and you can find more examples on my GitHub profile. Collection of different simple small apps that are all made of custom components and custom user interactions. 

I chose to use SCSS since I can create faster with it and provides readability.

## Possible improvements

All said and done, I enjoyed working on it, I kept it simple, short.

The main issue in my opinion is lack of e2e/integration testing.

## ONE. MORE. THING.

- No lint issues.
- No build issues.
- Design inspired by https://www.uidesigndaily.com/
- Environment variable dictates the API key
- Made use Vue router
- Provides optimal experience for mobile and tablet

## Mobile and Tablet view

You can use Chrome/Firefox to simulate a mobile/responsive exprience.
>dots icon (top right) >>> More tools >>> developer tools


## Check my other projects

If you read this far, make sure you follow me on LinkedIn and GitHub, so we can stay connected.

My open source projects and sample code: https://github.com/codacy20

LinkedIn: https://www.linkedin.com/in/amirkiumarsi/

## Where can I see this projects code

Code is hosted here: https://github.com/codacy20/vue-search-component

Application have been deployed here: https://focused-chandrasekhar-b4154d.netlify.app/

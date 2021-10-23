# Getting Started with Create React App

# Simultaneous Timers Assignment

### Context

When following a new recipe, you're often trying to keep track of timers at once.
For example, your dough might need to bake in the oven for 15 minutes while your
stew needs to simmer for 40 minutes. As you're working through the recipe, you
often realize that one timer is not enough for a given moment, so let's fix that!

## High Level Problem Statement

Create a simple webapp that allows the chef in you to easily keep track of multiple
timers. The user should be able to have any number of simultaneously running timers.
Aside from being able to create timers, and timers should disappear once they are done.

### Details

Avoid using libraries that solve too much of the problem. General purpose libraries
like React or Redux are fine, but a library that renders timers is not.

After you have a basic solution, here are some potential improvements to attempt:

- Allowing users to name timers
- Automatic reordering of timers based on which timers will run out first
- Allowing a user to pause/resume/reset any existing timer
- Allowing custom ordering of timers via drag and drop
- Any other polish or useful enhancements you can think of

### Submission Details

Include a README that covers:

Include a README that covers:

- How long you spent on the assignment.
   I spend around ~3 hours on the project.
  - 20 mins to do plan the design and layout
  - 35 mins to code the layout without any functionality
  - 40 mins to complete the MVP - multiple timers and delete when the timer is up
  - 45 mins to implement the pause, resume, and reset settings 
  - 10 mins to implement the input field to allow users to add a personalized name for the timer
  - 30 mins to implement a simple UI - color scheme, buttons, background change
  - 30 mins to clean/refactor the code
  
- What do you like about your implementation.
  I like that the user can have any number of timers running simultaneously while 
  ensuring that the UI is simple enough for users to use. For example, the user can 
  name the item that the timer is set for, the task changes color as the timer reaches 
  10 seconds to alert the user of the timer running out, so the user can then decide to 
  pause, resume or reset if needed.

- What you would change if you were going to do it again.
  I would probably think of an alternative way of implementing the timer. The current implementation 
  might have made it challenging to implement the pause feature, as setInterval can't be paused.

  I would also add the filter to organize the tasks based on time, name, categories. 

- How you made your design decisions. For example, if you looked at other timer apps/web apps for inspiration, please note that.
  I looked at TimeCamp online timer and pomofocus for inspiration. However, most of the decisions 
  for the web app were based on ensuring that the web app was assessable and straightforward to 
  understand. For example, the colors were kept neutral to ensure that the text was readable, used 
  the toggle switch for pause and resume, task background color changes when the timer reaches 10 
  seconds, tasks can be named to keep the timers organized.

- How you would test this if you had more time.
  I would have loved to implement mocha and chai testing libraries to test each user story given more time. 
  Such as a user can assign a name to the timers, input the time they would like the timer to be set for, 
  test to ensure that the time is being read correctly, test that the user can delete the timer, reset the 
  timer, etc.   

If you did not use the starter code, please also include instructions on how to build and run your project so we can see and interact with the timer webapp you built.

### What we're looking for

1. Clean, readable, maintainable code
2. A sensible user experience and design for the final product

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

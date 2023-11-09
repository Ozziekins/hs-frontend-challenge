# Harbour Space Frontend Challenge

![React badge](https://img.shields.io/badge/made%20with-React-blue?style=plastic&logo=react)
[![NextJS](https://img.shields.io/badge/uses-Next%20js-purple?style=plastic&logo=nextdotjs)](https://nextjs.org/)
[![Jest](https://img.shields.io/badge/tested%20with-jest-orange?style=plastic&logo=jest)](https://jestjs.io/)
[![Typescript](https://img.shields.io/badge/typed%20using-grey?style=plastic&logo=typescript)](https://www.typescriptlang.org/)
[![Javascript](https://img.shields.io/badge/written%20in-grey?style=plastic&logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![react workflow](https://github.com/Ozziekins/hs-frontend-challenge/actions/workflows/main.yml/badge.svg)](https://github.com/Ozziekins/hs-frontend-challenge/actions/workflows/main.yml)
<br>


Welcome to my solution for the Harbour Space Frontend Challenge! I've successfully completed the challenge by building an adapted version of the Template Page for the Apprenticeship Programme. You can view the deployed application on Vercel: [Harbour Space Frontend Challenge](https://hs-frontend-challenge.vercel.app/)

## Challenge Overview

The challenge involved building a responsive web application with micro-interactions, a slider, and API integration. I successfully implemented the following features:

- **Static Design**: I created the UI components based on the provided design in the Figma template.  
- **Footer**: I implemented the sticky footer section as per the design guidelines.  
- **Animations**: I added some of the specified animations from the google slides to the application.  
- **Sound Integration**: I included a ping sound effect ton click of button and pointer elements.  
- **Carousel/Slider**: I created a responsive carousel/slider component using `motion.div` which is a component from the framer-motion library.  
- **API Integration**: I made API calls to fetch and display the **FAQ** data dynamically.  
- **State Management**: I managed component states.  
- **Unit Testing**: I wrote test cases using Jest for all components to check their functionality.  
- **Responsive Design**: I made sure the application is responsive and works well on various device sizes.  

## Technologies Used

- **React**: I used React as the frontend JavaScript library to build the components and manage state.  
- **Next.js**: I utilized Next.js for server-side rendering and efficient routing in the application.  
- **Jest**: I wrote unit tests for all components to check their functionality.  
- **GitHub Actions**: I set up CI/CD using GitHub Actions to automate the testing process.  
- **Vercel**: The application is deployed on Vercel and you can find the [demo here](https://hs-frontend-challenge.vercel.app/). 

## Project Structure
The project follows a modularized way, here is a brief overview of the folder structure:

- **.github/workflows**: Includes the GitHub Actions workflow configuration for CI/CD setup.  
- **public**: Has the static assets such as images and sound files.  
- **src**: Contains `app/` which has `components/`, `styles/` and `__tests__/`.  
- **components**: Contains all React components, including Header, FirstSection, SecondSection, Grid, TestimonialSection, FAQTitle, FAQ, and Footer.
- **styles**: Includes CSS modules for styling the components.  
- **tests**: Contains Jest test files for component testing.  

## CI/CD Pipeline

The project includes a CI/CD pipeline that runs tests automatically whenever there is a new push or pull request. The CI/CD status badge indicates the current status of the build.

## How to Run Locally

To run this project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/Ozziekins/hs-frontend-challenge.git`  
2. Install dependencies: `cd hs-frontend-challenge && npm install`  
3. Start the development server: `npm run dev`  

This will start the application locally, and you can access it at `http://localhost:3000`.

Feel free to explore the application and let me know if you have any questions or feedback!


## Notes  

1. I made use of the API for populating the Frequently Asked Questions.  
2. I added the sound play with one tone for the clickable elements. It may sound funny when you click a lot.  
3. I was not sure the interpretation of the Bottom Sticky Bar but I implemented it.  
4. The colours are not precisely the same as what's shown in FIgma but are close enough.  
5. The animations are not precisely the same as what's shown in Google slides but are close enough.  
6. I enjoyed the challenge so thank you!  

Thank you for considering my submission. I look forward to discussing the details further in a one-on-one call. Good luck with the review! 😊
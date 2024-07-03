# Property UK

---

![Code Institute Logo](https://camo.githubusercontent.com/654be5a252cf75ac9ac6ea453f7bfe3b2d437f3e6789ed91924bfe501b0df142/68747470733a2f2f636f6465696e737469747574652e73332e616d617a6f6e6177732e636f6d2f66756c6c737461636b2f63695f6c6f676f5f736d616c6c2e706e67)

---

## Description

This forms part of the front end for my fifth project with code institute.

This application is used to give a nice look and feel for the properties that are being looked at.
It will have a nicely displayed look and feel with a user Profile were everything can be displayed in one place.

![img.png](src/assets/docs/display.png)

Live site [here](https://ci-pps-property-react-e3272eaff8d9.herokuapp.com/)

As far as the coloring of the site goes, I wanted to todo a plan display with a white background

---

[//]: # (Badges)

![Pop OS](https://img.shields.io/badge/Pop!_OS-48B9C7?style=for-the-badge&logo=Pop!_OS&logoColor=white)
![Axios](https://img.shields.io/badge/axios-671ddf?&style=for-the-badge&logo=axios&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)
![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)
![Font awesome](https://img.shields.io/badge/Font_Awesome-339AF0?style=for-the-badge&logo=fontawesome&logoColor=white)
![Google Chrome](https://img.shields.io/badge/Google_chrome-4285F4?style=for-the-badge&logo=Google-chrome&logoColor=white)
![Heroku](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![Prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Webstorm](https://img.shields.io/badge/WebStorm-000000?style=for-the-badge&logo=WebStorm&logoColor=white)

---

## Table of Content

- [Planning](#planning)
  - [Wireframes](#wireframes)
  - [UX/UI Designs on figma](#uxui-designs-on-figma)
  - [Color pallet](#color-pallet)
  - [User Stories using MOSCOW Prioritization techniques](#user-stories-using-moscow-prioritization-techniques)
  - [Proper Description of the Technologies used in the Project](#proper-description-of-the-technologies-used-in-the-project)
- [Features](#features)
  - [Atomic Design](#atomic-design)
  - [Header](#header)
  - [State Store](#state-store)
  - [Special features on the about page](#special-features-on-the-about-page)
- [Testing](#testing)
  - [Automatic testing using cypress](#automatic-testing-using-cypress)
  - [Manual testing](#manual-testing)
- [Bugs](#bugs)
  - [401 Error](#401-error)
  - [Carousel](#carousel)
  - [Error when sending property data to API](#error-when-sending-property-data-to-api)
  - [403 forbidden on logout](#403-forbidden-on-logout)
  - [Map doesn't have its own key](#map-doesnt-have-its-own-key)
  - [Modal background to dark on Table display](#modal-background-to-dark-on-table-display)
  - [Footer](#footer)
  - [Footer email address off-screen](#footer-email-address-off-screen)
  - [does not want to refresh page on delete](#does-not-want-to-refresh-page-on-delete)
- [Credits](#credits)
---

### [Planning](#table-of-content)

#### [Wireframes](#table-of-content)

- Landing Page (HomePage)

![Landing Page - desktop.png](src/assets/docs/planning/wireframes/Landing_Page_desktop.png)

![Landing Page - mobile.png](src/assets/docs/planning/wireframes/Landing_Page_mobile.png)

- About Page

![About Page - Desktop.png](src/assets/docs/planning/wireframes/About_Page_Desktop.png)

![About Page - mobile.png](src/assets/docs/planning/wireframes/About_Page_mobile.png)

- Admin Dashboard Page—Profiles of the users using the site

![Admin_Dashboard_properties_desktop.png](src/assets/docs/planning/wireframes/Admin_Dashboard_properties_desktop.png)

![Admin_Dashboard_property_mobile.png](src/assets/docs/planning/wireframes/Admin_Dashboard_property_mobile.png)

- Admin Dashboard Page - displaying of the users

![Admin_Dashboard_user_desktop.png](src/assets/docs/planning/wireframes/Admin_Dashboard_user_desktop.png)

![Admin_Dashboard_user_mobile.png](src/assets/docs/planning/wireframes/Admin_Dashboard_user_mobile.png)

- User Dashboard Page

![User_Dashboard_desktop.png](src/assets/docs/planning/wireframes/User_Dashboard_desktop.png)

![User_Dashboard_mobile.png](src/assets/docs/planning/wireframes/User_Dashboard_mobile.png)

#### [UX/UI Designs on figma](#table-of-content)

- Landing Page (HomePage)

![Landing_Page_Desktop.png](src/assets/docs/planning/design/Landing_Page_Desktop.png)

![Landing_Page_mobile.png](src/assets/docs/planning/design/Landing_Page_mobile.png)

- About Page

![About_Page_desktop.png](src/assets/docs/planning/design/About_Page_desktop.png)

![About_Page_mobile.png](src/assets/docs/planning/design/About_Page_mobile.png)

- Admin Dashboard Page—Profiles of the users using the site

![Admin_Dashboard_property_desktop.png](src/assets/docs/planning/design/Admin_Dashboard_property_desktop.png)

![Admin_Dashboard_property_mobile.png](src/assets/docs/planning/design/Admin_Dashboard_property_mobile.png)

- Admin Dashboard Page - displaying of the users

![Admin_Dashboard_user_desktop.png](src/assets/docs/planning/design/Admin_Dashboard_user_desktop.png)

![Admin_Dashboard_user_mobile.png](src/assets/docs/planning/design/Admin_Dashboard_user_mobile.png)

- User Dashboard Page

![User_Dashboard_desktop.png](src/assets/docs/planning/design/User_Dashboard_desktop.png)

![User_Dashboard_mobile.png](src/assets/docs/planning/design/User_Dashboard_mobile.png)

#### [Color pallet](#table-of-content)

![color_pallet.png](src/assets/docs/planning/color_pallet.png)

- This color scheme was the original idea
- But then decided to keep the original pallet
- But change it to a more minimalistic design

#### [User Stories using MOSCOW Prioritization techniques](#table-of-content)

##### Description

- I tried my best to follow the Agile methodology
- Starting with the completion of the landing page
- Once that was completed, then move on to the next section
- Creating this project page by page
- I first start with creating all the issues needed for the Landing Page
- GitHub bot would move that to backlog and I would move it to Ready
- Then, before I started the cards for the Landing Page, I would create cards for the About Page
- Trying to always have something in the Backlog section of the Kanban board

![kanban.png](src/assets/docs/planning/milestones/kanban.png)

##### Milestones

Landing Page

- The percentage of milestones completed
- 66% complete
- Open 5
- Ten closed

![landing_page.png](src/assets/docs/planning/milestones/landing_page.png)

About Page

- The percentages of milestones completed
- 60% complete
- Open 9
- Fourteen closed

![about.png](src/assets/docs/planning/milestones/about.png)

#### [Proper Description of the Technologies used in the Project](#table-of-content)

---

### [Features](#table-of-content)

#### [Atomic Design](#table-of-content)

![atomic_design.png](src/assets/docs/features/atomic_design.png)

##### Brief Description

- The atomic design is broken down into atoms, molecules, organisms, templates and pages
- Using this approach, I can make components as re-usable as possible
- atoms form the basic building block of all life, in this case something like a button or an element like h1 tags and so on
- molecules are the next step-up it can be something like a bootstrap card, a group of atoms together to form a bigger picture or a way of mapping over items from an array
- organisms this is where the design will take shape it forms part of the higher order component, consisting of molecules and atoms or even other organisms
- templates this is normally a component that will be used on most of your pages, like a header or footer, or a layout component
- pages this will be were all your pages take shape

If you want a better explanation,
take a look at this [article](https://andela.com/blog-posts/structuring-your-react-application-atomic-design-principles)

#### [Header](#table-of-content)

##### Brief Description

- When the page is on larger devices, there will be links on the right and the logo on the left

![header - desktop.png](src/assets/docs/features/header_desktop.png)

- When on a device table or smaller the links become a hamburger menu
- This is when the hamburger menu is closed

![header_hamburger_menu.png](src/assets/docs/features/header_hamburger_menu.png)

- When the hamburger menu icon is opened with the links below

![header_hamburger_menu_closed.png](src/assets/docs/features/header_hamburger_menu_closed.png)

#### [State Store](#table-of-content)

- I have implemented a state store to reduce Prop drilling
- Prop drilling is when you keep on pass props down then up to many levels
- The state store was implemented with the help of useMemo, useReducer and useContext
- useMemo was used to stop unnecessary re-renders
- useReducer was used to keep track of state logic
- useContext was used to share state across the entire app
- I have also written a simple useAppContext hook to make it easier to call state when needed
- useAppContext hook returns two variable state and dispatch
- state is used to see what data is in your state store
- dispatch is used to update the state store passing it type and payload
- type is the reducer function that you are wanting to use
- payload is the data that you are wanting to send to the state store
- If you are wanting to see how it was done, click [here](https://docs.google.com/document/d/1IHX350WfSIrXJzxKs8IBurmX-wX1dtBG1-rPXqmIB6c/edit#heading=h.1tzm0g2fdwbe)

#### [Special features on the about page](#table-of-content)

- Added About us, mission and commitment to our customers

![about.png](src/assets/docs/features/about/about.png)

![mission.png](src/assets/docs/features/about/mission.png)

---

### [Testing](#table-of-content)

#### [Automatic testing using cypress](#table-of-content)

##### Brief Description of Automated testing

- To run cypress, make sure that react is still running
- This testing framework gives me a user interface to test
- It runs automatically on file save
- Open up a new terminal and run npx cypress open
- This will then open up a browser with cypress running

##### Authentication testing

###### Failing test?

- tested against the incorrect login credentials
- username: admin
- password: admin

![fail.png](src/assets/docs/testing/authentication/fail.png)

###### Passing the test?

- tested against the correct login credentials
- username: douglas
- password: IAMininGLOrN

![pass.png](src/assets/docs/testing/authentication/pass.png)

![cypress_passing_test.png](src/assets/docs/testing/authentication/cypress_passing_test.png)

##### [Manual Testing](#table-of-content)

Lighthouse testing

![lighthouse.png](src/assets/docs/testing/manual_testing/lighthouse.png)

HTML validation test

![html validator.png](src/assets/docs/testing/manual_testing/html_validator.png)

CSS validation test

![css validator.png](src/assets/docs/testing/manual_testing/css_validator.png)

---

### [Bugs](#table-of-content)

#### [401 Error](#table-of-content)

##### Problem?

- 401 get request unauthorized error in console
- this error only happens when I am not logged in
- when it is trying to make a get request to the API

![401 get error.png](src/assets/docs/bugs/401_get_error.png)

##### Solution?

- The solution to this problem would be so that the console doesn't show any error message
- I have not quite been able to get this right yet

#### [Carousel](#table-of-content)

##### Problem?

- The carousel is not changing correctly when adjusting the screen width
- It should be changing from animated design to standing carousel

![first.png](src/assets/docs/bugs/carousel/first.png)

- When the width gets adjusted, it also doesn't want to resize the image correctly

![second.png](src/assets/docs/bugs/carousel/second.png)

- when it is rotating and enlarging the images, it seems to shrink and enlarge the hole page
- normally just a refresh does this

![third.png](src/assets/docs/bugs/carousel/third.png)

##### Solution?

- The animated design I took out of my plans
- Rather have a standing carousel and rotates every 10 seconds

#### [Error when sending property data to API](#table-of-content)

Problem?
- When I try to send data to API
- It sends me a 500 error code
- When it should only send a message
- This is even if I am logged in

![first.png](src/assets/docs/bugs/sending_property_data/first.png)

Solution?
- This has not been solved yet?

#### [403 forbidden on logout](#table-of-content)

Problem?
- When I click on logout
- It comes with a forbidden error message
- but if I have to refresh the page then it is fine, and it shows as if I am logged out
- this error only happens sometimes not all the time

![first.png](src/assets/docs/bugs/403_forbidden_logout/first.png)

Solution?
- It Has not been solved!!

#### [Map doesn't have its own key](#table-of-content)

Problem?
- For some reason, the body of the table when mapping
- I can't seem to add a unique id
- From what I gather, it is just when I am developing locally

![first.png](src/assets/docs/bugs/map_key/first.png)

Solution?
- This Problem has not been solved yet

#### [Modal background to dark on Table display](#table-of-content)

Problem?
- For some reason, the modal is in a very dark background
- Making it pitch black, so that nothing can be seen in the background
- This only happens on laptop and larger devices

![First.png](src/assets/docs/bugs/dark_modal_background/First.png)

- This is how it should look

![Second.png](src/assets/docs/bugs/dark_modal_background/Second.png)

Solution?
- This problem has not been solved yet

#### [Footer](#table-of-content)

##### Problem?

- When scaling down, the image is slightly off
- This is just above 300 pixels

![email.png](src/assets/docs/bugs/email.png)

##### Solution?

- This has not been solved yet

#### [Footer email address off-screen](#table-of-content)

Problem?
- When scaling down between 400pixels and 300 pixels
- The email address is too long
- It goes off the screen

![first.png](src/assets/docs/bugs/footer_email_address/first.png)

Solution?
- Styled h4 heading and thumbnail to be smaller
- on smaller devices

![second.png](src/assets/docs/bugs/footer_email_address/second.png)

#### [does not want to refresh page on delete](#table-of-content)

Problem?
- The deleting of the user's profile
- Will delete but for some reason it does not want to refresh the page
- If you manually refresh, then it will show

![first.png](src/assets/docs/bugs/refresh_on_delete/first.png)

Solution?
- This problem has not been solved

---

### [Credits](#table-of-content)

- Iteration over function with the state store [here](https://stackoverflow.com/questions/59200785/react-usereducer-how-to-combine-multiple-reducers)
- Assisted in helping me get the state store correct [here](https://ricostacruz.com/til/state-management-with-react-hooks)
- Article that assisted in iterating over [reducer](https://stackoverflow.com/questions/59200785/react-usereducer-how-to-combine-multiple-reducers) functions
- Article that helps get the [state store](https://ricostacruz.com/til/state-management-with-react-hooks) up and running
- Article for getting superuser right with shell terminal [here](https://stackoverflow.com/questions/11337420/can-i-use-an-existing-user-as-django-admin-when-enabling-admin-for-the-first-tim)
- Help to get the tokens correct [here](https://medium.com/django-unleashed/securing-django-rest-apis-with-jwt-authentication-using-simple-jwt-a-step-by-step-guide-28efa84666fe)

---



























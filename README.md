# Property UK

---

![Code Institute Logo](https://camo.githubusercontent.com/654be5a252cf75ac9ac6ea453f7bfe3b2d437f3e6789ed91924bfe501b0df142/68747470733a2f2f636f6465696e737469747574652e73332e616d617a6f6e6177732e636f6d2f66756c6c737461636b2f63695f6c6f676f5f736d616c6c2e706e67)

---

## Description

This forms part of the front end for my fifth project with code institute.

This application is used to give a nice look and feel for the properties that are being looked at.
It will have a nicely displayed look and feel with a user Profile were everything can be displayed in one place.

![display.png](src/assets/docs/display.png)

Live site [here](https://ci-pps-property-react-e3272eaff8d9.herokuapp.com/)

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
  - [User Stories using MOSCOW Prioritization techniques](#user-stories-using-moscow-prioritization-techniques)
  - [Proper Description of the Technologies used in the Project](#proper-description-of-the-technologies-used-in-the-project)
- [Features](#features)
  - [Atomic Design](#atomic-design)
  - [Header](#header)
  - [State Store](#state-store)
- [Testing](#testing)
- [Bugs](#bugs)
  - [401 Error](#401-error)
- [Credits](#credits)
---

### [Planning](#table-of-content)

#### [Wireframes](#table-of-content)

#### [User Stories using MOSCOW Prioritization techniques](#table-of-content)

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

- I have written a state store for this Project
- Using useMemo, useContext and useReducer
- To improve the performance of this app
- If you are wanting to see how it was done, click [here](https://docs.google.com/document/d/1IHX350WfSIrXJzxKs8IBurmX-wX1dtBG1-rPXqmIB6c/edit#heading=h.1tzm0g2fdwbe)

---

### [Testing](#table-of-content)

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

---

### [Credits](#table-of-content)

- Iteration over function with the state store [here](https://stackoverflow.com/questions/59200785/react-usereducer-how-to-combine-multiple-reducers)
- Assisted in helping me get the state store correct [here](https://ricostacruz.com/til/state-management-with-react-hooks)
- Article that assisted in iterating over [reducer](https://stackoverflow.com/questions/59200785/react-usereducer-how-to-combine-multiple-reducers) functions
- Article that helps get the [state store](https://ricostacruz.com/til/state-management-with-react-hooks) up and running

---



























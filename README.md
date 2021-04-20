# Refactor Tractor

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Walkthrough](#walkthrough)
* [Authors](#authors)
* [Technologies](#technologies)

## Description

Objectives of this project included building on top of someone else's codebase, making network requests to API endpoints, refactor pre-existing code, ensure the app followed best practices for accessibility, leverage  sass to DRY up css, and incorporate Webpack to streamline your workflow process.

Over the course of one week, given numerous tasks with the objective of making a website with a lot of missing functionality into a useable page, we worked to prioritize most important tasks in order to produce the best possible minimum viable product that we could given our timeframe. We chose to focus most heavily on creating a robust testing suite with working class methods and to add as much functionality to the DOM as we could while learning how to manipulate the DOM from a separate DOM updates object using network requests, which we were all new to.

Some wins included the power of teamwork in overcoming codebase bugs that required all of our combined minds to solve. We were excited to learn about sass, accessibility, network requests, and using a separate DOM updates file.

Challenges included emotionally letting go of wanting to pull together the perfect project. It was a very helpful learning experience to learn to prioritize tasks around tight deadlines. The asynchronous timing of fetched data was a learning curve that took some time as a group to navigate, but we were able to learn a lot together about it and how to implement it in our DOM updates file. We successfully implemented 3 GET requests and 1 POST request (which is very hard-coded, but does work. It provides the necessary service of adding 5 to whatever the first ingredient is in a user pantry).

### Notable features
* Utilizes fetched data instead of local data
* Uses sass for organized and DRY webpage styling
* Implements semantic HTML for a tab-able user experience and for seamless use by use of a screen reader
* Test Driven Development
* Responsive Design for a pleasant experience on a a variety of differently-sized devices.

### Deploy Link
Because the page is missing important user functionality, we chose not to create a deploy link yet. We recommend following the following instructions for installation.


## Installation
1. In another terminal tab, clone down the repository at https://github.com/turingschool-examples/whats-cookin-api
2. Run npm install
3. Run npm start
4. Clone down this repository (https://github.com/RMartin0717/refactor-tractor) to your machine
5. Access cloned directory
6. Run npm install
7. Run npm start and visit localhost:8080


## Walkthrough
On load for the page, there is a nav bar at the top of the screen which greets the user (you are given your secret spy name--it is randomly selected for you. This is your identity now). There are three buttons in the nav bar. The first button doesn't appear to the user to be helpful, but it is secretly adding 5 of the first ingredient to your pantry in the API using a POST request. There is a button to display favorites, which are stored after you select your favorite recipes using the star button on the top of any recipe card. You  may also hit the home button to return to the main recipe page. On each recipe card, you can click on the image to see what ingredients are needed to make the recipe and instructions for cooking it.

Desktop

![WhatsCookinDesktop](https://user-images.githubusercontent.com/71860165/115471340-0b164380-a1f5-11eb-83d7-82ae6b082180.gif)

iPad

![WhatsCookinTabel](https://user-images.githubusercontent.com/71860165/115471358-11a4bb00-a1f5-11eb-86bb-97a81de8f2e4.gif)

Mobile

![WhatsCookingMobile](https://user-images.githubusercontent.com/71860165/115471451-3dc03c00-a1f5-11eb-88a3-ec5e94a61e7d.gif)



## Authors
<table>
    <tr>
        <td> Michann Stoner <a href="https://github.com/michannstoner">GH</td>
        <td> Riley Martin <a href="https://github.com/RMartin0717">GH</td>
        <td> Bryan Hohn <a href="https://github.com/bhohnco">GH</td>
    </tr>
    </tr>
        <td><img src="https://avatars.githubusercontent.com/u/76269802?v=4" alt="M. Stoner" width="125" height="auto" /></td>
        <td><img src="https://avatars.githubusercontent.com/u/76501236?s=460&u=56de3268b98bd73447d785601176518e3cd0141c&v=4" alt="R. Martin" width="125" height="auto" /></td>
        <td><img src="https://avatars.githubusercontent.com/u/71860165?v=4" alt="B. Hohn" width="125" height="auto" /></td>
    </tr>
</table>

## Technologies
<table>
    <tr>
        <td>Functionality</td>
        <td>Structure</td>
        <td>Styling</td>
    </tr>
    </tr>
        <td><img src="./src/images/js-icon.png" alt="javascript" width="100" height="auto" /></td>
        <td><img src="./src/images/html-logo.png" alt="html" width="100" height="auto" /></td>
        <td><img src="./src/images/css-logo.png" alt="css" width="100" height="auto" /></td>
    </tr>
</table>

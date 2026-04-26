# Webbteknik 3 (1ME323) -- Assignments

This repository is built on the assignments for the course Webbteknik 3. The purpose of the site is to have a landing page for collecting assignments with consistent global navigation and a competent structure.

## LINK TO PUBLISHED SITE:
**https://b0nken.github.io/assignments/index.html**

## ASSIGNMENTS

### Assignment 1 -- Landing page
A page used as a hub for current and future assignments.
* **Features:** Dynamic global navigation in JavaScript taking care of relative paths with responsive design.
* **Purpose:** Create a structure which work locally and on GitHub Pages

### Assignment 2 -- Web Shop
A shopping page with shopping cart funtionality
* **Features:** Renders products from data model, ability to add or remove products and a shopping cart that saves changes to LocalStorage.
* **Styling:** Takes part in both Global CSS and a specific shop.css file.

### Assignment 3 -- Guitarist Tournament
A simulated tournament between famous guitarists.
* **Features:** Renders cards with the different "players" and uses math to decide who wins in a fight by clicking a button.
* **Styling:** Takes part in both Global CSS and a specific css file assignment3.css 

### Assignment 4 -- Spökhusbyrån AB
A booking platform for staying at haunted houses.
* **Features:** Renders cards with haunted houses to stay at with a booking form and booking confirmation.
* **Styling:** Only takes part in assignment4.css for styling

---

## CONTENT/STRUCTURE

Description of important files and folders:

* **index.html** Start page that links to assignments.
* **global.css** Includes styling for header, footer and basic layout on all pages.
* **assignments/** Folder including all specific assignments.
  * *assignment1/* HTML and CSS for assignment 1.
  * *assignment2/* HTML and CSS for assignment 2.
  * *assignment3/* HTML and CSS for assignment 3.
  * *assignment4.html* Start page for assignment 4 (Haunted House list).
  * *house.html* Detail and booking page for assignment 4.
  * *assignment4.css* Specific styling for assignment 4.
* **js/** Folder including all JavaScript files.
  * *main.js* Affects the global navigation.
  * *assignment.js* Data structure for assignments on landing page.
  * *shop.js* Logic for the web shop.
  * *clothes.js* Data structure for the products in assignment 2.
  * *guitarists.json* Data for objects for assignment 3.
  * *fight.js* Exported logic for the fights assignment 3.
  * *tournament.js* Logic for the tournament.
  * *fetch.js* ES module for fetching data in assignment 4.
  * *spook.js* Logic for rendering and filtering the haunted houses.
  * *house.js* Logic for rendering house details, Leaflet map, and connecting the booking form.
  * *booking.js* Exported class `Booking` handling validation, price calculation, and receipts.
  * *utils.js* Reusable helper functions for assignment 4.
* **houses.json** Data model for the haunted houses in assignment 4.

---

## Local Installation
1. Clone this repository
2. Open folder in VS Code
3. Start using *Live Server* from *index.html*

---

**Created by:** Stellan Benckert  
**Course:** Webbteknik 3 (1ME323)
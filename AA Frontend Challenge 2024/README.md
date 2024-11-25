# Hesehus Frontend Challenge

Welcome to the Hesehus Frontend Challenge.

## Overview

This project was bootstrapped with Vite using the React Typescript template.

To complete this challenge, you will need to write a simple React based web app, and provide us the source files in a
zip-file.

The purpose of this challenge is to assess your skills and approach to composing a simple web app given a set of Figma
screens and an API feed. We will also assess the generated HTML, CSS, and JS output.

This challenge is expected to take about 2-4 hours. If you run short on time, the most important factor for us is to see
how you think, how you work and not that you complete every single requirement listed below.

## Tasks

You'll need to build a set of React components to render the app while trying to match the Figma designs
as closely as possible. You'll also need to use the provided JSON feed, filter that data, and use the relevant fields.
It is a very small-scale project, but we expect you to approach it and construct your solution as if it was a real,
production-ready project that needs to be maintained by a team of developers and extended with new features.

Although this is a basic exercise, we'll be looking for **simple, well-designed, performant, semantic and tested code**
in the submission.

Please write all markup and styling yourself and refrain from styling libraries like Bootstrap, Material UI, etc.

Please write any notes, thoughts, instructions you might have in the `Candidate Notes` section of this readme file.
E.g., if you leave out some of the requirements you are encouraged to explain how you would have approached them if you
had more time.

### Details

You will need to create the following two pages:

- A "Home" page displaying a list of products
- A "Product" page displaying a single product

You should be able to navigate between the two pages. You can use any routing library you like.
The pages should be responsive and work on mobile, tablet, and desktop. The pages should also be accessible.
You can assume that you only need to support the latest 2 major versions of Chrome, Firefox, Safari, and Edge.

#### "Home" page

    - The page should be accessible via the following route: `/`.
    - It should display a list of products fetched from the feed.
    - Each list item should display the product name, brand, price, and image.
    - Clicking on the product card should navigate to the product page.
    - The list should be sortable by product name, highest- and lowest price (using the "Sort" select).

#### "Product" page

    - The page should be accessible via the following route: `/product/:id`.
    - It should display a single product.
    - The product ID should be used to fetch the product from the feed.
    - It should display a "Back" button that navigates back to the home page.
    - It should display a "Add to basket" button that console logs the product ID.
    - It should display the product information seen in the Figma design.

## Assets

Assets are available in the `src/assets` folder.

### Design

Figma link:
https://www.figma.com/file/OwBWlJRdngF6obgsJaEOwj/Hesehus---Frontend-Test

To be able to inspect the design, you need to be logged in (with whichever account). If you don't have a Figma account,
you can create one for free.

### Feed

The JSON feed is available at `src/feed/sample.ts`.

## Candidate Notes

Please write any notes, thoughts, instructions you might have here.

This project is a solution to the Hesehus Frontend Challenge, created using Vite with the React TypeScript template. The application is a simple, responsive, and accessible web app that implements the provided Figma design and fetches product data from a JSON feed. It demonstrates my skills in React, CSS, routing, and building scalable, production-ready codebases.

Tasks Implemented:
HomePage

- lists of products with name, brand, image and price.
- sorting dropdown with sort functionality

- clicking a product card that navigates to the product's detailed page.

Product Page-\* Displays details of a single product fetched using its unique ID.

- Includes the following components:
  - Product image, name, and brand.
  - Price and description.
  - Specifications table (material, dimensions, weight, etc.).
- Features a Back button for easy navigation to the Home page.
- Includes an Add to Basket button that logs the product ID in the console.

Installation and Setup
To run the project locally:

1. Clone the Repository:
   git clone <repository_url>
   cd <repository_folder>

2. Install Dependencies:
   npm install

3. Start the Development Server:
   npm start

Tools and Technologies

- React: Component-based UI development.
- TypeScript: Strict typing for cleaner, more maintainable code.
- React Router DOM: Navigation between Home and Product pages.
- Vite: Lightweight and fast development build tool.
- CSS: Custom, responsive, and accessible styling without external libraries.

Responsive Design
The app is fully responsive, supporting the latest two versions of Chrome, Firefox, Safari, and Edge. It adapts seamlessly across mobile, tablet, and desktop devices.

Accessibility
Accessibility has been a focus throughout the project. Features include:

- Semantic HTML elements for better screen reader compatibility.
- ARIA roles where appropriate for enhanced user interaction.
- Proper contrast ratios and scalable font sizes for readability.

What I Accomplished:

- Built a complete Home page with sorting and navigation functionality.
- Developed a detailed Product page following the provided Figma designs.
- Added routing for seamless navigation between pages.
- Implemented console logging for the "Add to Basket" button.

Challenges and Solutions:

1. File Permissions: I encountered issues creating and modifying files in the src directory. I resolved this by granting write permissions to the necessary folders using commands like chmod and chown.
2. Testing Library Conflicts: There was a version mismatch between React and @testing-library/react-hooks. I resolved this by using the --legacy-peer-deps flag during installation.
   What I Would Improve with More Time:

- Search Functionality: Add a working search bar for product filtering.
- Cart System: Display the total number of items in the cart when products are added.
- Advanced Testing: Write additional unit and integration tests with Jest and React Testing Library.
- Enhanced Accessibility: Add more advanced ARIA attributes and keyboard navigation features.

Final Thoughts:
This project demonstrates my ability to:

- Break down requirements into clear, actionable tasks.
- Create well-structured, maintainable code.
- Balance design fidelity with performance and scalability.
- Tackle challenges independently while adhering to deadlines.

Folder Structure

src/
├── assets/ # Favicon and image assets
├── components/ # Reusable components (Header, Footer, ProductCard, etc.)
├── pages/ # Page components (HomePage, ProductPage)
├── feed/ # JSON feed file
├── App.tsx # Main app file with routing
├── main.tsx # Entry point for the app
└── index.css # Global styles

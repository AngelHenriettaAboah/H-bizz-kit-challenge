# H-bizz-kit-challenge

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

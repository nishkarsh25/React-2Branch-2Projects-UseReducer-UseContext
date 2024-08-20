# Shopping App

Welcome to the Shopping App! This React application allows users to manage their shopping cart efficiently. Below, you'll find detailed information about the app's features, the technologies used, how to get started with the project, usage instructions, the project structure, how to contribute, and licensing information.

## Features

- **Adding Products**: Users can browse through a list of available products and add them to their shopping cart with a simple click.
- **Updating Quantities**: In the shopping cart section, users can easily adjust the quantity of each item they want to purchase using intuitive buttons.
- **Removing Items**: If users change their mind about an item, they can conveniently remove it from their shopping cart with the click of a button.

## Live Demo

You can try out the live demo of the app [here](https://react-2branch-2projects-usereducer.onrender.com/).

## Folder Structure

```
# Root directory of the project
shopping-app/
├── node_modules/      # Dependencies installed by npm or yarn
├── public/            # Public assets (HTML, images, etc.)
│   ├── index.html     # Main HTML file
│   └── favicon.ico    # Favicon icon
├── src/               # Source code directory
│   ├── components/    # React components
│   │   ├── Cart.js    # Cart component
│   │   └── Product.js # Product component
│   ├── context/       # Context API files
│   │   ├── CartContext.js  # Context provider
│   │   └── useCart.js      # Custom hook for accessing cart context
│   ├── index.css      # Global CSS styles
│   └── App.js         # Main component of the application
├── .gitignore         # Git ignore file
├── package.json       # NPM package configuration
├── README.md          # Project README file
└── yarn.lock          # Yarn lock file (if using Yarn)


```


## Screenshots

<!-- Include screenshots or GIFs of your app here to give users a visual representation of what your app looks like. -->
<img src="https://github.com/nishkarsh25/React-2Branch-2Projects-UseReducer-UseContext/blob/ShoppingCartProject/Screenshots/ss1.png" alt="Screenshot 1" width="1000"> 


## Technologies Used

- **React**: A powerful JavaScript library for building user interfaces. React allows for the creation of reusable components, making it easy to manage complex UIs.
- **React Context API**: Used to manage global state across components. The shopping cart state is stored in a context provider, making it accessible to all components in the application.
- **useState Hook**: React hook for managing state in functional components.
- **Components**: Modular building blocks used to compose the UI, including Navbar, Shop, Cart, and Card components.
- **Tailwind CSS**: A utility-first CSS framework that provides a set of pre-built classes to style your application. Tailwind CSS allows for rapid development and consistent styling.
- **JavaScript (ES6+)**: The latest version of JavaScript is used to write the application logic. ES6+ features such as arrow functions, destructuring, and spread syntax are utilized to write clean and concise code.


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

Before running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/nishkarsh25/React-2Branch-2Projects-UseReducer-UseContext.git
   ```
2. Navigate to the project branch:

   ```bash
   git checkout <branch-name>
   ```
   Replace `<branch-name>` with the name of the branch you want to checkout.
   
3. Install dependencies:

   ```bash
   npm install
   ```

## Usage

1. **Run the development server**:

   ```bash
   npm run dev
   ```
2. **Open your browser** and navigate to http://localhost:3000 to view the app.

## How to Use

- **Adding Products to the Cart**: Browse the list of available products and click the "Add To Cart" button next to a product to add it to your shopping cart.
- **Updating Quantities**: In the shopping cart section, use the "+" and "-" buttons to increase or decrease the quantity of items.
- **Removing Items**: To remove an item from your shopping cart, click the "Remove" button next to the item.


## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Contributing

Contributions to this project are highly appreciated! Whether you discover bugs, have feature requests, or wish to contribute improvements, your input is valuable. Here's how you can contribute:

- **Report Issues:** If you encounter any bugs or issues while using MyCalculatorApp, please open an issue on the GitHub repository. Be sure to provide detailed information about the problem and steps to reproduce it.

- **Submit Pull Requests:** If you have enhancements or fixes to propose, feel free to submit a pull request. Contributions that improve the functionality, usability, or performance of this app are welcomed and encouraged.

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. **Fork the Repository**.
2. **Create a New Branch** (`git checkout -b feature/your-feature-name`).
3. **Make Your Changes**.
4. **Commit Your Changes** (`git commit -am 'Add some feature'`).
5. **Push to the Branch** (`git push origin feature/your-feature-name`).
6. **Create a New Pull Request**.

## License

This project is licensed under the [The 3-Clause BSD License](LICENSE).Feel free to explore, modify, and contribute to this project as you see fit. Your feedback and contributions are greatly appreciated! 🚀✨


## Acknowledgments

This project is made possible by the contributions and support of various individuals and communities. Special thanks to:

- **Tailwind CSS Team:** For developing Tailwind CSS, a versatile CSS framework that simplifies web development and enhances user interfaces.
  
- **Open Source Community:** For fostering collaboration, innovation, and the sharing of knowledge, which enriches projects like My Form Validation and makes them accessible to all.

## Credits

This project wouldn't be possible without the contributions of the following:

- **React**: A JavaScript library for building user interfaces. Visit [React](https://reactjs.org/) for more information.
  
- **Tailwind CSS**: A utility-first CSS framework for creating custom designs rapidly. Visit [Tailwind CSS](https://tailwindcss.com/) for more information.

- **FontAwesome**: A popular icon library providing a vast collection of icons for web development. Visit [FontAwesome](https://fontawesome.com/) for more information.

- **Netlify**: Netlify provides seamless deployment and hosting solutions, making it easy to deploy web applications and share them with the world. Visit [Netlify](https://www.netlify.com/) for more information.


## Author

- **Nishkarsh Gupta**
  - GitHub: [nishkarsh25](https://github.com/nishkash25)
  - Email: bm21btech11016@gmail.com


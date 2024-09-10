# Recipe Finder (Cooking Recipes Website)

This project is an Angular application that allows users to search for and explore recipes from various sources. The app features an interactive recipe search page and a detailed view of individual recipes, with options to suggest new recipes via a form. The application uses **Bootstrap** for responsive design and **Angular routing** for navigation between pages.

## Live Demo

🚀 **Explore the live version of Recipe Finder on GitHub Pages:** [Recipe Finder](https://mohamed-samehh.github.io/Recipe-Finder/)

GitHub Pages is used to deploy the Angular application, allowing users to interact with the recipe search functionality and view recipe details in real time.

## Table of Contents

- [Live Demo](#live-demo)
- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [APIs](#apis)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)

## Overview

Recipe Finder is designed to make it easy for users to search for recipes based on ingredients or dish names. Users can browse through recipes, view detailed instructions and ingredients, and even suggest their own recipes through a form submission. The application fetches data from a recipe API and dynamically updates the view.

## Features

- **Recipe Search**: Users can search for recipes by entering keywords such as dish names or ingredients.
- **Recipe Details**: View detailed information about a selected recipe, including ingredients, instructions, and a meal image.
- **Responsive Design**: The application is fully responsive, ensuring a smooth experience across different devices.
- **Suggest a Recipe**: Users can suggest new recipes by submitting a form with their name, email, dish name, and instructions.
- **Pagination**: Recipes are displayed in a paginated format, making it easy to browse large results sets.

## Technologies Used

- **Angular 18.2.3**: A modern framework for building single-page applications.
- **Node.js 22.8.0**: The runtime environment required to run Angular CLI and manage dependencies.
- **Bootstrap 5**: A popular CSS framework for building responsive, mobile-first projects.
- **RxJS**: Used for managing asynchronous data streams within Angular.
- **TypeScript**: Strongly typed JavaScript used throughout the application.

## APIs

This project uses the following APIs from TheMealDB:

1. **Search Recipes**: Fetches a list of recipes based on a search query.
   - **URL**: `https://www.themealdb.com/api/json/v1/1/search.php?s=`

2. **Recipe Details**: Fetches detailed information about a specific recipe using its ID.
   - **URL**: `https://www.themealdb.com/api/json/v1/1/lookup.php?i=`

## Installation

Follow these steps to install and run the Recipe Finder project:

1. **Clone the Repository**:
    - First, clone the repository from GitHub:
    ```bash
    git clone https://github.com/your-username/recipe-finder
    cd recipe-finder
    ```

2. **Install Dependencies**:
    - Install the required dependencies using npm:
    ```bash
    npm install
    ```

3. **Run the Application**:
    - After installing the dependencies, start the Angular development server:
    ```bash
    ng serve
    ```

4. **Access the Application**:
    - Open your browser and navigate to `http://localhost:4200/` to view the application.

## Usage

Once the application is running:

- **Search for Recipes**: Use the search bar to find recipes by dish name or ingredient.
- **View Recipe Details**: Click on a recipe to view detailed information such as ingredients and instructions.
- **Suggest a Recipe**: Navigate to the Suggest a Recipe page to submit a new recipe through a form.
- **Pagination**: Use the pagination controls at the bottom of the search results to browse through multiple pages of recipes.

## Deployment

The project can be ready for deployment using the following steps:

1. **Build the Project**:
   ```bash
   ng build --output-path docs --base-href /Recipe-Finder/

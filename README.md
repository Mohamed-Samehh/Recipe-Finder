# Recipe Finder (Cooking Recipes Website)

This project is an Angular application that allows users to explore and discover recipes from various sources. The app features an interactive recipe search page, detailed views of individual recipes, and options to suggest new recipes via a form. Users can browse meals by categories and explore dishes from specific geographical areas, enhancing their culinary experience. The application uses Bootstrap for responsive design and Angular routing for navigation between pages.

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

- **Search for Recipes**: Users can search for recipes by entering keywords such as dish names or ingredients. The application uses the API to fetch a list of recipes based on the search query.
- **View Recipe Details**: Click on a recipe to view detailed information, including ingredients, instructions, and a meal image. This information is retrieved using the recipe ID from the API.
- **Browse Meals by Category**: Users can view dishes from selected categories, allowing them to explore a variety of recipes grouped by type.
- **Explore Meals by Area**: Users can view dishes from specific geographical areas, enabling them to discover regional cuisines.
- **Suggest a Recipe**: Users can suggest new recipes by submitting a form with their name, email, dish name, and instructions.
- **Responsive Design**: The application is fully responsive, ensuring a smooth experience across different devices.

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
   - **Response**: A list of recipes matching the search criteria, including their IDs, names, and images.

2. **Recipe Details**: Fetches detailed information about a specific recipe using its ID.
   - **URL**: `https://www.themealdb.com/api/json/v1/1/lookup.php?i=`
   - **Response**: Detailed information about the recipe, including ingredients, instructions, and a meal image.

3. **Get All Categories**: Retrieves a list of all recipe categories.
   - **URL**: `https://www.themealdb.com/api/json/v1/1/categories.php`
   - **Response**: A list of all available recipe categories.

4. **Filter Meals by Category**: Fetches meals filtered by a specific category.
   - **URL**: `https://www.themealdb.com/api/json/v1/1/filter.php?c=`
   - **Response**: A list of recipes that belong to the specified category.

5. **Get All Areas**: Retrieves a list of all areas.
   - **URL**: `https://www.themealdb.com/api/json/v1/1/list.php?a=list`
   - **Response**: A list of geographical areas available for filtering.

6. **Filter Meals by Area**: Fetches meals filtered by a specific area.
   - **URL**: `https://www.themealdb.com/api/json/v1/1/filter.php?a=`
   - **Response**: A list of recipes that belong to the specified area.

## Installation

Follow these steps to install and run the Recipe Finder project:

1. **Clone the Repository**:
    - First, clone the repository from GitHub:
    ```bash
    git clone https://github.com/your-username/Recipe-Finder
    cd Recipe-Finder
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

- **Search for Recipes**: Use the search bar to find recipes by dish name or ingredient. The application fetches results dynamically from the API.
- **View Recipe Details**: Click on a recipe to view detailed information such as ingredients and instructions. The details are fetched based on the selected recipe's ID.
- **Suggest a Recipe**: Navigate to the Suggest a Recipe page to submit a new recipe through a form.
- **Browse Meals**: Users can explore recipes by categories or areas, enhancing their culinary experience without needing to search.

## Deployment

The project can be ready for deployment on GitHub Pages using the following command:

1. **Build the Project**:
   ```bash
   ng build --output-path docs --base-href /Recipe-Finder/

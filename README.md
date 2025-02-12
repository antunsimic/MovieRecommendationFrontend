
# Movie Recommendation App

Movie Recommendation App is a web application built with React and Vite that displays movie recommendations based on user country, film prominence, and even seasonal (Christmas) themes.

## Features

- **Country Detection:** Automatically sets the user’s country based on a third-party API.
- **Movie Recommendation:** Fetches a movie recommendation based on the selected country's film prominence.
- **Dynamic Prominence:** Options vary based on the selected country’s size.
- **Seasonal Theme:** Enables Christmas-themed recommendations during the holiday season.
- **Responsive UI:** Optimized for both landscape and portrait orientations.
- **Easy Navigation:** Uses React Router for routing.


## Installation

1. **Clone the Repository:**

   ```sh
   git clone <repository-url>
   cd movieRecommendationFrontend
   ```

2. **Install Dependencies:**

   ```sh
   npm install
   ```

3. **Run the Development Server:**

   ```sh
   npm run dev
   ```

4. **Access the Application:**

   Open your browser and navigate to [http://localhost:5173](http://localhost:5173).

## Available Scripts

- **`npm run dev`**  
  Runs the app in development mode with hot module replacement.

- **`npm run build`**  
  Builds the project for production.

- **`npm run preview`**  
  Serves the production build locally.

- **`npm run lint`**  
  Checks the project for linting issues using ESLint.

## Technologies Used

- **React 18:** UI library for building interactive interfaces.
- **Vite:** Fast build tool and development server.
- **Material UI (MUI):** Provides prebuilt React components.
- **Emotion:** CSS-in-JS library for styling.
- **React Router:** For client-side routing.
- **ESLint:** Code linting and quality.


## Acknowledgements

- Movie data is fetched from a backend (hosted on Heroku).
- TMDB logo and assets are used for display.
- Thanks to the creators and contributors of all open-source libraries used.

## Contact

Created by [Antun Simić](https://antunsimic.github.io/resume/). If you like this project, consider supporting it on [Buy Me a Coffee](https://buymeacoffee.com/antunsimic).

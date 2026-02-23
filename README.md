[![Netlify Status](https://img.shields.io/badge/Netlify-Deployed-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://protein-sorter.netlify.app/)

**🚀 [Live Demo: Try the Protein Sorter Here!](https://protein-sorter.netlify.app/)**
# Protein Sorter 🥚

Protein Sorter is a lightweight, interactive web application that allows users to input various food items and visually sorts them based on their protein content per 100g. 

## 🚀 Features

* **Visual Sorting Animation**: Watch as the app sorts your food list using an asynchronous Merge Sort algorithm, rendering the step-by-step changes on screen.
* **Built-in Protein Database**: Includes a static dictionary of common foods (like chicken, eggs, tofu, lentils, and more) with their respective protein values per 100g.
* **Dark & Light Mode**: A built-in theme toggle allows users to switch between light and dark modes for comfortable viewing.
* **Responsive Design**: The UI is styled with CSS variables and flexbox, ensuring it looks great on both desktop and mobile devices.
* **Interactive UI**: Features animated food cards with tooltips and hover effects.

## 🛠️ Technologies Used

* **HTML5**: Semantic structure and accessible ARIA labels.
* **CSS3**: Custom properties (variables), transitions, 3D transforms, and responsive media queries.
* **Vanilla JavaScript**: DOM manipulation, event handling, and asynchronous sorting logic.

## 📁 File Structure

* `index.html`: The main markup file containing the UI structure and CSS styles.
* `protein-sorter.js`: The application logic, including the protein database, rendering functions, and the Merge Sort algorithm.
* `protein.png`: The icon used to visually represent the food items on the animated cards.

## 💻 Installation and Setup

1. **Clone the repository** (or download the files directly).
2. Ensure all three files (`index.html`, `protein-sorter.js`, and `protein.png`) are located in the same directory.
3. Open `index.html` in your preferred modern web browser. No local server or build tools are required!

## 🏃‍♂️ Usage

1. Open the application in your browser.
2. In the input field, enter a comma-separated list of foods (e.g., `egg, chicken, tofu, lentils`).
3. Click the **Sort by Protein** button.
4. Watch the animated cards rearrange themselves from highest protein content to lowest.

## 📁 Project Structure

```
Protein Sorter
├── index.html
├── protein-sorter.js
└── protein.png
```


Deployed Link:https://protein-sorter.netlify.app/

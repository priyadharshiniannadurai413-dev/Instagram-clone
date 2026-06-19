# 📸 Instagram Clone

A responsive Instagram clone built with React and Vite that replicates core Instagram UI features including stories, posts, and user navigation — powered by JSON Server as a mock backend.

---

## 🚀 Features

- 📖 Browse Posts feed with like and comment UI
- 🎞️ View and navigate Stories with URL params
- 🔗 React Router DOM for smooth page navigation
- 🗄️ JSON Server as mock REST API backend
- 🖼️ Images served via public/assets/ folder
- 🧩 Clean component-based architecture

---

## 🛠️ Tech Stack

- React (Vite)
- React Router DOM
- JSON Server
- HTML5 & CSS3
- JavaScript (ES6+)

---

## 📦 Installation & How to Run

### Step 1 — Clone the repository
```bash
git clone https://github.com/priyadharshiniannadurai413-dev/Instagram-clone.git
```

### Step 2 — Navigate into the project folder
```bash
cd Instagram-clone
```

### Step 3 — Install dependencies
```bash
npm install
```

### Step 4 — Start JSON Server (mock backend)
```bash
npx json-server --watch data/Db.json --port 3000
```

### Step 5 — Start the React app (open a new terminal)
```bash
npm run dev
```

### Step 6 — Open in browser
```
http://localhost:5173
```

---

## ⚠️ Important Notes

- Make sure **Node.js** is installed on your system
- Run **JSON Server and React app in separate terminals**
- JSON Server runs on `http://localhost:3000`
- React app runs on `http://localhost:5173`

---

## 🗂️ Folder Structure

```
Instagram-clone/
├── public/
│   └── assets/
│       └── images/
├── src/
│   ├── components/
│   ├── pages/
│   ├── App.jsx
│   ├── main.jsx
│   └── config.js
├── data/
│   └── Db.json
├── index.html
├── package.json
└── vite.config.js
```

---

## 🖼️ How It Works

1. JSON Server serves mock data (posts, stories, users) from `Db.json`
2. React fetches data from JSON Server via API calls
3. React Router DOM handles navigation between pages
4. Stories are navigated using URL params
5. Images are loaded from `public/assets/` folder

---

## 💡 Key Concepts Used

- React Components & Props
- React Router DOM (createBrowserRouter, RouterProvider)
- URL Params for Story Navigation
- JSON Server as Mock REST API
- fetch / Axios for API calls
- CSS3 for responsive UI

---

## 👩‍💻 Developed By

Priyadharshini A — ECE Graduate | Aspiring Front-End Developer

---

## 📌 Project Status

🚧 Completed

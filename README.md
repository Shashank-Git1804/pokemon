# 🃏 Pokémon Cards React App

A modern, animated, and searchable Pokémon card gallery built with **React**, **GSAP**, and the **PokéAPI**. Explore 100+ Pokémon, filter by name or type, switch between light/dark themes, and enjoy smooth animations!

---

## 🚀 Features

Feature                        Description

🐱 **Pokémon Data Fetch**     Fetches data for 102 Pokémon using async API calls from the [PokéAPI](https://pokeapi.co).
🔍 **Search & Filter**        Filter Pokémon by **name** or **type** via input and dropdown.
🌗 **Theme Toggle**           Switch between **light** and **dark** modes using a button toggle.
🎞 **GSAP Animations**         Smooth scroll and load animations using **GSAP**.
⚡ **Stat Display**           View Pokémon height, weight, HP, attack, defense, and abilities.
🎨 **Responsive Design**      Clean layout that adapts to any screen with animated visual elements.

---

## 🛠️ Tech Stack

- ⚛️ **React** – Frontend framework
- 🎨 **GSAP** + **ScrollTrigger** – For animations
- 🔍 **PokéAPI** – Free Pokémon data API
- 🌤️ **React Icons** – Icons for light/dark modes
- 🧠 **@gsap/react** – For GSAP hooks in React

---

## 📁 Project Structure


---

## 🎬 Component Walkthrough

### 🧾 `Card.js` - Main Logic

#### 🎯 Purpose:
The `Card` component:
- Fetches data from PokéAPI
- Stores & filters it using `useState` & `useEffect`
- Animates cards & UI using `useGSAP` and `gsap.timeline()`
- Allows dark/light mode toggling

#### ⚙️ React Hooks Used

| Hook         | Purpose |
|--------------|---------|
| `useState()` | State for Pokémon, search, dropdown filter, mode |
| `useEffect()`| Fetch data & filter on input changes |
| `useGSAP()`  | Handle GSAP animations in React |

---

## 📦 Data Displayed

Each Pokémon Card includes:

- 🖼️ Pokémon image
- 🧬 Name (capitalized)
- 🔥 Type(s)
- 📏 Height
- ⚖️ Weight
- ❤️ HP
- 🛡️ Defense
- ⚔️ Attack
- 🎯 Abilities (dropdown list)

---

## 🧠 Smart Functionality

- **Responsive UI** with smooth fade/scale animations
- **Client-side filtering** with instant updates
- **Fallback messages** for loading state and 404 search results
- **Dynamic background elements** styled based on theme

---

## 📸 Preview

_Include a screenshot or screen recording here of the app UI._

---

## 🧪 Future Enhancements

- 🌀 Card flip animation for back-side details
- 📊 Filter by stats (HP, weight, etc.)
- ❤️ Favorite Pokémon feature with localStorage
- 🗂️ Pagination or infinite scroll
- 🌍 Multi-language support

---

## 📚 API Reference

- [PokéAPI - https://pokeapi.co](https://pokeapi.co)
  - `/pokemon?offset=0&limit=102` → Fetch first 102 Pokémon
  - Each Pokémon data contains:
    - `sprites`, `types`, `stats`, `abilities`, etc.

---

## 👨‍💻 How to Run Locally

```bash
# Clone the repository
git clone https://github.com/yourusername/pokemon-cards-app.git

# Navigate to the project
cd pokemon-cards-app

# Install dependencies
npm install

# Start the development server
npm run dev

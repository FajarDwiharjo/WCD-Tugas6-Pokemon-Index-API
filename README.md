# WCD-Tugas5-Pokemon-Index
 
# 🧩 WCD-Tugas5-Pokemon-Index

A web-based Pokédex built using **React + Vite + Tailwind CSS**, fetching data from [PokeAPI](https://pokeapi.co). This app includes features like live search, sorting, local caching, and responsive UI with animations.

## ✨ Features

- 🔍 **Live Search** for Pokémon by name  
- 📊 **Sorting Options** by name and ID  
- 📁 **Client-side Caching** with expiration to reduce API calls  
- 📱 **Responsive Grid View** with toggle  
- 🧫 **Pokémon Detail Page** with types, stats, abilities  
- ⚡ **Tailwind CSS Styling** and **Framer Motion Animations**

## 📦 Tech Stack

- [React 19](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Router DOM](https://reactrouter.com/)
- [Lucide React](https://lucide.dev/)

---

## 📁 Folder Structure

```
src/
├─ API/              # Custom hooks (e.g., usePokemons, usePokemonDetail)
├─ Components/       # UI components
├─ Config/           # Constants like API base URL, cache config
├─ Context/          # Filter context provider
├─ Pages/            # Home and Detail pages
├─ Utility/          # Helpers (e.g., sorting, type coloring)
├─ types/            # TypeScript interfaces
```

---

## 💻 How to Run This Project (From Scratch)

### 1. Clone the Repository

```
git clone https://github.com/FajarDwiharjo/WCD-Tugas5-Pokemon-Index.git
cd WCD-Tugas5-Pokemon-Index
```

### 2. Install Dependencies

```
npm install
```

### 3. Run the Development Server

```
npm run dev
```

This will start the app on `http://localhost:5173`.

---

## 🔎 Code Snippets

📦 API Integration Example

This application fetches Pokémon data from the PokéAPI using React's useEffect and useState hooks.
```
import React, { useEffect, useState } from 'react';

function PokemonList() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
      .then(response => response.json())
      .then(data => setPokemons(data.results))
      .catch(error => console.error('Error fetching Pokémon data:', error));
  }, []);

  return (
    <ul>
      {pokemons.map(pokemon => (
        <li key={pokemon.name}>{pokemon.name}</li>
      ))}
    </ul>
  );
}

export default PokemonList;
```

Explanation:

    useState initializes the pokemons state to store the fetched data.

    useEffect triggers the data fetch when the component mounts.

    The fetched data is set to the pokemons state.

    The component renders a list of Pokémon names.
    
---

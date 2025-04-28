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

### usePokemons.tsx – Fetch & Cache Pokémon List

```
const cachedData = localStorage.getItem('pokemon-cache-1000');
if (cachedData && !isExpired(cachedData)) {
  setPokemons(JSON.parse(cachedData));
  setLoading(false);
  return;
}

const response = await fetch(`${API_BASE_URL}/pokemon?limit=1000`);
const data = await response.json();
```

### getTypeBadgeColor.ts – Assign Tailwind Class by Type

```
const typeColors: { [key: string]: string } = {
  fire: 'bg-red-500',
  water: 'bg-blue-500',
  grass: 'bg-green-500',
  electric: 'bg-yellow-500',
  ...
};

return typeColors[type] || 'bg-gray-500';
```

### home.tsx – Sorting & Filtering Logic

```
const filtered = pokemons.filter((p) =>
  p.name.toLowerCase().includes(searchTerm.toLowerCase())
);

const sorted = sortPokemons(filtered, sortKey);
```

---

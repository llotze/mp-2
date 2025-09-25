# MP-2: Random User Display

A React + TypeScript application that fetches and displays random user data with styled components.

## Project Overview

This project demonstrates the single-tasking principle by separating data retrieval from UI rendering:
- **Data Layer**: [`App.tsx`](projects/mini-projects/mp-2/src/App.tsx) handles API calls and state management
- **UI Layer**: [`RandomUsers.tsx`](projects/mini-projects/mp-2/src/components/RandomUsers.tsx) renders the user interface

## Features

- Fetches 6 random users from the [Random User API](https://randomuser.me/)
- Displays user information including name, age, location, email, and phone
- Gender-based color theming (blue for male, purple for female)
- Responsive design with styled-components
- TypeScript for type safety

## Tech Stack

- **Frontend**: React 19, TypeScript
- **Styling**: Styled Components
- **Build Tool**: Vite
- **API**: Random User API
- **Deployment**: Vercel

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/llotze/mp-2
cd mp-2
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/
│   └── RandomUsers.tsx      # UI component for displaying users
├── interfaces/
│   └── Characters.ts        # TypeScript interfaces
├── App.tsx                  # Main component with data fetching
└── main.tsx                # Application entry point
```

## Live Demo

🔗 **[View Live Application](https://mp-2-eight-plum.vercel.app/)**

## Author

**Lucas Lotze**  
📧 llotze@bu.edu  
🐙 [GitHub Repository](https://github.com/llotze/mp-2)

## Course Information

Created for **CAS CS391** - Topics in Computer Science  
Boston University, Fall 2025

## License

© 2025 Lucas Lotze. All rights reserved.
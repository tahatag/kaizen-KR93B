# Initial task for KR93B Senior Frontend Software Engineer | Seyed Mohammad Taha Taghados

This project is a React application designed to list, search, and display details about users fetched from the [DummyJSON](https://dummyjson.com/) API.

You can visit the project's Demo [Here](https://kaizen-kr93b.vercel.app/)

## Features

### Functional Features:

- **List Users**: Display users in a table with the following fields:
  - First Name
  - Last Name
  - Email
  - Phone
  - Company Name
- **Pagination**: Fetches and displays 10 users per page, loading data on-demand as the user navigates through pages.
- **Search**: Users can search by name to quickly locate specific entries.
- **User Details View**: Clicking on the view button shows additional details about the user, including:
  - First Name, Last Name, Email, Phone
  - Company Name, Address, Department, and Title

### Technical Stack:

- **React**: Utilized for building the interface.
- **Vite**: A fast and optimized build tool.
- **TypeScript**: Typed codebase for improved reliability and developer experience.
- **Redux**: State management to handle user data and application logic.
- **Shadcn/ui and TailwindCSS**: Modern UI components for consistent styling.
- **Biome**: Light-weight linting and formatting tool for maintaining code quality.
- **Husky**: Pre-commit hooks ensure linting and formatting are applied before every commit.
- **Lucide**: Beautiful & consistent icons.

## Installation and Setup

### Prerequisites:

- **Node.js** (v18+ recommended)
- **pnpm** (v8+ recommended)

### Steps to Run Locally:

1.  Clone the repository:

    ```bash
    git clone https://github.com/tahatag/kaizen-KR93B
    cd kaizen-KR93B
    ```

2.  Install dependencies:

    ```bash
    pnpm install
    ```

3.  Start the development server:

    ```bash
    pnpm dev
    ```

4.  Open the app in your browser:

    ```plaintext
    http://localhost:5173
    ```

## Scripts

- `dev`: Start the Vite development server.
- `build`: Build the application for production.
- `preview`: Preview the production build locally.
- `lint` and `lint:fix`: Run Biome to lint _and fix_ the codebase
- `format`: Format the codebase using Biome.
- `check` and `check:fix`: Run biome format, lint _and fix_ the codebase.

## API Details

### Endpoint:

- **Base URL**: `https://dummyjson.com`
- **User List**: `/users`
- **Example Query**:

  ```bash
  GET https://dummyjson.com/users?limit=10&skip=0
  ```

---

## Folder Structure

```plaintext
.
├── public/             # Static assets
├── src/
│   ├── assets/     	# Reusable assets
│   ├── components/     # Reusable components
│   ├── lib/            # Utilities
│   ├── store/          # Redux slices and store setup
│   ├── types/          # Types and interfaces
│   └── main.tsx        # Entry point
│	└── App.tsx         # Main app file
├── package.json        # Project configuration
├── tailwind.config.js  # TailwindCSS configuration
└── vite.config.ts      # Vite configuration
```

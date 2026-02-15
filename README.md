# Bookmark Website

A full-stack bookmark management web application built with a modern,
scalable architecture for a fast and responsive user experience.
It allows users to securely save, manage, and organize their favorite
web links with authentication and real-time database integration.

------------------------------------------------------------------------

## Table of Contents

- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Architecture & Folder Structure](#architecture--folder-structure)  
- [Setup & Installation](#setup--installation)  
- [Environment Variables](#environment-variables)
- [Application FLow](#application-flow)  
- [Contributing](#contributing)  
- [License](#license)  
- [Acknowledgements](#acknowledgements)  

------------------------------------------------------------------------

## Features

-   User Authentication powered by Supabase
-   Add, view, and manage bookmarks
-   Responsive UI built with Tailwind CSS
-   Dark/Light theme support
-   Real-time database integration
-   Toast notifications
-   Modular and reusable components

------------------------------------------------------------------------

## Tech Stack

### Frontend

-   Next.js
-   React
-   Tailwind CSS
-   Lucide React
-   React Icons
-   React Hot Toast
-   next-themes

### Backend & Database

-   Supabase
-   Supabase Authentication
-   PostgreSQL (via Supabase)

------------------------------------------------------------------------

## Architecture & Folder Structure

Bookmark_Website/ ├── lib/ # Supabase configuration
├── public/ # Static assets
├── src/ # Application source code
│ ├── app/ # Pages (App Router)
│ ├── components/ # Reusable components
│ └── styles/ # Global styles
├── next.config.mjs
├── tailwind.config.mjs
├── postcss.config.mjs
├── package.json
└── README.md

------------------------------------------------------------------------

## Setup & Installation

### Prerequisites

-   Node.js (v18+ recommended)
-   npm or yarn
-   Supabase account

### Clone Repository

git clone https://github.com/jai1309/Bookmark_Website.git
cd Bookmark_Website

### Install Dependencies

npm install

------------------------------------------------------------------------

## Environment Variables

Create a `.env.local` file in the root directory:

NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your_supabase_publishable_key

Restart the development server after adding environment variables.

------------------------------------------------------------------------

## Application Flow

1.  User signs up or logs in using Supabase authentication.
2.  Authenticated users can add bookmarks (title + URL).
3.  Bookmarks are stored securely in Supabase database.
4.  Users can view and manage saved bookmarks dynamically.

------------------------------------------------------------------------

## Contributing

Contributions are welcome!

1. Fork the repository
2. Create a branch:

   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:

   ```bash
   git commit -m "Add some feature"
   ```
4. Push to your fork:

   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a Pull Request

------------------------------------------------------------------------

## License

This project is licensed under the MIT License.

------------------------------------------------------------------------

## Acknowledgements

-   Next.js
-   Supabase
-   Tailwind CSS
-   Vercel

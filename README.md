# Bookmark Website

A full-stack bookmark management web application built with a modern,
scalable architecture for a fast and responsive user experience.
It allows users to securely save, manage, and organize their favorite
web links with authentication and real-time database integration.

------------------------------------------------------------------------

## Table of Contents

- [Features](#features)  
- [Tech Stack](#tech-stack)
- [Challenges Faced](#Challenges)
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

## Challenges

During this project, I faced several challenges, especially because I
was transitioning from a MERN stack background to working with Next.js
and Supabase.

### 1. Understanding Supabase Architecture

Problem: Coming from Express and MongoDB, I was used to building my own
backend. Supabase works differently since it provides authentication,
database, and real-time features as a service. Initially, it was
confusing how authentication, database policies, and API calls were
connected.

Solution: I spent time reading the documentation, breaking down the
concepts into smaller parts, and testing features in isolation. I also
used AI to simplify complex documentation and guide me step-by-step.
Once I understood how Supabase handles auth and database access
internally, integration became much easier.

### 2. Implementing Real-Time Updates

Problem: One of the key requirements was updating bookmarks in real time
without refreshing the page. I had never implemented real-time
subscriptions using Supabase before.

Solution: I learned how Supabase channels and subscriptions work. After
enabling real-time on the table, I set up a subscription listener in the
frontend to update the state whenever changes occurred.

### 3. Row Level Security (RLS)

Problem: Understanding and configuring Row Level Security was initially
difficult. Without proper policies, users could either not access their
own data or potentially access others' data.

Solution: I carefully studied how Supabase passes the authenticated user
context to the database. I created policies that restricted access based
on auth.uid(). I tested with multiple user accounts to ensure data
isolation worked correctly.

### 4. TypeScript Boilerplate to JavaScript

Problem: Many Supabase and Next.js examples were written in TypeScript,
while my project was built in JavaScript as I am familiar with it.

Solution: I translated the TypeScript boilerplate into JavaScript,
ensuring proper syntax adjustments and removing type definitions while
maintaining functionality.

### 5. Styling and Component Structure

Problem: Maintaining a clean, responsive layout while keeping components
reusable required restructuring at times.

Solution: I modularized components, reused utility classes effectively,
and refined the UI iteratively until it was consistent and responsive.

------------------------------------------------------------------------

## Architecture & Folder Structure

Bookmark_Website/ ├── lib/ \# Supabase configuration\
├── public/ \# Static assets\
├── src/ \# Application source code\
│ ├── app/ \# Pages (App Router)\
│ ├── components/ \# Reusable components\
│ └── styles/ \# Global styles\
├── next.config.mjs\
├── tailwind.config.mjs\
├── postcss.config.mjs\
├── package.json\
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

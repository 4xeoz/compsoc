# CompSoc Website

![CompSoc Logo](public/images/logo.png)

Welcome to the **CompSoc Website** repository! This project serves as the official website for the Computer Science Society (CompSoc), providing members and visitors with information about events, membership, and more. Built with modern web technologies, the site offers a seamless and secure experience for all users.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
 

## Features

- **Public Pages**: Accessible to all visitors, including Home, Members, and Events pages.
- **Authentication**: Secure login system for members using NextAuth.js.
- **Protected Routes**: Certain pages like Admin Dashboard are restricted to authenticated users.
- **API Integration**: Robust API routes for handling authentication and data fetching.
- **Responsive Design**: Mobile-friendly layout ensuring a seamless experience across devices.
- **Dynamic Content**: Real-time updates for events and announcements.
- **SEO Optimized**: Enhanced search engine visibility with proper meta tags and structure.
- **Custom Middleware**: Advanced route protection and handling using Next.js middleware.

## Demo

![Homepage Screenshot](public/images/homepage.png)
*Homepage showcasing upcoming events and membership information.*

[View Live Demo](https://compsoc.example.com)

## Technologies Used

- **Framework**: [Next.js](https://nextjs.org/) (React Framework)
- **Authentication**: [NextAuth.js](https://next-auth.js.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **State Management**: React Context API
- **API**: Next.js API Routes
- **Deployment**: [Vercel](https://vercel.com/)
- **Version Control**: Git & GitHub

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/en/) (v14 or later)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

### Installation

   ```bash
   git clone https://github.com/yourusername/compsoc-website.git
   cd compsoc-website

   git clone https://github.com/yourusername/compsoc-website.git
   cd compsoc-website

   npm install

   npm run dev

   or

   npm run build
```


---


This README was generated with ❤️ by the CompSoc WebMasters Team 2024/2025 .


---

### Notes for Usage:

- **Replace Placeholder Content**: Ensure you replace placeholder links (e.g., `https://github.com/yourusername/compsoc-website.git`, `https://compsoc.example.com`) and contact information with actual data relevant to your project.

- **Images**: Make sure the images referenced (e.g., `public/images/logo.png`, `public/images/homepage.png`) exist in your repository's `public/images` directory. Update the paths if your image structure differs.

- **Environment Variables**: Populate the `.env.local` file with actual credentials and secrets. Never commit sensitive information to your repository.

- **Authentication Providers**: Update `auth.config.js` with the correct providers and ensure all necessary environment variables for authentication (like `GITHUB_ID`, `GITHUB_SECRET`, etc.) are set.

- **Deployment URL**: Update the live demo link to point to your actual deployed site.

- **Contributing Guidelines**: If you have a `CONTRIBUTING.md` file, ensure it contains detailed guidelines for contributors. Similarly, ensure the `LICENSE` file is present and correctly reflects your project's licensing.

- **Custom Middleware**: If there are additional middleware configurations or specific routing logic beyond what's outlined, consider expanding the "Middleware and Routing" section accordingly.

Feel free to customize the README further to better fit the unique aspects of your CompSoc website project.




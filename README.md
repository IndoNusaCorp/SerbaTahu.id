content = """# SerbaTahu - Article Web Application (Legacy Repository)

> **⚠️ DEPRECATION NOTICE & ARCHIVE STATUS:**
> Please read before proceeding. This repository contains the old, legacy source code for the **SerbaTahu** project. This specific iteration of the application is officially deprecated, no longer maintained, and the files within this repository are no longer used in any active development or production environments. 

## Welcome to the Open Source Archive

Instead of simply deleting this outdated codebase, we have decided to open-source and preserve this legacy repository for the broader developer community. Our primary goal is to provide a valuable learning resource for beginner developers who are just starting their journey into web development, frontend engineering, or the Next.js ecosystem. 

We believe in sharing knowledge and giving back to fellow developers. If you are a student or a junior developer trying to understand how a modern article website is structured using React and Next.js, this repository serves as a perfect, distraction-free sandbox. You can clone this project, study the component hierarchy, explore the page routing, and experiment with the user interface without worrying about complex backend configurations or breaking a live system.

## Project Architecture: The Hardcoded Database

One of the most critical aspects to understand about this specific version of SerbaTahu is its data management architecture. To keep the application as lightweight and accessible as possible for the initial prototyping phase, this project **strictly utilizes a hardcoded database**. 

All of the articles, blog posts, author details, timestamps, and metadata you see in the application are written manually and stored directly within the local project files (typically formatted as static JSON files or local TypeScript array objects). 

To be absolutely clear, this repository **does not** connect to or communicate with any external databases or cloud storage solutions. You will not find any integrations with:
* **Supabase**
* **Firebase Storage**
* **Firebase Firestore**
* **PostgreSQL, MySQL, or MongoDB**
* **Any other Backend-as-a-Service (BaaS) provider**

### Why is this beneficial for beginners?
By relying entirely on a hardcoded database, we have removed the barrier to entry. You do not need to register for cloud accounts, configure complicated `.env` environment variables, set up database schemas, or handle asynchronous API fetching just to get the website running on your local machine. You can immediately see how data flows from a simple local file directly into the frontend UI components. 

### A Challenge for New Developers
Because this is a legacy file with a static data source, it presents an excellent learning exercise. Once you are comfortable with how the hardcoded data works, we challenge you to take this codebase and upgrade it yourself! Try replacing our hardcoded local arrays by connecting the application to a real backend like Supabase or Firebase Firestore. Transitioning a static site to a fully dynamic, database-driven application is a fantastic way to level up your software development skills.

---

## Getting Started

This is a [Next.js](https://nextjs.org) project bootstrapped with `create-next-app`. To run this legacy project locally, follow the instructions below.

First, clone the repository to your local machine and install the dependencies. Then, run the development server:

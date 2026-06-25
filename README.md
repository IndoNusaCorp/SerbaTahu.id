# SerbaTahu - Article Web Application (Legacy Repository)

> **⚠️ DEPRECATION NOTICE & ARCHIVE STATUS**
> Please read this notice carefully before exploring the codebase. This repository contains the **old, legacy source code** for the SerbaTahu project. This particular version of the application has been officially deprecated and is **no longer maintained**. None of the files in this repository are used in any active development, staging, or production environment. Development on SerbaTahu has since moved on to a different setup, and this codebase now exists purely as a historical snapshot and educational resource — it has not been touched or updated for a long time.

## 📖 About SerbaTahu

SerbaTahu was originally built as a simple **article-based web application** — think of it as a lightweight blog or news platform where users can browse, read, and explore written content such as articles, posts, and author profiles. It was developed using **React** and **Next.js**, which makes it a useful reference point for anyone curious about how a modern frontend framework structures pages, components, and routing for a content-driven website.

## 🗃️ Welcome to the Open Source Archive

Rather than deleting this outdated codebase entirely, we made the decision to open-source and preserve it as a legacy repository for the wider developer community. Our main goal here is simple: to give back. We want this old codebase to serve as a useful, distraction-free learning resource for beginner developers, students, and anyone who is just starting their journey into frontend engineering or the Next.js ecosystem.

If you're a junior developer trying to understand how a typical article website is structured using React and Next.js, this repository can act as a clean and approachable sandbox. You're free to clone the project, inspect the component hierarchy, study the page routing logic, and experiment with the UI — all without worrying about complicated backend setups, environment configuration, or accidentally breaking a live, production system. Since this project has already been retired, there's nothing here that can "go wrong" in any real sense, which makes it a safe space to explore and learn at your own pace.

## 🏗️ Project Architecture: The Hardcoded Database

One of the most important things to understand about this particular version of SerbaTahu is how it manages data. To keep the project as lightweight, simple, and accessible as possible during its early prototyping phase, this version of the application **strictly relies on a hardcoded database**.

In practice, this means that all of the articles, blog posts, author details, timestamps, categories, and other metadata visible throughout the application are written manually and stored directly inside the project's local files — typically as static JSON files or local TypeScript array objects.

To be absolutely transparent: this repository **does not** connect to, fetch from, or communicate with any external database or cloud storage solution. You will not find any integration with:

- **Supabase**
- **Firebase Storage**
- **Firebase Firestore**
- **PostgreSQL, MySQL, or MongoDB**
- **Any other Backend-as-a-Service (BaaS) provider**

Every single piece of content rendered on the screen comes purely from static, hardcoded data sitting inside the repository itself, with no asynchronous network calls to an external data source involved.

### 🌱 Why Is This Beneficial for Beginners?

By depending entirely on a hardcoded database, this project removes nearly every barrier to entry that usually slows beginners down. There's no need to register for cloud accounts, configure complicated `.env` environment variables, design database schemas, or handle asynchronous API fetching just to get the application running locally.

Instead, you can immediately observe how data flows from a simple local file straight into the frontend UI components, without any of the extra complexity that a real backend would normally introduce. This makes it much easier to focus purely on understanding React components, Next.js routing, and UI rendering logic, rather than getting stuck on backend plumbing before even seeing a single page render.

### 🚀 A Challenge for New Developers

Because this is a retired, static-data-driven legacy project, it also doubles as a great learning exercise. Once you feel comfortable with how the hardcoded data is structured and consumed throughout the app, we encourage you to take this codebase further and upgrade it yourself.

Try replacing the hardcoded local arrays with a real, dynamic backend such as Supabase or Firebase Firestore. Successfully transforming a fully static site into a dynamic, database-driven application is an excellent way to push your skills to the next level, and this old SerbaTahu codebase gives you a perfectly safe, low-risk starting point to practice exactly that kind of migration.

---

## ⚙️ Getting Started

This is a [Next.js](https://nextjs.org) project, originally bootstrapped using `create-next-app`. Even though this version of SerbaTahu is no longer maintained, the project can still be cloned and run locally purely for learning and reference purposes by following the steps below.

First, clone the repository to your local machine:

```bash
git clone https://github.com/your-username/serbatahu.git
cd serbatahu
```

Next, install all the required dependencies:

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Once the server is running, open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

This repository is shared in the spirit of open learning and knowledge sharing among developers. Feel free to explore, fork, modify, and reuse any part of this codebase to support your own growth as a developer. 🌱

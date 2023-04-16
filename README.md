# twitter-clone project

<img width="1270" alt="twitter-clone" src="https://user-images.githubusercontent.com/80589780/232315066-ff730d6a-11d7-4199-97ce-9d6414f8439a.png">

The Twitter-Clone project is a web application that replicates the basic functionality of the social media platform Twitter. The project is built with several modern web technologies, including React, Tailwind CSS, Next.js, Prisma, MongoDB, and NextAuth.

The application allows users to create an account, authenticate themselves, create posts, follow other users, and more. The project includes features such as user authentication, user profiles, and a timeline of posts from users that the user is following.

React is used as the primary library for building the user interface of the application, while Tailwind CSS provides a utility-first CSS framework for quickly styling the web application. Next.js provides a framework for building server-rendered React applications, while Prisma provides a type-safe ORM for Node.js and TypeScript. MongoDB is used as the database for storing user data and posts, and NextAuth provides a complete authentication solution for Next.js applications.

The project is structured in a way that separates the main pages of the application from reusable components and global styles. The application includes a set of utility functions that are used throughout the codebase.

## Getting Started
To get started with this project, follow these steps:
1. Clone the repository to your local machine using: 
``` 
https://github.com/Harshalvk/twitter-clone.git
````
2. Insatll the necessary dependencies by running `npm install`.
3. Start the development server by running `npm run dev`.
4. Open http://localhost:3000 in your web browser to view the application.

## Technologies Used
This project uses the following technologies:
- React: A JavaScript library for building user interfaces.
- Tailwind CSS: A utility-first CSS framework for quickly styling web applications.
- Nextjs: A framework for building server-rendered React applications.
- Prisma: A type-safe ORM (Object-Relational Mapping) for Node.js and TypeScript.
- MongoDB: A document-based NoSQL database.
- NextAuth: A complete authentication solution for Next.js applications.

## Folder Structure
This project is structured as follows:
- `pages/`: Contains the main pages for the application, such as the home page, user profile page, and more.
- `componens/`: Contains the reusable components used throughout the application.
- `styles/`:  Contains the global styles for the application.
- `hooks/`: Contains all the hooks used in the project.
- `prisma/`: Contains schema for prisma.
- `libs/`: Contains all the API calls.

Note: I made this project with help of this [tutorial](https://youtu.be/ytkG7RT6SvU).


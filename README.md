# Full-Stack Turborepo Boilerplate with Vite, React, Express, and MongoDB

This project is a full-stack boilerplate that uses [Turborepo](https://turbo.build/repo) for managing both frontend and backend. It includes:

- Frontend: Vite + React
- Backend: Express.js
- Authentication: JWT
- Database: MongoDB (Mongoose)
- Styling: Tailwind CSS

The project comes with a pre-configured basic `User` model, `Login` and `Register` pages, and a basic `Dashboard` for authenticated users. The backend API also includes middleware to protect routes requiring authentication.

## Getting Started

To start the project:

1. Install dependencies from the root:

   ```bash
   npm install
   ```

2. Run the development server:

   ```bash
   npm run dev
   ```

This will start both the frontend and backend at the same time. The frontend will be accessible at:

```
http://localhost:5173/
```

## API Routes

All API routes are accessible under:

```
http://localhost:5173/api/
```

## Environment Variables

In the `apps/backend` folder, there is a `.env` file that handles sensitive configurations such as the MongoDB connection and JWT secret key. You will need to provide the following environment variables:

```env
MONGO_URI="mongodb+srv://<username>:<password>@cluster0.rz1pv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
JWT_SECRET="v3ryS3cure&L0ngS3cr3tKeyTh@tIsH@rdToGu3ss!"
```

- `MONGO_URI`: This is the connection string for MongoDB. Replace with your own MongoDB connection URL.
- `JWT_SECRET`: This is the secret key used for signing JWT tokens. Ensure it is a long, complex string to maintain security.

## TailwindCSS

Tailwind CSS is already set up and ready to use for styling.

## Installing Additional Packages

If you need to add a React package for the frontend, navigate to the frontend app directory and install it:

```bash
cd apps/frontend
npm install <package-name>
```

To add packages for the backend, go to the backend app directory:

```bash
cd apps/backend
npm install <package-name>
```

## Additional Info

- The backend API comes with JWT-based authentication and route protection middleware.
- The frontend includes a basic `Login`, `Register`, and `Dashboard` page.

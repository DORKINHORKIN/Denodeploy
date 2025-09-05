# Denodeploy Monorepo

This is a monorepo with backend API using Hono and frontend using HTMX and Tailwind.

## Structure

- `backend/`: Hono API server
- `frontend/`: Static HTML with HTMX and Tailwind

## Running

To run the backend:
```
deno task dev-backend
```

To run the frontend:
```
deno task dev-frontend
```

Backend runs on http://localhost:3000
Frontend runs on http://localhost:8000

Open the frontend in browser and click the button to fetch from API.

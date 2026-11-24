# Wedding Planner

Team project by Alan Kołodziej, Błażej Knap, Dominik Gos and Martyna Klimczak.

A wedding planning application for events, guests and RSVPs, tasks, vendors and expenses. The backend uses Spring Boot and Oracle. The frontend uses React and TypeScript.

## Run locally

Use Java 17 or later, Docker Compose and Node.js 24. From the repository root, prepare the backend environment.

```sh
cd backend/wedding-planner
cp -n .env.example .env
```

Fill in `ORACLE_PASSWORD` and `APP_USER_PASSWORD` for a new local Oracle database. Generate a signing key with `openssl rand -base64 32` and set it as `JWT_SECRET`. Fill in `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` for a development OAuth client with the callback `http://localhost:8080/login/oauth2/code/google`. Leave the Stripe variables empty to use the mock payment gateway.

```sh
docker compose up -d
set -a
. ./.env
set +a
# Wait for Oracle to report that it is ready.
./mvnw spring-boot:run
```

In a separate terminal, run the frontend from the repository root.

```sh
cd frontend
npm ci
npm run dev
```

Open `http://localhost:5173`. Vite proxies `/api` to port 8080. The local profile seeds demo data. Payments can use Stripe test keys in sandbox mode. Some API routes allow unauthenticated access, so use this setup only for local demonstrations.

Run `./mvnw test` from the backend directory for the test suite, which uses H2 for integration tests. Run `npm test` from `frontend/` for the frontend suite.

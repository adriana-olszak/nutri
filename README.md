# Nutri

This repository is a personal playground and a work-in-progress (WIP) project. It's an exploration of various technologies to build a nutrition-focused application. The primary goal is to experiment with concepts like Retrieval-Augmented Generation (RAG) using open Llama models, monorepo management with Nx, backend development with NestJS, and various data processing pipelines.

## Core Features (Planned/In-Progress)

*   Recipe parsing from photos (OCR).
*   Matching recipe ingredients against a standardized food database.
*   Meal planning and nutritional analysis.
*   Dynamic frontend form generation based on backend schemas.
*   And much more as experimentation continues.

## Implemented Features

Based on the server modules and documentation, here is a rundown of the main features that appear to be implemented in the backend:

1.  **Authentication and User Management (`auth`, `data-access-users`)**
    *   A robust authentication system using JWTs.
    *   Social login capabilities, specifically with Google OAuth.
    *   Standard email/password registration with secure password hashing (using bcrypt).
    *   A dedicated data access layer for user-related database operations.

2.  **Recipe Management (`recipe-management`, `parse-recipe`, `recipe-import`)**
    *   Advanced API structure for handling recipes, including creating drafts, managing ingredients and steps separately, and fetching composite recipe views. This is detailed in `adr/002-api.md`.
    *   Functionality to parse recipes from external sources.
    *   A system for importing recipes, likely from structured data or URLs.

3.  **AI-Powered Ingredient Matching (`ingredient-matching`, `ml`, `queue`)**
    *   This is a core feature of the application. It automatically matches ingredients from recipes to a standardized food database.
    *   **Version 2** of the system (detailed in `apps/docs/src/ingredent_matching_system_v2.md`) uses a sophisticated two-step process:
        1.  **Vector Similarity Search:** Uses ML model embeddings (`pgvector` in PostgreSQL) to find the most likely food candidates quickly.
        2.  **LLM Analysis:** A Large Language Model (Llama 3) then analyzes the top candidates to determine the best match with a confidence score and reasoning.
    *   The matching process is handled asynchronously using a background job queue (`bullmq`) to avoid blocking API requests.

4.  **Dynamic, Schema-Driven APIs (`adr/003-schema-driven-forms.md`, `adr/004-extended-json-schama.md`)**
    *   The backend can automatically generate and expose schemas for frontend forms.
    *   This means validation rules and UI hints (like what kind of widget to use for a field) are defined once in the backend, ensuring consistency and speeding up frontend development.

5.  **Asynchronous Job Queues (`queue`)**
    *   Uses BullMQ to manage background jobs, ensuring long-running tasks like AI matching or data imports don't slow down the user experience.
    *   Includes a dashboard (`@bull-board`) for monitoring and managing these queues.

6.  **Abstracted Data Access (`db-client`, `data-access`, `adr/005-orm-abstraction.md`)**
    *   The application uses the Repository Pattern to abstract database logic away from the main business logic.
    *   This was a deliberate architectural choice to make it easier to switch ORMs in the future (e.g., from Prisma to Drizzle) without rewriting large parts of the application.

7.  **Email Notifications (`mailer`, `emails`)**
    *   A system for sending transactional emails (e.g., for registration or notifications).
    *   It uses React (`@react-email`) to build email templates, allowing for modern and maintainable email designs.

8.  **Observability (`metrics`)**
    *   The application is instrumented for monitoring. As seen in `apps/docs/src/local_development_setup.md`, it's set up to integrate with a full observability stack including:
        *   **Prometheus** for metrics.
        *   **Loki** for log aggregation.
        *   **Tempo** for distributed tracing.
        *   **Grafana** for visualization.

## Getting Started

To get the project running locally, please refer to the local development setup guide.

```bash
# Example command to start all services
docker-compose up -d

# For a full database reset and data import
pnpm db:nutri:reset:full
```

For detailed instructions, see the [Local Development Setup](./apps/docs/src/local_development_setup.md) documentation.

## Architecture

The project's architecture is documented through a series of Architectural Decision Records (ADRs). These documents outline the key technical decisions, their context, and consequences.

*   [ADR-001: Unit Testing Approach](./adr/001-unit-testing.md)
*   [ADR-002: API Structure for Recipe Management](./adr/002-api.md)
*   [ADR-003: Schema-Driven Form Management](./adr/003-schema-driven-forms.md)
*   [ADR-004: Extended JSON Schema for Advanced Form Controls](./adr/004-extended-json-schama.md)
*   [ADR-005: ORM Abstraction for Database Operations](./adr/005-orm-abstraction.md)

## Documentation

Comprehensive documentation for the project, including setup guides, system design, and deployment information, is available in the [docs](./apps/docs/src/README.md) section. The [summary](./apps/docs/src/SUMMARY.md) provides a good overview of all available topics.
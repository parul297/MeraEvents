🎟️ Event & Attendee Management Portal

A full-stack event management dashboard built with Next.js, Prisma, and TanStack Query. The application allows users to manage events and attendee registrations with a modern, responsive UI and dark mode support.

✨ Features

Event Management

Create, edit, delete, and view events

Manage title, date, description, and capacity

Search and filter events

Indicators for past and fully booked events

Attendee Management

Register attendees for events

View, update, and delete registrations

Prevent duplicate emails

Capacity validation

Search attendees by name or email

User Experience

Dark / light mode

Responsive design

Loading states and empty views

Toast notifications

Error handling with retry support

Data & Forms

TanStack Query for server state

Optimistic UI updates

React Hook Form with Zod validation

🛠️ Tech Stack

Frontend

Next.js (App Router)

React & TypeScript

Tailwind CSS

Shadcn/UI

TanStack Query

Backend

Next.js API Routes

Prisma ORM

PostgreSQL

🚀 Getting Started
git clone <repository-url>
cd event-attendance-portal
npm install


Create a .env file:

DATABASE_URL="postgresql://username:password@localhost:5432/database_name"


Run database setup and start the app:

npx prisma migrate dev
npm run dev


Open http://localhost:3000

📄 Notes

This project was built as part of a technical assessment to demonstrate:

Full-stack development skills

Modern Next.js architecture

Clean UI/UX practices

Database design with Prisma

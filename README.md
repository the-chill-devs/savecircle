# SaveCircle

## System Overview

This project is a monorepo containing the following packages:

- Mobile (Expo Native)
- API (NestJS backend)
- Web (Next.js frontend)

It is a system created for the purpose of financial accountability between/among friends. It will feature
aspects such as: budgeting, tracking, and tracking of expenses.

## Key Features

- Budgeting
- Tracking
- Tracking of Expenses

## Technology Stack

- **Mobile**: React Native
- **Backend**: NestJS
- **Frontend**: Next.js

## Installation & Setup

### Installation Steps

1. Clone the repository
2. Run `npm install --workspaces` to install packages for all workspaces
3. Run `npm run dev` to start the development server for all workspaces concurrently
4. (Optional) Should you choose to want to run an individual workspace, run `npm run dev --filter @repo/<workspace>`
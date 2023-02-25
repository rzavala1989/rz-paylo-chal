THIS DOCUMUENTATION IS UNDER CONSTRUCTION! PLEASE KEEP ON LOOKUP AND THANK YOU! - Ricardo Zavala

_FOLDERS WILL ALSO BE REORGANIZED FOR EASE OF USE IN DEMO_

# Introduction

This is for potential job placement. I have tried my best to abide by the honor system and not spend _too_ much time in this application.

Frontend is built with NextJS
Backend is built on a Prisma server with a Postgres database

I chose Next.js and Prisma because these two as a pair are designed to scale easily, so they can be used to build applications that are capable of handling large amounts of traffic and data

# How to run

- Clone the repo
- Install dependencies with `npm install`
- For local DB setup, you will need to install Postgres and create a database called `paylocity-db`
- Run Prisma with `npx prisma migrate dev --name init`
- Generate Prisma client with `npx prisma generate`
- Run the development server with `npm run dev`

# Improvements

- So it is unfinished, but I have a few ideas on how to improve it
- Payroll component is not implemented, but there is a placeholder for it that would calculate the costs of benefits, in case the cost of benefits changes, or the criteria for discounted benefits changes
- Its a little bit of a mess on the UI side, but I think it is a good start, especially not an app we are supposed to create and spin up in a few hours

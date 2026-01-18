# DevLancers Project Report

## Project Overview
**Name:** DevLancers  
**Description:** A full-stack web application connecting clients with freelancers for service offerings, project management, and real-time communication.

## Tech Stack
### Backend
- **Runtime:** Node.js with TypeScript  
- **Framework:** Express.js  
- **Database:** MongoDB  
- **Authentication:** Passport.js (JWT, OAuth2 Google)  
- **File Management:** ImageKit  
- **Email Service:** SMTP-based email service  
- **Build Tool:** TypeScript Compiler (tsc)  

### Frontend
- **Framework:** React 19  
- **Language:** TypeScript  
- **Build Tool:** Vite  
- **Styling:** Tailwind CSS  
- **Component Library:** Shadcn/ui  
- **Real-time Communication:** Socket.io  
- **HTTP Client:** Axios  
- **State Management:** React Context API  
- **Deployment:** Vercel  

## Key Features
- **User Management:** Registration, authentication, profile management, password recovery.  
- **Gig Management:** Create, view, and manage gigs.  
- **Purchasing & Orders:** Secure payment handling and order tracking.  
- **Real-time Messaging:** One-to-one chat functionality with notifications.  
- **Category Management:** Predefined service categories for easy navigation.  
- **Image Management:** Image upload and validation with ImageKit integration.  
- **User Roles & Permissions:** Role-based access control.  

## Libraries and Dependencies
### Backend (`package.json`)
- **Key Libraries:**  
  - `express`: Web framework for building APIs.  
  - `mongoose`: ODM for MongoDB.  
  - `passport`: Authentication middleware for Node.js.  
  - `nodemailer`: For sending emails via SMTP.  
  - `multer`: Middleware for handling file uploads.  

### Frontend (`package.json`)
- **Key Libraries:**  
  - `react`: Library for building user interfaces.  
  - `react-router-dom`: For routing in React applications.  
  - `tailwindcss`: For styling the application with utility classes.  
  - `axios`: For making HTTP requests to the backend API.  
  - `sonner`: For displaying toast notifications.  

## Environment Configuration
- **Environment Variables:** Ensure to set up a `.env` file with the following:  
  - `FRONTEND_URL`: URL of the frontend application.  
  - `MONGO_URI`: Connection string for MongoDB.  
  - SMTP settings for email service.  

## Deployment
- **Vercel Configuration:** Set up the project in Vercel and configure environment variables.  

## Next Steps
1. **Complete Code Review:** Analyze remaining files and document additional functionalities.  
2. **Testing:** Implement unit and integration tests.  
3. **Documentation:** Ensure all code is well-documented and user guides are available.  

## Personalization
- Identify areas for customization, such as branding and user interface adjustments.
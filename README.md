Chaloo 🏞️ - Your Next Adventure Awaits!
A full-stack travel discovery and booking platform designed to help users find and plan their perfect getaways across India. From serene backwaters to adventurous mountain expeditions, Chaloo provides curated information to make travel planning seamless and enjoyable.

🔴 Live Demo: https://chaloo-the-next-adventure.vercel.app/ 

🌟 About The Project
This project was built as a capstone to demonstrate a full-stack web development environment, including frontend, backend, database management, user authentication, and payment gateway integration. The core idea is to solve a common problem for travelers in India: finding reliable, consolidated information for weekend trips and curated tour packages.

Chaloo moves beyond simple listings by providing essential details like local guides, transportation, nearby amenities, and authentic user reviews.

✨ Features
Browse Destinations: A beautiful, responsive gallery of curated Indian travel destinations.

Detailed Views: Each destination has its own page with a detailed description, image gallery, user reviews, and pricing.

User Authentication: Secure user sign-up and login functionality implemented using Firebase Authentication.

Booking System: A foundational booking system that allows authenticated users to initiate a booking process.

Payment Gateway Integration: Securely process payments using Razorpay, integrated via a serverless backend.

Fully Responsive: Designed to work beautifully on desktops, tablets, and mobile devices.

🛠️ Tech Stack
This project is built with a modern, robust, and scalable tech stack.

Category

Technology

Frontend



Backend



Database



Payments



Deployment



🚀 Getting Started
To get a local copy up and running, follow these simple steps.

Prerequisites
Make sure you have the following installed on your machine:

Node.js (v18 or later)

npm or yarn

Firebase CLI (npm install -g firebase-tools)

Installation & Setup
Clone the repository:

git clone https://github.com/sri18-cmd/Chaloo-The_Next_Adventure.git
cd Chaloo-The_Next_Adventure

Install NPM packages:

npm install

Set up Environment Variables:

Create a file named .env.local in the root of your project.

Copy the contents of the .env.example file (if provided) or add the variables listed below.

You will need to get these keys from your own Firebase and Razorpay accounts.

Run the development server:

npm run dev

Open http://localhost:3000 with your browser to see the result.

🔧 Environment Variables
To run this project, you will need to add the following environment variables to your .env.local file.

# Firebase Configuration
# Get these from your Firebase project settings
NEXT_PUBLIC_FIREBASE_API_KEY=....
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=....
NEXT_PUBLIC_FIREBASE_PROJECT_ID=.....
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=....
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=...
NEXT_PUBLIC_FIREBASE_APP_ID=...

# Razorpay API Keys
# Get these from your Razorpay dashboard (use test keys for development)
RAZORPAY_KEY_ID=rzp_test_...
RAZORPAY_KEY_SECRET=your_razorpay_secret_key

☁️ Deployment
This application is deployed on Vercel. The CI/CD pipeline is configured so that any push to the main branch will automatically trigger a new deployment.

All environment variables listed above must also be added to the Vercel project settings to ensure a successful build.

🛣️ Roadmap
Here are some features planned for the future:

[ ] AI Itinerary Generator: Allow users to generate custom travel plans based on their interests and budget.

[ ] Collaborative Trip Planner: A feature for groups to plan and vote on trip details together.

[ ] Expanded User Profiles: Let users track their travel history, create wishlists, and upload photos.

[ ] Admin Dashboard: A panel for managing destinations, bookings, and users.

📄 License
This project is licensed under the MIT License. See the LICENSE file for more information.

📬 Contact
Sri - @sri18-cmd

Project Link: https://github.com/sri18-cmd/Chaloo-The_Next_Adventure

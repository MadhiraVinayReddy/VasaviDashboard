# 🎓 Vasavi Dashboard — College Admin Portal

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-brightgreen?style=for-the-badge)](https://cllgportal.netlify.app/)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Firebase](https://img.shields.io/badge/Firebase-Auth%20%2B%20Firestore-FFCA28?style=for-the-badge&logo=firebase)](https://firebase.google.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.x-38BDF8?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![Netlify](https://img.shields.io/badge/Deployed%20on-Netlify-00C7B7?style=for-the-badge&logo=netlify)](https://netlify.com/)

A responsive, full-stack college administration dashboard that allows college admins to manage institutional information, track expenses, and control multi-role user access — all in real time.
basic firebase crud operation Dummy Credentials: userName:admin@gmail.com password:Admin1

> **Live:** [https://cllgportal.netlify.app/](https://cllgportal.netlify.app/)

---

## 📸 Screenshots

> _Add screenshots here by dragging images into this section on GitHub_

| Dashboard Overview | Expense Tracker | Login / Auth |
|---|---|---|
| ![dashboard]() | ![expenses]() | ![login]() |

---

## ✨ Features

- 🔐 **Multi-User Authentication** — Role-based login system using Firebase Authentication (Admin / User roles)
- 📊 **Expense Tracking** — Admins can log, view, and manage college expenses in real time
- 🏫 **College Info Management** — Add and update institutional data through a clean admin interface
- ☁️ **Real-Time Database** — Firestore integration for live data sync across sessions without page refresh
- 📱 **Fully Responsive** — Optimized for desktop, tablet, and mobile using Tailwind CSS utility classes
- ⚡ **Fast & Lightweight** — Built as a Single Page Application (SPA) with React for seamless navigation

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend Framework | React.js (SPA) |
| Styling | Tailwind CSS |
| Authentication | Firebase Authentication |
| Database | Cloud Firestore (NoSQL) |
| Hosting | Netlify |
| Language | JavaScript (ES6+) |

---

## 🚀 Getting Started

### Prerequisites

- Node.js v16+
- npm or yarn
- A Firebase project (free tier works)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/MadhiraVinayReddy/vasavi-dashboard.git

# 2. Navigate into the project
cd vasavi-dashboard

# 3. Install dependencies
npm install

# 4. Set up environment variables
cp .env.example .env
# Fill in your Firebase config values in .env

# 5. Start the development server
npm start
```

The app will run at `http://localhost:3000`

### Environment Variables

Create a `.env` file in the root with your Firebase project config:

```env
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```

---

## 🏗️ Project Structure

```
vasavi-dashboard/
├── public/
│   └── index.html
├── src/
│   ├── components/        # Reusable UI components
│   ├── pages/             # Route-level page components
│   ├── firebase/          # Firebase config & initialization
│   ├── context/           # React Context for auth state
│   ├── hooks/             # Custom React hooks
│   ├── App.js
│   └── index.js
├── tailwind.config.js
├── .env.example
└── package.json
```

---

## 🔒 Authentication Flow

1. User visits the portal and is redirected to the login page
2. Firebase Authentication validates credentials
3. On success, user role is fetched from Firestore
4. Admin users get full access; regular users see a restricted view
5. Session persists across page refreshes via Firebase's auth state listener

---

## 📦 Deployment

This project is deployed on **Netlify** with continuous deployment from the main branch.

```bash
# Build for production
npm run build

# The /build folder can be deployed to any static hosting service
# (Netlify, Vercel, Firebase Hosting, AWS S3 + CloudFront)
```

---

## 🗺️ Roadmap

- [ ] Add data export (CSV/PDF) for expense reports
- [ ] Email notifications for admin actions
- [ ] Dark mode toggle
- [ ] Student/Faculty module

---

## 👤 Author

**Madhira Vinay Kumar Reddy**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=flat&logo=linkedin)](https://linkedin.com/in/madhira-vinay-kumar-reddy)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-181717?style=flat&logo=github)](https://github.com/MadhiraVinayReddy)
[![Email](https://img.shields.io/badge/Email-Contact-EA4335?style=flat&logo=gmail)](mailto:madhiravinaykumarreddy@gmail.com)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

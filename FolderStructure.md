```resume-analyzer
├──frontend/
   ├── .env                      # Environment variables
   ├── .gitignore               # Git ignore file
   ├── eslint.config.js         # ESLint configuration
   ├── index.html               # Main HTML file
   ├── package.json             # Project dependencies and scripts
   ├── README.md                # Project documentation
   ├── vite.config.js           # Vite configuration
   │
   ├── public/                  # Static files
   │   └── vite.svg            # Vite logo
   │
   └── src/                     # Source code
       ├── App.css             # App styles
       ├── App.jsx             # Main App component
       ├── index.css           # Global styles
       ├── main.jsx           # Entry point
       │
       ├── assets/            # Media files
       │   └── react.svg
       │
       ├── components/        # Reusable components
       │   ├── loader/       # Loading components
       │   │   ├── Loader.jsx
       │   │   └── loader.css
       │   │
       │   ├── resume/       # Resume components
       │   │   ├── Achievements.jsx
       │   │   ├── Awards.jsx
       │   │   ├── Certificate.jsx
       │   │   ├── Education.jsx
       │   │   ├── Goals.jsx
       │   │   ├── Hobbies.jsx
       │   │   ├── PersonalInformation.jsx
       │   │   ├── Projects.jsx
       │   │   ├── ResumePreview.jsx
       │   │   ├── Skill.jsx
       │   │   └── WorkExperience.jsx
       │   │
       │   ├── Call-to-Action.jsx
       │   ├── DashboardHome.jsx
       │   ├── FAQ.jsx
       │   ├── Features.jsx
       │   ├── Footer.jsx
       │   ├── How-It-Works.jsx
       │   ├── MyDocuments.jsx
       │   ├── Navbar.jsx
       │   ├── ProtectedRoute.jsx
       │   ├── PTS.jsx
       │   ├── Sidebar.jsx
       │   └── Testimonials.jsx
       │
       ├── context/           # Context providers
       │   ├── LoaderContext.jsx
       │   └── ResumeContext.jsx
       │
       ├── hooks/            # Custom hooks
       │   └── useRouteTransition.js
       │
       ├── pages/            # Page components
       │   ├── auth/        # Authentication pages
       │   │   ├── log-in/
       │   │   │   └── login.jsx
       │   │   └── sign-in/
       │   │       └── signin.jsx
       │   │
       │   ├── Contact.jsx
       │   ├── CoverLetterBuilder.jsx
       │   ├── Dashboard.jsx
       │   ├── FAQ.jsx
       │   ├── Features.jsx
       │   ├── Home.jsx
       │   ├── Pricing.jsx
       │   ├── PrivacyPolicy.jsx
       │   ├── ResumeAnalizer.jsx
       │   ├── ResumeBuilder.jsx
       │   ├── SuccessStories.jsx
       │   ├── TemplatesGallery.jsx
       │   └── TermsofService.jsx
       │
       ├── routes/           # Routing configuration
       │   └── AppRoutes.jsx
       │
       └── utils/           # Utility functions
           └── aiService.js # AI integration service```

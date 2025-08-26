# URL Shortener 🔗

A modern, full-stack URL shortener application built with React and Node.js. Transform long URLs into short, shareable links with click tracking and management features.

## 🚀 Features

- **URL Shortening**: Convert long URLs into short, manageable links
- **URL Management**: Update, delete, and view statistics for your shortened URLs
- **Copy to Clipboard**: Easy one-click copying of shortened URLs
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Clean, gradient-based interface built with Tailwind CSS

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client for API requests
- **Lucide React** - Beautiful icons
- **ESLint** - Code linting and formatting

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database with Mongoose ODM
- **nanoid** - URL-safe unique ID generator
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **MongoDB** (local installation or MongoDB Atlas)

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/ShubHH03/url-shortner.git
cd url-shortner
```

### 2. Backend Setup

Navigate to the backend directory:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Rename `.env.sample` to `.env` and Update the file with your configuration:

```env
# Port on which the server will run
PORT=3000

# MongoDB connection string (replace with your actual string in your .env file)
MONGODB_URL=mongodb://your-mongodb-url-here

# Base URL for generating short URLs
BASE_URL=http://localhost:5000
```

Start the backend server:

```bash
npm start
```

The backend server will start on `http://localhost:3000`

### 3. Frontend Setup

Navigate to the frontend directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Rename `.env.sample` to `.env` and Update the file with your configuration:

```env
# URL where your backend API is running
VITE_API_URL=http://your-backend-url
```

Start the frontend development server:

```bash
npm run dev
```

The frontend application will start on `http://localhost:5173`

## 🎯 Usage

1. **Shorten a URL**: Paste any long URL into the input field and click "Submit"
2. **Copy Short URL**: Click the "Copy" button next to the generated short link
3. **Access Original URL**: Visit the short URL to be redirected to the original link
4. **Track Clicks**: Use the stats endpoint to see how many times your URL has been accessed

### Code Style

This project uses:
- **Prettier** for code formatting
- **ESLint** for code linting
- **Tailwind CSS** for styling

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🔍 Project Structure

```
url-shortner/
├── backend/
│   ├── src/
│   │   ├── controllers/     # Route controllers
│   │   ├── db/             # Database connection
│   │   ├── models/         # Mongoose models
│   │   ├── routes/         # API routes
│   │   ├── utils/          # Utility functions
│   │   ├── app.js          # Express app setup
│   │   └── index.js        # Server entry point
│   ├── .env.sample         # Environment variables template
│   └── package.json        # Backend dependencies
├── frontend/
│   ├── src/
│   │   ├── App.jsx         # Main React component
│   │   └── main.jsx        # React entry point
│   ├── public/             # Static assets
│   ├── .env.sample         # Environment variables template
│   ├── index.html          # HTML template
│   ├── tailwind.config.js  # Tailwind CSS configuration
│   ├── vite.config.js      # Vite configuration
│   └── package.json        # Frontend dependencies
└── README.md               # This file
```

## Getting Help

If you encounter any issues:
1. Check the console for error messages
2. Verify all environment variables are set correctly
3. Ensure all dependencies are installed
4. Check that both frontend and backend servers are running

---

Made with ❤️ by [ShubHH03](https://github.com/ShubHH03)

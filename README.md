# URL Shortener 🔗

A modern, full-stack URL shortener application built with React and Node.js. Transform long URLs into short, shareable links with click tracking and management features.

## 🚀 Features

- **URL Shortening**: Convert long URLs into short, manageable links
- **Click Tracking**: Monitor how many times your shortened URLs are accessed
- **URL Management**: Update, delete, and view statistics for your shortened URLs
- **URL Validation**: Ensures only valid HTTP/HTTPS URLs are accepted
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

Create environment file:

```bash
cp .env.sample .env
```

Update the `.env` file with your configuration:

```env
# Port on which the server will run
PORT=8001

# MongoDB connection string
MONGODB_URL=mongodb://localhost:27017/urlshortner
# Or for MongoDB Atlas:
# MONGODB_URL=mongodb+srv://username:password@cluster.mongodb.net/urlshortner

# Base URL for generating short URLs
BASE_URL=http://localhost:8001
```

Start the backend server:

```bash
npm start
```

The backend server will start on `http://localhost:8001`

### 3. Frontend Setup

Open a new terminal and navigate to the frontend directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Create environment file:

```bash
cp .env.sample .env
```

Update the `.env` file:

```env
# URL where your backend API is running
VITE_API_URL=http://localhost:8001
```

Start the frontend development server:

```bash
npm run dev
```

The frontend application will start on `http://localhost:5173`

## 📖 API Documentation

### Base URL
```
http://localhost:8001/api
```

### Endpoints

#### 1. Shorten URL
**POST** `/api/shorten`

**Request Body:**
```json
{
  "url": "https://example.com/very-long-url"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Short URL created successfully",
  "data": {
    "url": "https://example.com/very-long-url",
    "shortCode": "abc123xy",
    "newShortUrl": "http://localhost:8001/abc123xy"
  }
}
```

#### 2. Redirect to Original URL
**GET** `/:shortCode`

Redirects to the original URL and increments access count.

#### 3. Update URL
**PUT** `/api/:shortCode`

**Request Body:**
```json
{
  "url": "https://new-updated-url.com"
}
```

**Response:**
```json
{
  "success": true,
  "message": "URL updated successfully",
  "updateUrl": {
    "_id": "...",
    "url": "https://new-updated-url.com",
    "shortCode": "abc123xy",
    "accessCount": 5,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
}
```

#### 4. Get URL Statistics
**GET** `/api/stats/:shortCode`

**Response:**
```json
{
  "success": true,
  "message": "accessCount fetched successfully",
  "originalUrl": "https://example.com",
  "visitCount": 5
}
```

#### 5. Delete URL
**DELETE** `/api/:shortCode`

**Response:**
```json
{
  "success": true,
  "message": "Url deleted successfully",
  "deletedCode": "abc123xy",
  "deletedUrl": "https://example.com"
}
```

#### 6. Health Check
**GET** `/healthcheck`

Simple health check endpoint that returns "OK" for deployment platforms and monitoring.

**POST** `/api/healthcheck`

Detailed health check endpoint.

**Response:**
```json
{
  "success": true,
  "message": "Server is running fine"
}
```

## 🎯 Usage

1. **Shorten a URL**: Paste any long URL into the input field and click "Submit"
2. **Copy Short URL**: Click the "Copy" button next to the generated short link
3. **Access Original URL**: Visit the short URL to be redirected to the original link
4. **Track Clicks**: Use the stats endpoint to see how many times your URL has been accessed

## 🌐 Deployment

### Backend Deployment (Render/Heroku/Railway)

1. Set up environment variables in your deployment platform:
   - `PORT` (usually automatically set)
   - `MONGODB_URL` (your MongoDB connection string)
   - `BASE_URL` (your deployed backend URL)

2. The backend includes a health check endpoint at `/healthcheck` for monitoring

### Frontend Deployment (Vercel/Netlify)

1. Build the frontend:
   ```bash
   npm run build
   ```

2. Set the environment variable:
   - `VITE_API_URL` (your deployed backend URL)

3. Deploy the `dist` folder

## 🔧 Development

### Available Scripts

#### Backend
- `npm start` - Start the production server
- `npm run dev` - Start development server with nodemon (if configured)

#### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

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

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

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

## 🐛 Troubleshooting

### Common Issues

1. **MongoDB Connection Failed**
   - Ensure MongoDB is running locally or check your Atlas connection string
   - Verify network access and credentials

2. **CORS Errors**
   - Check that the backend CORS configuration allows your frontend URL
   - Ensure `VITE_API_URL` points to the correct backend URL

3. **Build Errors**
   - Clear node_modules and reinstall dependencies
   - Check Node.js version compatibility

### Getting Help

If you encounter any issues:
1. Check the console for error messages
2. Verify all environment variables are set correctly
3. Ensure all dependencies are installed
4. Check that both frontend and backend servers are running

---

Made with ❤️ by [ShubHH03](https://github.com/ShubHH03)
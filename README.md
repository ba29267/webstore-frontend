# Webstore Frontend

A modern e-commerce web application built with Angular 21, featuring a comprehensive admin dashboard for managing products, orders, and inventory.

## 🚀 Features

- **Customer Features:**
  - Browse and search products
  - Shopping cart functionality
  - Order placement and tracking
  - User authentication (login/register)

- **Admin Features:**
  - Product management (CRUD operations)
  - Order management and status updates
  - Category, Brand, Size, Color, Gender management
  - Sales reports and analytics
  - Discount management

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** (v10.2.4 or higher) - Comes with Node.js
- **Angular CLI** (v21.0.1 or higher) - Install globally with `npm install -g @angular/cli`
- **Backend API** - The backend server should be running on `http://localhost:3000`

## 🛠️ Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd webstore-frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Verify installation:**
   ```bash
   ng version
   ```

## ⚙️ Configuration

### Backend Connection

The application is configured to connect to a backend API running on `http://localhost:3000`. The API endpoints are defined in the service files:

- **Auth API:** `http://localhost:3000/auth`
- **Products API:** `http://localhost:3000/products`
- **Orders API:** `http://localhost:3000/orders`
- **Admin API:** `http://localhost:3000/admin`

### Changing Backend URL

If your backend is running on a different URL or port, you need to update the API constants in the following service files:

1. **Auth Service** (`src/app/services/auth.ts`):
   ```typescript
   const API = 'http://your-backend-url:port/auth';
   ```

2. **Product Service** (`src/app/services/product.ts`):
   ```typescript
   const API = 'http://your-backend-url:port/products';
   ```

3. **Order Service** (`src/app/services/order.ts`):
   ```typescript
   const API = 'http://your-backend-url:port/orders';
   ```

4. **Admin Services** (Brand, Category, Color, Size, Gender):
   - Update the `api` property in each service file:
   ```typescript
   api = "http://your-backend-url:port/admin";
   ```

### Environment Variables (Optional)

For better configuration management, you can create environment files:

1. Create `src/environments/environment.ts`:
   ```typescript
   export const environment = {
     production: false,
     apiUrl: 'http://localhost:3000'
   };
   ```

2. Create `src/environments/environment.prod.ts`:
   ```typescript
   export const environment = {
     production: true,
     apiUrl: 'https://your-production-api.com'
   };
   ```

3. Update services to use `environment.apiUrl` instead of hardcoded URLs.

## 🏃 Running the Application

### Development Server

1. **Start the backend server first** (make sure it's running on `http://localhost:3000`)

2. **Start the Angular development server:**
   ```bash
   npm start
   # or
   ng serve
   ```

3. **Open your browser** and navigate to:
   ```
   http://localhost:4200
   ```

The application will automatically reload when you modify source files.

### Build for Production

To build the project for production:

```bash
ng build --configuration production
```

The build artifacts will be stored in the `dist/` directory. This build is optimized for performance and speed.

### Watch Mode

To build and watch for changes:

```bash
npm run watch
```

## 📁 Project Structure

```
webstore-frontend/
├── src/
│   ├── app/
│   │   ├── admin/              # Admin components
│   │   │   ├── admin-dashboard/
│   │   │   ├── admin-product-*-component/
│   │   │   ├── admin-order-*-component/
│   │   │   └── ...
│   │   ├── pages/              # Customer-facing pages
│   │   │   ├── product-list/
│   │   │   ├── product-detail/
│   │   │   ├── cart-component/
│   │   │   ├── checkout-component/
│   │   │   ├── my-orders/
│   │   │   ├── login/
│   │   │   └── register/
│   │   ├── services/           # API services
│   │   │   ├── auth.ts
│   │   │   ├── product.ts
│   │   │   ├── order.ts
│   │   │   └── ...
│   │   ├── shared/             # Shared components
│   │   │   └── navbar/
│   │   ├── app.routes.ts       # Routing configuration
│   │   └── auth-interceptor.ts # HTTP interceptor for auth
│   ├── assets/                 # Static assets
│   ├── styles.css              # Global styles
│   └── main.ts                # Application entry point
├── angular.json                # Angular configuration
├── package.json               # Dependencies
└── README.md                  # This file
```

## 🔐 Authentication

The application uses JWT (JSON Web Tokens) for authentication:

- Tokens are stored in `localStorage`
- The `auth-interceptor.ts` automatically adds the token to API requests
- User roles are extracted from the token payload
- Protected routes require authentication

## 🧪 Testing

Run unit tests:

```bash
npm test
# or
ng test
```

## 📦 Dependencies

### Main Dependencies
- **Angular 21** - Framework
- **RxJS** - Reactive programming
- **Angular Material** - UI components
- **Chart.js** - Charts for reports

### Development Dependencies
- **TypeScript** - Type safety
- **Vitest** - Testing framework
- **Angular CLI** - Development tools

## 🚢 Deployment

### Build for Production

```bash
ng build --configuration production
```

### Deploy to Static Hosting

1. Build the project (see above)
2. Upload the contents of the `dist/` directory to your hosting provider
3. Configure your hosting to serve `index.html` for all routes (for Angular routing)
4. Update API URLs in service files to point to your production backend

### Common Hosting Providers

- **Netlify/Vercel:** Connect your Git repository for automatic deployments
- **GitHub Pages:** Use `angular-cli-ghpages` package
- **Firebase Hosting:** Use `firebase-tools`

## 📝 Git Setup

### Initial Setup

1. **Initialize Git repository** (if not already initialized):
   ```bash
   git init
   ```

2. **Add remote repository:**
   ```bash
   git remote add origin <your-repository-url>
   ```

3. **Create .gitignore** (if not exists):
   ```
   # Dependencies
   node_modules/
   npm-debug.log*
   yarn-debug.log*
   yarn-error.log*

   # Build output
   dist/
   .angular/

   # IDE
   .vscode/
   .idea/
   *.swp
   *.swo
   *~

   # OS
   .DS_Store
   Thumbs.db

   # Environment
   .env
   .env.local
   ```

### Committing and Pushing

1. **Check status:**
   ```bash
   git status
   ```

2. **Add files:**
   ```bash
   git add .
   # or add specific files
   git add src/ README.md
   ```

3. **Commit changes:**
   ```bash
   git commit -m "Your commit message"
   ```

4. **Push to repository:**
   ```bash
   git push origin main
   # or if your branch is named differently
   git push origin master
   ```

### Branching Strategy

```bash
# Create a new branch
git checkout -b feature/your-feature-name

# Make changes and commit
git add .
git commit -m "Add new feature"

# Push branch
git push origin feature/your-feature-name

# Merge to main (via Pull Request on GitHub/GitLab)
```

## 🐛 Troubleshooting

### Common Issues

1. **Port 4200 already in use:**
   ```bash
   ng serve --port 4201
   ```

2. **Backend connection errors:**
   - Ensure backend is running on `http://localhost:3000`
   - Check CORS settings on backend
   - Verify API endpoints match backend routes

3. **Module not found errors:**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

4. **Build errors:**
   ```bash
   ng build --configuration development
   # Check error messages for specific issues
   ```

5. **Authentication not working:**
   - Check browser console for errors
   - Verify token is being stored in localStorage
   - Ensure backend returns token in correct format

## 📚 Additional Resources

- [Angular Documentation](https://angular.dev)
- [Angular CLI Documentation](https://angular.dev/tools/cli)
- [RxJS Documentation](https://rxjs.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## 👥 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

## 📞 Support

For issues or questions, please contact the development team or create an issue in the repository.

---

**Note:** Make sure your backend API is running and accessible before starting the frontend application. The frontend requires a running backend to function properly.

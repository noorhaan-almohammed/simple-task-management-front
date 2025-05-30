# 📋 Simple Task Management - Full Stack App

This is a full-stack task management application built with:

- **Frontend:** React + TypeScript
- **Backend:** Laravel (PHP 8.1+)

---

##  Requirements

Make sure the following tools are installed on your machine:

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **PHP** (via XAMPP or similar, version 8.1+)
- **Composer**
- **Git**

---

## Getting Started - Local Setup

---

## Backend (Laravel API)

Follow these steps to set up and run the Laravel backend:

1. **Install XAMPP** and ensure PHP version is 8.1 or above.
2. **Install Composer** from [https://getcomposer.org/](https://getcomposer.org/)
3. **Clone the repository into the `htdocs` folder:**

```bash
cd xampp/htdocs
git clone https://github.com/noorhaan-almohammed/simple-task-managment.git

// Navigate to the backend directory:
cd simple-task-managment

```
4. **Install dependencies:** 
```bash
composer install
composer update
```

5. **Copy the .env configuration file:**
```bash
cp .env.example .env
```

6. **Configure the database in .env:**
```bash
DB_DATABASE=your_database_name
DB_USERNAME=root
DB_PASSWORD=
```

7. **Create the database:**
```bash
// Generate the application key
php artisan key:generate

// Run migrations
php artisan migrate

// Seed the database with initial data:
php artisan db:seed

// Start the backend server:
php artisan serve

```

---

## Frontend (React)

### 🛠 Technologies Used

- **Vite**: For fast development and build  
- **React.js**: For building the user interface  
- **TypeScript**: For type safety and better developer experience  
- **Pure CSS**: No external libraries like Bootstrap or Tailwind were used  

### Setup Steps

```bash
git clone https://github.com/noorhaan-almohammed/simple-tsk-management-front.git
cd simple-tsk-management-front
npm install
npm run dev
```

## Contribution
Feel free to open issues or pull requests for improvements or bug fixes.

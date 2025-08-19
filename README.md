# Node.js RBAC + MySQL API
A robust RESTful API with Role-Based Access Control (RBAC) using Node.js, Express, Sequelize, and MySQL. Easily manage users, authentication, and admin/user access through JWT-secured endpoints.

## Features
<ul>
<li>User registration and login with JWT authentication</li>

<li>Role-based access: Separate endpoints for admin and normal users</li>

<li>Secure password hashing with bcrypt</li>

<li>Modular project structure for scalability</li>

<li>Easily extendable for more models/entities</li>
</ul>

## Technologies Used

<ul>
  
<li>Node.js (Express)</li>

<li>Sequelize ORM</li>

<li>MySQL</li>

<li>JWT for authentication</li>

<li>bcrypt for password hashing
</ul>

## Setup
Getting Started
1. Clone the Repository

```text
git clone https://github.com/Jiken-Patel/RBAC-system.git
cd nodejs-rbac-mysql
```
2. Install Dependencies

```base
npm install
```
3. Configure Environment:-
Create a .env file:

```base
PORT=
DB_HOST=
DB_USER=
DB_PASSWORD=
DB_NAME=
JWT_SECRET=
```

4. Create the Database:-
```sql
CREATE DATABASE DATABASENAME;
```
5. Start the App

```base
npm start
```

## API Endpoints
Auth
```

POST /api/auth/register       → Register a new user (admin or user)
POST /api/auth/login          → Log in and receive a JWT token

```
For Users
```

GET    /api/users/me          → View own profile
PUT    /api/users/me          → Update own profile (username/password)
```
For Admin
```
GET    /api/users/            → View all users (admin only)
DELETE /api/users/:id         → Delete user by ID (admin only)
All protected endpoints require:

Authorization: Bearer <YOUR_JWT_TOKEN>
```
## Roles & Permissions
* admin: Can view/delete all users.

* user: Can view/update own profile.

## Testing API
You can use:

* Postman (Recommended)

* Hoppscotch (Browser-based)

* Thunder Client (VS Code extension)

## Contributing
Feel free to contribute and suggest improvements!

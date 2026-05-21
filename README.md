# 🚀 IdeaVault – Startup Idea Sharing Platform

<p align="center">
  <img src="https://media.giphy.com/media/L8K62iTDkzGX6/giphy.gif" width="220" alt="startup gif"/>
</p>

<p align="center">
  <b>A Creative Platform Where Innovative Minds Share, Explore & Validate Startup Ideas 💡</b>
</p>

---

## 🌐 Live Demo

### 🔗 Live Link

```bash
https://your-live-link.com
```

---

# 📌 Project Overview

## 🧠 Project Name

# **IdeaVault**

### ✨ Short Description

IdeaVault is a modern web-based startup idea sharing platform where users can:

- 🚀 Share innovative startup ideas
- 🌍 Explore ideas from other creators
- 💬 Interact through comments & discussions
- 📈 Validate ideas through community engagement
- 🤝 Collaborate and improve concepts together

Unlike booking or scheduling platforms, IdeaVault focuses on creativity, validation, and meaningful interaction between passionate builders and thinkers.

---

# 🎯 Main Features

- 🔐 Secure Authentication System
- 📝 Create & Share Startup Ideas
- 💬 Comment & Discussion System
- 📊 Interactive User Dashboard
- 📈 Trending & Engaging Ideas
- 🎨 Beautiful Responsive UI
- 🌙 Dark / Light Theme Support
- 📱 Fully Responsive Design
- 📊 Pie Chart Analytics using Recharts
- ⚡ Fast & Smooth User Experience
- 🔒 Protected Routes & APIs
- 🛡️ JWT Token Verification
- 👤 User-Specific Data Access Control

---

# 🛠️ Technologies Used

| Technology        | Purpose             |
| ----------------- | ------------------- |
| ⚛️ Next.js        | Frontend Framework  |
| 🎨 Hero UI        | UI Components       |
| 💨 Tailwind CSS   | Styling             |
| ✨ JavaScript ES6 | Core Language       |
| 🔐 Better Auth    | Authentication      |
| 🛡️ jose-cjs       | JWT Verification    |
| 🍃 MongoDB        | Database            |
| 📊 Recharts       | Analytics & Charts  |
| 🎯 React Icons    | Icons               |
| 📱 Swiper         | Sliders & Carousels |
| 🚀 Express.js     | Backend Server      |

---

# 📦 Dependencies & Packages

## 🔧 Main Packages

1. `next`
2. `react`
3. `react-dom`
4. `mongodb`
5. `express`
6. `better-auth`
7. `@better-auth/mongo-adapter`
8. `jose-cjs`
9. `cors`
10. `dotenv`

---

## 🎨 UI & Styling Packages

1. `@heroui/react`
2. `@heroui/styles`
3. `tailwindcss`
4. `react-icons`
5. `next-themes`

---

## 📊 Animation & Interactive Packages

1. `swiper`
2. `react-fast-marquee`
3. `recharts`

---

## 🔔 Notification Packages

1. `react-hot-toast`
2. `react-toastify`

---

# 🔐 Authentication & Security

IdeaVault uses a secure authentication system powered by Better Auth and JWT verification.

### ✅ Authentication Features

- Better Auth Authentication
- MongoDB Adapter Integration
- Session Management
- Secure Login & Registration
- Protected Routes
- Protected API Endpoints
- Authorization Header Validation

### 🛡️ Server-Side Token Verification

For sensitive operations, the backend verifies JWT tokens before allowing access to protected resources.

The application uses:

- `jose-cjs`
- `jwtVerify()`
- JWKS (JSON Web Key Set)

to validate token authenticity directly on the server.

### 🔑 Authentication Flow

1. User logs in using Better Auth
2. Better Auth generates a secure JWT token
3. Client sends token through Authorization header

```js
Authorization: Bearer <token>
```

4. Express middleware intercepts the request
5. Token is verified using JOSE + JWKS

```js
const { payload } = await jwtVerify(token, JWKS);
```

6. If verification succeeds → access granted
7. If verification fails → request blocked

### 🚫 Unauthorized Access Protection

The following operations require valid authentication:

- Create Ideas
- Update Ideas
- Delete Ideas
- Add Comments
- View Personal Ideas
- Access User-Specific Data

Requests without valid tokens automatically receive:

```http
401 Unauthorized
```

or

```http
403 Forbidden
```

responses from the server.

---

# 📊 Dashboard Analytics

The application includes beautiful analytics dashboards using:

- 📈 Recharts Pie Charts
- 📊 User Activity Statistics
- 🚀 Post & Interaction Insights
- 📉 Visual Data Representation

---

# ⚙️ Installation & Setup

## Clone Repository

```bash
git clone https://github.com/your-username/idea-vault.git
```

## Install Dependencies

```bash
npm install
```

## Run Development Server

```bash
npm run dev
```

## Backend Server

```bash
npm start
```

---

# 💡 What I Learned From This Project

This project is very special to me ❤️

IdeaVault is the **first web application where I spent 49+ hours continuously learning, building, debugging, fixing, and improving.**

Sometimes I felt:

> “WOW 😭 I really made this??”

And sometimes this application gave me errors that I had never seen before in my life 😅

At that moment I realized something important:

> If I can come this far, then one day I can become something great in web development.

This project gave me confidence, patience, problem-solving skills, debugging experience, backend security knowledge, and belief in myself.

I learned:

- Authentication Systems
- JWT Token Handling
- Server-Side Token Verification
- Protected APIs
- MongoDB CRUD Operations
- Full Stack Application Architecture
- Dashboard Analytics
- Responsive UI Design
- Better Auth Integration

I will continue building more powerful and beautiful applications in the future In Sha Allah 🤲

---

# ❤️ A Small Message

> Every bug taught me something.
>
> Every error made me stronger.
>
> Every success made me believe in myself more.

---

# 🙏 Pray For Me

Please pray for me so that I can reach my dream destination and become a successful developer one day 🤍

---

## 👨‍💻 Developer

### MD Abdulla

- 🌍 Bangladesh
- 💻 Frontend & Full Stack Learner
- 🚀 Future MERN Stack Developer
- ❤️ Passionate About Building Useful Applications

---

# ⭐ Support

If you like this project, please consider giving it a ⭐ on GitHub — it motivates me a lot!

<p align="center">
  <img src="https://media.giphy.com/media/QssGEmpkyEOhBCb7e1/giphy.gif" width="180"/>
</p>

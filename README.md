<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>

<div align="center">
  <img src="https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white" alt="Nest" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL" />
  <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="NodeJS" />
  <img src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white" alt="Git" />
</div>

## NestJS Multitenancy Event Creator Application

This project is a multi-tenant application for managing events, built using Node.js, NestJS, Prisma, and other technologies.

**Features:**

* **Multi-tenancy:**
    * Allows multiple organizations (tenants) to have their own separate instances of the application.
    * Tenants can create, manage, and access their own events.
    * Tenant-specific data is isolated.
* **Event Management:**
    * Create events.
    * Manage event details (name, date, location, description, etc.).


**Technologies Used:**

* **Node.js:** JavaScript runtime environment for backend development.
* **NestJS:** Framework for building scalable, efficient, and maintainable Node.js applications.
* **Prisma:** ORM for database access.
* **MySQL:** Relational database management system.
* **Docker:** Containerization and orchestration tool.
* **Docker Compose:** Tool for defining and managing multiple Docker containers.
* **bcrypt:** Library for password hashing.
* **JWT:** JSON Web Token for user authentication.
* **OpenSSL:** Cryptography and security tool.

**Concepts Implemented:**

* **Multi-tenancy:** Using middleware to identify tenants and isolate data.
* **Guards:** Controlling access to resources based on user roles and tenant affiliation.
* **Interceptors:** Adding functionality to requests, such as logging or authorization checks.
* **@Transactional:** Ensuring data consistency in database transactions.
* **Reflector:** Inspecting metadata of classes and methods for dynamic behavior.

**Getting Started:**

1. **Prerequisites:**
    * Install Node.js and npm.
    * Install Docker and Docker Compose.
2. **Clone the repository:**
    * `git clone https://github.com/your-username/multitenancy-event-creator.git`
3. **Install dependencies:**
    * `npm install`
4. **Configure database:**
    * Run `npx prisma migrate dev` to create database tables.
5. **Run the application:**
    * `docker-compose up -d`
6. **Access the application:**
    * The application will be accessible at `http://localhost:3000`.

**Documentation:**
* **Prisma documentation:** [https://www.prisma.io/docs/](https://www.prisma.io/docs/)

**Contributing:**

* Contributions are welcome!


**License:**

* This project is licensed under the MIT license.

**Contact:**

[Daniel Martins de Andrade](daniel.m.adr@hotmail.com)

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/daniel-martins-de-andrade/)


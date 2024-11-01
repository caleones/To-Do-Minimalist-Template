This template is currently under development!
Esta plantilla aún está en desarrollo!

- [React + Vite + TS + Tailwind Template: The Minimalist To-Do (English)](https://github.com/caleones/To-Do-Minimalist-Template/blob/main/README.md#react--vite--ts--tailwind-template-the-minimalist-to-do)
- [Plantilla React + Vite + TS + Tailwind: The Minimalist To-Do (Español)](https://github.com/caleones/To-Do-Minimalist-Template/blob/main/README.md#plantilla-react--vite--ts--tailwind-the-minimalist-to-do)

# React + Vite + TS + Tailwind Template: The Minimalist To-Do

This template was developed as part of an academic project to utilize TanStack Query and JSON Server for implementing CREATE, READ, and DELETE actions. It provides a simple yet effective starting point for developing a To-Do application where you can test your skills. Download the template and execute the commands in the specified order.

## Prerequisites

Make sure you have Node.js installed on your machine to use Node Package Manager commands. You'll also need a text or code editor like Visual Studio or Visual Studio Code. Styles can be applied using traditional CSS or with Tailwind, which is already integrated.

## JSON Server

Data persistence is implemented using JSON Server. You can find the database in the `db.json` file, which stores tasks in JSON format. This file acts as the backend for the application. If you have an existing backend, you can use this template as a foundation to implement it and leverage TanStack Query functionalities.

### Installing JSON Server
```bash
npm install json-server
```

## TanStack Query

TanStack Query is implemented to simplify data handling, favoring a UI logic-oriented approach over data management. This makes it ideal for front-end development.

### Installing TanStack Query
```bash
npm install @tanstack/react-query
```

## Components

The `src/components` directory includes your React components. Currently, it contains a task table for visualizing tasks and components for CREATE and DELETE actions. Each action updates the table in real-time.

## Types.ts

The `types.ts` file located in the `src` folder contains all interface types. It currently includes the `Task` interface, which defines the structure expected for any Task object.

## Installation Steps

1. Download the template.
2. Open the folder in your terminal (use commands like `cd path` for Windows), or open the folder and start a terminal session from your code editor.
3. Run the following commands in order:
```bash
npm install
npm run dev
```

---

# Plantilla React + Vite + TS + Tailwind: The Minimalist To-Do

Esta plantilla ha sido desarrollada en el marco de un trabajo académico para utilizar TanStack Query y JSON Server en la implementación de acciones de tipo CREATE, READ y DELETE. Ofrece un punto de partida simple pero efectivo para desarrollar una aplicación To-Do donde puedes poner a prueba tus habilidades. Descarga la plantilla y ejecuta los comandos en el orden indicado.

## Requisitos previos

Asegúrate de tener instalado Node.js en tu máquina para usar los comandos de Node Package Manager. También necesitarás un editor de texto o de código como Visual Studio o Visual Studio Code. Los estilos pueden aplicarse usando CSS tradicional o con Tailwind, que ya está integrado.

## JSON Server

La persistencia de datos se implementa utilizando JSON Server. Puedes encontrar la base de datos en el archivo `db.json`, que almacena las tareas en formato JSON. Este archivo actúa como el backend de la aplicación. Si ya tienes un backend, puedes usar esta plantilla como base para implementarlo y aprovechar las funcionalidades de TanStack Query.

### Instalación de JSON Server
```bash
npm install json-server
```

## TanStack Query

TanStack Query se implementa para simplificar el manejo de datos, favoreciendo un enfoque orientado a la lógica de la interfaz de usuario en lugar de la gestión de datos. Esto lo convierte en una excelente opción para el desarrollo front-end.

### Instalación de TanStack Query
```bash
npm install @tanstack/react-query
```

## Componentes

La carpeta `src/components` incluye tus componentes de React. Actualmente, contiene una tabla de tareas para visualizar las tareas y componentes para las acciones de CREAR y BORRAR tareas. Cada acción actualiza la tabla en tiempo real.

## Types.ts

El archivo `types.ts` ubicado en la carpeta `src` contiene todos los tipos de interfaces. Actualmente incluye la interfaz `Task`, que define la estructura esperada para cualquier objeto Task.

## Pasos de instalación

1. Descarga la plantilla.
2. Abre la carpeta en tu terminal (usa comandos como `cd path` para Windows), o abre la carpeta y inicia una sesión de terminal desde tu editor de código.
3. Ejecuta los siguientes comandos en orden:
```bash
npm install
npm run dev
```

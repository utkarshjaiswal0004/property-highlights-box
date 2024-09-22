# Property Highlights Box

This project is a property highlights box developed with **Next.js** for the front end and an **ExpressJS** backend. The application allows users to manage property highlights efficiently.

## Features

- Add, edit, delete, and reorder highlights
- Auto-save on edits, sorting, or deletion
- Fetches saved data on load

## Getting Started

### Development Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/utkarshjaiswal0004/property-highlights-box.git
   ```



2. Navigate into the project backend directory and install the dependencies :

 ```bash
   cd property-highlights-box/backend
   npm i

   ```

3. Create a .env file and add the details :

 ```bash
   MONGO_URI=mongodb+srv://<YOUR_MONGODB_CONNECTION_URL>
   NODE_ENV=development
   FRONTEND_URL=http://localhost:3001/
   PORT=3000
   ```

4. Run the backend using :

 ```bash
   npm run dev 

   ```

5. Navigate into the project frontend directory  and install the dependencies:

 ```bash
   cd property-highlights-box/frontend
   npm i

   ```

6. Create a .env file and add the backend url :

 ```bash
   NEXT_PUBLIC_API_URL=http://localhost:3000

   ```

7. Run the frontned using :

 ```bash
   npm run dev 

   ```


### Deployment

The easiest way to deploy this Next.js app is to use the Vercel Platform. For more details, refer to the Next.js deployment documentation.

### Deliverables
A Loom video demonstrating the following functionalities:

1. Adding, editing, deleting, and reordering highlights
2. Auto-saving of changes
3. Fetching data on load

### Loom video URL: 
https://www.loom.com/share/d491d10a8ff04663a045b0af8e2261cd?sid=286c40d4-753e-4889-b8f6-5e4599f07ec9
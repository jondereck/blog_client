## Introduction
I am Jon Dereck Nifas, a front-end developer with a strong focus on creating engaging and user-friendly web experiences. With a background in data analysis, I bring a unique perspective to my development work.

## Expertise and Interests
Some of my areas of expertise and interests include:
- Front-end development using HTML, CSS, React, JavaScript, and Tailwind CSS.
- Data analysis and visualization.

## Education
I am a proud graduate of Pangasinan State University, with a Bachelor's degree in Information Technology (BSIT), graduating cum laude.

## Contact Information
You can reach out to me via:
- Email: jonnifas@gmail.com
- [Visit my website](https://jdnifas.netlify.app/)


Feel free to contact me for any front-end development projects, data analysis collaborations, or general inquiries. I am excited to contribute my skills and knowledge to create impactful solutions.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


# Initializing GitHub
1. Open a command prompt or terminal with administrator privileges.

2. Navigate to your project directory:
   - Use the command `cd <project-directory>` to change to your project directory.
   - Replace `<project-directory>` with the actual directory path where your project is located.

3. Check the status of your Git repository:
   - Use the command `git status` to see the current status of your repository.
   - This will show any untracked or modified files.

4. Stage the changes:
   - Use the command `git add .` to stage all modified and untracked files.
   - This adds all changes to the staging area for the next commit.

5. Commit the changes:
   - Use the command `git commit -m 'project-done'` to create a new commit.
   - Replace `'project-done'` with a meaningful commit message describing your project.

6. Create a new repository on GitHub:
   - Go to https://github.com/new to create a new repository.
   - Provide a name for your repository and any desired settings.
   - Leave the repository empty without initializing it with a README file.

7. Copy the "push an existing repository from the command line" instructions:
   - From the newly created repository's page, copy the commands under "push an existing repository from the command line".

8. Add the remote repository:
   - In the command prompt or terminal, use the command copied from GitHub to add the remote repository.
   - For example: `git remote add origin https://github.com/jondereck/react-portfolio_2.git`.

9. Rename the main branch (optional):
   - Use the command `git branch -M main` to rename the branch to `main`.
   - This step is optional, and you can keep the default branch name if desired.

10. Push the changes to GitHub:
    - Use the command `git push -u origin main` to push the commits to the remote repository.
    - This uploads your local code to GitHub.

Once you've followed these steps, your local code will be initialized and pushed to GitHub, creating a new repository.



# Updating Code on GitHub 
1. Stage the changes:
   - Use the command `git add <file>` to stage modified files or new files.
   - For example, to stage a file named `example.js`, use: `git add example.js`.
   - To stage all modified files, use: `git add .`.

2. Commit the changes:
   - Use the command `git commit -m "<commit message>"` to create a new commit.
   - Provide a meaningful commit message that describes the updates made.
   - For example: `git commit -m "Update example.js with new feature"`.

3. Push the changes:
   - Use the command `git push <remote> <branch>` to upload the committed changes to GitHub.
   - Specify the remote repository and branch to push to.
   - For example: `git push origin main` pushes changes to the `main` branch of the `origin` remote.

Once you've followed these steps, your local code changes will be updated on GitHub. Others can then fetch and pull these updates from the repository.


Certainly! Here's an updated version with the usage instructions for the additional npm packages:

**Backend Packages**

1. Cookie-parser
   - **Description**: Cookie-parser is a middleware that parses cookies in Express.js applications.
   - **Installation**: Run the following command in your backend project directory:
     ```bash
     npm install cookie-parser
     ```
   - **Usage**:
     - Import Cookie-parser in your Node.js file:
       ```javascript
       const cookieParser = require('cookie-parser');
       ```
     - Use Cookie-parser as middleware:
       ```javascript
       app.use(cookieParser());
       ```
     - Access cookies in request:
       ```javascript
       app.get('/', (req, res) => {
         console.log(req.cookies); // Access cookies
         res.send('Hello World!');
       });
       ```

2. Multer
   - **Description**: Multer is a middleware for handling multipart/form-data, primarily used for file uploads.
   - **Installation**: Run the following command in your backend project directory:
     ```bash
     npm install multer
     ```
   - **Usage**:
     - Import Multer in your Node.js file:
       ```javascript
       const multer = require('multer');
       ```
     - Set up Multer for file uploads:
       ```javascript
       const storage = multer.diskStorage({
         destination: (req, file, cb) => {
           cb(null, 'uploads/');
         },
         filename: (req, file, cb) => {
           cb(null, file.originalname);
         },
       });

       const upload = multer({ storage: storage });
       ```
     - Handle file uploads in a route:
       ```javascript
       app.post('/upload', upload.single('file'), (req, res) => {
         console.log(req.file); // Access uploaded file
         res.send('File uploaded successfully!');
       });
       ```

3. Nodemon (Development dependency)
   - **Description**: Nodemon is a development tool that automatically restarts the Node.js application when file changes are detected.
   - **Installation**: Run the following command in your backend project directory:
     ```bash
     npm install --save-dev nodemon
     ```
   - **Usage**:
     - Start your application using Nodemon:
       ```bash
       nodemon app.js
       ```
     - Nodemon will watch for file changes and automatically restart the server.

4. Dotenv
   - **Description**: Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env.
   - **Installation**: Run the following command in your backend project directory:
     ```bash
     npm install dotenv
     ```
   - **Usage**:
     - Create a `.env` file in your project directory and define your environment variables:
       ```
       PORT=3000
       DB_HOST=localhost
       ...
       ```
     - Load the environment variables in your Node.js file:
       ```javascript
       require('dotenv').config();
       ```
     - Access the environment variables:
       ```javascript
       const port = process.env.PORT;
       const dbHost = process.env.DB_HOST;
       ...
       ```

5. Bcrypt.js
   - **Description**: Bcrypt.js is a library for hashing and salting passwords in Node.js.
   - **Installation**: Run the following command in your backend project directory:
     ```bash
     npm install bcryptjs
     ```
   - **Usage**:
     - Import Bcrypt.js in your Node.js file:
       ```javascript
       const bcrypt = require('bcryptjs');
       ```
     - Generate a hash for a password:
       ```javascript
       const password = 'myPassword';
       const saltRounds =

 10;

       bcrypt.genSalt(saltRounds, (err, salt) => {
         bcrypt.hash(password, salt, (err, hash) => {
           console.log(hash); // Generated hash
         });
       });
       ```
     - Compare a password with a hash:
       ```javascript
       const password = 'myPassword';
       const hash = '$2a$10$...'; // Stored hash

       bcrypt.compare(password, hash, (err, result) => {
         console.log(result); // true if match, false otherwise
       });
       ```

6. JSON Web Token (jsonwebtoken)
   - **Description**: JSON Web Token is a compact, URL-safe means of representing claims between two parties.
   - **Installation**: Run the following command in your backend project directory:
     ```bash
     npm install jsonwebtoken
     ```
   - **Usage**:
     - Import JSON Web Token in your Node.js file:
       ```javascript
       const jwt = require('jsonwebtoken');
       ```
     - Generate a token:
       ```javascript
       const payload = { userId: '123456' };
       const secretKey = 'mySecretKey';

       const token = jwt.sign(payload, secretKey);
       console.log(token); // Generated token
       ```
     - Verify and decode a token:
       ```javascript
       const token = '...'; // Token to verify
       const secretKey = 'mySecretKey';

       jwt.verify(token, secretKey, (err, decoded) => {
         if (err) {
           console.error('Token is invalid');
         } else {
           console.log(decoded); // Decoded token payload
         }
       });
       ```

**Frontend Packages**

1. React Quill
   - **Description**: React Quill is a rich text editor component for React.
   - **Installation**: Run the following command in your frontend project directory:
     ```bash
     npm install react-quill
     ```
   - **Usage**:
     - Import React Quill in your React component:
       ```javascript
       import ReactQuill from 'react-quill';
       import 'react-quill/dist/quill.snow.css'; // Import Quill's CSS
       ```
     - Render the React Quill component:
       ```javascript
       function MyEditor() {
         const [content, setContent] = useState('');

         const handleChange = (value) => {
           setContent(value);
         };

         return (
           <ReactQuill value={content} onChange={handleChange} />
         );
       }
       ```

2. Bcrypt.js
   - **Description**: Bcrypt.js is a library for hashing and salting passwords in JavaScript (frontend usage).
   - **Installation**: Run the following command in your frontend project directory:
     ```bash
     npm install bcryptjs
     ```
   - **Usage**:
     - Import Bcrypt.js in your JavaScript file (frontend):
       ```javascript
       import bcrypt from 'bcryptjs';
       ```
     - Generate a hash for a password:
       ```javascript
       const password = 'myPassword';
       const saltRounds = 10;

       bcrypt.genSalt(saltRounds, (err, salt) => {
         bcrypt.hash(password, salt, (err, hash) => {
           console.log(hash); // Generated hash
         });
       });
       ```
     - Compare a password with a hash:
       ```javascript
       const password = 'myPassword';
       const hash = '$2a$10$...'; // Stored hash

       bcrypt.compare(password, hash, (err, result) => {
         console.log(result); // true if match, false otherwise
       });
       ```

3. React Device Detect
   - **Description**: React

 Device Detect is a library for detecting device types and rendering components accordingly in React applications.
   - **Installation**: Run the following command in your frontend project directory:
     ```bash
     npm install react-device-detect
     ```
   - **Usage**:
     - Import React Device Detect components in your React component:
       ```javascript
       import { BrowserView, MobileView, isMobile } from 'react-device-detect';
       ```
     - Conditionally render components based on device type:
       ```javascript
       function MyComponent() {
         return (
           <div>
             <BrowserView>
               <p>This is rendered on desktop browsers.</p>
             </BrowserView>
             <MobileView>
               <p>This is rendered on mobile devices.</p>
             </MobileView>
             {isMobile && <p>This is rendered if the device is mobile.</p>}
           </div>
         );
       }
       ```

Feel free to copy the instructions and usage examples into a Markdown (.md) file for your reference.
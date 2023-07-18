# Mern-finance-dashboard

## E-Commerce (Weddingproducts)
A MERN stack Finance dashboard for businesses to keep track of their finances and overall performance. The dashboard using Material UI provides a breakdown of the key performance indicators and other types of data to provide a concise overview of the company's performance.


Section 1: Introduction and Overview of the Application
In this application, we'll be building a data analytics dashboard that includes multiple charts and tables. We'll use Recharts to create area charts, line charts, bar charts, pie charts, and scatter plots. These types of charts are commonly used in data analytics dashboards.

Section 2: Displaying Data with Data Grid
We'll also display lists of products and orders using the Data Grid component. By downloading the Data Grid library, we can easily set up and populate the tables with the required information.

Section 3: Revenue Predictions with Machine Learning
On the predictions page, we'll focus on revenue information for a particular company. We'll utilize regression analysis to plot a best-fit line that represents the data trend. With this regression line, we can make predictions about future revenue. This application will involve basic machine learning concepts.

Section 4: Backend Development and Data Modeling
The application won't be limited to the front end; it will also have a backend. We'll use Lucidchart to organize and model our data for the backend. This step will help us structure our data effectively before building the backend functionality.

Section 5: Backend Deployment with fly.io
Once the backend development is complete, we'll deploy it to fly.io. This deployment will be done for free. We'll explore the process of hosting and deploying the backend using fly.io.

Section 6: Frontend Deployment with Vercel
We'll also deploy the frontend application using Vercel, another free hosting platform. This step will ensure our entire application is deployed and accessible online.

Section 7: Technology Stack
For the frontend, we'll use Material-UI as the component library, Material-UI Data Grid for tables, TypeScript as the programming language, Vite as the starter app, Recharts for charts, Redux Toolkit for state management, Redux Toolkit Query for API calls, Hero Icons for icons, and React Router for navigation.

For the backend, we'll use Node.js as the runtime, Express.js as the backend framework, and Mongoose for the database.

For machine learning predictions, we'll utilize the regression.js library, which provides a simple way to perform machine learning tasks.

By following these steps and using the mentioned technologies, you'll be able to build, deploy, and utilize the frontend, backend, and machine learning components of this data analytics dashboard application.

<img width="1265" alt="image" src="https://github.com/methaveelu/E-commerce-website-wedding-products/assets/110245885/df26e8aa-c6f7-4f90-804a-6b3688b050e7">

## Description of App
### User Stories
As a user, I want to be able to:
- [x] create a personal account for using the app with an authentication token sent to my email account

## Wireframes
*Seller Dashboard Page
<img width="868" alt="image" src="https://github.com/methaveelu/E-commerce-website-wedding-products/assets/110245885/6e0bdfc7-494d-45bd-87ab-8dc21018eb9f">

*Best Selling Products Page
<img width="899" alt="image" src="https://github.com/methaveelu/E-commerce-website-wedding-products/assets/110245885/ee037598-5b4c-4ac7-9c58-e974ddf1b6b7">

## Technologies used
### Frontend
* react-redux
* @reduxjs/toolkit
* react-router-dom
* @mui/material
* @emotion/react
* @emotion/styled
* @mui/icons-material
* @mui/x-data-grid
* @types/react-dom


### Backend
* express
* mongoose, mongodb
* dotenv
* cors
* jsonwebtoken
* nodemailer
* path
* stripe
* cookie-parser
* bcryptjs
* connect-multiparty
* multer

### Motivations & Approach
The Motivation behind this project was to challenge myself to learn new technologies and tools available to create a MERN stack Application. Intrigued by the widely used UI interface library called Material UI, I was keen to pick up this skill set and experience the convenience of using the pre-built components. On another hand, as a Redux library user, I was keen to find out how the Redux Toolkit would immensely simplify the process of setting up this state management library in terms of reducing the complexity of setting up the boilerplate. 

## Project Setup:

# Frontend Development:
For the development environment, Vite was chosen over Create React App (CRA) as it offers a significantly faster dev server than Create React App (CRA), providing quicker reloads during development. However, Vite's speed advantage is focused on the development environment, not deployment. Thereafter, the dependencies are installed for the usage of MUI, Redux, and Redux Toolkit.

To create the grid styled dashboard,  Material-UI's Box component is used to replicate the properties of the grid-template-area CSS. The 'labeled' grids are made customizable in terms of size, color etc.

To visualize the business data, Recharts was used to create area charts, line charts, bar charts, pie charts, and scatter plots. Next, to display the lists of products and orders, the Data Grid library is utilized to easily set up and populate the tables with the required information.

On the predictions page, the objective is to display a projection of future revenue for a particular company. Using the  regression-js javascript module, a best-fit regression line can be plotted based on the trending revenue data to provide estimated future revenue predictions.  


3) Backend Development:

4) Integration:

5) Testing and Refinement:


| CRUD | Method | Endpoint |  
| -------- | -------- | -------- |
|  C,R  |  POST, GET  |  "/api/v2/coupon"  |    
|  C,R,D  |  POST, GET, DELETE  |  "/api/v2/event"  |    
|  C,R,U  |  POST, GET, PUT  |  "/api/v2/order"  |    
|  C,R  |  POST, GET  |  "/api/v2/payment"  |    
|  C,R,U,D  |  POST, GET, DELETE, PUT  |  "/api/v2/product"  |    
|  C,R,U,D  |  POST, GET, DELETE, PUT  |  "/api/v2/shop"  |    
|  C,R,U,D  |  POST, GET, DELETE, PUT  |  "/api/v2/user"  |    
|  C,R,U  |  POST, GET, PUT  |  "/api/v2/withdraw"  |    
|  C,R  |  POST, GET  |  "/api/v2/message"  |    
|  C,R,U  |  POST, GET, PUT  |  "/api/v2/conversation"  |    


## Challenges
* The key challenge was the transition from rendering static data to accessing of individual components' state through Redux state management library. Admittedly, the configuration of redux is much more tedious than the useContext hook. However, having read through the forums that its especially useful for larger, complex applications with multiple data sources and complex data flow, the team took on the challenge and encountered a couple of hurdles. The challenges include understanding the flow of the state changes from (Client-->Actions dispatcher-->Reducer function-->Redux Store), as well as accessing the states from the redux store and rendering the different properties of the states.


## Possible Extensions

* Debugging of stripe and paypal payment API to process payments.

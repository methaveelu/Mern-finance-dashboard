## MERN-finance-dashboard
A MERN stack Finance dashboard for businesses to keep track of their finances and overall performance. The dashboard using Material UI provides a breakdown of the key performance indicators and other types of data to provide a concise overview of the company's performance.

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


## Description of App
### User Stories
As a user, I want to be able to:
- [x] create a personal account for using the app with an authentication token sent to my email account

## Wireframes

*Main Dashboard Page
<img width="1248" alt="image" src="https://github.com/methaveelu/Mern-finance-dashboard/assets/110245885/a2125eae-4231-4682-8d68-ae6a7a4b0d5c">

*Predictions Page
<img width="1251" alt="image" src="https://github.com/methaveelu/Mern-finance-dashboard/assets/110245885/e344e12a-6127-47de-a0dd-abba06f33bb1">


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
* bodyParser
* mongoose
* dotenv
* cors
* helmet
* morgan

### Motivations & Approach
The Motivation behind this project was to challenge myself to learn new technologies and tools available to create a MERN stack Application. Intrigued by the widely used UI interface library called Material UI, I was keen to pick up this skill set and experience the convenience of using the pre-built components. On another hand, as a Redux library user, I was keen to find out how the Redux Toolkit would immensely simplify the process of setting up this state management library in terms of reducing the complexity of setting up the boilerplate. 

## Project Setup:

# Frontend Development:
*__Development environment__:
Vite was chosen over Create React App (CRA) as it offers a significantly faster dev server than Create React App (CRA), providing quicker reloads during development. However, Vite's speed advantage is focused on the development environment, not deployment. Thereafter, the dependencies are installed for the usage of MUI, Redux, and Redux Toolkit.

*__Webpage design__:
To create a grid-styled dashboard with customizable labeled grids using Material-UI's Box component, it is possible to replicate the functionality of CSS's grid-template-areas property. By leveraging the Box component's style properties, you can define the layout and customize the size, color, and other attributes of the grids.

*__Data Visualization__:
To visualize the business data, Recharts was used to create area charts, line charts, bar charts, pie charts, and scatter plots. Next, to display the lists of products and orders, the Data Grid library is utilized to easily set up and populate the tables with the required information.

On the predictions page, the objective is to display a projection of future revenue for a particular company. Using the  regression-js javascript module, a best-fit regression line can be plotted based on the trending revenue data to provide estimated future revenue predictions.  

*__State Management__:
Redux is utilized to manage the state of the application. To overcome some of the common pain points associated with setting up the Redux, the Redux Toolkit (RTK) helps to reduce the boilerplate code. such as action creators and reducers, by offering a concise and intuitive API.

3) Backend Development:

*__Data Modelling__:
<img width="669" alt="image" src="https://github.com/methaveelu/Mern-finance-dashboard/assets/110245885/1c0b9fc8-dbb9-476e-ad78-c1986a9daaab">

Data modeling for key performance indicators (KPIs) involves structuring and organizing data elements related to KPIs such as total profit, total revenue, total expenses, expenses by category, daily data, and monthly data.

When considering data modeling for KPIs, subsets of data models such as "transactions" and "products" are required to be  interconnected. These models contain attributes and relationships that capture the relevant data for analysis. 
  
Transactions Model: This model captures data related to individual transactions, such as transaction IDs, transaction dates, transaction amounts, and other relevant details. Each transaction is associated with a specific product, which can be represented as an array of product IDs.

Products Model: The products model represents the entities or items being transacted. It includes attributes like product IDs, product names, prices, and other relevant information. Each product can have an array of transaction IDs associated with it, indicating the transactions in which that product was involved.

By establishing these relationships between models, you can show the connections and dependencies between transactions and products. For example, by referencing the array of transaction IDs within a product, you can retrieve all the transactions associated with that specific product.


5) Integration:

6) Testing and Refinement:


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

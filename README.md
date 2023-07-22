## MERN-finance-dashboard
The MERN stack Finance dashboard, designed with Material UI and Recharts, empowers businesses with a comprehensive and user-friendly financial management solution. The ability to track key performance indicators and visualize financial data in real-time enables businesses to make strategic decisions and optimize performance.

## Wireframes
*Main Dashboard Page
<img width="1248" alt="image" src="https://github.com/methaveelu/Mern-finance-dashboard/assets/110245885/a2125eae-4231-4682-8d68-ae6a7a4b0d5c">

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

### Frontend Development:
### (Development environment):
Vite was chosen over Create React App (CRA) as it offers a significantly faster dev server than Create React App (CRA), providing quicker reloads during development. However, Vite's speed advantage is focused on the development environment, not deployment. 

### Webpage design:
To create a grid-styled dashboard with customizable labeled grids using Material-UI's Box component, it is possible to replicate the functionality of CSS's grid-template-areas property. By leveraging the Box component's style properties, we can create a matrix-like layout and customize the size, color, and other attributes of the individual grids.

### Data Visualization:
To visualize the business data, Recharts was used to create area charts, line charts, bar charts, pie charts, and scatter plots. Next, to display the lists of products and orders, the Data Grid library is utilized to easily set up and populate the tables with the required information.

On the predictions page, the objective is to display a projection of future revenue for a particular company. Using the  regression-js javascript module, a best-fit regression line can be plotted based on the trending revenue data to provide estimated future revenue predictions.

 *Predictions Page
 
<img width="781" alt="image" src="https://github.com/methaveelu/Mern-finance-dashboard/assets/110245885/ff6dce65-6e44-4f2b-a058-e1ba2b97e881">

### State Management:
Redux is utilized to manage the state of the application. To overcome some of the common pain points associated with setting up the Redux, the Redux Toolkit (RTK) helps to reduce the boilerplate code. such as action creators and reducers, by offering a concise and intuitive API.

### Backend Development:

### Data Modelling:

<img width="669" alt="image" src="https://github.com/methaveelu/Mern-finance-dashboard/assets/110245885/1c0b9fc8-dbb9-476e-ad78-c1986a9daaab">

Data modeling for key performance indicators (KPIs) involves structuring and organizing data elements related to KPIs such as total profit, total revenue, total expenses, expenses by category, daily data, and monthly data.

When considering data modeling for KPIs, subsets of data models such as "transactions" and "products" are required to be  interconnected. These models contain attributes and relationships that capture the relevant data for analysis. 
  
### Transactions Model: This model captures data related to individual transactions, such as transaction IDs, transaction dates, transaction amounts, and other relevant details. Each transaction is associated with a specific product, which can be represented as an array of product IDs.

### Products Model: The products model represents the entities or items being transacted. It includes attributes like product IDs, product names, prices, and other relevant information. Each product can have an array of transaction IDs associated with it, indicating the transactions in which that product was involved.

By establishing these relationships between models, the connections and dependencies can be shown between transactions and products. For example, by referencing the array of transaction IDs within a product, users can retrieve all the transactions associated with that specific product.

## Challenges

### Setting up of redux toolkit :

Setting up Redux Toolkit (RTK) can be straightforward and streamlined, thanks to its built-in utilities and simplified syntax. However, like any new technology or library, there are some challenges faced which includes:

Learning Curve: Being new to RTK, there might be a learning curve to understand the core concepts, principles, and best practices of Redux and how RTK simplifies some of the traditional Redux boilerplate.

TypeScript Integration: While TypeScript support in RTK is excellent, configuring the TypeScript types for custom reducers, actions, and selectors might require some extra effort, especially when working with complex data structures.

Despite these challenges, Redux Toolkit is designed to address many of the common pain points associated with using plain Redux. By following the official documentation, examples, and community best practices, developers can overcome these challenges and enjoy the benefits of a more efficient and maintainable state management solution in their applications.

### Static typing of the variables:

In TypeScript, static typing allows us to define the types of variables, function parameters, and return values at compile-time, providing greater type safety and catching potential type-related errors early during development.

By defining interfaces for API response objects, the code specifies the expected data structure of the API responses. This helps ensure that the data received from the backend conforms to the specified structure, and any deviations will be flagged as type errors during the development process.

However there are some pain points of static typing which includes:

Initial Setup and Learning Curve: Setting up static typing in a project, especially with TypeScript, may require additional configuration and a learning curve for developers who are not familiar with the language or typing concepts.

Development Speed: In some cases, the strictness of static typing can slow down development, as developers may need to spend more time defining the structure of the response objects returned from various API endpoints.

Challenges with Third-Party Libraries: When using third-party libraries or dependencies without TypeScript definitions, developers may have to resort to type assertions or create custom typings, which can be cumbersome and error-prone. Personally, there were some issues When integrating Mongoose-currency with TypeScript. Likely due to the dependency not having any TypeScript type definitions, causing TypeScript to complain about missing or incompatible types.

Despite these challenges, static typing brings significant benefits in terms of early error detection, code readability, IDE support, refactoring safety, and better collaboration in larger development teams. The decision to use static typing should consider the project's requirements, the team's expertise, and the potential long-term benefits of improved code quality and maintainability.

### Styling of MUI components :

__CSS-in-JS Learning Curve:__ Material-UI encourages using CSS-in-JS solutions like makeStyles, styled-components, or emotion for styling components. Developers who are not familiar with these approaches may find it challenging to understand the syntax and organization of styles within the component code.

__Responsive Styling:__ Creating responsive designs that adapt well to different screen sizes can be challenging. MUI offers responsive utilities like useMediaQuery, but coordinating styles across different breakpoints may require extra effort.


## Possible Extensions

* To create a CRUD function page for inputting new business data (monthly revenue, profit, and other KPI values) and displaying the data using Recharts for visualization.

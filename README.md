## MERN-finance-dashboard
A MERN stack Finance dashboard for businesses to keep track of their finances and overall performance. The dashboard using Material UI provides a breakdown of the key performance indicators and other types of data to provide a concise overview of the company's performance.

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
(__Development environment__):
Vite was chosen over Create React App (CRA) as it offers a significantly faster dev server than Create React App (CRA), providing quicker reloads during development. However, Vite's speed advantage is focused on the development environment, not deployment. Thereafter, the dependencies are installed for the usage of MUI, Redux, and Redux Toolkit.

(__Webpage design__):
To create a grid-styled dashboard with customizable labeled grids using Material-UI's Box component, it is possible to replicate the functionality of CSS's grid-template-areas property. By leveraging the Box component's style properties, you can define the layout and customize the size, color, and other attributes of the grids.

(__Data Visualization__):
To visualize the business data, Recharts was used to create area charts, line charts, bar charts, pie charts, and scatter plots. Next, to display the lists of products and orders, the Data Grid library is utilized to easily set up and populate the tables with the required information.

On the predictions page, the objective is to display a projection of future revenue for a particular company. Using the  regression-js javascript module, a best-fit regression line can be plotted based on the trending revenue data to provide estimated future revenue predictions.  

(__State Management__):
Redux is utilized to manage the state of the application. To overcome some of the common pain points associated with setting up the Redux, the Redux Toolkit (RTK) helps to reduce the boilerplate code. such as action creators and reducers, by offering a concise and intuitive API.

3) Backend Development:

(__Data Modelling__):

<img width="669" alt="image" src="https://github.com/methaveelu/Mern-finance-dashboard/assets/110245885/1c0b9fc8-dbb9-476e-ad78-c1986a9daaab">

Data modeling for key performance indicators (KPIs) involves structuring and organizing data elements related to KPIs such as total profit, total revenue, total expenses, expenses by category, daily data, and monthly data.

When considering data modeling for KPIs, subsets of data models such as "transactions" and "products" are required to be  interconnected. These models contain attributes and relationships that capture the relevant data for analysis. 
  
(__Transactions Model__): This model captures data related to individual transactions, such as transaction IDs, transaction dates, transaction amounts, and other relevant details. Each transaction is associated with a specific product, which can be represented as an array of product IDs.

(__Products Model__): The products model represents the entities or items being transacted. It includes attributes like product IDs, product names, prices, and other relevant information. Each product can have an array of transaction IDs associated with it, indicating the transactions in which that product was involved.

By establishing these relationships between models, the connections and dependencies can be shown between transactions and products. For example, by referencing the array of transaction IDs within a product, users can retrieve all the transactions associated with that specific product.

## Challenges

* Setting up of redux toolkit
Setting up Redux Toolkit (RTK) can be straightforward and streamlined, thanks to its built-in utilities and simplified syntax. However, like any new technology or library, there are potential challenges that developers might face during the setup process. Some common challenges include:

Learning Curve: If developers are new to Redux or RTK, there might be a learning curve to understand the core concepts, principles, and best practices of Redux and how RTK simplifies some of the traditional Redux boilerplate.

Project Integration: Integrating Redux Toolkit into an existing project may require refactoring existing code to fit the new Redux structure. This can be time-consuming and require a good understanding of the application architecture.

Configuring Redux Store: Configuring the Redux store properly with middleware, dev tools, and other options can be daunting, especially for larger applications. However, RTK provides a configureStore function that abstracts much of this complexity.

Async Operations: Handling asynchronous operations, such as making API calls, can be challenging. While RTK provides the createAsyncThunk utility to simplify async actions, managing complex async flows can still be tricky.

Redux DevTools: Integrating Redux DevTools for debugging can sometimes be challenging, especially if the setup involves custom middleware or specific configurations.

TypeScript Integration: While TypeScript support in RTK is excellent, configuring the TypeScript types for custom reducers, actions, and selectors might require some extra effort, especially when working with complex data structures.

File Organization: Deciding how to organize Redux-related files, such as actions, reducers, and selectors, can be subjective and may require some thought to maintain a clean and scalable project structure.

Testing: Writing tests for Redux logic can be complex, especially when dealing with asynchronous actions and selectors. Ensuring proper test coverage and mocking dependencies can be a challenge.

Despite these challenges, Redux Toolkit is designed to address many of the common pain points associated with using plain Redux. By following the official documentation, examples, and community best practices, developers can overcome these challenges and enjoy the benefits of a more efficient and maintainable state management solution in their applications.

* Static typing of the variables

In TypeScript, static typing allows you to explicitly define the types of variables, function parameters, and return values at compile-time, providing greater type safety and catching potential type-related errors during development.

By defining interfaces for API response objects, the code establishes a contract that specifies the expected data structure of the API responses. This helps ensure that the data received from the backend conforms to the specified structure, and any deviations will be flagged as type errors during the development process.

Some of the common pain points of static typing include:

Initial Setup and Learning Curve: Setting up static typing in a project, especially with TypeScript, may require additional configuration and a learning curve for developers who are not familiar with the language or typing concepts.

Code Verbosity: Static typing can lead to more verbose code, as type annotations need to be added to variables, function parameters, and return values. This can make the code look cluttered and increase the lines of code.

Development Speed: In some cases, the strictness of static typing can slow down development, as developers may need to spend more time defining and maintaining types. This can be especially true for quick prototyping or small projects.

Challenges with Third-Party Libraries: When using third-party libraries without TypeScript definitions, developers may have to resort to type assertions or create custom typings, which can be cumbersome and error-prone.

Type Inference Complexity: While TypeScript has powerful type inference capabilities, complex scenarios or deeply nested data structures may require explicit type annotations, making the codebase more complex.

Flexibility Trade-off: Static typing enforces stricter rules on types, which can limit the flexibility and dynamism of the code. This may be a concern for developers who prefer a more dynamic and loosely-typed approach.

Developer Familiarity: Some developers who are more accustomed to dynamic languages or who have not worked extensively with static typing may find it challenging to adapt to the paradigm.

Integration with Existing Code: Introducing static typing to an existing codebase can be challenging, especially in large projects with legacy code. The process of converting code to use TypeScript may require considerable effort and planning.

Despite these challenges, it's important to note that static typing brings significant benefits in terms of early error detection, code readability, IDE support, refactoring safety, and better collaboration in larger development teams. The decision to use static typing should consider the project's requirements, the team's expertise, and the potential long-term benefits of improved code quality and maintainability.


## Possible Extensions

* Debugging of stripe and paypal payment API to process payments.

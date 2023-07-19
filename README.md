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

5) Integration:

6) Testing and Refinement:


## Challenges


## Possible Extensions

* Debugging of stripe and paypal payment API to process payments.

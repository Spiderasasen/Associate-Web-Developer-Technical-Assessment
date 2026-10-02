# Associate-Web-Developer-Technical-Assessment

** instructions **

Build a full-stack application that consumes a public stock API and displays intraday market
data.

# Backend
To access the backend you first need to navigate to the back folder
    
    cd Web-Dev_Assesment/backend

You will next need to install all dependencies inside the backend folder

    npm install

Finally, you need to run the backend sever

    npm run dev

## Important Notice for the Backend
Due to the backend running under Localhost:3000 you will need to make sure that you have CORS installed.
To do this first run this command in the backend folder:

    npm install cors

If the website is only displaying "Failed to get Stock" or somewhere along those lines. 
Please run this line to help secure that CORS is properly installed into your machine

    npm i --save-dev @types/cors

You will be required to rerun the backend again once you properly installed the CORS

# Frontend
To access the frontend you first need to set up the backend
- otherwise the frontend will not be able to function properly

Once the backend has been established, open a new terminal and navigate to the frontend

    cd Web-Dev_Assesment/frontend

Next you need to install all dependencies inside the frontend folder

    npm install

Finally, you need to run the frontend

    npm run dev

The website will run under:

    http://localhost:5173

While using the website, the website will fetch the backend website:
    
    http://localhost:3000/api/stocks/
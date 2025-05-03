# Technical exercise

  #### Add an object for yourself following a similar format. Put each object in an array so you have an array of objects (your choice how to do that). Iterate through the array of objects adding the date the script was run each object as favorite things may change in the future. Console.log. only active records with the Name, date, Favorite movie of each person. Add a function that can sort the output by object property. There may be a time where no Active records are found. Include code that provides a message when that occurs.

## Introduction
  * This project contains an API, it was developed using NodeJs-Typescript. 
  * For no persisted data a json file `data.json`  is created to load the data from `data.ts` file since first running the app.
  * On the get request `data.json` is updated with date property and filtered only displaying active records.
  * If any property (name, date or favoriteFood) is passed as param the data is sorted by that property
  * For persisted data you need to run `docker-compose up --build` from the root project. A mongo database is created and the first data loaded.
  * You can sort by name, date or food.

## How to start?

1. Clone the github repository: 
    ```
      git clone repository-url
    ```
2. Install API dependencies `cd tech-exercise` directory: 
    ```
      npm install
    ```
3. Runing the aplication:
    ```
      npm run dev
    ```
4. For displaying no persisted data open postman and type `http://localhost:5000/no-persisted`
 ![alt text](image.png)

  * The data will be displayed on terminal too.

 ![alt text](image-1.png)

5. For displaying persisted data open postman and type  `http://localhost:5000/persisted`
![alt text](image-2.png)

6. New documents can be created just changing to POST method.
![alt text](image-3.png)

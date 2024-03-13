# Getting Started with Create React App
## traditional way to create a react setup 
 ```
    npx create-react-app project_name 
    cd project_name
    npm start
 ```
[!Note]
> index.js : important file whole compnenets render from this file 
 ## this is the content inside index.js
```
import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(documnt.getElementById('root'));
root.render(
  <React.StrictMode>
    hello
  </React.StrictMode>
);
```
1 React.StrictMode - used for error it will show the error
2 we use html ,compnents inside React.StrictMode


# compnents in react 
> components means a code which is used again and again in our project || they are independed and reusable in nature ,basically a piece of code
> in our project i use App.js as a component 
>componenet name must be started with capital first letter here:App.js/App.jsx
> export the compnents and import whenever required.

## jsx in react
>we can write html directly inside jsx 
>but we have to wrape the html inside anything like a  - reactfragment, div etc
[!Note] 
> if we want to use javascript code inside jsx return statement, we have to use {} inside it or use pure js code outside return statement.
 eg: ```function App(){
    let a =2 ;
    return(
        <div>
            {a+2}+2
        <h1>hello there, i'm component</h1>
        {/* <P> this is paragraph </P> */}
        </div>
    )
}
export default App;
```
## we can use external css for styling our compnents 
> external css can be written in traditional way but if you use inline css so we have to understand the syntax first 
``` <p style={{backgroundColor: "green" , color: "black"}}>so here is the  paragraph tag<p/>  ```
> the name of the css property will be camerl-case and the property of css will be use as a key:value pair | object 

## componets,props
> learn to create  one component with basic react jsx and import and export concept 
> props : properties ,
import React from 'react';
import './Questions.css';

const Questions = () => {
    return (
        <div id='ques'>
            <hr />
            <h3>Blog questions</h3>
           <p>1. Props vs state</p> 
           <p>- The state is an updatable structure that is used to contain data or information about the component and can change over time. Props are read-only components. It is an object which stores the value of attributes of a tag and work similar to the HTML attributes. Props are immutable but state is mutable.</p>
           <p>2. How does useState work?</p>
           <p>- The React useState Hook allows us to track state in a function component. It returns an array with two values: the current state and a function to update it. State generally refers to data or properties that need to be tracking in an application.</p>
           <p>3. Purpose of useEffect other than fetching data.</p>
           <p>- The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments. The second argument is optional. useEffect(function, dependency)</p>
           <p>4. How Does React work?</p>
           <p>- ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
        </div>
    );
};

export default Questions;
import React from "react";
import ReactDOM  from "react-dom/client";

// const heading = React.createElement("h1", {id:"heading"}, "Hello World from React!!")
// console.log(heading);//at the end of the day react element is js obj..
// const heading = React.createElement(
//     'div',{id:"parent"},
//     React.createElement('div',{id:"child"},
//     [React.createElement('h1',{},"hello from react under 2divs'"), 
//     React.createElement('h2',{},"hello from react under 2divs and one h1 tag'")]))

//React Element
const element = (
    <h1 class='uday'>
        Element from react element
    </h1>

)

//React Component
const Title = () =>(
    <h1 className="head" tabIndex="5">
        React using JSX 
    </h1>
)

//React fucntional Component({element} is a react element here)
const FunctionalComponent = () =>{
    return (
    <div id="container1">
        {element}  
        <h1 className="parent1">statement of React from FunctionalComponent</h1>
    </div>)
}

//another way of writing above functional component 
const FunctionalComponent2 = () => (
    <div id="container2">
        {element}
        <Title/>
        <h1 className="parent2">statement of React from FunctionalComponent2</h1>
    </div>);

console.log(FunctionalComponent())
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <div>
      <FunctionalComponent />,
      <FunctionalComponent2 />
    </div>
  );
 
// const heading = React.createElement("h1", {id:"heading"}, "Hello World from React!!")
// console.log(heading);//at the end of the day react element is js obj..
const heading = React.createElement(
    'div',{id:"parent"},
    React.createElement('div',{id:"child"},
    [React.createElement('h1',{},"hello from react under 2divs'"), 
    React.createElement('h2',{},"hello from react under 2divsn and one h1 tag'")]))
console.log(heading)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(heading)
 
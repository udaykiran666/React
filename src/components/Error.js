import { useRouteError } from "react-router-dom";

const Error = ()=>{
    const error = useRouteError();
    console.log(error); //you can see error details here.
    return (
        <div>
            <h1>Opss!!!  Something went wrong!</h1>
            <h2>{error.status} : {error.statusText}</h2>
        </div>
    );
};

export default Error;
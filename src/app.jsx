import React from "react";
import ReactDOM from "react-dom";

const DynamicallyLoaded = React.lazy(import("./dynamically-imported/dynamic-component.jsx"));

const App = () => {
    return <div>
        My app
        <hr />
        <React.Suspense fallback={<div>Loading ...</div>}>
            <DynamicallyLoaded />
        </React.Suspense>
    </div>;
}

ReactDOM.render(
    <App />,
    document.getElementById("react-container")
);
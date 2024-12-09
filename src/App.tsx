import React from "react";
import Step from "./Step";

const App = () => {
  return (
    <div className="p-4 bg-blue-100">
      <h1 className="text-2xl font-bold text-blue-600">Micro Frontend 1</h1>
      <Step index={0}/>
    </div>
  );
};

export default App;

import React, { Suspense } from "react";
import COMMON_ROUTES from 'routers/root.routers';
import routerConfig from "routers/routerConfig";
import "./App.css";



function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading ...</div>}>
      {routerConfig(COMMON_ROUTES)}
      </Suspense>
    </div>
  );
}

export default App;
import './App.css';
import React from 'react';
import {ToastProvider} from 'react-toast-notifications'
import Content from "./Components/Content/Content";
// import
function App() {
  return (
      <React.Fragment>

          //test2

        {/*<InterfaceUtility/>*/}
        <ToastProvider>
          {/*<Layout {...props}>*/}
            <Content/>
          {/*</Layout>*/}
        </ToastProvider>

      </React.Fragment>
  );
}

export default App;

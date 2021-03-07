import './App.css';
import React from 'react';
import {ToastProvider} from 'react-toast-notifications'
import Content from "./Components/Content/Content";
import {InputText} from "primereact/inputtext";
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
function App() {
  return (
      <React.Fragment>
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

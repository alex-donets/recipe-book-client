import React from 'react';
import '../../shared/styles/index.scss';

import Header from "../../shared/components/Header/Header";
import Main from "../../shared/components/Main/Main";
import Footer from "../../shared/components/Footer/Footer";
import { runAllInterceptors } from "../../backend/interceptors/interceptors";

runAllInterceptors();

function App() {
  return (
      <div className="main-container">
        <Header />
        <Main />
        <Footer />
      </div>
  );
}

export default App;

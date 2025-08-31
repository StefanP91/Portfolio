import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "./components/Header/Header"
import Main from "./components/Main"
import Footer from "./components/Footer/Footer"
import Welcome from "./components/Welcome/Welcome";


function Root() {
  const [showWelcome, setShowWelcome] = useState(true);

  const handleWelcomeComplete = () => {
    setShowWelcome(false);
  };

  return (
    <>
      {showWelcome ? (
        <Welcome onComplete={handleWelcomeComplete} />
      ) : (
        <>
          <Header />
          <Main />
          <Footer />
        </>
      )}
    </>
  )
}

export default Root;

import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "./assets/components/Header"
import Main from "./assets/components/Main"
import Footer from "./assets/components/Footer"
import Welcome from "./assets/components/Welcome";


function App() {
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

export default App

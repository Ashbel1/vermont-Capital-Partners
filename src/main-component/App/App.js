import React, { useState, useEffect } from 'react';
import AllRoute from '../router'
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ChatBot from '../../components/ChatBot/ChatBot';
import LoadingShimmer from '../../components/LoadingShimmer/LoadingShimmer';


const App = () => { 
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Simulate initial load time for assets and components
    const timer = setTimeout(() => {
      setFadeOut(true);
      // Remove loading shimmer after fade out animation
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }, 1000); // Adjust this time based on your needs (1000ms = 1 second)

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App" id='scrool'>
          {loading && (
            <div className={fadeOut ? 'fade-out' : ''}>
              <LoadingShimmer />
            </div>
          )}
          <AllRoute/>
          <ChatBot/>
          <ToastContainer/>
    </div>
  );
}

export default App;
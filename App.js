import React, { useState } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import Login from './Components/Login';
import Register from './Components/Register';
import Recovery from './Components/Recover';

const App = () => {
  const [currentPage, setCurrentPage] = useState('login');

  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return <Login onSwitch={() => setCurrentPage('recovery')} onRegister={() => setCurrentPage('register')} />;
      case 'register':
        return <Register onSwitch={() => setCurrentPage('login')} />;
      case 'recovery':
        return <Recovery onSwitch={() => setCurrentPage('login')} />;
      default:
        return <Login onSwitch={() => setCurrentPage('recovery')} onRegister={() => setCurrentPage('register')} />;
    }
  };

  return (
    <PaperProvider>
      {renderPage()}
    </PaperProvider>
  );
};

export default App;
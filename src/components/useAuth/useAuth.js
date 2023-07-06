import { useState } from 'react';

export const useAuth = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState('');

  const login = async (username, password) => {
    try {
    //   const response = await fetch('http://localhost:3000/users', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ username, password }),
    //   });


    function esperaUnSegundo() {
        return new Promise(function(resolve, reject) {
          setTimeout(function() {
            resolve({ok : true});
          }, 1000);
        });
      }

        
      const response = await esperaUnSegundo()

      if (response.ok) {
        setLoggedIn(true);
        setError('');
      } else {
        const errorData = await response.json();
        setError(errorData.message);
        setLoggedIn(false);
      }
    } catch (error) {
      setError('Error de conexión');
      setLoggedIn(false);
    }
  };

  const logout = () => {
    setLoggedIn(false);
    setError('');
  };

  return { loggedIn, error, login, logout };
};
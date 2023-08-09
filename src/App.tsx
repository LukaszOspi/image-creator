import React, { useState } from 'react';
import ImageCreator from './ImageCreator';

const App: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    if (username === 'ospi' && password === 'curriculum2023') {
      setLoggedIn(true);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      {isLoggedIn ? (
        <ImageCreator />
      ) : (
        <div>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default App;

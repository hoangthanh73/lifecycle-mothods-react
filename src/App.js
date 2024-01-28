import { useState } from 'react';
import './index.css';
import UserFinder from './components/UserFinder.js';
import Users from './components/Users.js';

function App(props) {

  const DUMMY_USERS = [
    { id: 'u1', name: 'Max' },
    { id: 'u2', name: 'Manuel' },
    { id: 'u3', name: 'Julie' },
  ];

  const [filUsers, setFilUsers] = useState(DUMMY_USERS);

  const getKeywords = (event) => {
    const keywords = event.target.value.toUpperCase().trim();
    console.log(keywords);
    setFilUsers(DUMMY_USERS.filter(user => {
      return user.name.toUpperCase().includes(keywords);
    }))
  }

  return (
    <div className="App">
      <UserFinder getKeyWords={getKeywords} />
      <Users users={filUsers} />
    </div>
  );
}

export default App;

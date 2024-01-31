import { Component } from 'react';
import './index.css';
import UsersContext from './store/users-context';
import UserFinder from './components/UserFinder';

const DUMMY_USERS = [
  { id: 'u1', name: 'Max' },
  { id: 'u2', name: 'Manuel' },
  { id: 'u3', name: 'Julie' },
]

const value = {
  users: DUMMY_USERS,
  searchTerm: '',
}

class App extends Component {
  render() {
    return (
      <UsersContext.Provider value={value}>
        <UserFinder />
      </UsersContext.Provider>
    );
  };
}

export default App;

import { Component } from 'react';
import classes from './Users.module.css';
import Button from './Button';
import User from './User';
import UsersContext from '../store/users-context';

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = { showUsers: true };
    }

    static contextType = UsersContext;

    toggleUserHandler = (event) => {
        event.preventDefault();
        this.setState(prevState => {
            return { showUsers: !prevState.showUsers }
        })
    }

    render() {
        const users = this.props.filteredUsers;
        const userList = users.map(user => <User key={user.name} name={user.name} />)

        return (
            <div className={classes.users}>
                <Button onClick={this.toggleUserHandler}>
                    {this.state.showUsers ? 'Hide Users' : 'Show Users'}
                </Button>
                <ul>
                    {this.state.showUsers && userList}
                </ul>
            </div>
        )
    }
}

export default Users;
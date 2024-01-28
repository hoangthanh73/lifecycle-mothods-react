import { Component } from 'react';
import classes from './Users.module.css';
import UsersContext from '../store/users-context';
import Button from './Button';
import User from './User';

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = { showUsers: false }
    }

    static contextType = UsersContext;

    clickHandler = (e) => {
        e.preventDefault();
        if (e.target.textContent === 'Hide Users') {
            e.target.textContent = 'Show Users';
            this.setState({ showUsers: true })
        } else {
            e.target.textContent = 'Hide Users';
            this.setState({ showUsers: false })
        }
    }

    render() {
        const { users } = this.context;

        const userList = users.map(user => <User key={user.name} name={user.name} />)
        return (
            <div className={classes.users}>
                <ul>
                    <Button onClick={this.clickHandler}>Hide Users</Button>
                    {this.state.showUsers && userList}
                </ul>
            </div>
        )
    }
}

export default Users;
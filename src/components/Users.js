import { Component } from 'react';
import classes from './Users.module.css';
import Button from './Button';
import User from './User';

class Users extends Component {
    constructor(props) {
        super();
        this.state = { showUsers: false }
    }

    toggleUserHandler = (event) => {
        event.preventDefault();
        this.setState(prevState => {
            return { showUsers: !prevState.showUsers }
        })
    }

    render() {
        const { users } = this.props;
        const userList = users.map(user => <User key={user.name} name={user.name} />)
        return (
            <div className={classes.users}>
                <ul>
                    <Button onClick={this.toggleUserHandler}>
                        {this.state.showUsers ? 'Hide Users' : 'Show Users'}
                    </Button>
                    {this.state.showUsers && userList}
                </ul>
            </div>
        )
    }
}

export default Users;
import { Component } from 'react';

interface User {
    name: string;
    age: number;
}

interface UserSearchProps {
    users: User[];
}

interface UserSearchState {
    name: string;
    user: User | undefined;
}

class UserSearch extends Component<UserSearchProps> {
    state: UserSearchState = {
        name: '',
        user: undefined,
    }

    onclick = () => {
        const foundUser = this.props.users.find(u => {
            return u.name === this.state.name;
        });
        this.setState({ user: foundUser });
    };

    render() {
        const { name, user } = this.state;
        const { users } = this.props;
        return <div>
            User search
            <input value={name} onChange={e => this.setState({ name: e.target.value})} />
            <button onClick={this.onclick}>Find User</button>
            <div>
                {user?.name}
                {user?.age}
            </div>
        </div>;
    }
}

export default UserSearch;

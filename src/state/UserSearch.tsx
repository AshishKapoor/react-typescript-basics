import React, {useState} from 'react';

const users = [
    { name: 'Ashish', age: 20 },
    { name: 'Pulkit', age: 20 },
    { name: 'Smriti', age: 20 }
];

const UserSearch: React.FC = () => {
    const [name, setName] = useState('');
    const [user, setUser] = useState<{name: string, age: number} | undefined>();

    const onclick = () => {
        const foundUser = users.find(u => {
            return u.name === name;
        });
        setUser(foundUser);
    };

    return <div>
        User search
        <input value={name} onChange={e => setName(e.target.value)} />
        <button onClick={onclick}>Find User</button>
        <div>
            {user?.name}
            {user?.age}
        </div>
    </div>;
}

export default UserSearch;

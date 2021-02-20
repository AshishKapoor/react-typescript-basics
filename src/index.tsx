import ReactDOM from 'react-dom';
// import Parent from './props/Parent';
// import GuestList from './state/GuestList';
// import UserSearch from './state/UserSearch';
// import EventComponent from './events/EventComponent';
// import UserSearch from './classes/UserSearch';
import UserSearch from './refs/UserSearch';

// Classes

// const users = [
//   { name: 'Ashish', age: 20 },
//   { name: 'Pulkit', age: 20 },
//   { name: 'Smriti', age: 20 }
// ];

// const App = () => {
//   return <div>
//       <UserSearch users={users} />
//   </div>;
// }

const App = () => {
  return <div>
      <UserSearch />
  </div>;
}

ReactDOM.render(<App />, document.querySelector('#root'));

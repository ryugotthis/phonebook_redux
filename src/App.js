import { Reset } from 'styled-reset';
import './App.css';
import Add from './component/Add';
import ContactList from './component/ContactList';

function App() {
  return (
    <div>
      <Reset />
      <h1 className="title">Phone Book</h1>
      <section className="main-box">
        <Add />
        <ContactList />
      </section>
    </div>
  );
}

export default App;

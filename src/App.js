import AddContact from './components/AddContact/AddContact';
import SearchContact from './components/SearchContact/SearchContact';
import ListContact from './components/ListContact/ListContact';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header">
         <h1>Notebook</h1>
      </header>
      <main className="main">
         <div className="main__left-column">
            <AddContact />
         </div>
         <div className="main__right-column">
            <SearchContact />
            <ListContact />
         </div>
      </main>
    </div>
  );
}

export default App;

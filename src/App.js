import mainRoutes from './mainRoutes';
import Login from './components/Login/Login';
import './App.css';

const App = () => {
  return (
    <div className="App" >
      <Login />
      <h1>POKEMON BATTLE LOGO PLACEHOLDER</h1>
      <main>
        {mainRoutes}
      </main>
    </div>
  );
}

export default App;

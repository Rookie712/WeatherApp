import './App.css';
import Header from './components/Header';
import Weather from './components/Weather';
import Background from './components/Background';
import UserContextProvider from './content/UserContextProvider';
import NavBar from './components/NavBar';
function App() {
  return (
    <UserContextProvider>
    <div className="App">
      <NavBar/>
      <Background/>
      <Header/>
      <Weather/>
    </div>
    </UserContextProvider>
  );
}

export default App;

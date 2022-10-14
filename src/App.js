import logo from './logo.svg';
import './App.css';
import Userlist from './components/UserList.jsx';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Userlist />
      </div>
    </ChakraProvider>
  );
}

export default App;

import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Pages from './pages/Pages';
import styled from 'styled-components';

function App() {
  return (
    <Main className="App">
    <BrowserRouter>
        <Navbar />
        <Pages />
    </BrowserRouter>
    </Main>
  );
}

const Main = styled.div`
  display:flex;
  overflow:hidden;
`;

export default App;

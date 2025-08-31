import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//componentes
import Navbar from './componentes/layout/Navbar';
import Footer from './componentes/layout/Footer';
import Container from './componentes/layout/Container';
import Message from './componentes/layout/Message';

//pages
import Login from './componentes/pages/Auth/login';
import Register from './componentes/pages/Auth/register';
import Home from './componentes/pages/home';
import Profile from './componentes/pages/User/Profile';

//context
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <Router>
      <UserProvider>
        <Navbar/>
        <Message/>
        <Container>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
             <Route path="/user/profile" element={<Profile />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Container>
        <Footer/>
      </UserProvider>
    </Router>
  );
}

export default App;

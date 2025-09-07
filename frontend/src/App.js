import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//componentes
import Navbar from './componentes/layout/Navbar';
import Footer from './componentes/layout/Footer';
import Container from './componentes/layout/Container';
import Message from './componentes/layout/Message';

//pages
import Login from './componentes/pages/Auth/Login';
import Register from './componentes/pages/Auth/Register';
import Home from './componentes/pages/Home';
import Profile from './componentes/pages/User/Profile';
import MyPets from './componentes/pages/Pet/MyPets';
import AddPet from './componentes/pages/Pet/AddPet';
import EditPet from './componentes/pages/Pet/EditPet';

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
            <Route path="/pet/mypets" element={<MyPets />} />
            <Route path="/pet/add" element={<AddPet />} />
            <Route path="/pet/edit/:id" element={<EditPet />}/>
            <Route path="/" element={<Home />} />
          </Routes>
        </Container>
        <Footer/>
      </UserProvider>
    </Router>
  );
}

export default App;

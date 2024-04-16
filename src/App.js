import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { useState, useEffect } from 'react'; // Import useState and useEffect
import Project from './Pages/Projects';
import Service from './Pages/Services';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Header from './Compo/Header';
import Preloader from './Compo/PreLoader'; // Import your Preloader component

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading or any other logic that determines when the app is ready
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    return (
        <div>
            {isLoading ? <Preloader /> : null}
            <Container>
                <Router>
                    <Header />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/project' element={<Project />} />
                        <Route path='/service' element={<Service />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/contact' element={<Contact />} />
                    </Routes>
                </Router>
            </Container>
        </div>
    );
}

export default App;

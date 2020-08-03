import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import { Switch, Route, Redirect } from 'react-router-dom';
import About from './components/About';
import Service from './components/Service';
import Contact from './components/Contact';

function App() {
    return (
        <>
            <Navbar></Navbar>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/service" component={Service} />
                <Route exact path="/contact" component={Contact} />
                <Redirect path='/' />
            </Switch>

            <Footer></Footer>
        </>
    )
}

export default App

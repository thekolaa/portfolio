import React, { lazy, Suspense } from 'react'
import {  Route, Switch, useLocation } from 'react-router-dom';

import NavbarLarge from '../components/NavbarLg/Navbar'
import NavbarSmall from '../components/NavbarSmall/Navbar'

import Spinner from '../components/Spinner/Spinner';

const Home = lazy(() => import('./Home/Home'));
const Contact  = lazy(() => import('./Contact/Contact'));
const About  = lazy(() => import('./About/About'));
const Projects  = lazy(() => import('./Projects/Projects'));
const GitHub  = lazy(() => import('./GitHub/GitHub'));


function App() {
    const location = useLocation();
    return (
        <>
            <NavbarLarge />
            <NavbarSmall />
              <div>
                <Suspense fallback={ <Spinner/> }>
                    <Switch>
                        <Route exact path="/" component={ Home }  />
                        <Route path="/contact" component={ Contact }  />   
                        <Route path="/about" component={ About }  />  
                        <Route path="/projects" component={ Projects }  />   
                        <Route path="/github" component={ GitHub }  />   
                    </Switch>
                </Suspense>
              </div>
        </>
    )

}

export default App

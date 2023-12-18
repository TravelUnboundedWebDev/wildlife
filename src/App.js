import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import DestinationKenya from './components/DestinationKenya'
import DestinationTanzania from './components/DestinationTanzania';
import DestinationBandhavgarh from './components/DestinationBandhavgarh'
import DestinationRanthambore from './components/DestinationRanthambore'
import DestinationCorbett from './components/DestinationCorbett'
import DestinationKabini from './components/DestinationKabini'
import DestinationBandipur from './components/DestinationBandipur'
import HotSellingPackages from './components/HotSellingPackages'
import BlogList from './components/BlogList'
import Package1 from './components/Package1'
import Package2 from './components/Package2'
import Package3 from './components/Package3'
import Package4 from './components/Package4'
import Package5 from './components/Package5'
import Package6 from './components/Package6'
import Package7 from './components/Package7'
import About from './components/About'
import BlogDetails from './components/BlogDetails'
import ScrollToTop from './components/ScrollToTop'
import Form from './components/Form'
import Privacy from './components/Privacy'
import Terms from './components/Terms'
import Footer from './components/Footer'
import NotFound from './components/NotFound'
import SearchNotFound from './components/SearchNotFound'
import SearchOverlay from './components/SearchOverlay';

function App(){
  return(
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route exact path='/' Component={Home}/>
        <Route exact path='/kenya' Component={DestinationKenya} />
        <Route exact path='/tanzania' Component={DestinationTanzania} />
        <Route exact path='/bandhavgarh' Component={DestinationBandhavgarh} />
        <Route exact path='/ranthambore' Component={DestinationRanthambore} />
        <Route exact path='/corbett' Component={DestinationCorbett} />
        <Route exact path='/kabini' Component={DestinationKabini} />
        <Route exact path='/bandipur' Component={DestinationBandipur} />
        <Route exact path='/packages' Component={HotSellingPackages} />
        <Route exact path='/about' Component={About}/>
        <Route exact path='/blogs' Component={BlogList}/>
        <Route exact path='/packages/bandipur' Component={Package1} />
        <Route exact path='/packages/kabini' Component={Package2} />
        <Route exact path='/packages/pench' Component={Package3} />
        <Route exact path='/packages/corbett' Component={Package4} />
        <Route exact path='/packages/ranthambore' Component={Package5} />
        <Route exact path='/packages/bandhavgarh' Component={Package6} />
        <Route exact path='/packages/kenya' Component={Package7} />
        <Route exact path='/blog/:id' Component={BlogDetails} />
        <Route exact path='/form' Component={Form}/>
        <Route exact path='privacy' Component={Privacy}/>
        <Route exact path='/terms' Component={Terms}/>
        <Route exact path='/contact' Component={Footer} />
        <Route exact path='/search-overlay' Component={SearchOverlay} />
        <Route exact path='/search-not-found' Component={SearchNotFound} />
        <Route path='*' Component={NotFound} />
      </Routes>
    </Router>
  )
}
export default App;
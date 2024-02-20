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
import PackageBandipur from './components/PackageBandipur'
import PackageKabini from './components/PackageKabini'
import PackagePench from './components/PackagePench'
import PackageCorbett from './components/PackageCorbett'
import PackageRanthambore from './components/PackageRanthambore'
import PackageBandhavgarh from './components/PackageBandhavgarh'
import PackageKenya from './components/PackageKenya'
import PackageCorbettLuxery from './components/PackageCorbettLuxery'
import PackageMara from './components/PackageMara'
import PackageMagicalMara from './components/PackageMagicalMara'
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
import LandingMara from './components/LandingMara';
import PriceMara from './components/PriceMara';
import Talk from './components/Talk';
import OverviewMara from './components/OverviewMara';
import ItiMara from './components/ItiMara';
import IncExcMara from './components/IncExcMara';


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
        <Route exact path='/packages/bandipur' Component={PackageBandipur} />
        <Route exact path='/packages/kabini' Component={PackageKabini} />
        <Route exact path='/packages/pench' Component={PackagePench} />
        <Route exact path='/packages/corbett' Component={PackageCorbett} />
        <Route exact path='/packages/ranthambore' Component={PackageRanthambore} />
        <Route exact path='/packages/bandhavgarh' Component={PackageBandhavgarh} />
        <Route exact path='/packages/kenya' Component={PackageKenya} />
        <Route exact path='/packages/corbett/luxery' Component={PackageCorbettLuxery} />
        <Route exact path='/packages/mara' Component={PackageMara} />
        <Route exact path='/packages/magicalmara' Component={PackageMagicalMara} />
        <Route exact path='/blog/:id' Component={BlogDetails} />
        <Route exact path='/form' Component={Form}/>
        <Route exact path='privacy' Component={Privacy}/>
        <Route exact path='/terms' Component={Terms}/>
        <Route exact path='/contact' Component={Footer} />
        <Route exact path='/landing-mara' Component={LandingMara} />
        <Route exact path='/price-mara' Component={PriceMara} />
        <Route exact path='/talk-to-us' Component={Talk} />
        <Route exact path='/overview-mara' Component={OverviewMara} />
        <Route exact path='/itinerary-mara' Component={ItiMara} />
        <Route exact path='/inclusions-mara' Component={IncExcMara} />
        <Route exact path='/search-overlay' Component={SearchOverlay} />
        <Route exact path='/search-not-found' Component={SearchNotFound} />
        <Route path='*' Component={NotFound} />
      </Routes>
    </Router>
  )
}
export default App;
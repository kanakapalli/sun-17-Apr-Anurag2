
import './App.css';
import Explore from './explore';
import About from './about';
import arrowdown from './img/image-1@2x.png'
import bgimg from './img/pexels-vecislavas-popa-1571460-1@1x.png'
import search from'./img/search-solid-1@2x.svg';
import glass from './img/rectangle-3@1x.svg'
import grad from'./img/rectangle-4@2x.svg';
import curve from './img/vector@1x.svg';
import Dropdown from './helpers/dropdown';
import {BrowserView, MobileView} from 'react-device-detect';
import Mobile from './mobileview';
function App() {
  const onClick = () => console.log('hi');
  
  return (
     <>
    <BrowserView>
    <div>
      <div class="main-screen screen">
        <img alt='img' class="pexels-vecislavas-popa-1571460-1" src={bgimg} />
        <div class="rectangle-2"></div>
        <div class="your-logo">Your Logo</div>
        <div class="rethink-your-living-renting valign-text-middle">Rethink your living &amp; renting</div>
        <div class="about-us valign-text-middle exo2-medium-white-20px">About Us</div>
        <div class="explore valign-text-middle exo2-medium-white-20px">Explore</div>
        <div class="cities valign-text-middle exo2-medium-white-20px">Cities</div>
        <img alt='img' class="image-1" src={arrowdown} />
        <img alt='img' class="image-2" src={arrowdown} />
        <div class="make-your-stay-painless-with-us valign-text-middle">Make your stay painless with us</div>
        <img alt='img' class="rectangle-3" src={glass} />
        <img alt='img' class="rectangle-4" onClick={onClick} aria-hidden="true" src={grad} />
        <div class="rectangle-5"></div>
        <div class="rectangle-6"></div>
        <div class="rectangle-7"></div>
        <div class="rectangle-8" onClick={onClick} aria-hidden="true" ></div>
        <div class="call valign-text-middle exo2-medium-white-20px" onClick={onClick} aria-hidden="true">Call</div>
        <div class="search-text-icon" onClick={onClick} aria-hidden="true">
          <div class="search-WxUbn8 valign-text-middle">Search</div>
          <img alt='img' class="icon-search-WxUbn8" src={search} />
        </div>
       
        <div class="city valign-text-middle exo2-normal-dove-gray-16px">CITY</div>
        <div class="select-your-city valign-text-middle ubuntu-normal-black-22px">

<Dropdown title={'Select City'} />


        </div>
        <div class="dates valign-text-middle exo2-normal-dove-gray-16px">DATES</div>
        <div class="select-your-dates valign-text-middle ubuntu-normal-black-22px">


<Dropdown title={'Select DATES'} />

          </div>
        <div class="guests valign-text-middle exo2-normal-dove-gray-16px">GUESTS</div>
        <div class="add-guests valign-text-middle ubuntu-normal-black-22px">
<Dropdown title={'Add GUESTS'} />

          </div>
        <img alt='img' class="vector" src={curve} />
        <Explore/>
        <About/>
      </div>
     </div>
    </BrowserView>
 <MobileView>
               <Mobile/>
 </MobileView>
 </>
  );
}

export default App;

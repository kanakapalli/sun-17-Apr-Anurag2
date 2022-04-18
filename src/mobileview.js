


import './mobile.css';
import img1 from './img/pexels-vecislavas-popa-1571460-2@1x.png';
import drawer from './img/bars-solid--1--1@2x.svg';
import grad1 from './img/rectangle-9@2x.svg';
import grad2 from'./img/rectangle-4@2x.svg';
import search from'./img/search-solid-1@2x.svg';
import arrowdown from './img/image-1@2x.png'
import Dropdown from './helpers/dropdown';

function Mobile() {
  return (
       <div class="container-center-horizontal">
      <div class="mobile-first-screen screen">
        <img alt='img' class="pexels-vecislavas-popa-1571460-2-Idyan4" src={{img1}} />
        <div class="rectangle-9-Idyan4"></div>
        <div class="your-logo-Idyan4">Your Logo</div>
        <img alt='img' class="bars-solid-1-1-Idyan4" src={drawer} />
        <div class="rethink-your-living-renting-Idyan4 valign-text-middle">Rethink your living &amp; renting</div>
        <div class="make-your-stay-painless-with-us-Idyan4 valign-text-middle">Make your stay painless with us</div>
        <img alt='img' class="rectangle-9-DDVsAj" src={grad1} />
        <img alt='img' class="rectangle-4-Idyan4" src={grad2} />
        <div class="rectangle-5-Idyan4"></div>
        <div class="city-Idyan4 valign-text-middle exo2-normal-dove-gray-15px">CITY</div>
        <div class="select-your-city-Idyan4 valign-text-middle ubuntu-normal-black-22px"><Dropdown title={'Select your city'} /></div>
        <div class="rectangle-11-Idyan4"></div>
        <div class="guests-Idyan4 valign-text-middle exo2-normal-dove-gray-15px">GUESTS</div>
        <div class="add-guests-Idyan4 valign-text-middle ubuntu-normal-black-22px"><Dropdown title={'Add Add guests'} /></div>
        <div class="rectangle-10-Idyan4"></div>
        <div class="dates-Idyan4 valign-text-middle exo2-normal-dove-gray-15px">DATES</div>
        <div class="select-your-dates-Idyan4 valign-text-middle ubuntu-normal-black-22px"><Dropdown title={'Select your dates'} /></div>
        <img alt='img' class="image-3-Idyan4" src={arrowdown} />
        <div class="search-text-icon-Idyan4">
          <div class="search-pEyC3p valign-text-middle">Search</div>
          <img alt='img' class="search-solid-1-pEyC3p" src={search} />
        </div>
      </div>
    </div>
  );
}

export default Mobile;

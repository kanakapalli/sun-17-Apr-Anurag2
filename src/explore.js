
import './App.css';
import img1 from "./img/pexels-dmitry-zvolskiy-2082087-1@1x.png" ;
import img2 from "./img/pexels-naim-benjelloun-2029670-1@1x.png";
import grad1 from './img/rectangle-4-1@2x.svg';
import grad2 from './img/rectangle-15@2x.svg';
import grad3 from './img/rectangle-9@2x.svg';
import glass from './img/rectangle-16@2x.svg'
import exploreimg1 from './img/pexels-oleg-zaicev-4834891-1@1x.png';
import exploreimg2 from './img/pexels-houzlook-com-3356416-2@1x.png';


function Explore() {
  return (
    <div >
        <div class="explore-4wuTJo valign-text-middle">Explore</div>
        <div class="from-one-guest-rooms valign-text-middle ubuntu-normal-black-18px">
          From one-guest rooms to penthouses with pools and gardens
        </div> 
       <img alt='img' class="pexels-dmitry-zvolskiy-2082087-1" src={img1} />
        <img alt='img' class="pexels-naim-benjelloun-2029670-1" src={img2} />
        <img alt='img' class="rectangle-14" src="img/rectangle-14@2x.svg" />

        <div class="room-with-one-king-size-bed valign-text-middle ubuntu-normal-black-18px">
          Room with one king-size bed
        </div>
        <img alt='img' class="rectangle-4-4wuTJo" src={grad1} />
        <div class="x35 valign-text-middle ubuntu-normal-black-18px">35$</div>
        <img alt='img' class="rectangle-15" src={grad2} />
        <div class="x28 valign-text-middle ubuntu-normal-black-18px">28м²</div>
        <img alt='img' class="rectangle-9" src={grad3} />
        <div class="book valign-text-middle">BookS!</div>
        <img alt='img' class="rectangle-16"  src={glass} />
        <div class="penthouse-for-8-person valign-text-middle ubuntu-normal-black-18px">
          Penthouse for 8 person
        </div>
        <img alt='img' class="rectangle-17" src={grad1} />
        <div class="x2039 valign-text-middle ubuntu-normal-black-18px">2039$</div>
        <img alt='img' class="rectangle-18" src={grad2} />
        <div class="x438 valign-text-middle ubuntu-normal-black-18px">438м²</div>
        <img alt='img' class="rectangle-19" src={grad3} />
        <div class="book-4wuTJo valign-text-middle">Book!</div>
        <img alt='img' class="pexels-houzlook-com-3356416-2" src={exploreimg1} />
        <img alt='img' class="rectangle-14-4wuTJo" src={glass} />
        <div class="chapter-iii valign-text-middle ubuntu-bold-black-24px">Chapter III</div>
        <div class="lorem-ipsum-dolor-si valign-text-middle ubuntu-light-black-14px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun
        </div>
        <img alt='img' class="pexels-oleg-zaicev-4834891-1" src={exploreimg2} />
        <img alt='img' class="rectangle-15-4wuTJo" src={glass} />
        <div class="chapter-iv valign-text-middle ubuntu-bold-black-24px">Chapter IV</div>
        <div class="lorem-ipsum-dolor-si-4wuTJo valign-text-middle ubuntu-light-black-14px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun
        </div>
        <div class="x2021-company-name-all-rights-reserved valign-text-middle ubuntu-light-black-14px">
          ©&nbsp;&nbsp;2021&nbsp;&nbsp;Company Name<br />All rights reserved
        </div>
        <div class="about-us-4wuTJo valign-text-middle exo2-medium-black-20px">About Us</div>
        <div class="explore-MICO9c valign-text-middle exo2-medium-black-20px">Explore</div>
        <div class="cities-4wuTJo valign-text-middle exo2-medium-black-20px">Cities</div>
        <div class="rectangle-8-4wuTJo"></div>
        <div class="call-4wuTJo valign-text-middle exo2-medium-black-20px">Call</div>
        <div class="your-logo-4wuTJo">Your Logo</div> 
      
    </div>
  );
}

export default Explore;




import './App.css';
import img1 from './img/pexels-max-vakhtbovych-5998051-1@2x.png';
import img2 from './img/pexels-max-vakhtbovych-6492403-1@1x.png';
import glass from './img/rectangle-12@2x.svg';
import glass2 from'./img/rectangle-13@2x.svg';

function About() {
  return (
    <div >
        <div class="about-us-MICO9c valign-text-middle">About Us</div> 
        <div class="allow-us-to-tell-you-a-short-story valign-text-middle ubuntu-normal-black-18px">
          Allow us to tell you a short story...
        </div> 
        <img alt='img' class="pexels-max-vakhtbovych-5998051-1" src={img1} />
        <img alt='img' class="rectangle-12" src={glass} />
        <div class="chapter-i valign-text-middle ubuntu-bold-black-24px">Chapter I</div>
        <div class="lorem-ipsum-dolor-si-MICO9c valign-text-middle ubuntu-light-black-14px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun
        </div> 
        <img alt='img' class="pexels-max-vakhtbovych-6492403-1" src={img2} />
        <img alt='img' class="rectangle-13" src={glass2} />
        <div class="chapter-ii valign-text-middle ubuntu-bold-black-24px">Chapter II</div>
        <div class="lorem-ipsum-dolor-si-0beCRG valign-text-middle ubuntu-light-black-14px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun
        </div>
    </div>
  );
}

export default About;

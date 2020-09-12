import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import Popper from 'popper.js';
import './style.css';
import navBarModule from './nav.js';
import aboutModule from './about.js';
import trendingModule from './trending.js';
import locationModule from './location.js';
import logo from './logo.js';
import buttonModule from './order.js'
import menuModule from './menu.js'
import defaultPageModule from './default.js'
import aboutFoodModule from './aboutourfood.js'
import discoverCampModule from './discover.js'
import campLocationModule from './ourLocation'
import sander from './img/sander.jpg'
import homepage from './img/homepage.jpg'
import shop from './img/shop.jpg'
import golden from './img/golden.jpg'




const clearDefaultPage = () => {
  const clearDefault = document.getElementById('default1')
  clearDefault.style.display = 'none';
};

const clearAboutPage = () => {
  const clearAbout = document.getElementById('aboutfood1')
  clearAbout.style.display = 'none';
};
clearAboutPage();

const clearDiscoverPage = () => {
  const clearDiscover = document.getElementById('campdiscover')
  clearDiscover.style.display = 'none';
};
clearDiscoverPage();

const clearCampPage = () => {
  const clearCamp = document.getElementById('camplocate')
  clearCamp.style.display = 'none';
};
clearCampPage();

const showDefaultPage = () => {
  const showDefault = document.getElementById('default1')
  showDefault.style.display = 'block';
  clearAboutPage();
  clearDiscoverPage();
  clearCampPage();
};
document.getElementById("defaultId").addEventListener("click", showDefaultPage);

const showAboutPage = () => {
  const showAbout = document.getElementById('aboutfood1')
  showAbout.style.display = 'block';
  clearDiscoverPage();
  clearCampPage();
  clearDefaultPage();
};
document.getElementById("aboutEvent").addEventListener("click", showAboutPage);

const showDiscoverPage = () => {
  const showDiscover = document.getElementById('campdiscover')
  showDiscover.style.display = 'block';
  clearCampPage();
  clearDefaultPage();
  clearAboutPage();
};
document.getElementById("discoverr").addEventListener("click", showDiscoverPage);

const showCampPage = () => {
  const showCampPage = document.getElementById('camplocate')
  showCampPage.style.display = 'block';
  clearDefaultPage();
  clearAboutPage();
  clearDiscoverPage();
};
document.getElementById("locationid").addEventListener("click", showCampPage);
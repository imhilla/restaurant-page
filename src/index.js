import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import navBarModule from './nav';
import aboutModule from './about';
import trendingModule from './trending';
import locationModule from './location';
import logo from './logo';
import buttonModule from './order';
import menuModule from './menu';
import defaultPageModule from './default';
import aboutFoodModule from './aboutourfood';
import discoverCampModule from './discover';
import campLocationModule from './ourLocation';
import sander from './img/sander.jpg';
import homepage from './img/homepage.jpg';
import shop from './img/shop.jpg';
import golden from './img/golden.jpg';

const page = {
  navbar: navBarModule,
  about: aboutModule,
  trending: trendingModule,
  location: locationModule,
  logoo: logo,
  button: buttonModule,
  menu: menuModule,
  default: defaultPageModule,
  aboutFood: aboutFoodModule,
  discover: discoverCampModule,
  camp: campLocationModule,
};

const images = {
  image1: sander,
  image2: homepage,
  image3: shop,
  image4: golden,
};

const clearDefaultPage = () => {
  const clearDefault = document.getElementById('default1');
  clearDefault.style.display = 'none';
};

const clearAboutPage = () => {
  const clearAbout = document.getElementById('aboutfood1');
  clearAbout.style.display = 'none';
};
clearAboutPage();

const clearDiscoverPage = () => {
  const clearDiscover = document.getElementById('campdiscover');
  clearDiscover.style.display = 'none';
};
clearDiscoverPage();

const clearCampPage = () => {
  const clearCamp = document.getElementById('camplocate');
  clearCamp.style.display = 'none';
};
clearCampPage();

const showDefaultPage = () => {
  const showDefault = document.getElementById('default1');
  showDefault.style.display = 'block';
  clearAboutPage();
  clearDiscoverPage();
  clearCampPage();
};
document.getElementById('defaultId').addEventListener('click', showDefaultPage);

const showAboutPage = () => {
  const showAbout = document.getElementById('aboutfood1');
  showAbout.style.display = 'block';
  clearDiscoverPage();
  clearCampPage();
  clearDefaultPage();
};
document.getElementById('aboutEvent').addEventListener('click', showAboutPage);

const showDiscoverPage = () => {
  const showDiscover = document.getElementById('campdiscover');
  showDiscover.style.display = 'block';
  clearCampPage();
  clearDefaultPage();
  clearAboutPage();
};
document.getElementById('discoverr').addEventListener('click', showDiscoverPage);

const showCampPage = () => {
  const showCampPage = document.getElementById('camplocate');
  showCampPage.style.display = 'block';
  clearDefaultPage();
  clearAboutPage();
  clearDiscoverPage();
};
document.getElementById('locationid').addEventListener('click', showCampPage);
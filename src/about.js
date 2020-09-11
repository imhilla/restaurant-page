const aboutModule = (() => {
  function about() {
    const myAbout = document.createElement('div');
    myAbout.innerHTML = `
    <a href="#" id="aboutEvent">About our food</a>`;
    return myAbout;
  }
  document.querySelector('.about-us').appendChild(about());
})();
export default aboutModule;
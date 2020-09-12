const navBarModule = (() => {
  function navBar() {
    const myHeader = document.createElement('div');
    myHeader.innerHTML = `
    <nav>
      <div class="logo"></div>
      <div class="sub-nav">
        <div class="drop-down">
        </div>
        <div class="about-us"></div>
        <div class="trending"></div>
        <div class="location"></div>
      </div>
      <div class="order">
      </div>
    </nav>
    <div id="clearContainer">
      <div id='default1' class='default'></div>
      <div id='aboutfood1' class='aboutFood'></div>
      <div id="campdiscover" class='discoverCamp'></div>
      <div id='camplocate' class='campLocation'></div>
    </div>`;
    return myHeader;
  }
  document.querySelector('#content').appendChild(navBar());
})();
export default navBarModule;
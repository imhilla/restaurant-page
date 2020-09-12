const discoverCampModule = (() => {
  function discoverCamp() {
    const myDiscoverCamp = document.createElement('div');
    myDiscoverCamp.innerHTML = `
    <div id="discoverId" class="tabcontent">
  <div class="container">
    <h3 class="trending-header">Heres whats trending today</h3>
    <div class="trending-grid">
      <div class="grid-boxes">
        <h4></h4>
        <img src="../src/img/golden.jpg" />
      </div>
      <div class="grid-boxes">
        <h4></h4>
        <img src="../src/img/golden.jpg" />
      </div>
      <div class="grid-boxes">
        <h4></h4>
        <img src="../src/img/golden.jpg" />
      </div>
      <div class="grid-boxes">
        <h4></h4>
        <img src="../src/img/golden.jpg" />
      </div>
      <div class="grid-boxes">
        <h4></h4>
        <img src="../src/img/golden.jpg" />
      </div>
      <div class="grid-boxes">
        <h4></h4>
        <img src="../src/img/golden.jpg" />
      </div>

      <div class="grid-boxes">
        <h4></h4>
        <img src="../src/img/golden.jpg" />
      </div>

      <div class="grid-boxes">
        <h4></h4>
        <img src="../src/img/golden.jpg" />
      </div>

      <div class="grid-boxes">
        <h4></h4>
        <img src="../src/img/golden.jpg" />
      </div>
      <div class="grid-boxes">
        <h4></h4>
        <img src="../src/img/golden.jpg" />
      </div>

      <div class="grid-boxes">
        <h4></h4>
        <img src="../src/img/golden.jpg" />
      </div>
      <div class="grid-boxes">
        <h4></h4>
        <img src="../src/img/golden.jpg" />
      </div>
    </div>
  </div>
</div>`;
    myDiscoverCamp.classList.add('defaultContent');
    myDiscoverCamp.setAttribute('id', 'defaultId');
    return myDiscoverCamp;
  }
  document.querySelector('.discoverCamp').appendChild(discoverCamp());
})();
export default discoverCampModule;

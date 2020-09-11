const discoverCampModule = (() => {
  function discoverCamp() {
    const myDiscoverCamp = document.createElement('div');
    myDiscoverCamp.innerHTML = `
  <div id="discoverId" class="tabcontent">
   <h1>This is the discover</h1>
  </div>`
    myDiscoverCamp.classList.add('defaultContent');
    myDiscoverCamp.setAttribute("id", "defaultId");
    return myDiscoverCamp
  }
  document.querySelector('.discoverCamp').appendChild(discoverCamp());
})();
export default discoverCampModule;


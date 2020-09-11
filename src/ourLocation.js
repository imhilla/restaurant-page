const campLocationModule = (() => {
  function ourCampLocation() {
    const myCampLocation = document.createElement('div');
    myCampLocation.innerHTML = `
  <div class="tabcontent" id="locationIdd">
   <h1>This is the location</h1>
  </div>`
    myCampLocation.classList.add('aboutFood');
    myCampLocation.setAttribute("id", "aboutFoodId");
    return myCampLocation
  }
  document.querySelector('.campLocation').appendChild(ourCampLocation());
})();
export default campLocationModule;
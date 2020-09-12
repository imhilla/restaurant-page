const campLocationModule = (() => {
  function ourCampLocation() {
    const myCampLocation = document.createElement('div');
    myCampLocation.innerHTML = `
  <div class="tabcontent d-flex align-items-center flex-column" id="locationIdd">
    <h3 class="m-3">WE ARE LOCATED AT:</h3>
    <div class="d-flex flex-column">
    <p> Green Bay Office Location </p>
    <p> 1221 Bellevue Street Suite 113 </p>
    <p>  Green Bay, WI 54302 </p>
    </div>
  </div>`;
    myCampLocation.classList.add('aboutFood');
    myCampLocation.setAttribute('id', 'aboutFoodId');
    return myCampLocation;
  }
  document.querySelector('.campLocation').appendChild(ourCampLocation());
})();
export default campLocationModule;
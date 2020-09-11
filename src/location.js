const locationModule = (() => {
  function location() {
    const myLocation = document.createElement('div');
    myLocation.innerHTML = `
    <a href="#" class="tablinks" id="locationid">Location</a>`;
    return myLocation;
  }
  document.querySelector('.location').appendChild(location());
})();
export default locationModule;
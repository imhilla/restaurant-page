const trendingModule = (() => {
  function trending() {
    const myDiscover = document.createElement('div');
    myDiscover.innerHTML = `
    <a href="#" id='discoverr' class="tablinks">Discover</a>`;
    return myDiscover;
  }
  document.querySelector('.trending').appendChild(trending());
})();
export default trendingModule;
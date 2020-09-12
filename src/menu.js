const menuModule = (() => {
  function campMenu() {
    const myMenu = document.createElement('div');
    myMenu.classList.add('dropdown-list');
    myMenu.innerHTML = `
  <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  Our menu
</a>`;
    return myMenu;
  }
  document.querySelector('.drop-down').appendChild(campMenu());

  function showMenu() {
    const myDropdown = document.createElement('div');
    myDropdown.innerHTML = `
  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <a class="dropdown-item" href="#">Baverages</a>
    <a class="dropdown-item" href="#">Breakfast</a>
    <a class="dropdown-item" href="#">Burgers</a>
    <a class="dropdown-item" href="#">Chicken & Sandwiches</a>
    <a class="dropdown-item" href="#">Deserts & Shakes</a>
    <a class="dropdown-item" href="#">Snacks & sides</a>
    <a class="dropdown-item" href="#">Kenyan kienyeji</a>
    <a class="dropdown-item" href="#">Drinks</a>
  </div>`;
    myDropdown.classList.add('dropdown-content');
    myDropdown.setAttribute('id', 'showDropdown');
    return myDropdown;
  }
  document.querySelector('.dropdown-list').appendChild(showMenu());
})();
export default menuModule;

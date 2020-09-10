function campMenu() {
  const myMenu = document.createElement('div');
  myMenu.innerHTML = `
    <a href="">Our menu<span><i class="fas fa-angle-down"></i></a></span>`;
  return myMenu;
} 
document.querySelector('.drop-down').appendChild(campMenu());

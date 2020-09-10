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
    </nav>`;
  return myHeader;
} 
document.querySelector('#content').appendChild(navBar());

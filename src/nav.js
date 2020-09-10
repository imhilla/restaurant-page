function navBar() {
  const myHeader = document.createElement('div');
  myHeader.innerHTML = `
    <nav>
      <div class="logo"><img src="../src/logo.png" /></div>
      <div class="sub-nav">
        <div class="drop-down">
          <a href="">Our menu<span><i class="fas fa-angle-down"></i></a></span>
        </div>
        <div class="about-us"><a href="">About our food</a></div>
        <div class="trending"><a href="">Discover</a></div>
        <div class="location"><a href="">Location</a></div>
      </div>
      <div>
        <button class="btn">Order now</button>
      </div>
    </nav>`;
  return myHeader;
} 
document.querySelector('#content').appendChild(navBar());

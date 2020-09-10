function about() {
  const myAbout = document.createElement('div');
  myAbout.innerHTML = `
    <a href="">About our food</a>`;
  return myAbout;
}
document.querySelector('.about-us').appendChild(about());

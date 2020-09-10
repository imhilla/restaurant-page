function trending() {
  const myDiscover = document.createElement('div');
  myDiscover.innerHTML = `
    <a href="">Discover</a>`;
  return myDiscover;
}
document.querySelector('.trending').appendChild(trending());

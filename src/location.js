function location() {
  const myLocation = document.createElement('div');
  myLocation.innerHTML = `
    <a href="">Location</a>`;
  return myLocation;
}
document.querySelector('.location').appendChild(location());

function logo() {
  const myLogo = document.createElement('div');
  myLogo.innerHTML = `
  <img src="../src/logo.png" />`;
  return myLogo;
}
document.querySelector('.logo').appendChild(logo());
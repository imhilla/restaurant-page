const buttonModule = (() => {
  function button() {
    const myOrder = document.createElement('div');
    myOrder.innerHTML = `
  <button class="btn">Order now</button>`;
    return myOrder;
  }
  document.querySelector('.order').appendChild(button());
})();
export default buttonModule;
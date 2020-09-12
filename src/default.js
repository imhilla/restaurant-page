const defaultPageModule = (() => {
  function defaultPage() {
    const myDefault = document.createElement('div');
    myDefault.innerHTML = `
  <div id="defaultId" class="tabcontent">
    <div class="container mt-5">
      <div class="d-flex">
        <div text-right>
          <h1>
            Merch Drop: Cactus Jack for McDonald’s Cactus Jack + McDonald’s merchandise
            has dropped.
          </h1>
          <p>Check it out now and discover what all the hype is about.</p>
        </div>
        <div class='homepage'>
          <img src="../src/img/homepage.jpg" />;
        </div>
      </div>
      <div class="d-flex">
      <div class='homepage'>
         <img src="../src/img/sander.jpg" />;
      </div>
      <div class="pl-5">
        <h1>
          Merch Drop: Cactus Jack for McDonald’s Cactus Jack + McDonald’s merchandise
          has dropped.
        </h1>
        <p>Check it out now and discover what all the hype is about.</p>
      </div>
    </div>
    <div class="d-flex">
    <div text-right>
      <h1>
        Merch Drop: Cactus Jack for McDonald’s Cactus Jack + McDonald’s merchandise
        has dropped.
      </h1>
      <p>Check it out now and discover what all the hype is about.</p>
    </div>
    <div class='homepage'>
      <img src="../src/img/golden.jpg" />;
    </div>
  </div></div>
  </div>`;
    myDefault.classList.add('defaultContent');
    myDefault.setAttribute('id', 'defaultId');
    return myDefault;
  }
  document.querySelector('.default').appendChild(defaultPage());
})();
export default defaultPageModule;

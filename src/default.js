const defaultPageModule = (() => {
  function defaultPage() {
    const myDefault = document.createElement('div');
    myDefault.innerHTML = `
  <div id="defaultId" class="tabcontent">
   <h1>This is the default</h1>
  </div>`
    myDefault.classList.add('defaultContent');
    myDefault.setAttribute("id", "defaultId");
    return myDefault
  }
  document.querySelector('.default').appendChild(defaultPage());
})();
export default defaultPageModule;

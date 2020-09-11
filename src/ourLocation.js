function ourCampLocation() {
  const myCampLocation = document.createElement('div');
  myCampLocation.innerHTML = `
  <div>
   <h1>This is the aboutfood</h1>
  </div>`
  myCampLocation.classList.add('aboutFood');
  myCampLocation.setAttribute("id", "aboutFoodId");
  return myCampLocation
}

document.querySelector('.campLocation').appendChild(ourCampLocation());
function aboutFood() {
  const myAboutFood = document.createElement('div');
  myAboutFood.innerHTML = `
  <div>
   <h1>This is the aboutfood</h1>
  </div>`
  myAboutFood.classList.add('aboutFood');
  myAboutFood.setAttribute("id", "aboutFoodId");
  return myAboutFood
}

document.querySelector('.aboutFood').appendChild(aboutFood());
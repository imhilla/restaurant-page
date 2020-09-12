const aboutFoodModule = (() => {
  function aboutFood() {
    const myAboutFood = document.createElement('div');
    myAboutFood.innerHTML = `
  <div id="aboutFoodId" class="tabcontent container">
    <div class="d-flex">
      <div class='homepage m-5'>
        <img src="../src/img/golden.jpg" />;
      </div>
      <div class="d-flex flex-column">
        <p class='about-page m-5 text-center'>
          At Cantina D' Italia we follow strict standards on service, quality and
          presentation. We use only the finest ingredients in all of our dishes to
          ensure that every meal we serve is delicious and nutritious. We encourage
          you to visit our restaurant and experience our cuisine. We look forward to
          your visit.
        </p>
        <p class='about-page m-5 text-center'>
          At Cantina D' Italia we follow strict standards on service, quality and
          presentation. We use only the finest ingredients in all of our dishes to
          ensure that every meal we serve is delicious and nutritious. We encourage
          you to visit our restaurant and experience our cuisine. We look forward to
          your visit.
        </p>
      </div>
    </div>
  </div>`;
    myAboutFood.classList.add('aboutFood');
    myAboutFood.setAttribute('id', 'aboutFoodId');
    return myAboutFood;
  }
  document.querySelector('.aboutFood').appendChild(aboutFood());
})();

export default aboutFoodModule;
function initTabNavigation() {
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent section');

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('active');

  function activeTab(index) {
    tabContent.forEach((section) => {
    section.classList.remove('active');
  });
  tabContent[index].classList.add('active');
}

tabMenu.forEach((itemMenu, index) => {
  itemMenu.addEventListener('click', () => {
    activeTab(index);
   });
  });
 }
}
initTabNavigation();

function initAccordion() {
  const accodionList = document.querySelectorAll('.js-accordion dt');
  const activeClass = 'active';
  
  if (accodionList.length) {

    accodionList[0].classList.add(activeClass);
    accodionList[0].nextElementSibling.classList.add(activeClass);

    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accodionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    });
  }
}
initAccordion();

function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event) {
  event.preventDefault();
  const href = event.currentTarget.getAttribute('href');
  const section = document.querySelector(href);

  section.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
}

linksInternos.forEach((link) => {
  link.addEventListener('click', scrollToSection);
});
}
initScrollSuave();

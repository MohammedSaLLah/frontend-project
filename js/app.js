var sections = document.querySelectorAll("section");

onscroll = function () {
  var scrollPosition = document.documentElement.scrollTop;

  sections.forEach((section) => {
    if (
      scrollPosition >= section.offsetTop - section.offsetHeight * 0.25 &&
      scrollPosition <
        section.offsetTop + section.offsetHeight - section.offsetHeight * 0.25
    ) {
      var currentId = section.attributes.id.value;
      removeAllActiveClasses();
      addActiveClass(currentId);
    }
  });
};

var removeAllActiveClasses = function () {
  document.querySelectorAll("nav a").forEach((el) => {
    el.classList.remove("active");
  });
};

var addActiveClass = function (id) {
  // console.log(id);
  var selector = `nav a[href="#${id}"]`;
  document.querySelector(selector).classList.add("active");
};

var navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    var currentId = e.target.attributes.href.value;
    var section = document.querySelector(currentId);
    var sectionPos = section.offsetTop;
    // section.scrollIntoView({
    //   behavior: "smooth",
    // });

    window.scroll({
      top: sectionPos,
      behavior: "smooth",
    });
  });
});



function openCity(evt, cityName){
  let tabcontent, tablinks;



  $(".accordion_header").click(function(){
    $(".accordion_header").removeClass("active");
   $(this).addClass("active");
});



  tabcontent=document.querySelectorAll('.tabcontent');
  tablinks=document.querySelectorAll('.tablinks');

  tabcontent.forEach(tab =>{
    tab.style.display='none';

  } );

  tablinks.forEach(link=>{
    link.className=link.className.replace('active','');
  });

  document.getElementById(cityName).style.display='block';
  evt.currentTaget.className +='active';

}

document.getElementById('defaultOpen').click;















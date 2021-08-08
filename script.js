const menuIcon = document.querySelector(".menu img"),
  menuMobile = document.querySelector(".menu__mobile"),
  linksMenu = document.querySelectorAll(".menu__mobile a"),
  itensListaMenu = document.querySelectorAll(".menu__mobile li"),
  iconsListaMenu = document.querySelectorAll(".menu__mobile li img"),
  itensListaDiv = document.querySelectorAll(".menu__lista__links");


//-----Abrir e fechar menu mobile
menuIcon.addEventListener("click", mostrarX);

//---Fechar menu e itens dentro do menu, após clicar nos links
linksMenu.forEach((item) => {
  item.addEventListener("click", function () {
    mostrarHamb();
    for (let i = 0; i < itensListaMenu.length; i++) {
      iconsListaMenu[i].classList.remove("girarIcon");
      itensListaDiv[i].classList.remove("show__links__menu");
    };
  });
});

//----Mostrar div de links após clicar em um item do menu.
for (let i = 0; i < itensListaMenu.length; i++) {
  itensListaMenu[i].addEventListener("click", function () {
    iconsListaMenu[i].classList.toggle("girarIcon");
    itensListaDiv[i].classList.toggle("show__links__menu");
  });
};



//----------------------------------Códigos para versão desktop

const navDesktop = document.querySelectorAll(".nav__desktop li"),
iconsNavDesktop = document.querySelectorAll(".nav__desktop li img"),
itensListaNavDesktop = document.querySelectorAll(".menu__lista__links__desktop"),
linksMenuDesk = document.querySelectorAll("header a");

//Abre lista de links após clicar em um item do menu

for (let i = 0; i < navDesktop.length; i++) {
  navDesktop[i].addEventListener("click", function () {
    iconsNavDesktop[i].classList.toggle("girarIcon");
    itensListaNavDesktop[i].classList.toggle("show__links__menu__desk");
  });
};

//---Fechar menu e itens dentro do menu, após clicar nos links
linksMenuDesk.forEach((item) => {
  item.addEventListener("click", function () {
    mostrarHamb();
    for (let i = 0; i < itensListaMenu.length; i++) {
      iconsNavDesktop[i].classList.remove("girarIcon");
      itensListaNavDesktop[i].classList.remove("show__links__menu__desk");
    };
  });
});


//------------- FUNÇÕES
function mostrarX() {
  menuIcon.src = "./images/icon-close.svg";
  menuMobile.classList.add("show");
  menuIcon.removeEventListener("click", mostrarX);
  menuIcon.addEventListener("click", mostrarHamb);
}

function mostrarHamb() {
  menuIcon.src = "./images/icon-hamburger.svg";
  menuMobile.classList.remove("show");
  menuIcon.removeEventListener("click", mostrarHamb);
  menuIcon.addEventListener("click", mostrarX);
}


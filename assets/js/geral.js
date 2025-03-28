window.addEventListener("load", function () {
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  var popoverTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="popover"]')
  );
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl);
  });

  $(".preloader").fadeOut(300);

  $(".botao").click(function () {
    $(this).addClass("visitado");
  });

  // const proportionScale = (width, height) => {
  //   const widthScreen = window.visualViewport.width;
  //   const heightScreen = window.visualViewport.height;
  //   const proporcaoHeight = (heightScreen * 100) / height;
  //   const proporcaoWidth = (widthScreen * 100) / width;

  //   if (proporcaoHeight < proporcaoWidth) {
  //     return [proporcaoHeight / 100, "height", "width"];
  //   } else {
  //     return [proporcaoWidth / 100, "width", "height"];
  //   }
  // };

  // const resizeBodyCadeia = (selector = ".img-bg", x = 1920, y = 1200) => {
  //   const proporcao1920 = proportionScale(x, y)[0];
  //   const s = document.querySelectorAll(selector);
  //   s.forEach((element) => {
  //     element.style.transform = `scale(${proporcao1920})`;
  //   });
  // };
  // resizeBodyCadeia();
  // window.addEventListener("resize", (e) => {
  //   resizeBodyCadeia();
  // });
});

// reposicionamento do botao do menu

$(window).scroll(function () {
  var topPos = $(this).scrollTop();

  // if user scrolls down..
  if (topPos > 100) {
    $(".bt-hamburguer").css("top", "20px");
    $(".bt-fecharmenu").css("top", "20px");
  } else {
    $(".bt-hamburguer").css("top", "150px");
    $(".bt-fecharmenu").css("top", "150px");
  }
}); // scroll END

// MODO ESCURO
$(window).scroll(function () {
  var topPos = $(this).scrollTop();

  // if user scrolls down..
  if (topPos > 0) {
    $("body").removeClass("top60");
    $("body").addClass("top00");
    $(".bt-hamburguer").css("top", "20px");
    $(".bt-fecharmenu").css("top", "20px");
  } else {
    $("body").removeClass("top00");
    $("body").addClass("top60");
    $(".bt-hamburguer").css("top", "150px");
    $(".bt-fecharmenu").css("top", "150px");
  }
});
var isDarkMode = true; // Controla o modo atual (escuro/claro)

function toggleBackgroundImage() {
  var button = document.getElementById("toggleButton");
  isDarkMode = !isDarkMode; // Alternar entre escuro e claro

  if (isDarkMode) {
    button.style.backgroundImage = "url('../assets/images/modo_escuro.svg')";
  } else {
    button.style.backgroundImage = "url('../assets/images/modo_claro.svg')";
  }
}

$(".btn-tema_pagina").click(function () {
  console.log($(".btn-tema_pagina"));
  if ($("body").hasClass("bg-claro")) {
    $("body").removeClass("bg-claro");
    $("body").addClass("bg-escuro");
  } else if ($("body").hasClass("bg-escuro")) {
    $("body").removeClass("bg-escuro");
    $("body").addClass("bg-claro");
  }
});

// MODO ESCURO

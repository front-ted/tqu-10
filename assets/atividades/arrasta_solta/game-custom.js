

// Aqui você adiciona ou remove os containers pra onde devem ir os cards
var containers = [
  // Container com os cards que serão realocados
  // Não mexer
  document.querySelector("#cardPile"),

  // Containers que irão receber os cards
  document.querySelector("#slot-1"),
  document.querySelector('#slot-2'), 
  document.querySelector('#slot-3'), 
  document.querySelector('#slot-4'), 
  document.querySelector('#slot-5'),
  document.querySelector('#slot-6')
];
var audio = new Audio();
var erro = 0;

// Solução ao dragindrop
var scrollable = true;

var listener = function(e) {
  console.log(scrollable)
    if (! scrollable) {
        e.preventDefault();
    }
}

document.addEventListener('touchmove', listener, { passive:false });

// Solução ao dragindrop

dragula({
  containers: containers,
  revertOnSpill: true,
  direction: 'vertical',
  accepts: function (el, target, source, sibling) {
      return el.dataset.target == target.id; 
  }
}).on('drag', function(el, target, source) {
  // On mobile this prevents the default page scrolling while dragging an item.
  
  $('.splide__slide.is-active.is-visible .card .slot').addClass('dropAqui');
  scrollable = false;
  console.log(el);
  console.log(el.dataset.target);
  console.log(el.dataset.acerto);
  console.log(el.dataset.erro);
}).on("drop", function(el){
  scrollable = true;



    var modalAcerto = document.getElementById('bgmodal-acerto')
    modalAcerto.addEventListener('show.bs.modal', function (event) {
      //se quiser personalizar titulo
      // var modalTitle = modalAcerto.querySelector('.modal-title') 
      // modalTitle.textContent = 'New message to '
      document.getElementById("p-acerto").textContent = el.dataset.acerto;
    })
  $(modalAcerto).modal('show')
      audio.setAttribute('src','../assets/atividades/arrasta_solta/acerto.mp3'); //change the source
      audio.load(); //load the new source
      audio.play(); //play

      $('.slot').removeClass('dropAqui');
}).on("cancel", function(el){
  scrollable = true;

      // Executa o áudio e a modal necessária
      // Também é possível fazer algum teste aqui caso necessário.
      
    var modalErro = document.getElementById('bgmodal-erro')
    modalErro.addEventListener('show.bs.modal', function (event) {
      document.getElementById("p-erro").textContent = el.dataset.erro;
    })
  $(modalErro).modal('show')
      audio.setAttribute('src','../assets/atividades/arrasta_solta/erro.mp3'); //change the source
      audio.load(); //load the new source
      audio.play(); //play
      $('.slot').removeClass('dropAqui');
});

// document.addEventListener('touchmove', function(e) { e.preventDefault(); }, { passive:false });
$(document).ready(function () {

  //funzione img successiva
  $('.next').click(
    nextPic
  );

  //funzione img precedente
  $('.prev').click(
    prevPic
  );

  //funzione navigazione-dots
  $('.nav i').click(
    dotChoosen
  )


  function nextPic() {
    //salvo selezione dell'immagine attiva attuale
    var currentPic = $('.images img.active');
    //salvo selezione del carousel indicator attivo attuale
    var currentDot = $('.nav i.active');
    //elimino classe active all'immagine corrente
    currentPic.removeClass('active');
    //elimino classe active al dot corrente
    currentDot.removeClass('active');

    //do la classe active all'immagine / dot successivo o alla prima se l'attuale è l'ultima
    if ($(currentPic).hasClass('last')) {
      $('.images img.first').addClass('active')
      $('.nav i.first').addClass('active');
    } else {
      currentPic.next().addClass('active');
      currentDot.next().addClass('active');
    }
  }

  function prevPic() {
    //salvo selezione dell'immagine attiva attuale
    var currentPic = $('.images img.active')
    //salvo selezione del dot attivo attuale
    var currentDot = $('.nav i.active');
    //elimino classe active all'immagine corrente
    currentPic.removeClass('active');
    //elimino classe active al dot corrente
    currentDot.removeClass('active');
    //do la classe active all'immagine successiva o all'ultima se l'attuale è la prima
    if ($(currentPic).hasClass('first')) {
      $('.images img.last').addClass('active')
      $('.nav i.last').addClass('active')
    } else {
      currentPic.prev().addClass('active');
      currentDot.prev().addClass('active');
    }
  }

  function dotChoosen() {
    //salvo posizione immagine
    var img = $('.images img');
    //salvo index dot cliccato
    var clickedDot = $(this).index();
    //rimuovo la classe active da ogni immagine
    img.removeClass('active');
    //aggiungo classe active al dot selezionato
    $(this).addClass("active");
    //rimuovo classe active ad ogni altro dot tranne il selezionato
    $(this).siblings().removeClass('active');
    //aggiungo classe active all'immagine corrispondente all'index del dot cliccato
    img.eq(clickedDot).addClass("active");
  }

});



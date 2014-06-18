
(function(doc) {

    var addEvent = 'addEventListener',
            type = 'gesturestart',
            qsa = 'querySelectorAll',
            scales = [1, 1],
            meta = qsa in doc ? doc[qsa]('meta[name=viewport]') : [];

    function fix() {
        meta.content = 'width=device-width,minimum-scale=' + scales[0] + ',maximum-scale=' + scales[1];
        doc.removeEventListener(type, fix, true);
    }

    if ((meta = meta[meta.length - 1]) && addEvent in doc) {
        fix();
        scales = [.25, 1.6];
        doc[addEvent](type, fix, true);
    }

}(document));

$(document).click(function(event){
    $(".mobile-header .category-menu").slideUp(100);
    $(".mobile-header .mainMenu").slideUp(100);
    
});

$(document).ready(function(){
  $(".mobile-header .show-categories").click(function(e){
    $(".mobile-header .category-menu").slideToggle(100);
    e.stopPropagation();
  });
  $(".mobile-header .show-menu").click(function(e){
    $(".mobile-header .mainMenu").slideToggle(100);
    e.stopPropagation();
  });
})

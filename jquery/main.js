$("dark-btn").click(function() {
    $(".box").toggleClass("dark");
    $(".container").toggleClass("dark");
});

$("spin-btn").click(function() {
    $(".box").toggleClass("spin");
});

$(".reveal-btn").click(function() {
    $(".chair").show();
    $(".reveal-btn").hide();
});

$(".draggable").draggable({
      containment: ".container",
      scroll: false,
      snap:true
});


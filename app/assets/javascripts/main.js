  var slideimages = [];
  $(document).ready(function(){
    console.log('working');
    $('.slide-image').each(function(){
     slideimages.push($(this));
   });

    // Set the interval to be 5 seconds
    var t = setInterval(function(){
      $("#slideshow-container ul").animate({marginLeft:-480},1000,function(){
        $(this).find("li:last").after($(this).find("li:first"));
        $(this).css({marginLeft:0});
      })
    },7000);


  });
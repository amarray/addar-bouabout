$(document).ready(function(){
   $('#h1').fadeIn(1000); 
   $('#h2').fadeIn(2000); 
   
});

$('li').click(function(){
   $('.navbar-toggler').addClass('collapsed');
   $('.navbar-toggler').attr('aria-expanded','false');
   $('.navbar-collapse').removeClass('show');
});
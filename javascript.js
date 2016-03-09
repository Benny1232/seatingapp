$(document).ready(function(){
    
    var popMsg = function(txt, seatId, cls){
        if(!txt){
            console.error('popMsg: txt required');
        }
        
        if(!cls){
            console.error('popMsg: cls required');
        }

        if(!seatId){
            console.error('popMsg: seatId required');
        }
        
        $('#message')
        .removeClass()
        .addClass(cls)
        .html(txt + ' ' + seatId);
        
        
    };
    
  // pre-reserve already taken seats
    $('#seatA2, #seatB1, #seatC3').addClass('taken');
    // add the open class to seats that are not taken
  $('.seat').not('.taken').addClass('open');
  
  // Adding click logic to anything with a seat class
  $('.seat').on('click', function(){
  
// seat is taken action goes here
   if($(this).hasClass('taken')) {
   
   popMsg("This seat is already taken ya dongus!",$(this).attr('id'),'takenMsg');

   // seat is reserved logic goes here
   } else if($(this).hasClass('reserved')) {
   $(this).removeClass('reserved').addClass('open');

       popMsg("This seat has been unreserved",$(this).attr('id'),'openMsg');

   // seat is available logic goes here
   } else if($(this).hasClass('open')) {
    // enforce 2 seat limit.
       if($('.reserved').length >= 2){
       popMsg("You can only reserve 2 seats max",$(this).attr('id'),'takenMsg');
    return false;
  }
       $(this).addClass('reserved');
           popMsg("You reserved your seat",$(this).attr('id'),'reservedMsg');
       } else {
       alert('critical error!');
    }
    
  });
  
});

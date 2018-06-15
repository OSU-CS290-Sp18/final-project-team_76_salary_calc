function search() {

   var searchValue = document.getElementById( "searchinput" ).value.trim().toLowerCase();

   //alert( searchValue );

   //var payContainer = Array.from( document.getElementsByClassName( "pay" ) );
   var payContainer = document.getElementsByClassName( "pay" );
   var holdsPay = document.querySelector( "#payboxes" );
   var payText = Array.from( document.getElementsByClassName ( "pay" ) ).map( function(ell){

      var values = ""; 
      values += ell.getElementsByClassName( "name" )[0].childNodes[0].textContent.trim().toLowerCase();
      values += ell.getElementsByClassName( "position" )[0].childNodes[0].textContent.trim().toLowerCase();
      values += ell.getElementsByClassName( "yearincome" )[0].childNodes[0].textContent.trim().toLowerCase();

      return values;

   });

   for( var i = ( payContainer.length - 1 ); i >= 0; i-- ){

      if( !payText[i].includes( searchValue ) ){

	 holdsPay.removeChild( payContainer[i] );

      }

   }


}

window.addEventListener( "DOMContentLoaded", function(){

   //but all the DOM search stuff in here along with the event listener additios

   var searchButton = document.getElementById( "searchbutton" );

   if( searchButton ){

      searchButton.addEventListener( "click", search );

   }


});

const btn = document.querySelector('button');

function get_games(){
  let games_list = []
  return games_lists
}
function get_game_rec_specs(game){
  let specs = []
  return specs
}
function get_game_low_specs(game){
  let specs = []
  return specs
}
function sendData() {

  data = {
    'game_1' : document.getElementById('game_1').value,
    'game_2': document.getElementById('game_2').value,
    'game_3': document.getElementById('game_3').value,


  }
  const XHR = new XMLHttpRequest();

  let urlEncodedData = "",
      urlEncodedDataPairs = [],
      name;

  for( name in data ) {
    urlEncodedDataPairs.push( encodeURIComponent( name ) + '=' + encodeURIComponent( data[name] ) );
  }

  urlEncodedData = urlEncodedDataPairs.join( '&' ).replace( /%20/g, '+' );

  XHR.addEventListener( 'load', function(event) {

  } );

  XHR.addEventListener( 'error', function(event) {
    alert( 'Oops! Something went wrong.' );
  } );

  XHR.open( 'POST', 'localhost' );

  XHR.setRequestHeader( 'Content-Type', 'application/x-www-form-urlencoded' );

  XHR.send( urlEncodedData );
}

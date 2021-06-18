const btn = document.querySelector('button');

function get_games(){
    const XHR = new XMLHttpRequest();

    

    XHR.addEventListener( 'load', function(event) {
      games = JSON.parse(XHR.response)
      var sel_1 = document.getElementById('sel_1')
      for(var i = 0; i < games.length; i++){
        sel_1.innerHTML = sel_1.innerHTML + '<option value="' + games[i]  + '">' + games[i] + '</option>'
      }
    } );

    XHR.addEventListener( 'error', function(event) {
      alert( 'Oops! Something went wrong.' );
    } );

    XHR.open( 'GET', 'http://localhost:5000/get_games' );

    XHR.setRequestHeader( 'Content-Type', 'application/x-www-form-urlencoded' );

    XHR.send();
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

  XHR.open( 'GET', 'localhost/get_games' );

  XHR.setRequestHeader( 'Content-Type', 'application/x-www-form-urlencoded' );

  XHR.send( urlEncodedData );
}

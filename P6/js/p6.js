/**
 * He definido una función que se encargará de obtener los elementos
 * del segundo div tras pulsar un botón, y lo mostrará en el tercer div.
 **/
$( "#button1" )
.click( function ( ) {
	var elementos = $( "div:nth-child(2) >" )
	.length;
	var info = "Hay dentro del segundo div " + elementos + " elementos";
	$( "div:nth-child(3)" )
	.append( info );
} );

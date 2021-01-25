/**
 * He definido una función que establecerá un fondo de color naranja en el DOM, a
 * aquellos elementos h1 descendientes de un div.
 **/
$( function ( ) {
	$( 'div > h1' )
	.css( 'background-color', 'orange' );
} );

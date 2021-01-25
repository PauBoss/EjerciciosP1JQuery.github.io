/**
 * He definido una función que establecerá un fondo de color distinto para cada 
 * uno de los elementos que forman parte del ul.
 **/
$( function ( ) {
	$( 'li:first' )
	.css( 'background-color', 'red' );
	$( 'li:nth-child(2)' )
	.css( 'background-color', 'blue' );
	$( '#3' )
	.css( 'background-color', 'yellow' );
} );

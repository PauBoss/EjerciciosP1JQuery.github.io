/**
 * He definido una función que establecerá un fondo de color distinto para cada 
 * uno de los elementos que forman parte del ul.
 **/
$( function ( ) {
	$( 'ul' )
	.find( 'li' )
	.eq( 8 )
	.css( 'background-color', 'red' );
	$( 'ul' )
	.find( 'li' )
	.eq( 3 )
	.css( {
		"background-color": "blue"
	} );
	$( 'ul' )
	.find( 'li' )
	.eq( 6 )
	.css( {
		"background-color": "yellow"
	} );
} );

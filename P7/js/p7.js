/**
 * He definido una función que se encargará de eliminar los elementos del select
 * y mostrar uno nuevo,cuando el botón sea presionado.
 **/
$( "#boton1" )
.on( "click", function ( ) {

	$( 'select' )
	.find( 'option' )
	.remove( )
	.end( )
	.append( '<option selected="selected">Blanco</option>' )
} );

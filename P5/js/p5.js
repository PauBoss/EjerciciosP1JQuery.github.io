/**
 * He definido una función setTimeout que tras haber pasado 3 segundos, le
 * preguntará al usuario con un popup si quiere ver la lista ordenada.
 **/
setTimeout( function ( ) {
	var opcion = confirm( "Quieres la página ordenada alfabéticamente?" );
	if ( opcion == true ) {
		var listado = $( '#componentes' );
		var elementos = listado.children( "li" )
		.get( );
		elementos.sort( function ( a, b ) {
			var A = $( a )
			.text( )
			.toUpperCase( );
			var B = $( b )
			.text( )
			.toUpperCase( );
			return ( A < B ) ? -1 : ( A > B ) ? 1 : 0;
		} );
		$.each( elementos, function ( id, elemento ) {
			listado.append( elemento );
		} );

	} else {
		alert( "La lista NO ha sido modificada" )
	}
}, 3000 );

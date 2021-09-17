"use strict"

$('#estate-type input:checkbox').click(function(){

	if ($(this).is(':checked')) {

		 $('#estate-type input:checkbox').not(this).prop('checked', false);

	}

});
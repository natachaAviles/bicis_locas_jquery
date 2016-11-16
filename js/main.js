function validateForm() {

	function nombre() {
	//var nombre = document.getElementById('name').value;
	var nombre = $('#name').val();
	for (var i=0; i<=nombre.length; i++){
		if (nombre === null || nombre.length === 0) {
			$('.name-container').append('<span>Porfavor ingrese nombre.</span>');

			return false;
		}else if (nombre.substring(0,1) !== nombre.substring(0,1).toUpperCase()){

			$('.name-container').append('<span>Porfavor ingrese nombre con Mayúscula.</span>');
			return false;
		}else if (/[0-9]/.test(nombre)) {
			
			$('.name-container').append('<span>Porfavor ingrese solo letras</span>');
			return false;
		}else {
			return true;
		}
	}
}
nombre();

function apellido() {
	//var apellido = document.getElementById('lastname').value;
	var apellido = $('#lastname').val();
	for (var i=0; i<=apellido.length; i++){
		if (apellido === null || apellido.length === 0) {
			
			$('.lastname-container').append('<span>Porfavor ingrese apellido.</span>');
			return false;
		}else if (apellido.substring(0,1) !== apellido.substring(0,1).toUpperCase()){
			
			$('.lastname-container').append('<span>Porfavor ingrese apellido con Mayúscula.</span>');
			return false;
		}else if (/[0-9]/.test(apellido)) {
			
			$('.lastname-container').append('<span>Porfavor ingrese solo letras.</span>');
			return false;
		}else {
			return true;
		}
	}
}
apellido();

function validaremail(){

	var email = $('#input-email').val();
	var verificacion = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
	for (var i=0; i <= email.length; i++){
		if (email===null || email.length === 0) {
			$('.email-container').append('<span>No puede dejar campo vacío.</span>');
			return false;
		} else if (verificacion.exec(email)===null) {
			$('.email-container').append('<span>Porfavor ingrese correo valido</span>');
			return false;

		}else{
			return true;
		}
	} 
}
validaremail();	

function contraseña() {
	//var pass = document.getElementById('input-password').value;
	var pass = $('#input-password').val();
	for (var i =0; i <= pass.length; i++) {
		if (pass.length < 6) {
			$('.form-group').append('<span>Contraseña debe contener almenos 6 caracteres.</span>')
		}else if (pass === "password" || pass === "123456" || pass === "098754") {
			$('.form-group').append('<span>Su contraseña es muy insegura.</span>')
			return false;
		}
		else {
			return true;
		}
	}
}
contraseña();
//funcion que regresa un valor de una seleccion y tira una alerta si no hay ninguna opción seleccionada.
function seleccion() {
	var indice = document.getElementsByTagName('select')[0].selectedIndex;
	if( indice == null || indice === 0 ) {
		//alert ("Debe elegir una de las opciones");
		var contenedorAlert = document.getElementsByTagName('select')[0].selectedIndex;
		var etiqueta = document.createElement('span');
		var nodoError = document.createTextNode('Debe elegir una de las opciones');
		etiqueta.appendChild(nodoError);
		contenedorAlert.appendChild(etiqueta);
		return false;
	}else {
		return true;
	}
}
seleccion();
}



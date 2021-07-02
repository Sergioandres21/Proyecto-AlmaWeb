const form = document.getElementById('form');
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const tipoidentificacion = document.getElementById('tipoidentificacion');
const identificacion = document.getElementById('identificacion');
const email = document.getElementById('email');
const celular = document.getElementById('celular');
const contrasena = document.getElementById('contrasena');
const contrasena2 = document.getElementById('contrasena2');
const telefono = document.getElementById('telefono');
const municipio = document.getElementById('municipio');
const direccion = document.getElementById('direccion');
const foto = document.getElementById('foto');


form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});


function getlength(numer) { return numer.toString().length; }



function checkInputs() {

	const nombreValue = nombre.value.trim();
	const apellidoValue = apellido.value.trim();
	const tipoidentificacionValue = tipoidentificacion.value.trim();
	const identificacionValue = identificacion.value.trim();
	const emailValue = email.value.trim();
	const celularValue = celular.value.trim();
	const contrasenaValue = contrasena.value.trim();
	const contrasena2Value = contrasena2.value.trim();
	const telefonoValue = telefono.value.trim();
	const municipioValue = municipio.value.trim();
	const direccionValue = direccion.value.trim();
	const fotoValue = foto.value.trim();
	const numer = /^3[\d]{9}$/;
	const cedula = /^((\d{8})|(\d{10})|(\d{11})|(\d{6}-\d{5}))?$/;
	const pass = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,55}$/;
	const tele = /^[1-9]\d{10}$/;
	
	if(nombreValue === '') {
		setErrorFor(nombre, 'El nombre es obligatorio');
		return 0;
	} else if (nombreValue.length <= 2){
		setErrorFor(nombre, 'El nombre de ser mayor de dos carácteres');
		return 0;
	} else if (nombreValue.length > 45){
		setErrorFor(nombre, 'El nombre de ser menor de 45 carácteres');
		return 0;
	} else {
		setSuccessFor(nombre);
	}

	if(apellidoValue === '') {
		setErrorFor(apellido, 'El apellido es obligatorio');
		return 0;
	} else if (apellidoValue.length <= 4){
		setErrorFor(apellido, 'El apellido de ser mayor de cuatro carácteres');
		return 0;
	} else if (apellidoValue.length >= 40 ){
		setErrorFor(apellido, 'El apellido de ser menor de 40 carácteres');
		return 0;
	} else {
		setSuccessFor(apellido);
	}


	if(tipoidentificacionValue === '1') {
		setErrorFor(tipoidentificacion, 'El tipo de identificación es obligatorio');
		return 0;
	} else {
		setSuccessFor(tipoidentificacion);
	}


	if(identificacionValue === '') {
		setErrorFor(identificacion, 'El número de identificación es obligatorio');
		return 0;
	} else if (isNaN(identificacionValue) || !cedula.test(identificacionValue)){
		setErrorFor(identificacion, 'El número de identificación no es correcto');
		return 0;
	} else {
		setSuccessFor(identificacion);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'El email es obligatorio');
		return 0;
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'No ingreso un email válido');
		return 0;
	} else {
		setSuccessFor(email);
	}

	if(celularValue === '') {
		setErrorFor(celular, 'El número de celular es obligatorio');
		return 0;
	} else if (isNaN(celularValue) || !numer.test(celularValue)) {
		setErrorFor(celular, 'El celular es incorrecto');
		return 0;
	} else {
		setSuccessFor(celular);
	}

	
	if(contrasenaValue === '') {
		setErrorFor(contrasena, 'La contraseña es obligatoria.');
		return 0;
	} else if(!pass.test(contrasenaValue)){
		setErrorFor(contrasena, 'La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula.');
		return 0;
	} else {
		setSuccessFor(contrasena);
	}
	
	if(contrasena2Value === '') {
		setErrorFor(contrasena2, 'La confirmación es obligatoria');
		return 0;
	} else if(contrasenaValue !== contrasena2Value) {
		setErrorFor(contrasena2, 'Las contraseñas no coinciden');
		return 0;
	} else{
		setSuccessFor(contrasena2);
	}

	if(telefonoValue == ''){
		setSuccessFor(telefono);
		return 0;
	}else if(!tele.test(telefonoValue) && !telefono=='') {
		setErrorFor(telefono, 'El telefono es incorrecto');
		return 0;
	}  else{
		setSuccessFor(telefono);
	}

	if(municipioValue === '1' || municipioValue != '1'){
		setSuccessFor(municipio);
	}

	if(direccionValue === '' || direccionValue != ''){
		setSuccessFor(direccion);
	}

	if(fotoValue === '' || fotoValue != ''){
		setSuccessFor(foto);
	}

	swal('Correcto','Usuario registrado con exito, inicia sesión en tu cuenta','success');

}

function setErrorFor(input, message) {
	const formGroup = input.parentElement;
	const small = formGroup.querySelector('small');
	formGroup.className = 'form-group error col-sm-6';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formGroup = input.parentElement;
	formGroup.className = 'form-group success col-sm-6';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}



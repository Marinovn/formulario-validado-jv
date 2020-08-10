function validar(){
		var usuario, email, nombre, apellido, telefono, password, expresion;

		usuario = document.getElementById('usuario').value;
		email = document.getElementById('email').value;
		nombre = document.getElementById('nombre').value;
		apellido = document.getElementById('apellido').value;
		telefono = document.getElementById('telefono').value;
		password = document.getElementById('password').value;

		expresion = /\w+@\w+\.+[a-z]/;

		if (usuario === "" || email === "" || nombre === "" || apellido === "" || telefono === "" || password === "") {
			alert("Debes completar todos los campos");
			return false;
		}	
		else if(usuario.length > 16){
			alert("El usuario puede tener hasta 15 caracteres");
			return false;
		}
		else if(!expresion.test(email)){
			alert("Email incorrecto");
			return false;
		}
		else if(nombre.length > 20){
			alert("El nombre es muy largo");
			return false;
		}
		else if(apellido.length > 20){
			alert("El apellido es muy largo");
			return false;
		}
		else if(isNaN(telefono)){
			alert("El telefono solo pueden ser numeros");
			return false;
		}
		else if(password.length < 5 && password.length > 13){
			alert("La contraseña solo puede tener entre 6 y 12 caracteres");
			return false;
		}


}

	
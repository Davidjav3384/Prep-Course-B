function Usuario(opciones){
  console.log ("------->", opciones);
  this.usuario = opciones.usuario;
  this.nombre = opciones.nombre;
  this.email = opciones.email;
  this.password = opciones.password;
}
  Usuario.prototype.saludar = function (){
    return "Hola, mi nombre es " + this.nombre;
  };

  var nuevoUsuario = new Usuario 
  ({
    usuario: "walterdv",
    nombre: "walter",
    email: "david@jiji.com",
    password: "queTe",
  });
  console.log(nuevoUsuario);
  console.log(nuevoUsuario.saludar());
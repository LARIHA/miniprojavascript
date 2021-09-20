function validar()
{
    var usuario = document.getElementById("usuario").value;
    var pass = document.getElementById("pass").value;

    if (usuario == "admin" && pass == "12345")
{
    alert ("Bienvenido a la Gestion de Inventario")
    window.location.href = 'gestioninventario.html'
    }
    else { alert ("Los Datos Ingresados son Invalidos");
}
}

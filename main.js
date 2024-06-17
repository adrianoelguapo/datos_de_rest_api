$(function () {
    $.getJSON("https://random-data-api.com/api/users/random_user?size=12",function (datosJSON){
        let usuarios = datosJSON;

        for (let cadaUsuario of usuarios){
            $(".tarjetas").append(`<div class = "tarjeta"> <div class = "fototarjeta"> <img src = "${cadaUsuario.avatar}" height = "115px"> </div> <div class = "contenidotarjeta"> <p class = "nombretarjeta"> ${cadaUsuario.first_name} ${cadaUsuario.last_name} </p> <p class = "emailtarjeta"> ${cadaUsuario.email} </p> <p class = "puestotarjeta"> ${cadaUsuario.employment.title} </p> <p class = "ubitarjeta"> ${cadaUsuario.address.city}, ${cadaUsuario.address.state} </p> </div> </div>`)
        }
    })
})
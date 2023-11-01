let estado = document.getElementById("estado");
let spanEstado = document.getElementById("estadoSeleccionado");

const cambiarEstado = () =>{
    let estadoSeleccionado = estado.value;
    spanEstado.textContent = estadoSeleccionado;
}

estado.addEventListener("change", cambiarEstado);


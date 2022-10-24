document.querySelector("#btnAddDenuncia").addEventListener("click", saveDenuncia);

function saveDenuncia(){
    var sNombre = document.querySelector("#nombreId").value;
    var sDireccion = document.querySelector("#direccionId").value;

    addDenuncia(sNombre, sDireccion)

}

var denunciasLista = []

function addDenuncia(pnombre, pdireccion){
    var denunciaObj = {
    nombre : pnombre,
    direccion : pdireccion
    };
    console.log(denunciaObj)
    denunciasLista.push(denunciaObj);
}

const jsonDenuncias = JSON.stringify(denunciasLista)
console.log(jsonDenuncias)
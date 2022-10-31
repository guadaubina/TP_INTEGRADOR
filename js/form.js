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
    denunciasLista.push(JSON.stringify(denunciaObj));

}

function vermas5(id){
    if(id=="mas5"){
    document.getElementById("desplegar5").style.display="inline";   
    document.getElementById("mas5").style.display="none"; 
    }
    else{
    document.getElementById("desplegar5").style.display="none";
    document.getElementById("mas5").style.display="inline";
    }
}

// let pnombre2 = document.getElementById("nombreId").value;
// let pdireccion2= document.getElementById("direccionId").value;

// axios.post("http://127.0.0.1:5000", 
// {"nombre":pnombre2,
// "direccion":pdireccion2}
// )
//     .then(function (response) {
//         alert("Esto funciono")
//         console.log("ok")
//             })
//     .catch(function (error) {
//         alert("Esto no esta funcionando");
//         console.log(error);
//             })
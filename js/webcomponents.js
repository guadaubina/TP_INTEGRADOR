Vue.component("logo", {
    template:'<a href="index.html"> <img src="../imgs/logo.png" alt="Womens Armor logo" id="logo"> </a>' 
});
new Vue({
    el: "#logoprincipal"
})

Vue.component("navegador", {
    template: '<nav class="navbar"> <div class="contenedor"> <div> <a href="informacion.html">INFORMACIÓN</a> </div> <div> <a href="denunciar.html">DENUNCIAR</a> </div> <div> <a href="profesionales.html">PROFESIONALES</a></div> <div> <a href="testimonios.html">TESTIMONIOS</a></div> </div> </nav>'
});
new Vue({
    el:"#navcomponent"
})
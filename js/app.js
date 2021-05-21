const botonAnvorguesa = document.querySelector('.menu-hamburguesa');
const menu = document.querySelector('.menu-desplegado');
const body = document.querySelector('.body');
const seleccionMenu = document.querySelector(".lista-menu-2");

botonAnvorguesa.addEventListener('click', () => {

    if (menu.style.display == 'block') {
        menu.style.display = 'none';
        body.style.cssText = 'overflow : visible';
    } else {
        menu.style.display = 'block';
        body.style.cssText = 'overflow : hidden';
    }

});

seleccionMenu.addEventListener('click', (e) => {
    console.log("Seleccione una opcion del menu");
    menu.style.display = 'none';
    body.style.cssText = 'overflow : visible';
});
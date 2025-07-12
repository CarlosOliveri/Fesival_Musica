document.addEventListener('DOMContentLoaded', function(){
    navegacionFija();
    crearGaleria();
    resaltarEnlace();
})

function navegacionFija(){
    const header = document.querySelector(".header");
    const sobreFestival = document.querySelector(".sobre-festival");

    window.addEventListener('scroll',function(){
        if(sobreFestival.getBoundingClientRect().bottom < 1){
            header.classList.add("fixed");
        }else{
            header.classList.remove("fixed");
        }
    });
}

function crearGaleria(){
    const galeria = document.querySelector(".galeria-imagenes");
    const CANTIDAD_IMAGENES = 16;

    for(let i = 1; i <= CANTIDAD_IMAGENES; i++){
        const img = document.createElement('IMG');
        img.src = `src/img/gallery/full/${i}.jpg`;
        img.alt = 'imagen galeria';

        //event handler
        img.onclick = function(){
            mostrarImagen(i);
        }

        galeria.appendChild(img);
    }
}

function mostrarImagen(i){

    const img = document.createElement('IMG');
    img.src = `src/img/gallery/full/${i}.jpg`;
    img.alt = 'imagen galeria';

    ///Generar modal
    const modal = document.createElement("DIV");
    modal.classList.add('modal');
    modal.onclick = cerrarModal;

    //Boton cerran modal
    const cerrarModalBtn = document.createElement('BUTTON');
    cerrarModalBtn.textContent = "X";
    cerrarModalBtn.classList.add('btn-cerrar');
    cerrarModalBtn.onclick = cerrarModal;

    modal.appendChild(img);
    modal.appendChild(cerrarModalBtn);
    //agregar al html
    const body = document.querySelector('body');
    body.classList.add("overflow-hidden");
    body.appendChild(modal);
}

function cerrarModal(){
    const modal = document.querySelector(".modal");
    modal.classList.add("fade-out");
    setTimeout(() =>{
    const body = document.querySelector('body');
    body.classList.remove("overflow-hidden");
        
        modal?.remove();
    }, 500)
}

function resaltarEnlace() {
    document.addEventListener('scroll', ()=>{
        const sections = document.querySelectorAll('section');
        const navlinks = document.querySelectorAll('.navegacion-principal a');

        let actual = '';
        sections.forEach(section =>{
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if(window.scrollY >= (sectionTop - sectionHeight / 3)){
                actual = section.id;
            }
        })

        navlinks.forEach(link => {
            link.classList.remove('active');
            if(link.getAttribute('href') === '#' + actual){
                link.classList.add('active');
            }
        })
    })
}

function scrollNav(){
    const navlinks = document.querySelectorAll('.navegacion-principal');

    navlinks.forEach(link =>{
        link.addEventListener('click', e =>{
            e.preventDefault();

            const sectionScroll = e.target.getAttribute('href');
            const section = document.querySelector(sectionScroll);
            section.scrollIntoView({behavior: 'smooth'});
        })
    })
}

/*
------------Declaracion de variables
-----------------Navegacion--------- */

let boton_facebook=document.getElementById('facebook');
let inicio=document.getElementById('inicio');
let inicio_brand=document.getElementById('inicio_brand');
/*-----------------Filtro por año------------ */
let a_2016=document.getElementById('a_2016');
let a_2017=document.getElementById('a_2017');
let a_2018=document.getElementById('a_2018');
let a_2019=document.getElementById('a_2019');

let talleres=document.getElementById('talleres');
let charlas=document.getElementById('charlas');
let fogon=document.getElementById('fogon');
let laboratorio=document.getElementById('laboratorio');
let eventos=document.getElementById('eventos');
let reconocimientos=document.getElementById('reconocimientos');
let festival=document.getElementById('festival');

let talleres_nav=document.getElementById('talleres_nav');
let charlas_nav=document.getElementById('charlas_nav');
let fogon_nav=document.getElementById('fogon_nav');
let laboratorio_nav=document.getElementById('laboratorio_nav');
/*let eventos=document.getElementById('eventos');
let reconocimientos=document.getElementById('reconocimientos');*/

/*-----------------Publicaciones--------- */

let publicaciones=document.getElementById('publicaciones');
let contenido=document.getElementById('contenido');

/* ---Modal Code--- */
let img_click=document.getElementById('img_click')
let modal_portada=document.getElementById('modal_portada');
let modal_content=document.getElementById('modal_content');
let cerrar=document.getElementById('cerrar');

img_click.addEventListener('click',portada_imagen=()=>{
    modal_portada.style.display='block';
    modal_content.src=img_click.src;
})

cerrar.addEventListener('click',()=>{
    modal_portada.style.display='none';
})


class UI{
    list(url){
        return fetch(url)
                .then(res=>res.json())
         
    }
    
}

slider_inicio=(search)=>{
    let url='./bd.json';
    actividades.className="actividades";
    fetch(url,{
        headers:{
            'Content-Type':'application/json'
        }
    })
    .then(res=>res.json())
    .then(res=>{
        let active='active';
        let main_template=`    
            <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators" id="slider_items">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                    
                </ol>
                <div class="carousel-inner" id="slider_header">  
                </div>  
                <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon bg-danger" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                <span class="carousel-control-next-icon bg-danger" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
                </a>
            </div>
        `;
        contenido.innerHTML=main_template;
        let template='';
        let template_items=``;
        let contador=0;
        
        for(let data of res){
            if (data.year== search) {
            template_items+=`
                <li data-target="#carouselExampleCaptions" data-slide-to="${contador}"></li>
            `;
            template +=`
            <div class="carousel-item ${active}">
                <img src="${data.imagen}" class="slider_imagen d-block w-50 mx-auto" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <a href="${data.link}" class="btn">
                       
                        Leer Mas
                    </a>                    
                </div>
            </div>     
            `;
            
            contador++;
            if (contador>0) {
                active='';
            }
            }

            
        }

        let slider_header=document.getElementById('slider_header');
        let slider_items=document.getElementById('slider_items');
        slider_header.innerHTML=template;
        slider_items.innerHTML=template_items;  
        
    })
}






card_categoria=(search)=>{
    let ui=new UI();
    let url='./bd.json';
    actividades.className="actividades_2";
    contenido.innerHTML="";      
    ui.list(url)
    .then(res=>res.reverse())
    .then(res=>{
        let template=`
        <div class="cards_tittle_container">
            <h3 class="cards_tittle" >${search.toUpperCase()}</h3>
        </div>
        <div class="cards_container" id="cards_container">
    `;
    
    let template_card_publicaciones='';
    for(let data of res){
        
        if(data.categoria == search||data.year== search){
            
            template_card_publicaciones+=`
            <div class="card_publicaciones card">
                <img src="${data.imagen}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h6 class="card-title">${data.titulo}</h6>
                    <p class="card-text">${data.descripcion}</p>
                    <a href="${data.link}" class="btn btn-danger">Leer más</a>
                </div>
            </div>
            `;
        }
    }
    template+=`</div>`;
    publicaciones.innerHTML=template;
    let cards_container=document.getElementById('cards_container');
    cards_container.innerHTML=template_card_publicaciones;
    })
}


window.onload=()=>{
    let search='2019'; 
    slider_inicio(search);
    /*portada_imagen(); --------------este si vale*/
    /*cargar_card_portada();*/
    /*card_actividades();*/
    /*----------------Actividades que realiza ajayu----------- */


    console.log(festival);
    /*-----------Event Listeners------- */

    
};
festival.addEventListener('click',()=>{    
    let search='festival';    
    card_categoria(search);
    
    })
fogon.addEventListener('click',()=>{    
    let search='fogon';    
    card_categoria(search);
})
fogon_nav.addEventListener('click',()=>{    
    let search='fogon';
    card_categoria(search);
})
talleres.addEventListener('click',()=>{
    let search='talleres'
    card_categoria(search)
})

talleres_nav.addEventListener('click',()=>{
    let search='talleres'
    card_categoria(search)
})

charlas.addEventListener('click',()=>{
    let search='charlas'
    card_categoria(search)
})
charlas_nav.addEventListener('click',()=>{
    let search='charlas'
    card_categoria(search)
})
laboratorio.addEventListener('click',()=>{
    let search='laboratorio'
    card_categoria(search)
})
laboratorio_nav.addEventListener('click',()=>{
    let search='laboratorio'
    card_categoria(search)
})
eventos.addEventListener('click',()=>{
    let search='eventos'
    card_categoria(search)
})
reconocimientos.addEventListener('click',()=>{
    let search='reconocimientos'
    card_categoria(search)
})
inicio.addEventListener('click',()=>{
    let search='2019'
    slider_inicio(search);

})
inicio_brand.addEventListener('click',()=>{
    let search='2019'
    slider_inicio(search);
    
    
})

a_2016.addEventListener('click',()=>{    
    let search='2016'
    card_categoria(search)
})
a_2017.addEventListener('click',()=>{
    let search='2017'
    card_categoria(search)   
})
a_2018.addEventListener('click',()=>{
    let search='2018'
    card_categoria(search)
})
a_2019.addEventListener('click',()=>{ 
    let search='2019'
    card_categoria(search)
})






  


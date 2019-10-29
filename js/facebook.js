let boton_facebook=document.getElementById('facebook');
let inicio=document.getElementById('inicio');
let inicio_brand=document.getElementById('inicio_brand');

let a_2016=document.getElementById('a_2016');
let a_2017=document.getElementById('a_2017');
let a_2018=document.getElementById('a_2018');
let a_2019=document.getElementById('a_2019');


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

slider_inicio=()=>{
    let url='./publicaciones.json';
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

        let slider_header=document.getElementById('slider_header');
        let slider_items=document.getElementById('slider_items');
        slider_header.innerHTML=template;
        slider_items.innerHTML=template_items;  
        console.log(res[0]);   
    })
}




cargar_card=(url,tittle)=>{
    let ui=new UI();
    contenido.innerHTML='';
    ui.list(url)
    .then(res=>{
        let template=`
            <h3 class="cards_tittle" >Publicaciones ${tittle}</h3>
            <div class="cards_container" id="cards_container">
        `;
        let template_card_publicaciones='';
        for(let data of res){
            template_card_publicaciones+=`
            <div class="card_publicaciones card">
                <img src="${data.imagen}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${data.titulo}</h5>
                    <p class="card-text">${data.descripcion}</p>
                    <a href="${data.link}" class="btn btn-info">Leer más</a>
                </div>
            </div>
            `;
        }
        template+=`</div>`;
        contenido.innerHTML=template;
        let cards_container=document.getElementById('cards_container');
        cards_container.innerHTML=template_card_publicaciones;

    })
}
cargar_card_portada=()=>{
    let tittle='Ajayu 2019';  
    let url='./publicaciones.json';    
    let ui=new UI();
    publicaciones.innerHTML='';
    ui.list(url)
    .then(res=>{
        let template=`
            <div class="cards_tittle_container">
                <h3 class="cards_tittle" >Publicaciones ${tittle}</h3>
            </div>
            <div class="cards_container" id="cards_container">
        `;
        let template_card_publicaciones='';
        for(let data of res){
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
        template+=`</div>`;
        publicaciones.innerHTML=template;
        let cards_container=document.getElementById('cards_container');
        cards_container.innerHTML=template_card_publicaciones;

    })
}

window.onload=()=>{
    slider_inicio();
    /*portada_imagen();*/
    cargar_card_portada();
};
inicio.addEventListener('click',()=>{
    slider_inicio();
    cargar_card_portada();
})
inicio_brand.addEventListener('click',()=>{
    slider_inicio();
    cargar_card_portada();
})

a_2016.addEventListener('click',()=>{    
    let tittle='Ajayu 2016';
    let url='./ajayu_2016.json';
    cargar_card(url,tittle);
})
a_2017.addEventListener('click',()=>{
    let tittle='Ajayu 2017';   
    let url='./ajayu_2017.json';
    cargar_card(url,tittle);    
})
a_2018.addEventListener('click',()=>{
    let tittle='Ajayu 2018';    
    let url='./ajayu_2018.json';
    cargar_card(url,tittle);
})
a_2019.addEventListener('click',()=>{ 
    
    slider_inicio();
    cargar_card_portada();
})





  


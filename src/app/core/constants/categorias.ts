import { Categoria } from "../interfaces/categoria";

export const CATEGORIAS: Categoria[] = [
    {
        nombre: 'FLORES DE ESTACIÓN',
        id: 1,
        fotoUrl: "https://www.cuerpomente.com/medio/2021/09/10/crisantemos-de-muchos-colores_eeb0cd6e_1200x1200.jpg",
        productos: [{
          nombre:"Margaritas",
          precio: 15000,
          descripcion: "La historia y simbolismo de la margarita es fascinante y su nombre proviene del latín margarita, que significa perla. Se cree que esta flor simboliza la inocencia y la pureza, y su centro amarillo representa la vida. También es conocida como ojo de buey por su centro amarillo",
          imagen: "https://i.pinimg.com/originals/21/64/2e/21642e4b03071d131ebda7f271e57034.jpg"
        },
        {
          nombre:"Tulipanes",
          precio: 25000,
          descripcion: "El tulipán es una flor elegante que alegra cualquier jardín. Los tulipanes blancos transmiten paz y tranquilidad y se asocian a la espiritualidad y a nuevos comienzos",
          imagen: "https://floristeriafeliu.com/wp-content/uploads/2021/03/ramo-tulipanes-multicolor.jpg"
        },
        {
          nombre:"Jazmines",
          precio: 15000,
          descripcion: "El simbolismo del jazmín son la pureza, la sencillez, la modestia y la fuerza. Por lo tanto, los símbolos son muy variados, desde el amor, la belleza y la sensualidad, hasta la prosperidad y la suerte en algunas culturas.",
          imagen: "https://floresmaru.com.ar/wp-content/uploads/2023/01/jazmines-y-rosas-2.jpg"
        },
        {
          nombre:"Amapola",
          precio: 22000,
          descripcion: "La amapola es una planta con flor con un gran significado. Está relacionada con la paz, el amor y el sueño. La amapola roja representa el sueño, y el olvido, por lo que también es conocida como la flor del consuelo.",
          imagen: "https://www.naturkenva.com/bmz_cache/5/ramo-de-amapolas-lugones-1-800x800.jpg"
        },
        {
          nombre:"Rosas",
          precio: 25000,
          descripcion: "El rosa es el color que significa amor suave, amor propio, amor maternal / paterno nutritivo. El rosa es un símbolo de la suavidad y la feminidad y el rosa también es un símbolo de la primavera.",
          imagen: "https://brumalis.es/wp-content/uploads/2021/11/Brumalis_Ramo_De_Rosas_36.jpg"
        },
        {
          nombre:"Petunia",
          precio: 15000,
          descripcion: "El significado más conocido de la petunia es: la picardía. Pero dependiendo del contexto en el que esté, su significado puede variar. Sus colores y su floración tienen mucho que ver con las diferentes denotaciones que se le atribuyen.",
          imagen: "https://www.dekoflor.es/udecontrol_datos/objetos/1395.jpg"
        }]
    },
    {
        nombre: 'FLOWER BOX',
        id: 2,
        fotoUrl: "https://www.weareflowergirls.com/cdn/shop/products/WeAreFlowergirls-FlowerBox-BlumenBox-Valentinstag-DriedFlower-Trockenblumen-1250023.jpg?v=1611271176",
        productos: [
          {
            nombre: 'Box Invierno',
            precio: 30000,
            descripcion: "",
            imagen:
              'https://camiliasupply.com/cdn/shop/collections/Camilia_Supply_Flower_Box_Bucket_Collection_1440x.jpg?v=1668120579',
          },
          {
            nombre: 'Box Estación',
            precio: 20000,
            descripcion: "",
            imagen:
              'https://armandofloreria.com.ar/wp-content/uploads/2023/04/IMG_0869-1-scaled.jpeg',
          },
          {
            nombre: 'Box Rosas ',
            precio: 20000,
            descripcion: ".",
            imagen:
              'https://i.pinimg.com/originals/a7/2d/2c/a72d2c50648bcc7bf578af8d5fa498cc.jpg',
          },
          {
            nombre: 'Box Jasmin ',
            precio: 32000,
            descripcion: ".",
            imagen:
              'https://jasminegift.com/wp-content/uploads/2023/10/best-flower-shop-in-jordan-amman-online.jpg',
          },
          {
            nombre: 'Box flores secas ',
            precio: 15000,
            descripcion: ".",
            imagen:
              'https://www.weareflowergirls.com/cdn/shop/products/WeAreFlowergirls-FlowerBox-BlumenBox-Valentinstag-DriedFlower-Trockenblumen-1250023.jpg?v=1611271176',
          },
        ]
    },
    {
        nombre: 'FLORES IMPORTADAS',
        id: 3,
        fotoUrl: "https://images.hola.com/imagenes/decoracion/20221103220267/flores-frescas-centro-para-casa-ideas-decoracion-mc/1-159-973/ramos-flores-casa-m.jpg?tx=w_680",
        productos: [
          {
            nombre: 'Dalia',
            precio: 20000,
            descripcion: "La dalia es una de las flores más populares tanto en decoración como para regalar en ocasiones especiales. Por ello, se relaciona con el compromiso, el cariño, la dignidad y la elegancia. Gracias a su significado, las dalias se relacionan con el compromiso, el cariño y la elegancia.",
            imagen: 'https://www.diariodeunanovia.es/wp-content/uploads/2016/02/ramo-de-novia-con-dalias-en-tonos-pasteles.jpg',
          },
          {
            nombre: 'Camelia',
            precio: 15000,
            descripcion: "La camelia blanca simboliza sentimientos de estima, gratitud y admiración. La camelia rosada simboliza el deseo de tener más cercana a la persona a quien se le regala. La camelia roja simboliza el amor y la esperanza.",
            imagen:
              'https://s.ineventos.com/blog/2021/100267/102315-1080w.webp',
          },
          {
            nombre: 'Exóticas',
            precio: 45000,
            descripcion: "",
            imagen:
              'https://ygnacioguillen.com/wp-content/uploads/2020/02/Ramo-con-ave-del-paraiso-liatrix-y-flor-especial.jpg',
          },
          {
            nombre: 'NYC',
            precio: 30000,
            descripcion: "",
            imagen:
              'https://www.flormoments.com/3967-large_default/nueva-york.jpg',
          },
          {
            nombre: 'Hortensia',
            precio: 50000,
            descripcion: "Son símbolo de gratitud, de gracia, de belleza y también de abundancia, debido a la cantidad exuberante de flores y a su forma redonda tan generosa",
            imagen:
              'https://i.pinimg.com/originals/76/6e/7b/766e7b55fefc4adc2077844e1f81d6a6.jpg',
          },
        ]
    },
    {
        nombre: 'FLORES SECAS',
        id: 4,
        fotoUrl: "https://acdn.mitiendanube.com/stores/001/011/538/products/dora1-44330c1b35283492bb15902775659755-640-0.jpeg",
        productos: [{
          nombre: 'Banksia',
          precio: 8000,
          descripcion: "Representa los nuevos comienzos. Ideal para familiares y amigos, ya que, es conocida como la flor de la amistad y la aventura.",
          imagen:
            'https://www.margaritasellamamiamor.com/wp-content/uploads/2023/06/banksia_amarillla2.jpg',
        },
        {
          nombre: 'Amaranto',
          precio: 10000,
          descripcion: "El amaranto es símbolo de la inmortalidad. Los antiguos magos atribuían grandes propiedades a las coronas confeccionadas con esta flor y entre otras, la virtud de proporcionar a aquellos que las usaban el favor y la gloria.",
          imagen:
            'https://m.media-amazon.com/images/I/710Y2NOK-jL.jpg',
        },
        {
          nombre: 'Hortensias',
          precio: 9000,
          descripcion: "La hortensia es una flor cargada de simbolismo. Son símbolo de gratitud, de gracia, de belleza y también de abundancia, debido a la cantidad exuberante de flores y a su forma redonda tan generosa.",
          imagen:
            'https://trencadissa.com/wp-content/uploads/2016/09/bouquet-ramo-flores-secas-preservadas-tonos-rojos-rosados-y-ocres-para-novias.jpg',
        },
        {
          nombre: 'Brunia Silver',
          precio: 10000,
          descripcion: "Representa la llegada del invierno. Con sus aromas suaves, perfecto para un regalo especial.",
          imagen:
            'https://d3ugyf2ht6aenh.cloudfront.net/stores/281/765/products/810bb9ff-f9cd-4c57-99fe-405cd1207f0c-9da77cae8b32a8e4db16644665385249-1024-1024.jpeg',
        },
        {
          nombre: 'Mix rosa',
          precio: 8300,
          descripcion: "",
          imagen:
            'https://www.clara.es/medio/2021/01/18/ramos-de-flores-secas_a6d7aad5_800x1000.jpg',
        },
      
      ]
    }
]
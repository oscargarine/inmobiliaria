const propiedades_venta = [
  {
    nombre: 'Apartamento de lujo en zona exclusiva',
    src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
    descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
    ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
    habitaciones: 4,
    banos: 4,
    costo: 5000000,
    smoke: false,
    pets: false
  },

  {
    nombre: 'Apartamento acogedor en la montaña',
    src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
    descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
    ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
    habitaciones: 2,
    banos: 1,
    costo: 1200000,
    smoke: true,
    pets: true
  },
  
  {
    nombre: 'Penthouse de lujo con terraza panorámica',
    src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
    descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
    ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
    habitaciones: 3,
    banos: 3,
    costo: 4500000,
    smoke: false,
    pets: true
  },

  {
    nombre: 'Domo Geodesico con hermosa vista',
    src: 'https://lonaschile.cl/wp-content/uploads/2023/04/domo_geodesico-chile-1024x767.jpg',
    descripcion: 'Este domo no solo ofrece una linda vista, también mucha comodidad.',
    ubicacion: 'Fundo Curaumilla 12345, Laguna Verde, Valparaíso',
    habitaciones: 3,
    banos: 3,
    costo: 1300000,
    smoke: false,
    pets: true
  },
  
  {
    nombre: 'Apartamento Central Park',
    src: 'https://static01.nyt.com/images/2019/05/12/realestate/10views1/merlin_154302579_b035460a-251b-4349-a143-83dbd5474176-superJumbo.jpg?quality=75&auto=webp',
    descripcion: 'Lujoso apartamento con vistas al Central Park.',
    ubicacion: 'Nueva York, Estados Unidos',
    habitaciones: 3,
    costo: 3500000,
    smoke: false,
    pets: true,
  },
  {
    nombre: 'Casa de Playa Malibu',
    src: 'https://www.omnihomeideas.com/wp-content/webp-express/webp-images/uploads/2024/02/Charlie-Sheens-House-in-Malibu.jpg.webp',
    descripcion: 'Casa frente al mar con acceso privado a la playa.',
    ubicacion: 'Malibu, Estados Unidos',
    habitaciones: 4,
    costo: 5000000,
    smoke: false,
    pets: false,
  },
  {
    nombre: 'Piso Moderno en Madrid',
    src: 'https://www.hola.com/horizon/square/e29a8fa6f174-piso-lujo-madrid-1t-t.jpg?im=Resize=(960),type=downsize',
    descripcion: 'Apartamento moderno en el corazón de Madrid.',
    ubicacion: 'Madrid, España',
    habitaciones: 2,
    costo: 1200000,
    smoke: false,
    pets: true,
  }

  ]

  const propiedades_alquiler = [
    {
      nombre: 'Apartamento en el centro de la ciudad',
      src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
      descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
      ubicacion: '123 Main Street, Anytown, CA 91234',
      habitaciones: 2,
      banos: 2,
      costo: 400000,
      smoke: false,
      pets: true
    },
  
    {
      nombre: 'Apartamento luminoso con vista al mar',
      src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
      ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
      habitaciones: 3,
      banos: 3,
      costo: 500000,
      smoke: true,
      pets: true
    },
  
    {
      nombre: 'Condominio moderno en zona residencial',
      src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
      descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencialEste hermoso apartamento ofrece una vista impresionante al mar',
      ubicacion: '123 Main Street, Anytown, CA 91234',
      habitaciones: 2,
      banos: 2,
      costo: 200000,
      smoke: false,
      pets: false
    },

    {
      nombre: 'Linda cabaña en Maitencillo, Chile',
      src: 'https://www.guiature.cl/images/fuerzas_aereas/maitencillo/CABANA%203.JPG',
      descripcion: 'Centro recreativo ubicado en el hermoso balneario de Maitencillo',
      ubicacion: 'Padre del Río s/n, Maitencillo, Comuna de Puchuncaví',
      habitaciones: 3,
      banos: 3,
      costo: 500000,
      smoke: false,
      pets: true
    },
      {
        nombre: 'Apartamento en Londres',
        src: 'https://absolutelymagazines.com/wp-content/uploads/2023/09/Belvedere-jpg.webp',
        descripcion: 'Apartamento elegante en el barrio de Chelsea.',
        ubicacion: 'Londres, Reino Unido',
        habitaciones: 2,
        costo: 300000,
        smoke: true,
        pets: true,
      },
      {
        nombre: 'Casa en Sídney',
        src: 'https://media.vrbo.com/lodging/69000000/68350000/68348700/68348625/f53c23d3.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        descripcion: 'Casa espaciosa con jardín y piscina.',
        ubicacion: 'Sídney, Australia',
        habitaciones: 4,
        costo: 280000,
        smoke: false,
        pets: true,
      },
      {
        nombre: 'Villa en Ciudad del Cabo',
        src: 'https://pic.le-cdn.com/thumbs/1024x768/08/1/properties/Property-19d6896a4bb98abf03efcb82cc0fe195-129971992.jpg',
        descripcion: 'Villa con vistas a la Montaña de la Mesa.',
        ubicacion: 'Ciudad del Cabo, Sudáfrica',
        habitaciones: 5,
        costo: 450000,
        smoke: false,
        pets: true,
      },

    ]

    export { propiedades_venta, propiedades_alquiler }

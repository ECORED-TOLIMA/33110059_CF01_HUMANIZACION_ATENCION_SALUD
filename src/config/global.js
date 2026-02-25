export default {
  global: {
    Name: 'Contextualización del ser humano y humanización en salud',
    Description:
      'Este componente formativo destaca la centralidad del ser humano en la atención en salud desde una visión integral, más allá de lo biológico, basada en interdependencia, reciprocidad y capacidad transformadora. Además, aborda la humanización como concepto polisémico y complejo, presentando enfoques que orientan modelos de atención centrados en las personas, la familia y las redes de apoyo. Comunicación asertiva, componentes biopsicosociales, humanización, ser humano.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'El ser humano',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Contexto histórico humanismo',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Componentes del ser humano',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Lineamientos normativos del ser humano en Colombia',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Humanización en salud',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Conceptualización humanización en salud',
            hash: 't_3_1',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Relación, vínculo y comunicación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Manejo de emociones',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Comunicación asertiva y efectiva',
            hash: 't_4_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_01_33110059_DU.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '',
      referencia: '',
      tipo: 'Sitio web',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Actitud',
      significado:
        'postura del cuerpo, especialmente cuando expresa un estado de ánimo. Las actitudes de un orador. Disposición de ánimo manifestada de algún modo. Actitud benévola (RAE, 2026).',
    },
    {
      termino: 'Aptitud',
      significado:
        'capacidad para operar competentemente en una determinada actividad (RAE, 2026).',
    },
    {
      termino: 'Atención en Salud',
      significado:
        'se define como el conjunto de servicios que se prestan al usuario, en el marco de los procesos propios del aseguramiento, así como, de las actividades, procedimientos e intervenciones asistenciales en las fases de promoción y prevención, diagnóstico, tratamiento y rehabilitación que se prestan a toda la población (Decreto 1011 de 2006).',
    },
    {
      termino: 'Autorrealización',
      significado:
        'entendida como culminación de la tendencia al crecimiento, Maslow la define como la obtención de la satisfacción de necesidades progresivamente superiores, junto a esto, la satisfacción de la necesidad de estructurar el mundo a partir de sus propios análisis y valores.',
    },
    {
      termino: 'Calidad de la atención de salud',
      significado:
        'se entiende como la provisión de servicios de salud a los usuarios individuales y colectivos de manera accesible y equitativa, a través de un nivel profesional óptimo, teniendo en cuenta el balance entre beneficios, riesgos y costos, con el propósito de lograr la adhesión y satisfacción de dichos usuarios (Decreto 1011 de 2006).',
    },
    {
      termino: 'Efectividad',
      significado:
        'principio general para el talento humano en salud, entendido como la formación y el desempeño del personal, que debe garantizar en sus acciones resultados eficaces en la atención individual y colectiva, mediante el uso eficiente de los recursos disponibles y la selección del mejor curso de acción en términos de costos.',
    },
    {
      termino: 'Enfoque',
      significado:
        'según la RAE (2026), se refiere a la acción de enfocar, de dirigir la atención o el interés hacia un asunto o problema desde unos supuestos previos, para tratar de resolverlo acertadamente. La humanización en salud y de la atención es indispensable ya que favorece conceptualmente orientar el abordaje de esta, en las diferentes realidades institucionales.',
    },
    {
      termino: 'Integralidad',
      significado:
        'principio general para el talento humano en salud donde menciona que debe reconocer las intervenciones y actividades necesarias para promover, conservar y recuperar la salud, prevenir las enfermedades, realizar tratamientos y ejecutar acciones de rehabilitación, todos ellos en cantidad, calidad, oportunidad y eficiencia de la salud de los individuos y las colectividades.',
    },
    {
      termino: 'Ley estatutaria',
      significado:
        'la ley estatutaria no es una ley ordinaria. Tiene un rango superior sobre las demás leyes y su estudio es de carácter prioritario. Ese rango de superioridad se lo da el hecho de que la naturaleza de los temas que trata son la espina dorsal de la Constitución Política.',
    },
  ],
  referencias: [
    {
      referencia:
        'Bermejo J. C. (2007). Humanizar los Cuidados en la Relación con el Enfermo de Alzheimer. Revista Humanizar, pp. 2-8.',
      link: '',
    },
    {
      referencia:
        'Bermejo J. C. y Durbán M. (2013). El Compromiso de la Humanización en las Instituciones Socio sanitarias. Fundación Caser para la dependencia. pp. 3-12.',
      link: '',
    },
    {
      referencia:
        'Bermejo J. C. (2014). ¿Derecho a la humanización? Centro de Humanización en Salud. pp. 27-29.',
      link: '',
    },
    {
      referencia:
        'Brusco A. (1998). Humanización de la asistencia al enfermo. Madrid, Cuadernos del Centro de Humanización de la Salud. pp. 13, 14, 43-47.',
      link: '',
    },
    {
      referencia:
        'Brusco, A., Regrado, J., Gal, J. y Marchesi, P. (2003). La Humanización en el Mundo de la Salud. Humanización en salud, Bogotá Selare. pp. 93-119.',
      link: '',
    },
    {
      referencia:
        'Cejudo, R. (2006). Desarrollo humano y capacidades. Aplicaciones de la teoría de las capacidades de Amartya Sen a la educación. Revista española de pedagogía, 234, pp. 365-380.',
      link: 'https://dialnet.unirioja.es/descarga/articulo/2083128.pdf',
    },
    {
      referencia:
        'De Bello, S. C. (2000). Humanización y Calidad de los Ambientes Hospitalarios. pp. 1-2.',
      link: '',
    },
    {
      referencia:
        'Confederación Médica Latinoamericana y del Caribe & Organización Médica Colegial de España. (2016). Carta de identidad y principios de la profesión médica latino-iberoamericana. p. 18.',
      link: '',
    },
    {
      referencia:
        'Dolan, S. L. (2019). Más Coaching por Valores. Lid Editorial Empresarial, S.L.',
      link: '',
    },
    {
      referencia:
        'Echeverría, J. (2003). La revolución tecnocientífica. Madrid, España: Fondo de Cultura Económica de España.',
      link: '',
    },
    {
      referencia:
        'Goleman, D. (1995). Inteligencia Emocional. Por qué es más importante que el cociente intelectual. Barcelona (España). Ediciones B, S.A.',
      link: '',
    },
    {
      referencia: 'Gutiérrez R. (2011). Regimen Sanitatis 2.0. pp. 1-8.',
      link: '',
    },
    {
      referencia:
        'Hoyos, H. P., Cardona, R. M. y Correa, S. D. (2008). Humanizar los contextos de salud, Cuestión de liderazgo, Revista Investigación y Educación en Enfermería, XXVI, 2, pp. 218-225.',
      link: '',
    },
    {
      referencia:
        'Martins J., Stein Backes Dirce, Cardoso Renata da Silva, Alacoque Lorenzini Erdmann, Albuquerque Gelson Luiz. (2008). Resignificando la humanización desde el cuidado en el curso de vivir humano. Rev. enferm. UERJ, Rio de Janeiro, abr/jun, pp. 276-281.',
      link: '',
    },
    {
      referencia:
        'Maslow, A. H. (1991). Motivación y personalidad. Ediciones Díaz de Santos, S. A.',
      link: '',
    },
    {
      referencia:
        'McDaniel, S. H., Campbell, T. L. & Seaburn, D. B. (1990). Family-Oriented Primary Care: A Manual for Medical Providers. Springer-Verlag.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Protección Social. (2008). Decreto 1011 de 2008 Sistema Obligatorio Garantía de la Calidad (SOGC). Por el cual se establece el Sistema Obligatorio de Garantía de Calidad de la Atención de Salud del Sistema General de Seguridad Social en Salud.',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/DECRETO%201011%20DE%202006.pdf',
    },
    {
      referencia:
        'Monteiro, M. I. (2008). Humanización de la atención en salud: corresponsabilidad, cultura organizacional y gestión del cuidado. Documento técnico sobre humanización en salud. p. 9.',
      link: '',
    },
    {
      referencia:
        'Raventos, F. (1985). La Organización Sanitaria al Servicio del Ciudadano, en: Jornadas sobre humanización de la atención sanitaria en la red asistencial del INSALUD, Madrid INSALUD, p. 12.',
      link: '',
    },
    {
      referencia:
        'Real Academia Española (RAE). (2026). Definiciones de conceptos.',
      link: 'https://www.rae.es/',
    },
    {
      referencia:
        'Sulmasy, D. P. (citado en Drench, M. E. et al., 2016). Hacia una comunicación efectiva y humanista en salud. Universidad de Cartagena. p. 18.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Responsable Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'John Edward Cruz',
          cargo: 'Experto temático',
          centro: 'Ministerio de Salud - Oficina de calidad',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'José Jaime Luis Tang Pinzón',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Veimar Celis Meléndez',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
          cargo: 'Desarrollador <em>full stack</em>',
        },

        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'María Fernanda Pineda Mora',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}

(function () {

  /* ---- Catalog data ---- */
  var WA = 'https://wa.me/18299106423?text=';
  var catalog = [
    { cat:'electro', img:'c-elec',   badge:'Electromec\\u00E1nico', title:'Plantas El\\u00E9ctricas y Generadores',    desc:'Revisi\\u00F3n, prueba de carga y mantenimiento preventivo de generadores de emergencia y tableros.', price:'Desde RD$3,500', msg:'Hola%2C%20me%20interesa%20el%20servicio%20de%20Plantas%20El%C3%A9ctricas.', icon:'<path d="M13 10V3L4 14h7v7l9-11h-7z"/>' },
    { cat:'electro', img:'c-hvac',   badge:'Electromec\\u00E1nico', title:'Climatizaci\\u00F3n y HVAC',               desc:'Mantenimiento integral de sistemas de aire acondicionado, fan coils, chiller y ventilaci\\u00F3n.', price:'Cotizaci\\u00F3n especial', msg:'Hola%2C%20me%20interesa%20el%20servicio%20de%20HVAC%20y%20climatizaci%C3%B3n.', icon:'<circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>' },
    { cat:'electro', img:'c-bomb',   badge:'Electromec\\u00E1nico', title:'Sistemas de Bombeo y Motores',       desc:'Revisi\\u00F3n y mantenimiento de bombas hidroneum\\u00E1ticas, sumideros y sistemas de presi\\u00F3n constante.', price:'Desde RD$2,800', msg:'Hola%2C%20me%20interesa%20el%20servicio%20de%20Sistemas%20de%20Bombeo.', icon:'<path d="M12 22V12M12 12C12 12 8 9 8 6a4 4 0 018 0c0 3-4 6-4 6z"/><path d="M8 22h8"/>' },
    { cat:'electro', img:'c-elec',   badge:'Electromec\\u00E1nico', title:'Infraestructura El\\u00E9ctrica',          desc:'Instalaci\\u00F3n, revisi\\u00F3n y mantenimiento de tableros, centros de carga, subestaciones y cableado.', price:'Cotizaci\\u00F3n especial', msg:'Hola%2C%20me%20interesa%20el%20servicio%20de%20Infraestructura%20El%C3%A9ctrica.', icon:'<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/>' },
    { cat:'electro', img:'c-fire',   badge:'Electromec\\u00E1nico', title:'Sistemas Contra Incendios',          desc:'Mantenimiento de detectores de humo, rociadores autom\\u00E1ticos y sistemas de supresi\\u00F3n certificados.', price:'Desde RD$4,200', msg:'Hola%2C%20me%20interesa%20el%20servicio%20de%20Sistemas%20Contra%20Incendios.', icon:'<path d="M12 2c0 0-6 6-6 12a6 6 0 0012 0c0-6-6-12-6-12z"/>' },
    { cat:'civil',   img:'c-civil',  badge:'Civil',           title:'Impermeabilizaci\\u00F3n',                 desc:'Aplicaci\\u00F3n de sistemas impermeabilizantes en azoteas, muros, s\\u00F3tanos, fachadas y cisternas.', price:'Desde RD$45/m\\u00B2', msg:'Hola%2C%20me%20interesa%20el%20servicio%20de%20Impermeabilizaci%C3%B3n.', icon:'<path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/><polyline points="9 22 9 12 15 12 15 22"/>' },
    { cat:'civil',   img:'c-plumb',  badge:'Civil',           title:'Plomer\\u00EDa e Instalaciones Hidrosanitarias', desc:'Instalaci\\u00F3n y reparaci\\u00F3n de redes de agua potable, drenaje, sistema sanitario y cisternas.', price:'Desde RD$800', msg:'Hola%2C%20me%20interesa%20el%20servicio%20de%20Plomer%C3%ADa%20e%20Hidrosanitaria.', icon:'<path d="M12 22v-8M12 14c0 0-4-3-4-7a4 4 0 018 0c0 4-4 7-4 7z"/><path d="M8 22h8"/>' },
    { cat:'civil',   img:'c-paint',  badge:'Civil',           title:'Pintura y Terminaciones',            desc:'Pintura interior, exterior e industrial. Recubrimientos especiales para fachadas y superficies t\\u00E9cnicas.', price:'Desde RD$25/m\\u00B2', msg:'Hola%2C%20me%20interesa%20el%20servicio%20de%20Pintura%20y%20Terminaciones.', icon:'<path d="M2 16s1-1 3-1 3 2 6 2 3-1 3-1V4s-1 1-3 1-3-2-6-2S2 4 2 4z"/>' },
    { cat:'civil',   img:'c-struct', badge:'Civil',           title:'Remodelaciones y Estructuras',        desc:'Adecuaciones de espacio, construcci\\u00F3n de estructuras ligeras, drywall, plafones y remodelaciones.', price:'Cotizaci\\u00F3n especial', msg:'Hola%2C%20me%20interesa%20el%20servicio%20de%20Remodelaciones.', icon:'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>' },
    { cat:'facility',img:'c-iguala', badge:'Facility',        title:'Igualas de Mantenimiento Integral',  desc:'Contrato preventivo anual que cubre todos los sistemas de tus instalaciones con visitas programadas.', price:'Plan mensual personalizado', msg:'Hola%2C%20me%20interesa%20una%20Iguala%20de%20Mantenimiento.', icon:'<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>' },
    { cat:'facility',img:'c-light',  badge:'Facility',        title:'Iluminaci\\u00F3n Integral LED',           desc:'Sustituci\\u00F3n y optimizaci\\u00F3n de sistemas de alumbrado interior y exterior con tecnolog\\u00EDa LED eficiente.', price:'Cotizaci\\u00F3n especial', msg:'Hola%2C%20me%20interesa%20el%20servicio%20de%20Iluminaci%C3%B3n%20LED.', icon:'<circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>' },
    { cat:'facility',img:'c-sec',    badge:'Facility',        title:'Seguridad y Control de Acceso',      desc:'Instalaci\\u00F3n de sistemas CCTV, c\\u00E1maras IP, biom\\u00E9tricos, alarmas y control de acceso vehicular.', price:'Desde RD$8,500', msg:'Hola%2C%20me%20interesa%20el%20servicio%20de%20Seguridad%20y%20Control%20de%20Acceso.', icon:'<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>' },
    { cat:'facility',img:'c-audit',  badge:'Facility',        title:'Auditor\\u00EDa y Eficiencia Energ\\u00E9tica',  desc:'Diagn\\u00F3stico completo del consumo energ\\u00E9tico de tu instalaci\\u00F3n con plan de ahorro y optimizaci\\u00F3n.', price:'Desde RD$5,000', msg:'Hola%2C%20me%20interesa%20una%20Auditor%C3%ADa%20Energ%C3%A9tica.', icon:'<path d="M18 20V10M12 20V4M6 20v-6"/>' }
  ];

  function repairMojibake_(text) {
    if (typeof text !== 'string') return text;
    var value = text;
    for (var i = 0; i < 3; i++) {
      try {
        var decoded = decodeURIComponent(escape(value));
        if (decoded === value) break;
        value = decoded;
      } catch (err) {
        break;
      }
    }
    return value;
  }

  catalog = catalog.map(function(item) {
    return {
      cat: item.cat,
      img: item.img,
      badge: repairMojibake_(item.badge),
      title: repairMojibake_(item.title),
      desc: repairMojibake_(item.desc),
      price: repairMojibake_(item.price),
      msg: item.msg,
      icon: item.icon
    };
  });

  var catalogTextOverrides = [
    { badge: 'Electromec\u00E1nico', title: 'Plantas El\u00E9ctricas y Generadores', desc: 'Mantenimiento preventivo de plantas el\u00E9ctricas, pruebas de transferencia y soporte a tableros para continuidad operativa en edificios y empresas.', price: 'Desde RD$3,500' },
    { badge: 'Electromec\u00E1nico', title: 'Climatizaci\u00F3n y HVAC', desc: 'Soporte HVAC para oficinas, torres corporativas, centros m\u00E9dicos e instalaciones comerciales con enfoque en estabilidad t\u00E9rmica y mantenimiento programado.', price: 'Cotizaci\u00F3n especial' },
    { badge: 'Electromec\u00E1nico', title: 'Sistemas de Bombeo y Motores', desc: 'Revisi\u00F3n t\u00E9cnica de bombas, motores e hidroneum\u00E1ticos para proteger presi\u00F3n, continuidad y seguridad de la operaci\u00F3n.', price: 'Desde RD$2,800' },
    { badge: 'Electromec\u00E1nico', title: 'Infraestructura El\u00E9ctrica', desc: 'Instalaci\u00F3n, revisi\u00F3n y mantenimiento de tableros, centros de carga, cableado y sistemas el\u00E9ctricos en entornos corporativos e industriales.', price: 'Cotizaci\u00F3n especial' },
    { badge: 'Electromec\u00E1nico', title: 'Sistemas Contra Incendios', desc: 'Mantenimiento de detectores, rociadores y sistemas de supresi\u00F3n para instalaciones que requieren operaci\u00F3n segura y trazable.', price: 'Desde RD$4,200' },
    { badge: 'Civil', title: 'Impermeabilizaci\u00F3n', desc: 'Aplicaci\u00F3n de sistemas impermeabilizantes en cubiertas, fachadas, muros y cisternas para proteger infraestructura comercial e institucional.', price: 'Desde RD$45/m\u00B2' },
    { badge: 'Civil', title: 'Plomer\u00EDa e Instalaciones Hidrosanitarias', desc: 'Instalaci\u00F3n y reparaci\u00F3n de redes de agua potable, drenaje y sistemas hidrosanitarios para edificios y operaciones empresariales.', price: 'Desde RD$800' },
    { badge: 'Civil', title: 'Pintura y Terminaciones', desc: 'Pintura interior, exterior y terminaciones para oficinas, plazas comerciales y espacios corporativos que requieren imagen cuidada y acabados duraderos.', price: 'Desde RD$25/m\u00B2' },
    { badge: 'Civil', title: 'Remodelaciones y Estructuras', desc: 'Adecuaciones corporativas, drywall, plafones, estructuras ligeras y remodelaciones para renovar espacios sin perder funcionalidad operativa.', price: 'Cotizaci\u00F3n especial' },
    { badge: 'Facility', title: 'Igualas de Mantenimiento Integral', desc: 'Planes preventivos para empresas que necesitan un solo aliado para coordinar mantenimiento t\u00E9cnico y continuidad operativa.', price: 'Plan mensual personalizado' },
    { badge: 'Facility', title: 'Iluminaci\u00F3n Integral LED', desc: 'Sustituci\u00F3n y optimizaci\u00F3n de luminarias interiores y exteriores para mejorar presencia, seguridad y eficiencia energ\u00E9tica.', price: 'Cotizaci\u00F3n especial' },
    { badge: 'Facility', title: 'Seguridad y Control de Acceso', desc: 'Instalaci\u00F3n de CCTV, biom\u00E9tricos, alarmas y control de acceso para instalaciones corporativas y comerciales.', price: 'Desde RD$8,500' },
    { badge: 'Facility', title: 'Auditor\u00EDa y Eficiencia Energ\u00E9tica', desc: 'Diagn\u00F3stico de consumo con plan de optimizaci\u00F3n para empresas que buscan ahorro y mejor desempe\u00F1o de sus sistemas.', price: 'Desde RD$5,000' }
  ];

  catalog = catalog.map(function(item, index) {
    var override = catalogTextOverrides[index];
    if (!override) return item;
    return {
      cat: item.cat,
      img: item.img,
      badge: override.badge,
      title: override.title,
      desc: override.desc,
      price: override.price,
      msg: item.msg,
      icon: item.icon
    };
  });

  var catalogGalleryByCat = {
    electro: ['images/servicios/servicio-electromecanico-nuvi-republica-dominicana.webp', 'images/servicios/servicio-hvac-nuvi-republica-dominicana.webp', 'images/proyectos/cambio-luminarias-torre-universal-santiago-1.webp'],
    civil: ['images/servicios/servicio-obras-civiles-nuvi-republica-dominicana.webp', 'images/proyectos/remodelacion-oficina-seguros-universal-union-medica-santiago.webp', 'images/proyectos/pintado-exterior-seguros-universal-plaza-paseo-puerto-plata-1.webp'],
    facility: ['images/servicios/servicio-facility-management-nuvi-santiago-rd.jpg', 'images/proyectos/limpieza-parqueo-torre-universal-santiago.webp', 'images/proyectos/poda-arboles-plaza-paseo-puerto-plata-1.webp']
  };

  /* Evidencias reales asignadas al servicio al que pertenecen. Los servicios sin
     material propio conservan la galeria visual de su categoria. */
  var catalogGalleryByTitle = {
    'Plantas El\u00E9ctricas y Generadores': [
      'images/mantenimiento-breaker-motorizado-nuvi.webp',
      'images/servicios/servicio-electromecanico-nuvi-republica-dominicana.webp'
    ],
    'Climatizaci\u00F3n y HVAC': [
      'images/stock-mantenimiento-integral-pexels.webp',
      'images/servicios/servicio-hvac-nuvi-republica-dominicana.webp'
    ],
    'Sistemas de Bombeo y Motores': [
      'images/stock-sistemas-bombeo-motores-pexels.webp',
      'images/servicios/servicio-electromecanico-nuvi-republica-dominicana.webp'
    ],
    'Infraestructura El\u00E9ctrica': [
      'images/diseno-salidas-electricas-ups-redes-nuvi.webp',
      'images/canalizacion-electrica-redes-nuvi.webp',
      'images/mantenimiento-breaker-motorizado-nuvi.webp'
    ],
    'Sistemas Contra Incendios': [
      'images/stock-sistema-contra-incendios-pexels.webp',
      'images/servicios/servicio-electromecanico-nuvi-republica-dominicana.webp'
    ],
    'Impermeabilizaci\u00F3n': [
      'images/impermeabilizacion-plazoleta-torre-universal-poster.webp',
      { src: 'images/impermeabilizacion-plazoleta-torre-universal.mp4', type: 'video', poster: 'images/impermeabilizacion-plazoleta-torre-universal-poster.webp' }
    ],
    'Plomer\u00EDa e Instalaciones Hidrosanitarias': [
      'images/stock-plomeria-instalaciones-pexels.webp',
      'images/servicios/servicio-obras-civiles-nuvi-republica-dominicana.webp'
    ],
    'Pintura y Terminaciones': [
      'images/pintado-fachada-torre-universal-altura.webp',
      { src: 'images/pintado-fachada-torre-universal-altura.mp4', type: 'video', poster: 'images/pintado-fachada-torre-universal-altura-poster.webp' },
      'images/proyectos/pintado-exterior-seguros-universal-plaza-paseo-puerto-plata-1.webp'
    ],
    'Remodelaciones y Estructuras': [
      'images/reparacion-shutters-nuvi.webp',
      'images/cortinas-plegables-oficinas-nuvi.webp',
      'images/proyectos/remodelacion-oficina-seguros-universal-union-medica-santiago.webp'
    ],
    'Igualas de Mantenimiento Integral': [
      'images/servicios/servicio-facility-management-nuvi-santiago-rd.jpg',
      'images/equipo/nuvi-supervision-tecnica-operaciones-rd.webp',
      'images/proyectos/limpieza-parqueo-torre-universal-santiago.webp'
    ],
    'Iluminaci\u00F3n Integral LED': [
      'images/instalacion-luminarias-led-parqueo-torre-universal.jpeg',
      'images/proyectos/cambio-luminarias-torre-universal-santiago-1.webp',
      'images/proyectos/cambio-luminarias-torre-universal-santiago-2.webp'
    ],
    'Seguridad y Control de Acceso': [
      'images/stock-seguridad-control-acceso-pexels.webp',
      'images/reparacion-shutters-nuvi.webp',
      'images/servicios/servicio-facility-management-nuvi-santiago-rd.jpg'
    ],
    'Auditor\u00EDa y Eficiencia Energ\u00E9tica': [
      'images/diseno-salidas-electricas-ups-redes-nuvi.webp',
      'images/instalacion-luminarias-led-parqueo-torre-universal.jpeg'
    ]
  };

  var catalogCategoryCopy = {
    electro: {
      lead: 'Soluciones para sistemas que no pueden darse el lujo de detenerse.',
      extra: 'En trabajos como {title}, priorizamos continuidad operativa, seguridad electrica y una ejecucion ordenada para empresas que necesitan estabilidad en su infraestructura.',
      points: [
        'Levantamiento, diagnostico y pruebas funcionales sin improvisacion.',
        'Intervencion ordenada para reducir riesgos, fallas y paros operativos.',
        'Recomendaciones claras para seguimiento preventivo y mejoras futuras.'
      ]
    },
    civil: {
      lead: 'Obras civiles y adecuaciones pensadas para rendir bien y proyectar mejor imagen.',
      extra: 'En proyectos como {title}, cuidamos terminacion, coordinacion y presentacion del espacio para que la operacion diaria siga funcionando con orden.',
      points: [
        'Ejecucion con enfoque en detalle, acabado y durabilidad real.',
        'Intervenciones organizadas para afectar lo menos posible la operacion.',
        'Cierre visual y tecnico alineado con la imagen del cliente.'
      ]
    },
    facility: {
      lead: 'Servicios que ayudan a operar con mas control, orden y continuidad.',
      extra: 'En servicios como {title}, buscamos una gestion preventiva y fluida para oficinas, plazas comerciales y espacios empresariales que no pueden detener su operacion.',
      points: [
        'Rutinas claras de seguimiento y soporte para el equipo operativo.',
        'Mejor control del estado real de cada sistema o area intervenida.',
        'Acciones pensadas para sostener continuidad, orden y eficiencia.'
      ]
    }
  };

  function getCatalogDetail(service) {
    var copy = catalogCategoryCopy[service.cat] || catalogCategoryCopy.electro;
    return {
      lead: copy.lead,
      body: [
        'Este tipo de trabajo se maneja con una ruta clara: inspeccion, ejecucion controlada, prueba funcional y entrega con criterio tecnico.',
        copy.extra.replace('{title}', service.title)
      ],
      points: copy.points
    };
  }

  function getCatalogGallery(service) {
    var media = catalogGalleryByTitle[service.title] || catalogGalleryByCat[service.cat] || ['images/hero-bg.webp'];
    return media.map(function(item, index) {
      var isObject = typeof item === 'object';
      return {
        src: isObject ? item.src : item,
        type: isObject ? item.type : 'image',
        poster: isObject ? item.poster : '',
        alt: service.title + ' en Republica Dominicana - referencia visual ' + (index + 1)
      };
    });
  }

  function getCatalogCover(service) {
    var gallery = getCatalogGallery(service);
    if (!gallery.length) return { src: 'images/hero-bg.webp', alt: service.title };
    var first = gallery[0];
    return {
      src: first.type === 'video' && first.poster ? first.poster : first.src,
      alt: 'Imagen del servicio de ' + service.title
    };
  }

  /* ---- Render catalog ---- */
  var grid = document.getElementById('catalogGrid');
  catalog.forEach(function(s, i) {
    var cover = getCatalogCover(s);
    var card = document.createElement('div');
    card.className = 'cat-card';
    card.dataset.cat = s.cat;
    card.style.transitionDelay = (i % 4 * 0.07) + 's';
    card.innerHTML =
      '<div class="cat-card-img ' + s.img + '">' +
        '<img class="cat-card-cover" src="' + cover.src + '" alt="' + cover.alt + '" loading="lazy" decoding="async" onerror="this.remove();this.parentNode.classList.add(\'cover-missing\')">' +
        '<svg class="cat-card-fallback-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25">' + s.icon + '</svg>' +
        '<span class="cat-badge">' + s.badge + '</span>' +
      '</div>' +
      '<div class="cat-card-body">' +
        '<div class="cat-card-title">' + s.title + '</div>' +
        '<div class="cat-card-desc">' + s.desc + '</div>' +
      '</div>' +
      '<div class="cat-card-foot">' +
        '<div class="cat-price">' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>' +
          s.price +
        '</div>' +
        '<div class="cat-actions">' +
          '<button type="button" class="btn-cat-more" data-catalog-index="' + i + '">' +
            'Ver m\u00E1s' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M9 6l6 6-6 6"/></svg>' +
          '</button>' +
          '<a href="' + WA + s.msg + '" target="_blank" class="btn-wa-card">' +
          '<svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>' +
          'Solicitar informaci\u00F3n' +
        '</a>' +
        '</div>' +
      '</div>';
    grid.appendChild(card);
  });

  grid.querySelectorAll('.btn-cat-more').forEach(function(btn) {
    if (btn.firstChild) {
      btn.firstChild.nodeValue = 'Ver m\u00E1s';
    }
  });
  grid.querySelectorAll('.btn-wa-card').forEach(function(link) {
    if (link.lastChild && link.lastChild.nodeType === 3) {
      link.lastChild.nodeValue = 'Solicitar informaci\u00F3n';
    }
  });

  /* ---- Filter logic ---- */
  var catalogCount = document.getElementById('catalogCount');
  var catalogMobilePrev = document.getElementById('catalogMobilePrev');
  var catalogMobileNext = document.getElementById('catalogMobileNext');
  var catalogMobileCounter = document.getElementById('catalogMobileCounter');
  var catalogScrollFrame = null;

  function getVisibleCatalogCards() {
    return Array.prototype.slice.call(grid.querySelectorAll('.cat-card:not(.hidden)'));
  }

  function getActiveCatalogCardIndex(cards) {
    if (!cards.length) return 0;
    var gridLeft = grid.getBoundingClientRect().left;
    var closestIndex = 0;
    var closestDistance = Infinity;
    cards.forEach(function(card, index) {
      var distance = Math.abs(card.getBoundingClientRect().left - gridLeft);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });
    return closestIndex;
  }

  function updateMobileCatalogNav() {
    if (!catalogMobileCounter) return;
    var cards = getVisibleCatalogCards();
    var activeIndex = getActiveCatalogCardIndex(cards);
    catalogMobileCounter.textContent = cards.length ? (activeIndex + 1) + ' de ' + cards.length : '0 de 0';
    catalogMobilePrev.disabled = activeIndex === 0;
    catalogMobileNext.disabled = !cards.length || activeIndex === cards.length - 1;
  }

  function scrollToCatalogCard(nextIndex) {
    var cards = getVisibleCatalogCards();
    if (!cards.length) return;
    var safeIndex = Math.max(0, Math.min(nextIndex, cards.length - 1));
    var gridRect = grid.getBoundingClientRect();
    var cardRect = cards[safeIndex].getBoundingClientRect();
    grid.scrollTo({
      left: grid.scrollLeft + cardRect.left - gridRect.left,
      behavior: 'smooth'
    });
  }

  function updateCount(f) {
    if (!catalogCount) return;
    var cards = document.querySelectorAll('.cat-card');
    var visible = 0;
    cards.forEach(function(c) { if (!c.classList.contains('hidden')) visible++; });
    var label = f === 'all' ? 'Mostrando todos los servicios' :
                f === 'electro' ? 'Electromec\u00E1nico' :
                f === 'civil'   ? 'Civil' : 'Facilidades';
    catalogCount.style.opacity = '0';
    setTimeout(function() {
      catalogCount.textContent = visible + ' ' + (visible === 1 ? 'servicio' : 'servicios') +
        (f !== 'all' ? ' \u2014 ' + label : '');
      catalogCount.style.opacity = '1';
      updateMobileCatalogNav();
    }, 100);
  }

  if (catalogMobilePrev && catalogMobileNext) {
    catalogMobilePrev.addEventListener('click', function() {
      var cards = getVisibleCatalogCards();
      scrollToCatalogCard(getActiveCatalogCardIndex(cards) - 1);
    });
    catalogMobileNext.addEventListener('click', function() {
      var cards = getVisibleCatalogCards();
      scrollToCatalogCard(getActiveCatalogCardIndex(cards) + 1);
    });
    grid.addEventListener('scroll', function() {
      if (catalogScrollFrame) cancelAnimationFrame(catalogScrollFrame);
      catalogScrollFrame = requestAnimationFrame(updateMobileCatalogNav);
    }, { passive: true });
    window.addEventListener('resize', updateMobileCatalogNav);
  }

  var filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      filterBtns.forEach(function(b){ b.classList.remove('active'); });
      btn.classList.add('active');
      btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      var f = btn.dataset.filter;
      var cards = document.querySelectorAll('.cat-card');
      cards.forEach(function(card) { card.classList.add('filtering'); });
      setTimeout(function() {
        cards.forEach(function(card) {
          var show = f === 'all' || card.dataset.cat === f;
          card.classList.toggle('hidden', !show);
          card.classList.remove('filtering');
        });
        grid.scrollTo({ left: 0, behavior: 'auto' });
        updateCount(f);
      }, 120);
    });
  });
  updateCount('all');
  updateMobileCatalogNav();

  /* ---- Catalog modal ---- */
  var catalogModal = document.getElementById('catalogModal');
  var catalogModalStage = document.getElementById('catalogModalStage');
  var catalogModalChip = document.getElementById('catalogModalChip');
  var catalogModalThumbs = document.getElementById('catalogModalThumbs');
  var catalogModalPrev = document.getElementById('catalogModalPrev');
  var catalogModalNext = document.getElementById('catalogModalNext');
  var catalogModalClose = document.getElementById('catalogModalClose');
  var catalogModalDone = document.getElementById('catalogModalDone');
  var catalogModalTitle = document.getElementById('catalogModalTitle');
  var catalogModalLead = document.getElementById('catalogModalLead');
  var catalogModalPrice = document.getElementById('catalogModalPrice');
  var catalogModalTag = document.getElementById('catalogModalTag');
  var catalogModalCopy = document.getElementById('catalogModalCopy');
  var catalogModalPoints = document.getElementById('catalogModalPoints');
  var catalogModalWa = document.getElementById('catalogModalWa');

  var activeCatalogSlides = [];
  var activeCatalogSlideIndex = 0;

  function setCatalogSlide(nextIndex) {
    if (!activeCatalogSlides.length) return;
    activeCatalogSlideIndex = (nextIndex + activeCatalogSlides.length) % activeCatalogSlides.length;
    catalogModal.classList.toggle('catalog-video-active', activeCatalogSlides[activeCatalogSlideIndex].type === 'video');
    catalogModalStage.querySelectorAll('.catalog-modal-slide').forEach(function(slide, idx) {
      slide.classList.toggle('active', idx === activeCatalogSlideIndex);
      var video = slide.querySelector('video');
      if (video) {
        if (idx === activeCatalogSlideIndex) {
          var playRequest = video.play();
          if (playRequest && typeof playRequest.catch === 'function') playRequest.catch(function() {});
        } else {
          video.pause();
        }
      }
    });
    catalogModalThumbs.querySelectorAll('.catalog-modal-thumb').forEach(function(thumb, idx) {
      thumb.classList.toggle('active', idx === activeCatalogSlideIndex);
    });
  }

  function renderCatalogSlides() {
    catalogModalStage.querySelectorAll('.catalog-modal-slide').forEach(function(slide) { slide.remove(); });
    catalogModalThumbs.innerHTML = '';

    activeCatalogSlides.forEach(function(photo, idx) {
      var slide = document.createElement('div');
      slide.className = 'catalog-modal-slide';
      if (idx === 0) slide.classList.add('active');

      var media;
      if (photo.type === 'video') {
        slide.classList.add('is-video');
        media = document.createElement('video');
        media.src = photo.src;
        media.muted = true;
        media.loop = true;
        media.autoplay = idx === 0;
        media.playsInline = true;
        media.preload = 'metadata';
        if (photo.poster) media.poster = photo.poster;
        media.setAttribute('aria-label', photo.alt);
        media.setAttribute('controls', '');
      } else {
        media = document.createElement('img');
        media.src = photo.src;
        media.alt = photo.alt;
        media.loading = 'lazy';
        media.decoding = 'async';
      }
      slide.appendChild(media);

      var overlay = document.createElement('div');
      overlay.className = 'catalog-modal-slide-overlay';
      slide.appendChild(overlay);

      catalogModalStage.insertBefore(slide, catalogModalChip);

      var thumb = document.createElement('button');
      thumb.type = 'button';
      thumb.className = 'catalog-modal-thumb' + (idx === 0 ? ' active' : '');
      thumb.setAttribute('data-slide-index', String(idx));

      var thumbMedia;
      if (photo.type === 'video') {
        thumb.classList.add('is-video');
        thumbMedia = document.createElement('video');
        thumbMedia.src = photo.src;
        thumbMedia.muted = true;
        thumbMedia.playsInline = true;
        thumbMedia.preload = 'metadata';
        if (photo.poster) thumbMedia.poster = photo.poster;
        thumbMedia.setAttribute('aria-hidden', 'true');
        thumb.appendChild(thumbMedia);
        var playMark = document.createElement('span');
        playMark.className = 'catalog-modal-thumb-play';
        playMark.setAttribute('aria-hidden', 'true');
        playMark.textContent = '\u25B6';
        thumb.appendChild(playMark);
      } else {
        thumbMedia = document.createElement('img');
        thumbMedia.src = photo.src;
        thumbMedia.alt = photo.alt;
        thumbMedia.loading = 'lazy';
        thumb.appendChild(thumbMedia);
      }

      catalogModalThumbs.appendChild(thumb);
    });

    var hasMultiple = activeCatalogSlides.length > 1;
    catalogModalPrev.style.display = hasMultiple ? 'inline-flex' : 'none';
    catalogModalNext.style.display = hasMultiple ? 'inline-flex' : 'none';
    catalogModalThumbs.style.display = hasMultiple ? 'grid' : 'none';
    activeCatalogSlideIndex = 0;
    catalogModal.classList.toggle('catalog-video-active', activeCatalogSlides[0] && activeCatalogSlides[0].type === 'video');
  }

  function populateCatalogModal(service) {
    var detail = getCatalogDetail(service);

    catalogModalChip.textContent = service.badge;
    catalogModalTitle.textContent = service.title;
    catalogModalLead.textContent = detail.lead;
    catalogModalPrice.querySelector('span').textContent = service.price;
    catalogModalTag.textContent = service.badge;
    catalogModalWa.href = WA + service.msg;

    catalogModalCopy.innerHTML = '';
    detail.body.forEach(function(paragraph) {
      var p = document.createElement('p');
      p.textContent = paragraph;
      catalogModalCopy.appendChild(p);
    });

    catalogModalPoints.innerHTML = '';
    detail.points.forEach(function(point, idx) {
      var row = document.createElement('div');
      row.className = 'catalog-modal-point';
      row.innerHTML =
        '<div class="catalog-modal-point-dot">' + (idx + 1) + '</div>' +
        '<span></span>';
      row.querySelector('span').textContent = point;
      catalogModalPoints.appendChild(row);
    });

    activeCatalogSlides = getCatalogGallery(service);
    renderCatalogSlides();
  }

  function openCatalogModal(index) {
    if (!catalogModal) return;
    var service = catalog[index];
    if (!service) return;
    populateCatalogModal(service);
    catalogModal.classList.add('open');
    catalogModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('catalog-open');
    setTimeout(function() {
      catalogModalClose.focus();
    }, 90);
  }

  function closeCatalogModal() {
    if (!catalogModal || !catalogModal.classList.contains('open')) return;
    catalogModal.classList.remove('open');
    catalogModal.classList.remove('catalog-video-active');
    catalogModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('catalog-open');
    catalogModalStage.querySelectorAll('video').forEach(function(video) { video.pause(); });
  }

  grid.addEventListener('click', function(e) {
    var moreBtn = e.target.closest('.btn-cat-more');
    if (!moreBtn) return;
    var index = parseInt(moreBtn.dataset.catalogIndex, 10);
    if (!isNaN(index)) openCatalogModal(index);
  });

  catalogModalPrev.addEventListener('click', function() {
    setCatalogSlide(activeCatalogSlideIndex - 1);
  });
  catalogModalNext.addEventListener('click', function() {
    setCatalogSlide(activeCatalogSlideIndex + 1);
  });

  var swipeTouchStartX = 0;
  catalogModalStage.addEventListener('touchstart', function(e) {
    swipeTouchStartX = e.changedTouches[0].clientX;
  }, { passive: true });
  catalogModalStage.addEventListener('touchend', function(e) {
    var dx = e.changedTouches[0].clientX - swipeTouchStartX;
    if (Math.abs(dx) < 40) return;
    setCatalogSlide(dx < 0 ? activeCatalogSlideIndex + 1 : activeCatalogSlideIndex - 1);
  }, { passive: true });
  catalogModalThumbs.addEventListener('click', function(e) {
    var thumb = e.target.closest('.catalog-modal-thumb');
    if (!thumb) return;
    var idx = parseInt(thumb.dataset.slideIndex, 10);
    if (!isNaN(idx)) setCatalogSlide(idx);
  });
  catalogModalClose.addEventListener('click', closeCatalogModal);
  catalogModalDone.addEventListener('click', closeCatalogModal);
  catalogModal.addEventListener('click', function(e) {
    if (e.target === catalogModal) closeCatalogModal();
  });

  /* ---- FAQ data ---- */
  var faqs = [
    { q:'\u00BFQu\u00E9 servicios ofrece Nuvi Ingenier\u00EDa?',
      a:'Nuvi Ingenier\u00EDa ofrece facility management, mantenimiento electromec\u00E1nico, energ\u00EDa e iluminaci\u00F3n, HVAC, obras civiles, infraestructura y soporte t\u00E9cnico corporativo para empresas en Rep\u00FAblica Dominicana.' },
    { q:'\u00BFOfrecen mantenimiento para empresas y edificios corporativos?',
      a:'S\u00ED. Atendemos oficinas, torres corporativas, plazas comerciales, centros m\u00E9dicos, instituciones financieras, parqueos e instalaciones industriales con planes preventivos y soporte correctivo.' },
    { q:'\u00BFTrabajan proyectos de iluminaci\u00F3n y energ\u00EDa?',
      a:'S\u00ED. Ejecutamos cambio de luminarias, iluminaci\u00F3n interior y exterior, optimizaci\u00F3n el\u00E9ctrica y mejoras orientadas a eficiencia energ\u00E9tica y seguridad visual.' },
    { q:'\u00BFRealizan remodelaciones de oficinas?',
      a:'S\u00ED. Desarrollamos adecuaciones corporativas, pintura, terminaciones, recubrimientos, trabajos en madera y remodelaci\u00F3n de espacios para oficinas y operaciones institucionales.' },
    { q:'\u00BFOfrecen servicios en Santiago y otras zonas de Rep\u00FAblica Dominicana?',
      a:'Operamos desde Santiago y atendemos proyectos en Santo Domingo, Puerto Plata y otras zonas del pa\u00EDs seg\u00FAn el alcance t\u00E9cnico, la programaci\u00F3n y el tipo de instalaci\u00F3n.' },
    { q:'\u00BFQu\u00E9 tipo de clientes atiende Nuvi Ingenier\u00EDa?',
      a:'Trabajamos con empresas, edificios corporativos, plazas comerciales, oficinas, centros m\u00E9dicos, instituciones financieras, parqueos, instalaciones industriales y espacios comerciales.' }
  ];

  var faqList = document.getElementById('faqList');
  faqs.forEach(function(f) {
    var item = document.createElement('div');
    item.className = 'faq-item';
    item.innerHTML =
      '<div class="faq-q">' +
        '<span>' + f.q + '</span>' +
        '<div class="faq-icon">' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>' +
        '</div>' +
      '</div>' +
      '<div class="faq-a"><div class="faq-a-inner">' + f.a + '</div></div>';
    item.querySelector('.faq-q').addEventListener('click', function() {
      var isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(function(el){ el.classList.remove('open'); });
      if (!isOpen) item.classList.add('open');
    });
    faqList.appendChild(item);
  });

  /* ---- Navbar scroll ---- */
  var header = document.getElementById('header');
  function onScroll() { header.classList.toggle('scrolled', window.scrollY > 40); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- Mobile menu ---- */
  var hamburger = document.getElementById('hamburger');
  var drawer    = document.getElementById('drawer');
  var menuBackdrop = document.getElementById('menuBackdrop');
  var lockedScrollY = 0;
  function openDrawer() {
    lockedScrollY = window.scrollY || window.pageYOffset || 0;
    hamburger.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    drawer.classList.add('open');
    drawer.setAttribute('aria-hidden','false');
    menuBackdrop.classList.add('open');
    document.body.classList.add('menu-open');
    document.body.style.top = '-' + lockedScrollY + 'px';
    var firstDrawerLink = drawer.querySelector('.nav-drawer-links a');
    if (firstDrawerLink) {
      setTimeout(function() { firstDrawerLink.focus(); }, 180);
    }
  }
  function closeDrawer() {
    if (!drawer.classList.contains('open')) return;
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    drawer.classList.remove('open');
    drawer.setAttribute('aria-hidden','true');
    menuBackdrop.classList.remove('open');
    document.body.classList.remove('menu-open');
    document.body.style.top = '';
    window.scrollTo(0, lockedScrollY);
  }
  hamburger.addEventListener('click', function() {
    var open = drawer.classList.contains('open');
    if (open) { closeDrawer(); }
    else { openDrawer(); }
  });
  if (menuBackdrop) menuBackdrop.addEventListener('click', closeDrawer);
  drawer.querySelectorAll('a').forEach(function(a){ a.addEventListener('click', closeDrawer); });
  window.addEventListener('resize', function(){ if (window.innerWidth > 768) closeDrawer(); });
  document.addEventListener('keydown', function(e) {
    if (e.key !== 'Escape') return;
    if (catalogModal && catalogModal.classList.contains('open')) {
      closeCatalogModal();
      return;
    }
    closeDrawer();
  });

  /* ---- Scroll reveal ---- */
  var io = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) entry.target.classList.add('in');
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal, .cat-card').forEach(function(el){ io.observe(el); });

  /* ---- Process progress highlight ---- */
  var processSteps = Array.prototype.slice.call(document.querySelectorAll('.process-step'));
  function updateProcessSteps() {
    if (!processSteps.length) return;
    var triggerY = window.innerHeight * 0.42;
    var activeIndex = 0;

    processSteps.forEach(function(step, index) {
      var rect = step.getBoundingClientRect();
      if (rect.top <= triggerY) activeIndex = index;
    });

    processSteps.forEach(function(step, index) {
      step.classList.toggle('is-active', index <= activeIndex);
    });
  }
  window.addEventListener('scroll', updateProcessSteps, { passive: true });
  window.addEventListener('resize', updateProcessSteps);
  updateProcessSteps();

  /* ---- Count-up animation ---- */
  function countUp(el, duration) {
    if (!el || el.dataset.counted === 'true') return;
    duration = duration || 1800;
    var target = parseInt(el.dataset.target, 10);
    var start  = 0;
    var step   = target / (duration / 16);
    function run() {
      start = Math.min(start + step, target);
      el.textContent = Math.floor(start);
      if (start < target) {
        requestAnimationFrame(run);
      } else {
        el.dataset.counted = 'true';
      }
    }
    requestAnimationFrame(run);
  }
  var counterObs = new IntersectionObserver(function(entries, observer) {
    entries.forEach(function(entry) {
      if (!entry.isIntersecting || entry.target.dataset.counted === 'true') return;
      countUp(entry.target);
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -10% 0px' });
  document.querySelectorAll('.count-val').forEach(function(el) { counterObs.observe(el); });

  /* ---- Project sliders ---- */
  document.querySelectorAll('.proj-gallery').forEach(function(gallery) {
    var slides  = gallery.querySelector('.proj-slides');
    var dots    = gallery.querySelectorAll('.proj-dot');
    var total   = gallery.querySelectorAll('.proj-slide').length;
    var current = 0;
    var startX  = 0;

    function goTo(n) {
      current = (n + total) % total;
      slides.style.transform = 'translateX(-' + (current * 100) + '%)';
      dots.forEach(function(d, i) { d.classList.toggle('active', i === current); });
    }

    gallery.querySelector('.proj-nav.prev').addEventListener('click', function(e) {
      e.stopPropagation(); goTo(current - 1);
    });
    gallery.querySelector('.proj-nav.next').addEventListener('click', function(e) {
      e.stopPropagation(); goTo(current + 1);
    });
    dots.forEach(function(dot) {
      dot.addEventListener('click', function(e) {
        e.stopPropagation(); goTo(parseInt(dot.dataset.i, 10));
      });
    });

    /* Touch / swipe */
    gallery.addEventListener('touchstart', function(e) {
      startX = e.touches[0].clientX;
    }, { passive: true });
    gallery.addEventListener('touchend', function(e) {
      var diff = startX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 40) goTo(current + (diff > 0 ? 1 : -1));
    });
  });

  /* ---- NUVI technician runner ---- */
  (function initTechRunner_() {
    var canvas = document.getElementById('techRunnerCanvas');
    if (!canvas || !canvas.getContext) return;

    var ctx = canvas.getContext('2d');
    var startBtn = document.getElementById('techRunnerStart');
    var jumpBtn = document.getElementById('techRunnerJump');
    var overlay = document.getElementById('techRunnerOverlay');
    var message = document.getElementById('techRunnerMessage');
    var scoreNode = document.getElementById('techRunnerScore');
    var bestNode = document.getElementById('techRunnerBest');
    var modal = document.getElementById('techGameModal');
    var openBtn = document.getElementById('techGameOpen');
    var closeBtn = document.getElementById('techGameClose');
    var previousFocus = null;
    var width = 0;
    var height = 170;
    var groundY = 143;
    var running = false;
    var score = 0;
    var best = 0;
    var speed = 190;
    var spawnIn = 850;
    var lastTime = 0;
    var frameId = null;
    var obstacles = [];
    var player = { x: 55, y: 99, w: 28, h: 44, vy: 0, grounded: true };

    try { best = Number(window.localStorage.getItem('nuviTechRunnerBest')) || 0; } catch (err) {}
    bestNode.textContent = padScore_(best);

    function padScore_(value) {
      return String(Math.floor(value)).padStart(3, '0');
    }

    function resize_() {
      var rect = canvas.getBoundingClientRect();
      var ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = Math.max(280, rect.width);
      height = rect.height || 170;
      groundY = height - 27;
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      player.x = Math.max(40, Math.min(70, width * 0.08));
      if (player.grounded) player.y = groundY - player.h;
      draw_();
    }

    function reset_() {
      score = 0;
      speed = 190;
      spawnIn = 1100;
      obstacles = [{
        x: Math.max(300, Math.min(680, width * 0.7)),
        y: groundY - 30,
        w: 22,
        h: 30,
        type: 'cone'
      }];
      player.y = groundY - player.h;
      player.vy = 0;
      player.grounded = true;
      scoreNode.textContent = '000';
    }

    function start_() {
      reset_();
      running = true;
      overlay.classList.add('is-hidden');
      canvas.focus({ preventScroll: true });
      lastTime = window.performance.now();
      if (frameId) window.cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(loop_);
    }

    function openGame_() {
      if (!modal) return;
      previousFocus = document.activeElement;
      modal.classList.add('is-open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.classList.add('tech-game-open');
      window.requestAnimationFrame(function() {
        resize_();
        if (overlay.classList.contains('is-hidden')) canvas.focus({ preventScroll: true });
        else startBtn.focus({ preventScroll: true });
      });
    }

    function closeGame_() {
      if (!modal || !modal.classList.contains('is-open')) return;
      if (running) {
        running = false;
        if (frameId) window.cancelAnimationFrame(frameId);
        message.textContent = 'Misi\u00F3n en pausa';
        startBtn.textContent = 'Reiniciar misi\u00F3n';
        overlay.classList.remove('is-hidden');
      }
      modal.classList.remove('is-open');
      modal.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('tech-game-open');
      if (previousFocus && previousFocus.focus) previousFocus.focus({ preventScroll: true });
    }

    function jump_() {
      if (!running) {
        start_();
        return;
      }
      if (!player.grounded) return;
      player.vy = -490;
      player.grounded = false;
    }

    function addObstacle_() {
      var isCone = Math.random() > 0.35;
      obstacles.push({
        x: width + 20,
        y: groundY - (isCone ? 30 : 25),
        w: isCone ? 22 : 32,
        h: isCone ? 30 : 25,
        type: isCone ? 'cone' : 'toolbox'
      });
      spawnIn = 1100 + Math.random() * 850 - Math.min(score * 1.2, 160);
    }

    function hit_(obstacle) {
      var px = player.x + 5;
      var py = player.y + 4;
      var pw = player.w - 9;
      var ph = player.h - 5;
      return px < obstacle.x + obstacle.w - 3 &&
        px + pw > obstacle.x + 3 &&
        py < obstacle.y + obstacle.h &&
        py + ph > obstacle.y + 4;
    }

    function end_() {
      running = false;
      if (score > best) {
        best = Math.floor(score);
        bestNode.textContent = padScore_(best);
        try { window.localStorage.setItem('nuviTechRunnerBest', String(best)); } catch (err) {}
      }
      message.textContent = 'Fin del turno · ' + padScore_(score) + ' puntos';
      startBtn.textContent = 'Intentar otra vez';
      overlay.classList.remove('is-hidden');
    }

    function update_(dt) {
      player.vy += 1320 * dt;
      player.y += player.vy * dt;
      if (player.y >= groundY - player.h) {
        player.y = groundY - player.h;
        player.vy = 0;
        player.grounded = true;
      }

      speed = Math.min(315, 190 + score * 0.45);
      spawnIn -= dt * 1000;
      if (spawnIn <= 0) addObstacle_();

      for (var i = obstacles.length - 1; i >= 0; i--) {
        obstacles[i].x -= speed * dt;
        if (hit_(obstacles[i])) {
          end_();
          return;
        }
        if (obstacles[i].x + obstacles[i].w < 0) obstacles.splice(i, 1);
      }

      score += dt * 10;
      scoreNode.textContent = padScore_(score);
    }

    function drawTech_() {
      var x = Math.round(player.x);
      var y = Math.round(player.y);
      var stride = player.grounded && running ? Math.sin(score * 2.6) * 3 : 0;
      ctx.save();
      ctx.translate(x, y);

      // Legs and safety boots
      ctx.strokeStyle = '#342c29';
      ctx.lineWidth = 4;
      ctx.lineCap = 'square';
      ctx.beginPath();
      ctx.moveTo(11, 31); ctx.lineTo(9 + stride, 41);
      ctx.moveTo(18, 31); ctx.lineTo(20 - stride, 41);
      ctx.stroke();
      ctx.fillStyle = '#171312';
      ctx.fillRect(4 + stride, 40, 8, 4);
      ctx.fillRect(17 - stride, 40, 8, 4);

      // Reflective vest and arms
      ctx.strokeStyle = '#6B4636';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(7, 20); ctx.lineTo(2, 29);
      ctx.moveTo(21, 20); ctx.lineTo(25, 28);
      ctx.stroke();
      ctx.fillStyle = '#6B1A10';
      ctx.fillRect(7, 17, 15, 17);
      ctx.fillStyle = '#f0b429';
      ctx.fillRect(7, 22, 15, 3);
      ctx.fillRect(13, 17, 3, 17);

      // Head and hard hat
      ctx.fillStyle = '#b97851';
      ctx.fillRect(9, 7, 12, 11);
      ctx.fillStyle = '#27201d';
      ctx.fillRect(18, 11, 2, 2);
      ctx.fillStyle = '#f0b429';
      ctx.fillRect(7, 3, 16, 6);
      ctx.fillRect(5, 8, 20, 3);
      ctx.fillStyle = '#fff4c7';
      ctx.fillRect(12, 3, 3, 5);
      ctx.restore();
    }

    function drawObstacle_(o) {
      if (o.type === 'cone') {
        ctx.fillStyle = '#c95a22';
        ctx.beginPath();
        ctx.moveTo(o.x + o.w / 2, o.y);
        ctx.lineTo(o.x + o.w - 4, o.y + o.h - 5);
        ctx.lineTo(o.x + 4, o.y + o.h - 5);
        ctx.closePath();
        ctx.fill();
        ctx.fillStyle = '#fff5dd';
        ctx.fillRect(o.x + 7, o.y + 15, o.w - 14, 4);
        ctx.fillStyle = '#8c3818';
        ctx.fillRect(o.x, o.y + o.h - 5, o.w, 5);
      } else {
        ctx.fillStyle = '#4A0F08';
        ctx.fillRect(o.x, o.y + 6, o.w, o.h - 6);
        ctx.strokeStyle = '#6B4636';
        ctx.lineWidth = 3;
        ctx.strokeRect(o.x + 9, o.y, o.w - 18, 9);
        ctx.fillStyle = '#f0b429';
        ctx.fillRect(o.x + 13, o.y + 11, 6, 4);
      }
    }

    function draw_() {
      ctx.clearRect(0, 0, width, height);

      // Subtle industrial skyline
      ctx.fillStyle = 'rgba(74,15,8,0.035)';
      for (var x = 15; x < width; x += 95) {
        ctx.fillRect(x, groundY - 52, 48, 52);
        ctx.fillRect(x + 9, groundY - 65, 7, 13);
      }
      ctx.strokeStyle = '#cfc8c2';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, groundY + 1);
      ctx.lineTo(width, groundY + 1);
      ctx.stroke();
      ctx.strokeStyle = 'rgba(74,15,8,0.11)';
      ctx.setLineDash([12, 12]);
      ctx.beginPath();
      ctx.moveTo(0, groundY + 14);
      ctx.lineTo(width, groundY + 14);
      ctx.stroke();
      ctx.setLineDash([]);

      drawTech_();
      obstacles.forEach(drawObstacle_);
    }

    function loop_(now) {
      if (!running) return;
      var dt = Math.min((now - lastTime) / 1000, 0.032);
      lastTime = now;
      update_(dt);
      draw_();
      if (running) frameId = window.requestAnimationFrame(loop_);
    }

    startBtn.addEventListener('click', start_);
    jumpBtn.addEventListener('click', jump_);
    if (openBtn) openBtn.addEventListener('click', openGame_);
    if (closeBtn) closeBtn.addEventListener('click', closeGame_);
    if (modal) {
      modal.querySelectorAll('[data-tech-game-close]').forEach(function(el) {
        el.addEventListener('click', closeGame_);
      });
    }
    canvas.addEventListener('pointerdown', function(e) {
      e.preventDefault();
      jump_();
    });
    canvas.addEventListener('keydown', function(e) {
      if (e.key === ' ' || e.key === 'ArrowUp' || e.key === 'Enter') {
        e.preventDefault();
        jump_();
      }
    });
    document.addEventListener('visibilitychange', function() {
      if (!document.hidden && running) lastTime = window.performance.now();
    });
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && modal && modal.classList.contains('is-open')) {
        e.preventDefault();
        closeGame_();
      }
    });
    window.addEventListener('resize', resize_);
    resize_();
    if (window.location.hash === '#juego-nuvi') {
      window.setTimeout(openGame_, 120);
    }
  })();

  /* ---- Contact form -> Google Sheets ---- */
  var DEFAULT_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbz1dy9E_BjxgaQoQ6tiaLa0qMSMO1cxUge-gtvqDbHR3suNTEr_02_8axdJHs8X3lY/exec';
  var LEGACY_NOTIFY_EMAIL = 'angelnunez@nuvingenieria.com';
  var LEAD_IFRAME_NAME = 'leadSubmitFrame';
  var LEAD_MESSAGE_SOURCE = 'nuvi-leads-endpoint';
  var LEAD_MESSAGE_TIMEOUT_MS = 15000;
  var LEAD_IFRAME_FALLBACK_DELAY_MS = 900;
  var LEAD_ALLOWED_ORIGINS = {
    'https://script.google.com': true,
    'https://script.googleusercontent.com': true
  };

  function setLeadFormStatus_(btn, btnText, message, isBusy) {
    if (btnText) btnText.textContent = message;
    if (btn) btn.disabled = !!isBusy;
  }

  function upsertHiddenField_(form, name, value) {
    var field = form.querySelector('input[name="' + name + '"]');
    if (!field) {
      field = document.createElement('input');
      field.type = 'hidden';
      field.name = name;
      form.appendChild(field);
    }
    field.value = value || '';
    return field;
  }

  function syncLeadMetaFields_(form) {
    upsertHiddenField_(form, 'source', 'Web NUVI');
    upsertHiddenField_(form, 'page', window.location.href);
    upsertHiddenField_(form, 'submittedAt', new Date().toISOString());
    // Compatibilidad con la version de Apps Script que ya esta publicada.
    // El codigo nuevo del servidor ignora este campo y fija su destinatario.
    upsertHiddenField_(form, 'notifyEmail', LEGACY_NOTIFY_EMAIL);
    upsertHiddenField_(form, 'parentOrigin', window.location.origin || '');
    upsertHiddenField_(form, 'responseMode', 'iframe');
  }

  var contactForm = document.getElementById('contactForm');
  if (contactForm) {
    var sheetsUrl = (contactForm.getAttribute('data-sheets-url') || DEFAULT_SHEETS_URL).trim();
    var submitFrame = document.getElementById(LEAD_IFRAME_NAME);
    var btn = document.getElementById('formBtn');
    var btnText = document.getElementById('formBtnText');
    var success = document.getElementById('formSuccess');
    var error = document.getElementById('formError');
    var submitTimeoutId = null;
    var submitIframeFallbackId = null;
    var isSubmittingLead = false;

    if (!submitFrame) {
      submitFrame = document.createElement('iframe');
      submitFrame.id = LEAD_IFRAME_NAME;
      submitFrame.name = LEAD_IFRAME_NAME;
      submitFrame.title = 'Respuesta del formulario';
      submitFrame.style.width = '0';
      submitFrame.style.height = '0';
      submitFrame.style.border = '0';
      submitFrame.style.position = 'absolute';
      submitFrame.style.opacity = '0';
      submitFrame.style.pointerEvents = 'none';
      contactForm.parentNode.appendChild(submitFrame);
    }

    contactForm.setAttribute('method', 'POST');
    contactForm.setAttribute('action', sheetsUrl);
    contactForm.setAttribute('target', LEAD_IFRAME_NAME);
    submitFrame.setAttribute('name', LEAD_IFRAME_NAME);
    syncLeadMetaFields_(contactForm);

    function finishLeadRequest_(options) {
      options = options || {};
      if (submitTimeoutId) {
        window.clearTimeout(submitTimeoutId);
        submitTimeoutId = null;
      }
      if (submitIframeFallbackId) {
        window.clearTimeout(submitIframeFallbackId);
        submitIframeFallbackId = null;
      }

      isSubmittingLead = false;
      setLeadFormStatus_(btn, btnText, 'Enviar solicitud', false);

      if (options.resetForm) {
        contactForm.reset();
        syncLeadMetaFields_(contactForm);
      }

      if (options.successMessage && success) {
        success.textContent = options.successMessage;
        success.classList.add('show');
        window.setTimeout(function() {
          success.classList.remove('show');
        }, 7000);
      }

      if (options.errorMessage && error) {
        error.textContent = options.errorMessage;
        error.classList.add('show');
      }
    }

    function finishLeadSuccess_() {
      finishLeadRequest_({
        resetForm: true,
        successMessage: 'Mensaje enviado. Si no recibes respuesta en 24 horas, escribenos por WhatsApp.'
      });
    }

    function scheduleIframeFallbackSuccess_() {
      if (!isSubmittingLead) return;
      if (submitIframeFallbackId) {
        window.clearTimeout(submitIframeFallbackId);
      }

      submitIframeFallbackId = window.setTimeout(function() {
        if (!isSubmittingLead) return;
        console.warn('[NUVI Form] Apps Script no envio postMessage; confirmando por carga de iframe.');
        finishLeadSuccess_();
      }, LEAD_IFRAME_FALLBACK_DELAY_MS);
    }

    submitFrame.addEventListener('load', function() {
      if (!isSubmittingLead) return;
      scheduleIframeFallbackSuccess_();
    });

    window.addEventListener('message', function(event) {
      if (!isSubmittingLead) return;
      if (!LEAD_ALLOWED_ORIGINS[event.origin]) return;

      var payload = event.data;
      if (!payload || payload.source !== LEAD_MESSAGE_SOURCE) return;

      console.info('[NUVI Form] Respuesta de Apps Script', payload);

      if (payload.ok) {
        finishLeadSuccess_();
        return;
      }

      finishLeadRequest_({
        errorMessage: payload.error || 'No se pudo enviar en este momento. Escribenos por WhatsApp al 829 910 6423.'
      });
    });

    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      if (isSubmittingLead) return;

      if (success) success.classList.remove('show');
      if (error) {
        error.classList.remove('show');
        error.textContent = '';
      }

      /* Basic validation */
      var nombre = contactForm.querySelector('[name="nombre"]').value.trim();
      var telefono = contactForm.querySelector('[name="telefono"]').value.trim();
      var email = contactForm.querySelector('[name="email"]').value.trim();
      var isEmailValid = /\S+@\S+\.\S+/.test(email);
      if (!nombre || !telefono || !email) {
        if (error) {
          error.textContent = 'Completa los campos obligatorios (*).';
          error.classList.add('show');
        } else {
          alert('Por favor completa los campos obligatorios (*).');
        }
        return;
      }
      if (!isEmailValid) {
        if (error) {
          error.textContent = 'Ingresa un correo valido.';
          error.classList.add('show');
        } else {
          alert('Ingresa un correo valido.');
        }
        return;
      }
      if (!sheetsUrl) {
        if (error) {
          error.textContent = 'No hay endpoint configurado para el formulario.';
          error.classList.add('show');
        } else {
          alert('No hay endpoint configurado para el formulario.');
        }
        return;
      }

      syncLeadMetaFields_(contactForm);
      isSubmittingLead = true;
      setLeadFormStatus_(btn, btnText, 'Enviando...', true);

      console.info('[NUVI Form] Enviando lead a Apps Script', {
        endpoint: sheetsUrl
      });

      if (submitTimeoutId) {
        window.clearTimeout(submitTimeoutId);
      }
      submitTimeoutId = window.setTimeout(function() {
        finishLeadRequest_({
          errorMessage: 'No pudimos confirmar el envio. Revisa que el Apps Script este redeployado y que la URL del formulario sea la correcta.'
        });
      }, LEAD_MESSAGE_TIMEOUT_MS);

      contactForm.submit();
    });
  }

})();


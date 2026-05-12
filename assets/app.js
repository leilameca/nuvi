(function () {

  /* ---- Catalog data ---- */
  var WA = 'https://wa.me/18299106423?text=';
  var catalog = [
    { cat:'electro', img:'c-elec',   badge:'ElectromecÃ¡nico', title:'Plantas ElÃ©ctricas y Generadores',    desc:'RevisiÃ³n, prueba de carga y mantenimiento preventivo de generadores de emergencia y tableros.', price:'Desde RD$3,500', msg:'Hola%2C%20me%20interesa%20el%20servicio%20de%20Plantas%20El%C3%A9ctricas.', icon:'<path d="M13 10V3L4 14h7v7l9-11h-7z"/>' },
    { cat:'electro', img:'c-hvac',   badge:'ElectromecÃ¡nico', title:'ClimatizaciÃ³n y HVAC',               desc:'Mantenimiento integral de sistemas de aire acondicionado, fan coils, chiller y ventilaciÃ³n.', price:'CotizaciÃ³n especial', msg:'Hola%2C%20me%20interesa%20el%20servicio%20de%20HVAC%20y%20climatizaci%C3%B3n.', icon:'<circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>' },
    { cat:'electro', img:'c-bomb',   badge:'ElectromecÃ¡nico', title:'Sistemas de Bombeo y Motores',       desc:'RevisiÃ³n y mantenimiento de bombas hidroneumÃ¡ticas, sumideros y sistemas de presiÃ³n constante.', price:'Desde RD$2,800', msg:'Hola%2C%20me%20interesa%20el%20servicio%20de%20Sistemas%20de%20Bombeo.', icon:'<path d="M12 22V12M12 12C12 12 8 9 8 6a4 4 0 018 0c0 3-4 6-4 6z"/><path d="M8 22h8"/>' },
    { cat:'electro', img:'c-elec',   badge:'ElectromecÃ¡nico', title:'Infraestructura ElÃ©ctrica',          desc:'InstalaciÃ³n, revisiÃ³n y mantenimiento de tableros, centros de carga, subestaciones y cableado.', price:'CotizaciÃ³n especial', msg:'Hola%2C%20me%20interesa%20el%20servicio%20de%20Infraestructura%20El%C3%A9ctrica.', icon:'<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/>' },
    { cat:'electro', img:'c-fire',   badge:'ElectromecÃ¡nico', title:'Sistemas Contra Incendios',          desc:'Mantenimiento de detectores de humo, rociadores automÃ¡ticos y sistemas de supresiÃ³n certificados.', price:'Desde RD$4,200', msg:'Hola%2C%20me%20interesa%20el%20servicio%20de%20Sistemas%20Contra%20Incendios.', icon:'<path d="M12 2c0 0-6 6-6 12a6 6 0 0012 0c0-6-6-12-6-12z"/>' },
    { cat:'civil',   img:'c-civil',  badge:'Civil',           title:'ImpermeabilizaciÃ³n',                 desc:'AplicaciÃ³n de sistemas impermeabilizantes en azoteas, muros, sÃ³tanos, fachadas y cisternas.', price:'Desde RD$45/mÂ²', msg:'Hola%2C%20me%20interesa%20el%20servicio%20de%20Impermeabilizaci%C3%B3n.', icon:'<path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/><polyline points="9 22 9 12 15 12 15 22"/>' },
    { cat:'civil',   img:'c-plumb',  badge:'Civil',           title:'PlomerÃ­a e Instalaciones Hidrosanitarias', desc:'InstalaciÃ³n y reparaciÃ³n de redes de agua potable, drenaje, sistema sanitario y cisternas.', price:'Desde RD$800', msg:'Hola%2C%20me%20interesa%20el%20servicio%20de%20Plomer%C3%ADa%20e%20Hidrosanitaria.', icon:'<path d="M12 22v-8M12 14c0 0-4-3-4-7a4 4 0 018 0c0 4-4 7-4 7z"/><path d="M8 22h8"/>' },
    { cat:'civil',   img:'c-paint',  badge:'Civil',           title:'Pintura y Terminaciones',            desc:'Pintura interior, exterior e industrial. Recubrimientos especiales para fachadas y superficies tÃ©cnicas.', price:'Desde RD$25/mÂ²', msg:'Hola%2C%20me%20interesa%20el%20servicio%20de%20Pintura%20y%20Terminaciones.', icon:'<path d="M2 16s1-1 3-1 3 2 6 2 3-1 3-1V4s-1 1-3 1-3-2-6-2S2 4 2 4z"/>' },
    { cat:'civil',   img:'c-struct', badge:'Civil',           title:'Remodelaciones y Estructuras',        desc:'Adecuaciones de espacio, construcciÃ³n de estructuras ligeras, drywall, plafones y remodelaciones.', price:'CotizaciÃ³n especial', msg:'Hola%2C%20me%20interesa%20el%20servicio%20de%20Remodelaciones.', icon:'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>' },
    { cat:'facility',img:'c-iguala', badge:'Facility',        title:'Igualas de Mantenimiento Integral',  desc:'Contrato preventivo anual que cubre todos los sistemas de tus instalaciones con visitas programadas.', price:'Plan mensual personalizado', msg:'Hola%2C%20me%20interesa%20una%20Iguala%20de%20Mantenimiento.', icon:'<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>' },
    { cat:'facility',img:'c-light',  badge:'Facility',        title:'IluminaciÃ³n Integral LED',           desc:'SustituciÃ³n y optimizaciÃ³n de sistemas de alumbrado interior y exterior con tecnologÃ­a LED eficiente.', price:'CotizaciÃ³n especial', msg:'Hola%2C%20me%20interesa%20el%20servicio%20de%20Iluminaci%C3%B3n%20LED.', icon:'<circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>' },
    { cat:'facility',img:'c-sec',    badge:'Facility',        title:'Seguridad y Control de Acceso',      desc:'InstalaciÃ³n de sistemas CCTV, cÃ¡maras IP, biomÃ©tricos, alarmas y control de acceso vehicular.', price:'Desde RD$8,500', msg:'Hola%2C%20me%20interesa%20el%20servicio%20de%20Seguridad%20y%20Control%20de%20Acceso.', icon:'<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>' },
    { cat:'facility',img:'c-audit',  badge:'Facility',        title:'AuditorÃ­a y Eficiencia EnergÃ©tica',  desc:'DiagnÃ³stico completo del consumo energÃ©tico de tu instalaciÃ³n con plan de ahorro y optimizaciÃ³n.', price:'Desde RD$5,000', msg:'Hola%2C%20me%20interesa%20una%20Auditor%C3%ADa%20Energ%C3%A9tica.', icon:'<path d="M18 20V10M12 20V4M6 20v-6"/>' }
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
    { badge: 'Electromec\u00E1nico', title: 'Plantas El\u00E9ctricas y Generadores', desc: 'Revisi\u00F3n, prueba de carga y mantenimiento preventivo de generadores de emergencia y tableros.', price: 'Desde RD$3,500' },
    { badge: 'Electromec\u00E1nico', title: 'Climatizaci\u00F3n y HVAC', desc: 'Mantenimiento integral de sistemas de aire acondicionado, fan coils, chiller y ventilaci\u00F3n.', price: 'Cotizaci\u00F3n especial' },
    { badge: 'Electromec\u00E1nico', title: 'Sistemas de Bombeo y Motores', desc: 'Revisi\u00F3n y mantenimiento de bombas hidroneum\u00E1ticas, sumideros y sistemas de presi\u00F3n constante.', price: 'Desde RD$2,800' },
    { badge: 'Electromec\u00E1nico', title: 'Infraestructura El\u00E9ctrica', desc: 'Instalaci\u00F3n, revisi\u00F3n y mantenimiento de tableros, centros de carga, subestaciones y cableado.', price: 'Cotizaci\u00F3n especial' },
    { badge: 'Electromec\u00E1nico', title: 'Sistemas Contra Incendios', desc: 'Mantenimiento de detectores de humo, rociadores autom\u00E1ticos y sistemas de supresi\u00F3n certificados.', price: 'Desde RD$4,200' },
    { badge: 'Civil', title: 'Impermeabilizaci\u00F3n', desc: 'Aplicaci\u00F3n de sistemas impermeabilizantes en azoteas, muros, s\u00F3tanos, fachadas y cisternas.', price: 'Desde RD$45/m\u00B2' },
    { badge: 'Civil', title: 'Plomer\u00EDa e Instalaciones Hidrosanitarias', desc: 'Instalaci\u00F3n y reparaci\u00F3n de redes de agua potable, drenaje, sistema sanitario y cisternas.', price: 'Desde RD$800' },
    { badge: 'Civil', title: 'Pintura y Terminaciones', desc: 'Pintura interior, exterior e industrial. Recubrimientos especiales para fachadas y superficies t\u00E9cnicas.', price: 'Desde RD$25/m\u00B2' },
    { badge: 'Civil', title: 'Remodelaciones y Estructuras', desc: 'Adecuaciones de espacio, construcci\u00F3n de estructuras ligeras, drywall, plafones y remodelaciones.', price: 'Cotizaci\u00F3n especial' },
    { badge: 'Facility', title: 'Igualas de Mantenimiento Integral', desc: 'Contrato preventivo anual que cubre todos los sistemas de tus instalaciones con visitas programadas.', price: 'Plan mensual personalizado' },
    { badge: 'Facility', title: 'Iluminaci\u00F3n Integral LED', desc: 'Sustituci\u00F3n y optimizaci\u00F3n de sistemas de alumbrado interior y exterior con tecnolog\u00EDa LED eficiente.', price: 'Cotizaci\u00F3n especial' },
    { badge: 'Facility', title: 'Seguridad y Control de Acceso', desc: 'Instalaci\u00F3n de sistemas CCTV, c\u00E1maras IP, biom\u00E9tricos, alarmas y control de acceso vehicular.', price: 'Desde RD$8,500' },
    { badge: 'Facility', title: 'Auditor\u00EDa y Eficiencia Energ\u00E9tica', desc: 'Diagn\u00F3stico completo del consumo energ\u00E9tico de tu instalaci\u00F3n con plan de ahorro y optimizaci\u00F3n.', price: 'Desde RD$5,000' }
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
    electro: ['images/nuvi-proyecto-electrico.jpg', 'images/nuvi-proyecto-hvac.jpg', 'images/hero-bg.jpg'],
    civil: ['images/nuvi-proyecto-civil.jpg', 'images/about.jpg', 'images/nuvi-nosotros-operacion.jpg'],
    facility: ['images/nuvi-proyecto-facility.jpg', 'images/nuvi-nosotros-operacion.jpg', 'images/hero-bg.jpg']
  };

  var catalogCategoryCopy = {
    electro: {
      lead: 'Soluciones para sistemas que no pueden darse el lujo de parar.',
      extra: 'En trabajos como {title}, nos enfocamos en continuidad operativa, seguridad electrica y una entrega tecnica clara para que el sistema siga respondiendo con estabilidad.',
      points: [
        'Levantamiento, diagnostico y pruebas funcionales sin improvisacion.',
        'Intervencion ordenada para reducir riesgos y paros operativos.',
        'Recomendaciones claras para seguimiento preventivo y mejoras futuras.'
      ]
    },
    civil: {
      lead: 'Trabajos civiles pensados para durar bien y verse bien.',
      extra: 'En proyectos como {title}, priorizamos terminacion limpia, coordinacion precisa y materiales que sostengan la operacion diaria del espacio sin complicaciones.',
      points: [
        'Ejecucion con enfoque en detalle, acabado y durabilidad real.',
        'Intervenciones organizadas para afectar lo menos posible la operacion.',
        'Cierre visual y tecnico a la altura del resto de la instalacion.'
      ]
    },
    facility: {
      lead: 'Servicios que ayudan a operar con mas control y menos desgaste.',
      extra: 'En servicios como {title}, buscamos una gestion mas preventiva, fluida y facil de mantener en el dia a dia de la instalacion.',
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
    var images = catalogGalleryByCat[service.cat] || ['images/hero-bg.jpg'];
    return images.map(function(src, index) {
      return {
        src: src,
        alt: service.title + ' referencia visual ' + (index + 1)
      };
    });
  }

  /* ---- Render catalog ---- */
  var grid = document.getElementById('catalogGrid');
  catalog.forEach(function(s, i) {
    var card = document.createElement('div');
    card.className = 'cat-card';
    card.dataset.cat = s.cat;
    card.style.transitionDelay = (i % 4 * 0.07) + 's';
    card.innerHTML =
      '<div class="cat-card-img ' + s.img + '">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25">' + s.icon + '</svg>' +
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
            'Ver mÃ¡s' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M9 6l6 6-6 6"/></svg>' +
          '</button>' +
          '<a href="' + WA + s.msg + '" target="_blank" class="btn-wa-card">' +
          '<svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>' +
          'Solicitar informaciÃ³n' +
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
  function updateCount(f) {
    if (!catalogCount) return;
    var cards = document.querySelectorAll('.cat-card');
    var visible = 0;
    cards.forEach(function(c) { if (!c.classList.contains('hidden')) visible++; });
    var label = f === 'all' ? 'Mostrando todos los servicios' :
                f === 'electro' ? 'ElectromecÃ¡nico' :
                f === 'civil'   ? 'Civil' : 'Facilidades';
    catalogCount.style.opacity = '0';
    setTimeout(function() {
      catalogCount.textContent = visible + ' ' + (visible === 1 ? 'servicio' : 'servicios') +
        (f !== 'all' ? ' â€” ' + label : '');
      catalogCount.style.opacity = '1';
    }, 100);
  }

  updateCount = function(f) {
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
    }, 100);
  };

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
        updateCount(f);
      }, 120);
    });
  });
  updateCount('all');

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
    catalogModalStage.querySelectorAll('.catalog-modal-slide').forEach(function(slide, idx) {
      slide.classList.toggle('active', idx === activeCatalogSlideIndex);
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

      var image = document.createElement('img');
      image.src = photo.src;
      image.alt = photo.alt;
      slide.appendChild(image);

      var overlay = document.createElement('div');
      overlay.className = 'catalog-modal-slide-overlay';
      slide.appendChild(overlay);

      catalogModalStage.insertBefore(slide, catalogModalChip);

      var thumb = document.createElement('button');
      thumb.type = 'button';
      thumb.className = 'catalog-modal-thumb' + (idx === 0 ? ' active' : '');
      thumb.setAttribute('data-slide-index', String(idx));

      var thumbImage = document.createElement('img');
      thumbImage.src = photo.src;
      thumbImage.alt = photo.alt;
      thumb.appendChild(thumbImage);

      catalogModalThumbs.appendChild(thumb);
    });

    var hasMultiple = activeCatalogSlides.length > 1;
    catalogModalPrev.style.display = hasMultiple ? 'inline-flex' : 'none';
    catalogModalNext.style.display = hasMultiple ? 'inline-flex' : 'none';
    catalogModalThumbs.style.display = hasMultiple ? 'grid' : 'none';
    activeCatalogSlideIndex = 0;
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
    catalogModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('catalog-open');
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
    { q:'Â¿En quÃ© ciudades o zonas tienen cobertura?',
      a:'Nuestras operaciones se centran en Ciudad de MÃ©xico y Ã¡rea metropolitana, con capacidad de atender proyectos en el interior de la repÃºblica mediante coordinaciÃ³n previa. ContÃ¡ctanos para confirmar disponibilidad en tu zona.' },
    { q:'Â¿Cuentan con contratos de mantenimiento preventivo?',
      a:'SÃ­. Ofrecemos igualas de mantenimiento integral con visitas programadas mensuales, bimestrales o trimestrales segÃºn las necesidades de tu instalaciÃ³n. El contrato incluye mano de obra, diagnÃ³sticos periÃ³dicos y reporte tÃ©cnico.' },
    { q:'Â¿CuÃ¡nto tiempo tardan en responder una urgencia?',
      a:'Para clientes con contrato de iguala, nuestro tiempo de respuesta es de 2 a 4 horas en dÃ­as hÃ¡biles y dentro de las primeras 8 horas en fines de semana. Para servicios correctivos sin contrato previo, coordinamos segÃºn disponibilidad.' },
    { q:'Â¿Trabajan con empresas grandes o tambiÃ©n con negocios medianos?',
      a:'Atendemos desde negocios medianos hasta grandes corporativos e instalaciones industriales. Nuestros servicios se adaptan al tamaÃ±o y complejidad de cada instalaciÃ³n. Evaluamos cada caso sin compromiso.' },
    { q:'Â¿El personal tÃ©cnico estÃ¡ certificado?',
      a:'SÃ­. Nuestros tÃ©cnicos cuentan con formaciÃ³n especializada en sus Ã¡reas: electricidad, HVAC, plomerÃ­a, sistemas contra incendios y control de acceso. Trabajamos bajo normativa NOM vigente y con equipos de protecciÃ³n personal.' },
    { q:'Â¿CÃ³mo es el proceso para contratar un servicio?',
      a:'Es simple: contÃ¡ctanos por WhatsApp o formulario â†’ agendamos una visita de diagnÃ³stico sin costo â†’ te presentamos una propuesta tÃ©cnica detallada â†’ acordamos inicio de trabajo. Sin burocracia innecesaria.' },
    { q:'Â¿Ofrecen garantÃ­a en sus trabajos?',
      a:'SÃ­. Todos nuestros servicios tienen garantÃ­a tÃ©cnica. El periodo varÃ­a segÃºn el tipo de trabajo: desde 30 dÃ­as para servicios correctivos menores hasta 12 meses en instalaciones y obras. Los detalles se especifican en cada contrato.' },
    { q:'Â¿QuÃ© incluye una auditorÃ­a energÃ©tica?',
      a:'Incluye inspecciÃ³n de todos los sistemas consumidores de energÃ­a (HVAC, iluminaciÃ³n, motores, generadores), mediciÃ³n real de consumo, identificaciÃ³n de pÃ©rdidas y un plan de acciÃ³n con estimaciÃ³n de ahorro econÃ³mico mensual.' }
  ];

  // Override malformed FAQ text caused by a prior encoding issue.
  faqs = [
    { q:'¿En qué ciudades o zonas tienen cobertura?',
      a:'Nuestras operaciones se centran en Ciudad de México y área metropolitana, con capacidad de atender proyectos en el interior de la república mediante coordinación previa. Contáctanos para confirmar disponibilidad en tu zona.' },
    { q:'¿Cuentan con contratos de mantenimiento preventivo?',
      a:'Sí. Ofrecemos igualas de mantenimiento integral con visitas programadas mensuales, bimestrales o trimestrales según las necesidades de tu instalación. El contrato incluye mano de obra, diagnósticos periódicos y reporte técnico.' },
    { q:'¿Cuánto tiempo tardan en responder una urgencia?',
      a:'Para clientes con contrato de iguala, nuestro tiempo de respuesta es de 2 a 4 horas en días hábiles y dentro de las primeras 8 horas en fines de semana. Para servicios correctivos sin contrato previo, coordinamos según disponibilidad.' },
    { q:'¿Trabajan con empresas grandes o también con negocios medianos?',
      a:'Atendemos desde negocios medianos hasta grandes corporativos e instalaciones industriales. Nuestros servicios se adaptan al tamaño y complejidad de cada instalación. Evaluamos cada caso sin compromiso.' },
    { q:'¿El personal técnico está certificado?',
      a:'Sí. Nuestros técnicos cuentan con formación especializada en sus áreas: electricidad, HVAC, plomería, sistemas contra incendios y control de acceso. Trabajamos bajo normativa NOM vigente y con equipos de protección personal.' },
    { q:'¿Cómo es el proceso para contratar un servicio?',
      a:'Es simple: contáctanos por WhatsApp o formulario → agendamos una visita de diagnóstico sin costo → te presentamos una propuesta técnica detallada → acordamos inicio de trabajo. Sin burocracia innecesaria.' },
    { q:'¿Ofrecen garantía en sus trabajos?',
      a:'Sí. Todos nuestros servicios tienen garantía técnica. El periodo varía según el tipo de trabajo: desde 30 días para servicios correctivos menores hasta 12 meses en instalaciones y obras. Los detalles se especifican en cada contrato.' },
    { q:'¿Qué incluye una auditoría energética?',
      a:'Incluye inspección de todos los sistemas consumidores de energía (HVAC, iluminación, motores, generadores), medición real de consumo, identificación de pérdidas y un plan de acción con estimación de ahorro económico mensual.' }
  ];

  faqs = [
    { q:'\u00BFEn qu\u00E9 ciudades o zonas tienen cobertura?',
      a:'Operamos desde Santiago, Rep\u00FAblica Dominicana, con cobertura nacional seg\u00FAn la necesidad t\u00E9cnica del proyecto. Cont\u00E1ctanos para confirmar disponibilidad en tu zona.' },
    { q:'\u00BFCuentan con contratos de mantenimiento preventivo?',
      a:'S\u00ED. Ofrecemos igualas de mantenimiento integral con visitas programadas mensuales, bimestrales o trimestrales seg\u00FAn las necesidades de tu instalaci\u00F3n. El contrato incluye mano de obra, diagn\u00F3sticos peri\u00F3dicos y reporte t\u00E9cnico.' },
    { q:'\u00BFCu\u00E1nto tiempo tardan en responder una urgencia?',
      a:'Para clientes con contrato de iguala, nuestro tiempo de respuesta es de 2 a 4 horas en d\u00EDas h\u00E1biles y dentro de las primeras 8 horas en fines de semana. Para servicios correctivos sin contrato previo, coordinamos seg\u00FAn disponibilidad.' },
    { q:'\u00BFTrabajan con empresas grandes o tambi\u00E9n con negocios medianos?',
      a:'Atendemos desde negocios medianos hasta grandes corporativos e instalaciones industriales. Nuestros servicios se adaptan al tama\u00F1o y complejidad de cada instalaci\u00F3n. Evaluamos cada caso sin compromiso.' },
    { q:'\u00BFEl personal t\u00E9cnico est\u00E1 certificado?',
      a:'S\u00ED. Nuestros t\u00E9cnicos cuentan con formaci\u00F3n especializada en sus \u00E1reas: electricidad, HVAC, plomer\u00EDa, sistemas contra incendios y control de acceso. Trabajamos bajo normativas t\u00E9cnicas y de seguridad aplicables en Rep\u00FAblica Dominicana, junto con equipos de protecci\u00F3n personal.' },
    { q:'\u00BFC\u00F3mo es el proceso para contratar un servicio?',
      a:'Es simple: cont\u00E1ctanos por WhatsApp o formulario \u2192 agendamos una visita de diagn\u00F3stico sin costo \u2192 te presentamos una propuesta t\u00E9cnica detallada \u2192 acordamos inicio de trabajo. Sin burocracia innecesaria.' },
    { q:'\u00BFOfrecen garant\u00EDa en sus trabajos?',
      a:'S\u00ED. Todos nuestros servicios tienen garant\u00EDa t\u00E9cnica. El periodo var\u00EDa seg\u00FAn el tipo de trabajo: desde 30 d\u00EDas para servicios correctivos menores hasta 12 meses en instalaciones y obras. Los detalles se especifican en cada contrato.' },
    { q:'\u00BFQu\u00E9 incluye una auditor\u00EDa energ\u00E9tica?',
      a:'Incluye inspecci\u00F3n de todos los sistemas consumidores de energ\u00EDa (HVAC, iluminaci\u00F3n, motores, generadores), medici\u00F3n real de consumo, identificaci\u00F3n de p\u00E9rdidas y un plan de acci\u00F3n con estimaci\u00F3n de ahorro econ\u00F3mico mensual.' }
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

  function updateProjectCardCopy_(card, copy) {
    if (!card || !copy) return;

    var badge = card.querySelector('.proj-cat-badge');
    var title = card.querySelector('.proj-info-title');
    var desc = card.querySelector('.proj-info-desc');
    var meta = card.querySelector('.proj-info-meta');

    if (badge && copy.badge) badge.textContent = copy.badge;
    if (title && copy.title) title.textContent = copy.title;
    if (desc && copy.desc) desc.textContent = copy.desc;
    if (meta && copy.meta) meta.textContent = copy.meta;
  }

  var projectCards = document.querySelectorAll('#proyectos .proj-card');
  updateProjectCardCopy_(projectCards[1], {
    badge: 'Civil',
    title: 'Plaza Paseo, Puerto Plata - Pintado exterior de oficina de Seguros Universal',
    desc: 'Trabajo de preparacion de superficie y pintado exterior para renovar la imagen del espacio y reforzar la proteccion del acabado frente al uso diario y la intemperie.',
    meta: 'Civil · 2024'
  });
  updateProjectCardCopy_(projectCards[2], {
    badge: 'Facility',
    title: 'Plaza Paseo, Puerto Plata - Poda de arboles',
    desc: 'Intervencion de mantenimiento exterior para mejorar seguridad, visibilidad y orden en las areas verdes, con poda controlada y limpieza del entorno intervenido.',
    meta: 'Facility Management · 2024'
  });
  updateProjectCardCopy_(projectCards[3], {
    badge: 'Electromecanico',
    title: 'Torre Universal, Santiago - Cambio de luminarias',
    desc: 'Sustitucion e instalacion de luminarias para mejorar nivel de iluminacion, presentacion del espacio y eficiencia operativa en las areas intervenidas.',
    meta: 'Electromecanico · 2024'
  });

  updateProjectCardCopy_(projectCards[1], {
    badge: 'Civil',
    title: 'Plaza Paseo, Puerto Plata - Pintado exterior de oficina de Seguros Universal',
    desc: 'Trabajo de preparaci\u00F3n de superficie y pintado exterior para renovar la imagen del espacio y reforzar la protecci\u00F3n del acabado frente al uso diario y la intemperie.'
  });
  updateProjectCardCopy_(projectCards[2], {
    badge: 'Facility',
    title: 'Plaza Paseo, Puerto Plata - Poda de \u00E1rboles',
    desc: 'Intervenci\u00F3n de mantenimiento exterior para mejorar seguridad, visibilidad y orden en las \u00E1reas verdes, con poda controlada y limpieza del entorno intervenido.'
  });
  updateProjectCardCopy_(projectCards[3], {
    badge: 'Electromec\u00E1nico',
    title: 'Torre Universal, Santiago - Cambio de luminarias',
    desc: 'Sustituci\u00F3n e instalaci\u00F3n de luminarias para mejorar nivel de iluminaci\u00F3n, presentaci\u00F3n del espacio y eficiencia operativa en las \u00E1reas intervenidas.'
  });

  /* ---- Contact form -> Google Sheets ---- */
  var DEFAULT_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbyoIIqfIT4SFK-eZxCaVJ2Y2JL8-1jlB4Ndfc1uHmQa3Q1OU3v8Yz-qxq-RTW1IAkUd/exec';
  var DEFAULT_NOTIFY_EMAIL = 'angel.nunez@nuvird.com';
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

  function syncLeadMetaFields_(form, notifyEmail) {
    upsertHiddenField_(form, 'source', 'Web NUVI');
    upsertHiddenField_(form, 'page', window.location.href);
    upsertHiddenField_(form, 'submittedAt', new Date().toISOString());
    upsertHiddenField_(form, 'notifyEmail', notifyEmail || DEFAULT_NOTIFY_EMAIL);
    upsertHiddenField_(form, 'parentOrigin', window.location.origin || '');
    upsertHiddenField_(form, 'responseMode', 'iframe');
  }

  var contactForm = document.getElementById('contactForm');
  if (contactForm) {
    var sheetsUrl = (contactForm.getAttribute('data-sheets-url') || DEFAULT_SHEETS_URL).trim();
    var notifyEmail = (contactForm.getAttribute('data-notify-email') || DEFAULT_NOTIFY_EMAIL).trim();
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
    syncLeadMetaFields_(contactForm, notifyEmail);

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
        syncLeadMetaFields_(contactForm, notifyEmail);
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

      syncLeadMetaFields_(contactForm, notifyEmail);
      isSubmittingLead = true;
      setLeadFormStatus_(btn, btnText, 'Enviando...', true);

      console.info('[NUVI Form] Enviando lead a Apps Script', {
        endpoint: sheetsUrl,
        notifyEmail: notifyEmail || DEFAULT_NOTIFY_EMAIL
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

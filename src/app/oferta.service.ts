import { Injectable } from '@angular/core';
import { Oferta } from './oferta';

@Injectable()
export class OfertaService {
  listaOfertas: Array<Oferta> = [
    new Oferta('../../../assets/telefonica.png', 'Telefonica', 'MAQUETADOR WEB', '1 hora', 'Madrid, (España)', 'Grado Medio informática', '2 años', ['CSS3', ' HTML5', ' Photoshop', ' Git', ' Illustrator.'], 'En estos momentos necesitamos incorporar a nuestro EQUIPO un Maquetador Web Senior para el desarrollo de contenido e-learning con experiencia en Javascript, JQuery, peticiones Web (Rest) y conocimientos de otros Frameworks como Angular.', 3, 'Larga duración', '13.000€', 'Jornada completa', 'Telefónica S.A. es una empresa multinacional española de telecomunicaciones, con sede central en Madrid, España, situada como la compañía de telecomunicaciones más importante de Europa y la quinta del mundo.'),
    new Oferta('../../../assets/agioglobal.png', 'Grupo Agio', 'Perfiles Java: Coordinador equipo y AP J2ee', '3 horas', 'Barcelona, Barcelona (España)', 'Cualquier persona que pueda demostrar sus conocimientos, valorándose estudios en informática o ingeniería.', 'Entre 2 y 3 años.', ['JQuery', ' HTML', ' CSS', ' Javascript.'], 'Seleccionamos programadores Java con experiencia en desarollo web y que se defienda tanto a nivel de backend como frontend para formar parte de nuestro equipo de desarrollo en un importante cliente final dedicado al marketing online y ubicado en Barcelona. Se tratan de proyectos nuevos, relacionados con las RRSS.', 3, 'Larga duración', '20.000€', 'Flexibilidad horaria', 'Somos una empresa de servicios integrales de RRHH cuyo mayor objetivo es añadir valor a sus clientes. Nuestro compromiso es conocer en profundidad las necesidades de nuestros clientes respondiendo de una manera flexible e innovadora a un contexto a un contexto empresarial en continua evolución, proveyendo soluciones que potencien la sostenibilidad de las organizaciones'),
    new Oferta('../../../assets/ecade.png', 'ECADE ECONOMISTAS ASESORES DE EMPRESA, S.A', 'Graduado en Economía', '10 horas', 'Pontevedra, (España)', 'Licenciados/ Graduados en Economía con experiencia en Fiscalidad.', 'Al menos 2 años', ['Gretl', ' Stata', ' E-views.'], 'Se solicita Titulados en la rama de Economía con experiencia en Fiscalidad y con residencia en zonas próximas a ciudad de Pontevedra.', 1, 'Larga duración', '12.000€-15.000€ Bruto/año', 'Jornada completa', 'Somos una Asesoría Económica Contable, Fiscal y Laboral fundada en el año 1991: prestamos servicios contables, fiscales, laborales, subvenciones etc a profesionales, empresas individuales y sociedades.'),
    new Oferta('../../../assets/grupoq.jpg', 'ERM ARQUITECTOS SOCIEDAD LIMITADA', 'Arquitecto Urbanista', '1 día', 'Tomares, Sevilla (España)', 'Ingeniero Superior - Arquitecto', 'Al menos 3 años', ['CSS3', ' HTML5', ' Photoshop', ' Git', ' Illustrator.'], 'Se precisa incorporar para el Departamento Técnico un ARQUITECTO URBANISTA para su sede en Sevilla. La persona seleccionada se encargara de desempeñar las siguientes funciones entre otras: Tramitación y desarrollo de Gestión Urbanistica, planes parciales, estudios de detalles, modificaciones puntuales de elementos', 1, 'Larga duración', 'No disponible', 'Jornada completa', 'Importante Promotora Inmobiliaria, sólidamente asentada en Andalucía Occidental y en continua expansión, dedicada a la promoción y venta de viviendas, naves industriales, edificios de oficinas, solares, etc.'),
    new Oferta('../../../assets/phibo.png', 'Phibo', 'Programador Junior SQL HTML', '1 día', 'Barcelona, Barcelona (España)', 'Cursando: Formación Profesional Grado Superior- Informática', 'No requerida', ['Perl', ' HTML', ' SQL', ' PHP'], 'Para su HQ ubicado en Sentmenat, Phibo necesita incorporar para uno de sus proyectos en cliente un Programador Web SQL HTML. Además se prestará formación en programación ASP, Net Webforms y MVC.', 1, '3 meses con posibilidad de incorporacion al actual equipo de desarrollo.', '600€- 900€ Bruto/mes (5 euros/ hora)', 'FLEXIBLE 4 h.', 'Phibo® es la compañía multinacional española líder en implantología y prótesis en CAD-CAM. Phibo® investiga, desarrolla y fabrica soluciones odontológicas desde hace más de 20 años, con una fuerte vocación investigadora y un alto componente científico.'),
    new Oferta('../../../assets/norconsulting.png', 'Grupo norconsulting', 'Perfil FULLSTACK. J2EE, Angular, Spring, HTML...', '1 día', 'A Coruña, A Coruña (España)', 'Ciclo Formativo Grado Superior- Informática', 'Perfil entre 2 y 6 meses de experiencia: Programador con experiencia o Analista Programador.', ['JAVA', ' HTML', ' JavaScript', ' CSS', ' J2EE', ' Hibernate', ' AngularJS'], ' Buscamos perfiles tecnológicos prófesionales que sepan adaptarse a los cambios, que trabajen con metodológias ágiles y que tengan una mente creativa e innovadora. Estamos seleccionando en LA CORUÑA, el perfil FULLSTACK: java, J2EE, Spring, Angular, CSS... Contratación directa por parte del cliente final. ', 3, 'Larga duración', '15.000€', 'Jornada completa', 'Somos headhunters especialistas en la búsqueda y selección de perfiles Executive Tech. Acompañamos a profesionales y ejecutivos en los procesos de transición entre grandes empresas tecnológicas con profesionalidad y discreción. Sabemos de tecnología, tenemos probablemente la red de contactos IT mas amplia del mercado y estamos en contacto permanente con cerca de 400 empresas de tecnología y comunicaciones.'),
    new Oferta('../../../assets/zemsania.png', 'Zemsania España Zona Oeste', 'PROGRAMADORES Frontend: JS, HTML,JQuery', '2 días', 'A Coruña, A Coruña (España)', 'Ciclo Formativo Grado Superior- Informática', 'No requerida', ['CSS3', 'HTML5', ' JavaScript', ' Java', ' JQuery.'], 'En la actualidad, seleccionamos para ocupar puesto estable en importante empresa TIC situada en La Coruña, un perfil de: PROGRAMADOR ANGULAR/JAVASCRIPT, PROGRAMADORES FRONT-END, PROGRAMADOR JAVASCRIPT. ', 1, 'Proyecto estable', '18.000€', 'Jornada completa', 'ZEMSANIA ICT OUTSOURCING SERVICES es una Multinacional española líder en Servicios de Outsourcing enlas Tecnologías de la Información y las Comunicaciones con mas de 600 profesionales operando en cinco países. Somos una empresa con espíritu innovador, dedicada a ofrecer soluciones y servicios tecnológicos en el ámbito de las TIC.'),
    new Oferta('../../../assets/garu.png', 'Garu', 'Se busca Arquitecto, Ingeniero o Economista', '5 días', 'Luxemburgo, Luxemburgo (Luxemburgo)', 'Graduado y Máster', 'Al menos 3 años', ['Ingles', ' Español', ' Microsoft Excel.'], 'Se busca un arquitecto, ingeniero o economista para e puesto de Asset Manager en una empresa ubicada en Luxemburgo, para implementar Bussiness plan, coordinar asesores legales, técnicos a lo largo de la vida de los activos, elaborar modelos financieros para adquisiciones, redactar presentaciones y notas de inversiones para los inversores. Se precisa fuerte conocimiento en Microsoft Excel, capacidad de realizar el trabajo en un tiempo reducido, capacidad de saber fomentar buenas relaciones con todo el equipo (Luxemburgo España y Francia), fuertes habilidades de comunicaciones y saber gestionar las relaciones internas y externas.', 1, 'Larga duración', '20.000€', 'Jornada completa', 'Agencia inmobiliaria ubicada en Marbella centro. Nuestro mercado es el español vacacional e igualmente el extranjero de segunda vivienda.'),
    new Oferta('../../../assets/acreditate.jpg', 'ACREDITATE: Instituto de Innovación Educativa Acreditate', 'Desarrollo de aplicaciones online PHP, Mysql, Html', '7 días', 'Málaga, Málaga (España)', 'Ingeniero Superior - Ingeniero en Informática', 'Al menos 1 año', ['PHP', ' MySQL', ' HTML5.'], 'Docencia de un curso en modalidad presencial consistente en "Desarrollo de aplicaciones online basado en PHP, Mysqul, HTML5" en Málaga.  Es necesario elaborar los contenidos formativos ajustados al modelo de ejecución de las sesiones formativas. Tendrá preferencia manifiesta aquellos profesionales con conocimientos y experiencia en formación presencial y online.', 1, '1 mes', '1000€ Brutos/mes', 'Parcial: de mañana', 'Institución de innovación educativa (ONG) que tiene el próposito de facilitar y participar en el desarrollo de proyectos educativos y sociales de calidad, bajo el prisma de la innovación.'),
  ];

  puestoFiltrado: string = '';
  constructor() { }

  devolverOfertas(): Array<Oferta> {
    return this.listaOfertas;
  }

  devolverOferta(id: any) {
    return this.listaOfertas[id];
  }

  anadirOferta(newOferta) {
    this.listaOfertas.push(newOferta);
  }

  guardarPuesto(puesto) {
    this.puestoFiltrado = puesto;
  }
  mostrarPuesto() {
    return this.puestoFiltrado;
  }
  eliminarOferta(oferta) {
    this.listaOfertas.splice(this.listaOfertas.indexOf(oferta), 1);
  }

  editarOferta(ofertaVieja: Oferta, ofertaNueva: Oferta) {
    this.listaOfertas[this.listaOfertas.indexOf(ofertaVieja)] = ofertaNueva;
  }

}

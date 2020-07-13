//All ready!. Page &  Cordova loaded.
//Todo listo!. Página & Cordova cargados.
function deviceReady() {
	try {
		//Example when Internet connection is needed but not mandatory
		//Ejemplo de cuando se necesita conexióna a Internet pero no es obligatoria.
		if (!mui.connectionAvailable()) {
			if ('plugins' in window && 'toast' in window.plugins)
				mui.toast('We recommend you connect your device to the Internet');
			else
				mui.alert('We recommend you connect your device to the Internet');
		}

		//Install events, clicks, resize, online/offline, etc. 
		installEvents();

		//Hide splash.
		//Ocultar el splash.
		if (navigator.splashscreen) {
			navigator.splashscreen.hide();
		}

	} catch (e) {
		//your decision
		//tu decisión
	}
}

/**
 * Install events, clicks, resize, online/offline, etc., on differents HTML elements.
 * Instala eventos, clicks, resize, online/offline, etc., sobre diferentes elementos HTML.
 */
function installEvents() {

	mui.util.installEvents([
		//Mail list click/touch events. See that if the event is not specified, click is assumed.
		{
			id: '.mui-backarrow',	//Important!
			fn: () => {
				mui.history.back();
				return false;
			}
		},
		{
			id: '.mui-backarrow-home',
			fn: () => {
				mui.viewport.showPage("home-page", "SLIDE_RIGHT");
				return false;
			}
		},
		{
			id: '.mui-headmenu',
			ev: 'click',	//If not, it assumes click
			fn: () => {
				//ATTENTION!!! mui.screen instead of mui.viewport
				mui.screen.showPanel("menu-panel", "SLIDE_LEFT");
				return false;
			}
		},
		{
			id: '#delete-me',
			ev: 'click',	//If not, it assumes click
			fn: () => {
				mui.viewport.showPage("template-page", "DEF");
				return false;
			}
		},
		{
			id: '#option1',
			fn: () => {
				mui.screen.closePanel(function () {
					mui.viewport.showPage("home-page", "DEF");
				});
				return false;
			}
		},
		{
			id: '.CargarDatosPlanAnterior',
			ev: 'click',
			fn: () => {
				mui.viewport.showPage("sesiones-page", "DEF");
				return false;
			}
		},
		{
			id: '.sesion-boton',
			ev: 'click',
			fn: () => {
				mui.viewport.showPage("dias-page", "DEF");
				return false;
			}
		},
		{
			id: '.planNuevo',
			ev: 'click',
			fn: () => {
				mui.viewport.showPage("planNuevo-page", 'DEF');
				return false;
			}
		},

		//Toolbar options ------------------------------------------
		{
			id: '#tabbar-button1',
			fn: () => {
				mui.alert("tab 1", "Selected");
				return false;
			}
		},
		{
			id: '#tabbar-button2',
			fn: () => {
				mui.alert("tab 2", "Selected");
				return false;
			}
		},
		{
			id: '#tabbar-button3',
			fn: () => {
				mui.alert("tab 3", "Selected");
				return false;
			}
		},
		{
			id: '#tabbar-button4',
			fn: () => {
				mui.alert("tab 4", "Selected");
				return false;
			}
		},
		{
			id: '#tabbar-button5',
			fn: () => {
				mui.alert("tab 5", "Selected");
				return false;
			}
		},
		//MobileUI viewport specific event.
		{
			vp: mui.viewport,
			ev: 'swiperight',
			fn: () => {
				if (!mui.viewport.panelIsOpen()) {
					mui.history.back();
				}
			}
		},
		{
			vp: mui.viewport,
			ev: 'swipeleftdiscover',
			fn: () => {
				if (!mui.viewport.panelIsOpen()) {
					mui.screen.showPanel('menu-panel', 'SLIDE_LEFT');	//ATENTION!!! mui.screen instead mui.viewport
					return false;
				}
			}
		},
		//It's a good idea to consider what happens when the device is switched on and off the internet.
		//Es buena idea considerar que pasa cuando el dispositivo se conecta y desconecta a Internet.
		{
			id: document,
			ev: 'online',
			fn: () => {
				//Do something
			}
		},
		{
			id: document,
			ev: 'offline',
			fn: () => {
				//Do something
			}
		},
		//Typically fired when the device changes orientation.
		//Típicamente disparado cuando el dispositivo cambia de orientación.
		{
			id: window,
			ev: 'resize',
			fn: () => {
				//Do something if you need
			}
		},
	]);
}

function installEvents2() {

	//It's a good idea to consider what happens when the device is switched on and off the internet.
	//Es buena idea considerar que pasa cuando el dispositivo se conecta y desconecta a Internet.
	document.addEventListener("online", function () {
		//somthing
	}, false);

	//Back button.
	$(".mui-backarrow").click(function () {
		mui.history.back();
		return false;
	});

	//Open menu.
	$(".mui-headmenu").click(function () {
		mui.screen.showPanel("menu-panel", "SLIDE_LEFT");	//ATTENTION!!! mui.screen instead of mui.viewport
		return false;
	});

	$("#tabbar-button1").click(function () {
		mui.alert("tab 1", "Selected");
		return false;
	});

	$("#tabbar-button2").click(function () {
		mui.alert("tab 1", "Selected");
		return false;
	});

	$("#tabbar-button3").click(function () {
		mui.alert("tab 3", "Selected");
		return false;
	});

	$("#tabbar-button4").click(function () {
		mui.alert("tab 4", "Selected");
		return false;
	});

	$("#tabbar-button5").click(function () {
		mui.alert("tab 5", "Selected");
		return false;
	});

	$("#menuoptions").click(function () {
		return false;
	});

	/*******************************************************************************/
	/*Swipe Test --------------------------------------------------------------------*/
	/*******************************************************************************/
	//Swipe touch events. Cool for best App user experience!
	//Evento de desplazamiento tactil. Buenisimo para una óptima experiencia de usuario en App!
	mui.viewport.on("swiperight", function (currentPageId, originalTarget, event, startX, startY, endX, endY) {
		if (!mui.viewport.panelIsOpen()) {
			mui.history.back();
		}
	});
}

function desplegarSesiones(sesion) {
	let desplegarSesionesHtml = $('<div class="desplegar_sesiones"><br><button>Sesión: {{sesion.nombre}}</button><br><button>Series: {{sesion.series}}</button><br><button> Intensidad>:{{sesion.series}}</button><br><button>Tiempo: {{sesion.tiempo}}</button>')
	$('li a', ".lista_sesiones").append(desplegarSesionesHtml)
	$('.desplegar_sesiones(event)').hide()
}

function desplegarSesionesOnclick(event) {
	$(".desplegar_sesiones(event)").not($(".desplegar_sesiones(event)", event)).slideUp()
	$(".desplegar_sesiones(event)", event).slideToggle()
}

function desplegarOpciones() {
	let desplegarOpcionesHtml = $('<div class="desplegar_opciones"><br><button v-on:click="verAlumno">Visualizar Alumno</button><br><button v-on:click="verPlanes">Visualizar Planes</button><br><button v-on:click="abrirPlanNuevo(alumno)">Nuevo Plan</button><br><button v-on:click="abrirNuevaSesion">Nueva Sesión</button><br><button v-on:click="asignacionPlan">Asignar Plan</button><br></div>')
	$('li a', ".lista_alumnos").append(desplegarOpcionesHtml)
	$('.desplegar_opciones').hide()
}

function desplegarOpcionesOnclick(event) {
	$(".desplegar_opciones").not($(".desplegar_opciones", event)).slideUp()
	$(".desplegar_opciones", event).slideToggle()
}

function desplegarDias() {
	let diasHtml = $('<div class="dias_desplegados"><div v-for="(dia, index2) in plan.dias"><button class="sesion_dia_boton" v-on:click="abrirDiaSesionNueva(index1, index2)">{{dia.nombre}}</button><br></div></div>')
	$('li a', ".lista_planes").append(diasHtml)
	$('.dias_desplegados').hide()
}

function desplegarDiasOnclick(event) {
	$(".dias_desplegados").not($(".dias_desplegados", event)).slideUp()
	$(".dias_desplegados", event).slideToggle()
}

function desplegarDiasVisualizar() {
	let diasHtml = $('<div class="dias_desplegados_visualizar"><div v-for="dia in plan.dias"><button class="plan_dia_boton" v-on:click="abrirEjerciciosVisualizar(dia)">{{dia.nombre}}</button><br></div></div>')
	$('li a', ".lista_planes_visualizar").append(diasHtml)
	$('.dias_desplegados_visualizar').hide()
}

function desplegarDiasVisualizarOnclick(event) {
	$(".dias_desplegados_visualizar").not($(".dias_desplegados_visualizar", event)).slideUp()
	$(".dias_desplegados_visualizar", event).slideToggle()
}

function desplegarDiasCliente() {
	let diasHtml = $('<div class="dias_desplegados_cliente"><div v-for="dia in plan.dias"><button class="plan_cliente_dia_boton" @click="handleSelectDia(dia)">{{dia.nombre}}</button><br></div></div>')
	$('li a', ".lista_planes_cliente").append(diasHtml)
	$('.dias_desplegados_cliente').hide()
}

function desplegarDiasClienteOnclick(event) {
	$(".dias_desplegados_cliente").not($(".dias_desplegados_cliente", event)).slideUp()
	$(".dias_desplegados_cliente", event).slideToggle()
}



$(document).ready(() => {
	desplegarOpciones()
	desplegarDias()
	desplegarDiasVisualizar()
	desplegarDiasCliente()
});


function filtro(filtro, lista) {
	var input, filter, ul, li, a, i, txtValue
	input = $(filtro)
	filter = input.val().toUpperCase()
	ul = $(lista)
	li = $('li', lista)

	// Loop through all list items, and hide those who don't match the search query
	for (i = 0; i < li.length; i++) {
		a = $("a", li[i])
		txtValue = a.text()
		if (txtValue.toUpperCase().indexOf(filter) > -1) {
			li[i].style.display = ""
		} else {
			li[i].style.display = "none"
		}
	}
}

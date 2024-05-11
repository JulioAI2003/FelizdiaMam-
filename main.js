

var h1 = document.querySelector("#mensaje");
  
var t1 = ""
var t2 = ""
var t3 = ""
var time = 0
function enviarMensaje(texto) {
    // Cambiar el texto según el botón presionado
    switch (texto) {
      case "mamay":
        t1 = "Mi mamay, no necesito que sea el dia de la madre para decirte lo fabulosa que eres como Madre,";
        t2 = "estoy super orgulloso de que seas mi mamay y de que hayas hecho un excelente trabajo con tus 7 wawas, te amo mucho mi mamay."
        t3 = ""
        break;
      case "mother":
        t1 = "Mi reyna Judith, eres la mujer mas importante en mi vida, te amo con todo mi corazon y doy muchas gracias a Dios por haberme dado una madre tan preciosa y perfecta para mi,";
        t2= "Quizas no te demuestro a diario mi amor, pero eres la mujer por la que daria mi vida de ser necesario para que estes bien,"
        t3="Te amo mucho madre y si me dieran a elegir una madre de nuevo te elegiria infinitas veces."
        break;
      case "bakilas":
        t1 = "Feliz dia Tia bakilas eres y seguiras siendo una excelente madre con el precioso bebe Asiel porque el crece y refleja todo el amor que le das";
        t2 = "con mucha paciencia y amor que fuiste mejorando con todos los chiquis, y de parte del bebe Asiel: Te quello mami"
        t3 = " sigue asi para que sea un gran hombre, como su primo Julio 😂💞."
        break;
      case "grebe":
        t1 = "Feliz dia tia Grebe, en este dia especial te hago recordar el excelente trabajo que hiciste ";
        t2 = "y sigues haciendo con las chicas que crecen con mucho amor y educacíon."
        t3 = ""
        break;
      case "rous":
        t1 = "Feliz dia Tia Rous, el dia de hoy se te felicita por todo el esfuerzo y amor que diste y sigues dando para que cielito grous,";
        t2 = "siga siendo esa niña alegre que demuestra el exceso de amor que le dan en casa."
        t3 = ""
        break;
      case "chanla":
        t1 = "Feliz dia Tia Chanla, hoy se celebra tu dia, ya que eres una muy buena madre con los 3 chiquis preciosos,";
        t2 = "estoy seguro de que te aman mucho y estan super orgullosos de que seas su Madre."
        t3 = ""
        break;
      case "ray":
        t1 = "Feliz dia tia Ray, hoy no es tu cumpleaños pero te mereces una felicitaciones por todo el amor y cariño que les diste";
        t2 = "y sigues dando a doña Alme y don Lienzo, estoy seguro de que te aman con todo su corazon y que estan super felices de que seas su mamá."
        t3 = ""
        break;
      case "marilyn":
        t1 = "Feliz dia p marilincyta la reyna, te mereces unas felicitaciones por el gran hiijo inteligente y amoroso que tienes, que estoy seguro de que te ama demasiado.";
        t2 = ""
        t3 = ""
        break;
      default:
        t1 = "Feliz dia mamá.";
        break;
    }
    // Actualizar el texto mostrado en la página
  }

     window.onload = function() {
    document.body.classList.remove("container");
        var parametros = obtenerParametrosURL();
        var nombre = parametros.mom
        enviarMensaje(nombre)
        textoslista = [t1,t2,t3]
        var textos = textoslista.filter(function(elemento) {
            // La función de filtrado devuelve true si el elemento no está vacío, de lo contrario, devuelve false
            return elemento !== "";
        });


        textos.forEach(function(texto) {
            setTimeout(() => {
                reemplazarTexto(texto)
              }, time);
            time += 15000
        // Llamamos a la función reemplazarTexto después de 15 segundos



        });
    }

    function obtenerParametrosURL() {
        var parametros = {};
        var url = window.location.search.substring(1);
        var partes = url.split('&');
        for (var i = 0; i < partes.length; i++) {
            var parametro = partes[i].split('=');
            var nombre = decodeURIComponent(parametro[0]);
            var valor = decodeURIComponent(parametro[1]);
            parametros[nombre] = valor;
        }
        return parametros;
    }
    
    function reemplazarTexto(nuevotexto) {
        h1.textContent = nuevotexto;   
    }

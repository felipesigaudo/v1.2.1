
var resultado = document.getElementById("resultado"); // ??

// funcion para el boton de "Descargar en PDF"

function generatePDF() {
  const element = document.getElementById("container");

  html2pdf()
  .from(element)
  .save();
}

// funciones de calcular de las distintas cargas VSV

function calcularReaccionesVsvCpe() // Viga Simple en Voladizo Carga Puntual en Extremo
{
    var LVsvCpe = document.getElementById("LVsvCpe");
    LVsvCpe = parseFloat(LVsvCpe.value);
    var FVsvCpe = document.getElementById("FVsvCpe");
    FVsvCpe = parseFloat(FVsvCpe.value);

    // GENERACION DE TABLA DE REACCIONES
    var cuerpoTablaReaccionesVsvCpe = document.getElementById("cuerpoTablaReaccionesVsvCpe");
    cuerpoTablaReaccionesVsvCpe.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
    var tablaReaccionesVsvCpe = "<table>"; // variable para albergar la tabla

    tablaReaccionesVsvCpe += "<tr>"; // con esta etiqueta inicializo la fila
    var RBVsvCpe = FVsvCpe;
    var MBVsvCpe = (FVsvCpe * LVsvCpe);
    RBVsvCpe = RBVsvCpe.toFixed(2);
    MBVsvCpe = MBVsvCpe.toFixed(2);
    tablaReaccionesVsvCpe += "<td>" + RBVsvCpe + "</td>"; // imprimo en la casilla abajo de RB su valor
    tablaReaccionesVsvCpe += "<td>" + MBVsvCpe + "</td>"; // imprimo en la casilla abajo de MB su valor
    tablaReaccionesVsvCpe += "</tr>"; // cierro la fila
    tablaReaccionesVsvCpe += "</table>"; // cierro la tabla
    cuerpoTablaReaccionesVsvCpe.innerHTML = tablaReaccionesVsvCpe; // imprimo en html

    // GENERACION DE TABLA DE ESFUERZOS DE CORTE
    var cuerpoTablaCortesVsvCpe = document.getElementById("cuerpoTablaCortesVsvCpe");
    cuerpoTablaCortesVsvCpe.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
    var tablaCortesVsvCpe = "<table>"; // variable para albergar la tabla

    tablaCortesVsvCpe += "<tr>"; // con esta etiqueta inicializo la fila
    var VABVsvCpe = - (FVsvCpe);
    VABVsvCpe = VABVsvCpe.toFixed(2);
    tablaCortesVsvCpe += "<td>" + VABVsvCpe + "</td>"; // imprimo en la casilla abajo de VAB su valor
    tablaCortesVsvCpe += "</tr>"; // cierro la fila
    tablaCortesVsvCpe += "</table>"; // cierro la tabla
    cuerpoTablaCortesVsvCpe.innerHTML = tablaCortesVsvCpe; // imprimo en html

    // GENERACION DE TABLA DE MOMENTO MAXIMO
    var cuerpoTablaMomentoVsvCpe = document.getElementById("cuerpoTablaMomentoVsvCpe");
    cuerpoTablaMomentoVsvCpe.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
    var tablaMomentoVsvCpe = "<table>"; // variable para albergar la tabla

    tablaMomentoVsvCpe += "<tr>"; // con esta etiqueta inicializo la fila
    var MmaxVsvCpe = - (FVsvCpe * LVsvCpe);
    MmaxVsvCpe = MmaxVsvCpe.toFixed(2);
    tablaMomentoVsvCpe += "<td>" + MmaxVsvCpe + "</td>"; // imprimo en la casilla abajo de Mmax su valor
    tablaMomentoVsvCpe += "</tr>"; // cierro la fila
    tablaMomentoVsvCpe += "</table>"; // cierro la tabla
    cuerpoTablaMomentoVsvCpe.innerHTML = tablaMomentoVsvCpe; // imprimo en html

    // GENERACION DE TABLA PARA EL LISTADO DE SOLICITACIONES

    var xVsvCpe = LVsvCpe * 0.025;
    if (xVsvCpe < 0.05) { // artificio para que no quede x = 0
      xVsvCpe = 0.05;
    }
    xVsvCpe = xVsvCpe.toFixed(1); //redondeo a 1 decimal el valor que va a ir aumentando X de fila a fila
    var numFilasVsvCpe = 1 + Math.trunc(LVsvCpe/xVsvCpe); // 1 es por la fila inicial (X=0)
    var numColumnasVsvCpe = 3;
    var cuerpoTablaListaVsvCpe = document.getElementById("cuerpoTablaListaVsvCpe");

    cuerpoTablaListaVsvCpe.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
    var tabla = "<table>"; // variable para albergar la tabla

    for (var f = 0; f <= numFilasVsvCpe ; f++) { // aca hago correr las numFilas
        tabla += "<tr>"; // con esta etiqueta inicializo la fila
        for (var c = 1; c <= numColumnasVsvCpe; c++) { // aca hago correr las numColumnas
          if (c == 1) { // esta es la columna de las xi
            var xiVsvCpe = xVsvCpe * f;
            xiVsvCpe = xiVsvCpe.toFixed(1); //redondeo a 1 decimal el valor de x que adopta la fila
            if (xiVsvCpe < LVsvCpe) {
              tabla += "<td>" + xiVsvCpe + "</td>";
            } else {
              xiVsvCpe = LVsvCpe;
              f = numFilasVsvCpe;
              tabla += "<td>" + xiVsvCpe + "</td>";
            }
          }
          if (c == 2) { // esta es la columna de el corte
            if (xiVsvCpe >= 0 && xiVsvCpe <= LVsvCpe) {
              var CiVsvCpe = - (FVsvCpe);
              CiVsvCpe = CiVsvCpe.toFixed(2);
              tabla += "<td>" + CiVsvCpe + "</td>";
            }
          }
          if (c == 3) { // esta es la columna de el momento
            if (xiVsvCpe < LVsvCpe) {
              var MiVsvCpe = - (FVsvCpe * xiVsvCpe);
              MiVsvCpe = MiVsvCpe.toFixed(2);
              tabla += "<td>" + MiVsvCpe + "</td>";
            }
            if (xiVsvCpe == LVsvCpe) {
              var MiVsvCpe = - (FVsvCpe * LVsvCpe);
              MiVsvCpe = MiVsvCpe.toFixed(2);
              tabla += "<td>" + MiVsvCpe + "</td>";
            }
          }

        }

        tabla += "</tr>"; // con esta etiqueta finalizo la fila
    }
    tabla += "</table>"; // aca finalizo la tabla
    cuerpoTablaListaVsvCpe.innerHTML = tabla;

}

function calcularReaccionesVsvCpg() // Viga Simple en Voladizo Carga Puntual Genérica
{
  var LVsvCpg = document.getElementById("LVsvCpg");
  LVsvCpg = parseFloat(LVsvCpg.value);
  var aVsvCpg = document.getElementById("aVsvCpg");
  aVsvCpg = parseFloat(aVsvCpg.value);
  var FVsvCpg = document.getElementById("FVsvCpg");
  FVsvCpg = parseFloat(FVsvCpg.value);

  // GENERACION DE TABLA DE REACCIONES
  var cuerpoTablaReaccionesVsvCpg = document.getElementById("cuerpoTablaReaccionesVsvCpg");
  cuerpoTablaReaccionesVsvCpg.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
  var tablaReaccionesVsvCpg = "<table>"; // variable para albergar la tabla

  tablaReaccionesVsvCpg += "<tr>"; // con esta etiqueta inicializo la fila
  var bVsvCpg = LVsvCpg - aVsvCpg;
  var RBVsvCpg = FVsvCpg;
  var MBVsvCpg = (FVsvCpg * bVsvCpg);
  RBVsvCpg = RBVsvCpg.toFixed(2);
  MBVsvCpg = MBVsvCpg.toFixed(2);
  tablaReaccionesVsvCpg += "<td>" + RBVsvCpg + "</td>"; // imprimo en la casilla abajo de RB su valor
  tablaReaccionesVsvCpg += "<td>" + MBVsvCpg + "</td>"; // imprimo en la casilla abajo de MB su valor
  tablaReaccionesVsvCpg += "</tr>"; // cierro la fila
  tablaReaccionesVsvCpg += "</table>"; // cierro la tabla
  cuerpoTablaReaccionesVsvCpg.innerHTML = tablaReaccionesVsvCpg; // imprimo en html

  // GENERACION DE TABLA DE ESFUERZOS DE CORTE
  var cuerpoTablaCortesVsvCpg = document.getElementById("cuerpoTablaCortesVsvCpg");
  cuerpoTablaCortesVsvCpg.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
  var tablaCortesVsvCpg = "<table>"; // variable para albergar la tabla

  tablaCortesVsvCpg += "<tr>"; // con esta etiqueta inicializo la fila
  var VACVsvCpg = 0;
  var VCBVsvCpg = - (FVsvCpg);
  VACVsvCpg = VACVsvCpg.toFixed(2);
  VCBVsvCpg = VCBVsvCpg.toFixed(2);
  tablaCortesVsvCpg += "<td>" + VACVsvCpg + "</td>"; // imprimo en la casilla abajo de VAC su valor
  tablaCortesVsvCpg += "<td>" + VCBVsvCpg + "</td>"; // imprimo en la casilla abajo de VCB su valor
  tablaCortesVsvCpg += "</tr>"; // cierro la fila
  tablaCortesVsvCpg += "</table>"; // cierro la tabla
  cuerpoTablaCortesVsvCpg.innerHTML = tablaCortesVsvCpg; // imprimo en html

  // GENERACION DE TABLA DE MOMENTO MAXIMO
  var cuerpoTablaMomentoVsvCpg = document.getElementById("cuerpoTablaMomentoVsvCpg");
  cuerpoTablaMomentoVsvCpg.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
  var tablaMomentoVsvCpg = "<table>"; // variable para albergar la tabla

  tablaMomentoVsvCpg += "<tr>"; // con esta etiqueta inicializo la fila
  var MACVsvCpg = 0;
  var MBVsvCpg = - (FVsvCpg * bVsvCpg);
  MACVsvCpg = MACVsvCpg.toFixed(2);
  MBVsvCpg = MBVsvCpg.toFixed(2);
  tablaMomentoVsvCpg += "<td>" + MACVsvCpg + "</td>"; // imprimo en la casilla abajo de MAC su valor
  tablaMomentoVsvCpg += "<td>" + MBVsvCpg + "</td>"; // imprimo en la casilla abajo de MB su valor
  tablaMomentoVsvCpg += "</tr>"; // cierro la fila
  tablaMomentoVsvCpg += "</table>"; // cierro la tabla
  cuerpoTablaMomentoVsvCpg.innerHTML = tablaMomentoVsvCpg; // imprimo en html

  // GENERACION DE TABLA PARA EL LISTADO DE SOLICITACIONES

  var xVsvCpg = LVsvCpg * 0.025;
  if (xVsvCpg < 0.05) { // artificio para que no quede x = 0
    xVsvCpg = 0.05;
  }
  xVsvCpg = xVsvCpg.toFixed(1); //redondeo a 1 decimal el valor que va a ir aumentando X de fila a fila
  var numFilasVsvCpg = 1 + Math.trunc(LVsvCpg / xVsvCpg); // 1 es por la fila inicial (X=0)
  var numColumnasVsvCpg = 3;
  var cuerpoTablaListaVsvCpg = document.getElementById("cuerpoTablaListaVsvCpg");

  cuerpoTablaListaVsvCpg.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
  var tabla = "<table>"; // variable para albergar la tabla

  for (var f = 0; f <= numFilasVsvCpg; f++) { // aca hago correr las numFilas
    tabla += "<tr>"; // con esta etiqueta inicializo la fila
    for (var c = 1; c <= numColumnasVsvCpg; c++) { // aca hago correr las numColumnas
      if (c == 1) { // esta es la columna de las xi
        var xiVsvCpg = xVsvCpg * f;
        xiVsvCpg = xiVsvCpg.toFixed(1); //redondeo a 1 decimal el valor de x que adopta la fila
        if (xiVsvCpg < LVsvCpg) {
          tabla += "<td>" + xiVsvCpg + "</td>";
        } else {
          xiVsvCpg = LVsvCpg;
          f = numFilasVsvCpg;
          tabla += "<td>" + xiVsvCpg + "</td>";
        }
      }
      if (c == 2) { // esta es la columna de el corte
        if (xiVsvCpg >= 0 && xiVsvCpg < aVsvCpg) {
          var CiVsvCpg = 0;
          CiVsvCpg = CiVsvCpg.toFixed(2);
          tabla += "<td>" + CiVsvCpg + "</td>";
        }
        if (xiVsvCpg >= aVsvCpg && xiVsvCpg <= LVsvCpg) {
          var CiVsvCpg = - (FVsvCpg);
          CiVsvCpg = CiVsvCpg.toFixed(2);
          tabla += "<td>" + CiVsvCpg + "</td>";
        }
      }
      if (c == 3) { // esta es la columna de el momento
        if (xiVsvCpg >= 0 && xiVsvCpg <= aVsvCpg) {
          var MiVsvCpg = 0;
          MiVsvCpg = MiVsvCpg.toFixed(2);
          tabla += "<td>" + MiVsvCpg + "</td>";
        }
        if (xiVsvCpg > aVsvCpg && xiVsvCpg <= LVsvCpg) {
          var MiVsvCpg = - (FVsvCpg * (xiVsvCpg - aVsvCpg));
          MiVsvCpg = MiVsvCpg.toFixed(2);
          tabla += "<td>" + MiVsvCpg + "</td>";
        }
      }

    }

    tabla += "</tr>"; // con esta etiqueta finalizo la fila
  }
  tabla += "</table>"; // aca finalizo la tabla
  cuerpoTablaListaVsvCpg.innerHTML = tabla;

}

function calcularReaccionesVsvCui() // Viga Simple en Voladizo Carga Uniforme en tramo Intermedio
{
  var LVsvCui = document.getElementById("LVsvCui");
  LVsvCui = parseFloat(LVsvCui.value);
  var aVsvCui = document.getElementById("aVsvCui");
  aVsvCui = parseFloat(aVsvCui.value);
  var cVsvCui = document.getElementById("cVsvCui");
  cVsvCui = parseFloat(cVsvCui.value);
  var qVsvCui = document.getElementById("qVsvCui");
  qVsvCui = parseFloat(qVsvCui.value);

  // GENERACION DE TABLA DE REACCIONES
  var cuerpoTablaReaccionesVsvCui = document.getElementById("cuerpoTablaReaccionesVsvCui");
  cuerpoTablaReaccionesVsvCui.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
  var tablaReaccionesVsvCui = "<table>"; // variable para albergar la tabla

  tablaReaccionesVsvCui += "<tr>"; // con esta etiqueta inicializo la fila
  var bVsvCui = LVsvCui - aVsvCui;
  var RBVsvCui = qVsvCui * cVsvCui;
  var MBVsvCui = (qVsvCui * cVsvCui * bVsvCui);
  RBVsvCui = RBVsvCui.toFixed(2);
  MBVsvCui = MBVsvCui.toFixed(2);
  tablaReaccionesVsvCui += "<td>" + RBVsvCui + "</td>"; // imprimo en la casilla abajo de RB su valor
  tablaReaccionesVsvCui += "<td>" + MBVsvCui + "</td>"; // imprimo en la casilla abajo de MB su valor
  tablaReaccionesVsvCui += "</tr>"; // cierro la fila
  tablaReaccionesVsvCui += "</table>"; // cierro la tabla
  cuerpoTablaReaccionesVsvCui.innerHTML = tablaReaccionesVsvCui; // imprimo en html

  // GENERACION DE TABLA DE ESFUERZOS DE CORTE
  var cuerpoTablaCortesVsvCui = document.getElementById("cuerpoTablaCortesVsvCui");
  cuerpoTablaCortesVsvCui.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
  var tablaCortesVsvCui = "<table>"; // variable para albergar la tabla

  tablaCortesVsvCui += "<tr>"; // con esta etiqueta inicializo la fila
  var VACVsvCui = 0;
  var VDBVsvCui = - (qVsvCui * cVsvCui);
  VACVsvCui = VACVsvCui.toFixed(2);
  VDBVsvCui = VDBVsvCui.toFixed(2);
  tablaCortesVsvCui += "<td>" + VACVsvCui + "</td>"; // imprimo en la casilla abajo de VAC su valor
  tablaCortesVsvCui += "<td>" + VDBVsvCui + "</td>"; // imprimo en la casilla abajo de VDB su valor
  tablaCortesVsvCui += "</tr>"; // cierro la fila
  tablaCortesVsvCui += "</table>"; // cierro la tabla
  cuerpoTablaCortesVsvCui.innerHTML = tablaCortesVsvCui; // imprimo en html

  // GENERACION DE TABLA DE MOMENTO MAXIMO
  var cuerpoTablaMomentoVsvCui = document.getElementById("cuerpoTablaMomentoVsvCui");
  cuerpoTablaMomentoVsvCui.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
  var tablaMomentoVsvCui = "<table>"; // variable para albergar la tabla

  tablaMomentoVsvCui += "<tr>"; // con esta etiqueta inicializo la fila
  var MACVsvCui = 0;
  var MDVsvCui = - (qVsvCui * cVsvCui * (cVsvCui / 2));
  var MBVsvCui = - (qVsvCui * cVsvCui * bVsvCui);
  MACVsvCui = MACVsvCui.toFixed(2);
  MDVsvCui = MDVsvCui.toFixed(2);
  MBVsvCui = MBVsvCui.toFixed(2);
  tablaMomentoVsvCui += "<td>" + MACVsvCui + "</td>"; // imprimo en la casilla abajo de MAC su valor
  tablaMomentoVsvCui += "<td>" + MDVsvCui + "</td>"; // imprimo en la casilla abajo de MD su valor
  tablaMomentoVsvCui += "<td>" + MBVsvCui + "</td>"; // imprimo en la casilla abajo de MB su valor
  tablaMomentoVsvCui += "</tr>"; // cierro la fila
  tablaMomentoVsvCui += "</table>"; // cierro la tabla
  cuerpoTablaMomentoVsvCui.innerHTML = tablaMomentoVsvCui; // imprimo en html

  // GENERACION DE TABLA PARA EL LISTADO DE SOLICITACIONES

  var xVsvCui = LVsvCui * 0.025;
  if (xVsvCui < 0.05) { // artificio para que no quede x = 0
    xVsvCui = 0.05;
  }
  xVsvCui = xVsvCui.toFixed(1); //redondeo a 1 decimal el valor que va a ir aumentando X de fila a fila
  var numFilasVsvCui = 1 + Math.trunc(LVsvCui / xVsvCui); // 1 es por la fila inicial (X=0)
  var numColumnasVsvCui = 3;
  var cuerpoTablaListaVsvCui = document.getElementById("cuerpoTablaListaVsvCui");

  cuerpoTablaListaVsvCui.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
  var tabla = "<table>"; // variable para albergar la tabla

  for (var f = 0; f <= numFilasVsvCui; f++) { // aca hago correr las numFilas
    tabla += "<tr>"; // con esta etiqueta inicializo la fila
    for (var c = 1; c <= numColumnasVsvCui; c++) { // aca hago correr las numColumnas
      if (c == 1) { // esta es la columna de las xi
        var xiVsvCui = xVsvCui * f;
        xiVsvCui = xiVsvCui.toFixed(1); //redondeo a 1 decimal el valor de x que adopta la fila
        if (xiVsvCui < LVsvCui) {
          tabla += "<td>" + xiVsvCui + "</td>";
        } else {
          xiVsvCui = LVsvCui;
          f = numFilasVsvCui;
          tabla += "<td>" + xiVsvCui + "</td>";
        }
      }
      if (c == 2) { // esta es la columna de el corte
        if (xiVsvCui >= 0 && xiVsvCui <= (aVsvCui - (cVsvCui / 2))) {
          var CiVsvCui = 0;
          CiVsvCui = CiVsvCui.toFixed(2);
          tabla += "<td>" + CiVsvCui + "</td>";
        }
        if (xiVsvCui > (aVsvCui - (cVsvCui / 2)) && xiVsvCui < (aVsvCui + (cVsvCui / 2))) {
          var CiVsvCui = - (qVsvCui * (xiVsvCui - aVsvCui + (cVsvCui / 2)));
          CiVsvCui = CiVsvCui.toFixed(2);
          tabla += "<td>" + CiVsvCui + "</td>";
        }
        if (xiVsvCui >= (aVsvCui + (cVsvCui / 2))) {
          var CiVsvCui = - (qVsvCui * cVsvCui);
          CiVsvCui = CiVsvCui.toFixed(2);
          tabla += "<td>" + CiVsvCui + "</td>";
        }
      }
      if (c == 3) { // esta es la columna de el momento
        if (xiVsvCui >= 0 && xiVsvCui <= (aVsvCui - (cVsvCui / 2))) {
          var MiVsvCui = 0;
          MiVsvCui = MiVsvCui.toFixed(2);
          tabla += "<td>" + MiVsvCui + "</td>";
        }
        if (xiVsvCui > (aVsvCui - (cVsvCui / 2)) && xiVsvCui < (aVsvCui + (cVsvCui / 2))) {
          var MiVsvCui = - ((qVsvCui / 2) * Math.pow(xiVsvCui - aVsvCui + (cVsvCui / 2), 2));
          MiVsvCui = MiVsvCui.toFixed(2);
          tabla += "<td>" + MiVsvCui + "</td>";
        }
        if (xiVsvCui >= (aVsvCui + (cVsvCui / 2))) {
          var MiVsvCui = - (qVsvCui * cVsvCui * (xiVsvCui - aVsvCui));
          MiVsvCui = MiVsvCui.toFixed(2);
          tabla += "<td>" + MiVsvCui + "</td>";
        }
      }
    }

    tabla += "</tr>"; // con esta etiqueta finalizo la fila
  }
  tabla += "</table>"; // aca finalizo la tabla
  cuerpoTablaListaVsvCui.innerHTML = tabla;

}

function calcularReaccionesVsvCuv() // Viga Simple en Voladizo Carga Uniforme en todo el Vano
{
  var LVsvCuv = document.getElementById("LVsvCuv");
  LVsvCuv = parseFloat(LVsvCuv.value);
  var qVsvCuv = document.getElementById("qVsvCuv");
  qVsvCuv = parseFloat(qVsvCuv.value);

  // GENERACION DE TABLA DE REACCIONES
  var cuerpoTablaReaccionesVsvCuv = document.getElementById("cuerpoTablaReaccionesVsvCuv");
  cuerpoTablaReaccionesVsvCuv.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
  var tablaReaccionesVsvCuv = "<table>"; // variable para albergar la tabla

  tablaReaccionesVsvCuv += "<tr>"; // con esta etiqueta inicializo la fila
  var RBVsvCuv = qVsvCuv * LVsvCuv;
  var MBVsvCuv = (qVsvCuv * Math.pow(LVsvCuv, 2) / 2);
  RBVsvCuv = RBVsvCuv.toFixed(2);
  MBVsvCuv = MBVsvCuv.toFixed(2);
  tablaReaccionesVsvCuv += "<td>" + RBVsvCuv + "</td>"; // imprimo en la casilla abajo de RB su valor
  tablaReaccionesVsvCuv += "<td>" + MBVsvCuv + "</td>"; // imprimo en la casilla abajo de MB su valor
  tablaReaccionesVsvCuv += "</tr>"; // cierro la fila
  tablaReaccionesVsvCuv += "</table>"; // cierro la tabla
  cuerpoTablaReaccionesVsvCuv.innerHTML = tablaReaccionesVsvCuv; // imprimo en html

  // GENERACION DE TABLA DE ESFUERZOS DE CORTE
  var cuerpoTablaCortesVsvCuv = document.getElementById("cuerpoTablaCortesVsvCuv");
  cuerpoTablaCortesVsvCuv.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
  var tablaCortesVsvCuv = "<table>"; // variable para albergar la tabla

  tablaCortesVsvCuv += "<tr>"; // con esta etiqueta inicializo la fila
  var VAVsvCuv = 0;
  var VBVsvCuv = - (qVsvCuv * LVsvCuv);
  VAVsvCuv = VAVsvCuv.toFixed(2);
  VBVsvCuv = VBVsvCuv.toFixed(2);
  tablaCortesVsvCuv += "<td>" + VAVsvCuv + "</td>"; // imprimo en la casilla abajo de VA su valor
  tablaCortesVsvCuv += "<td>" + VBVsvCuv + "</td>"; // imprimo en la casilla abajo de VB su valor
  tablaCortesVsvCuv += "</tr>"; // cierro la fila
  tablaCortesVsvCuv += "</table>"; // cierro la tabla
  cuerpoTablaCortesVsvCuv.innerHTML = tablaCortesVsvCuv; // imprimo en html

  // GENERACION DE TABLA DE MOMENTO MAXIMO
  var cuerpoTablaMomentoVsvCuv = document.getElementById("cuerpoTablaMomentoVsvCuv");
  cuerpoTablaMomentoVsvCuv.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
  var tablaMomentoVsvCuv = "<table>"; // variable para albergar la tabla

  tablaMomentoVsvCuv += "<tr>"; // con esta etiqueta inicializo la fila
  var MAVsvCuv = 0;
  var MBVsvCuv = - (qVsvCuv * Math.pow(LVsvCuv, 2) / 2);
  MAVsvCuv = MAVsvCuv.toFixed(2);
  MBVsvCuv = MBVsvCuv.toFixed(2);
  tablaMomentoVsvCuv += "<td>" + MAVsvCuv + "</td>"; // imprimo en la casilla abajo de MA su valor
  tablaMomentoVsvCuv += "<td>" + MBVsvCuv + "</td>"; // imprimo en la casilla abajo de MB su valor
  tablaMomentoVsvCuv += "</tr>"; // cierro la fila
  tablaMomentoVsvCuv += "</table>"; // cierro la tabla
  cuerpoTablaMomentoVsvCuv.innerHTML = tablaMomentoVsvCuv; // imprimo en html

  // GENERACION DE TABLA PARA EL LISTADO DE SOLICITACIONES

  var xVsvCuv = LVsvCuv * 0.025;
  if (xVsvCuv < 0.05) { // artificio para que no quede x = 0
    xVsvCuv = 0.05;
  }
  xVsvCuv = xVsvCuv.toFixed(1); //redondeo a 1 decimal el valor que va a ir aumentando X de fila a fila
  var numFilasVsvCuv = 1 + Math.trunc(LVsvCuv/xVsvCuv); // 1 es por la fila inicial (X=0)
  var numColumnasVsvCuv = 3;
  var cuerpoTablaListaVsvCuv = document.getElementById("cuerpoTablaListaVsvCuv");

  cuerpoTablaListaVsvCuv.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
  var tabla = "<table>"; // variable para albergar la tabla

  for (var f = 0; f <= numFilasVsvCuv ; f++) { // aca hago correr las numFilas
      tabla += "<tr>"; // con esta etiqueta inicializo la fila
      for (var c = 1; c <= numColumnasVsvCuv; c++) { // aca hago correr las numColumnas
        if (c == 1) { // esta es la columna de las xi
          var xiVsvCuv = xVsvCuv * f;
          xiVsvCuv = xiVsvCuv.toFixed(1); //redondeo a 1 decimal el valor de x que adopta la fila
          if (xiVsvCuv < LVsvCuv) {
            tabla += "<td>" + xiVsvCuv + "</td>";
          } else {
            xiVsvCuv = LVsvCuv;
            f = numFilasVsvCuv;
            tabla += "<td>" + xiVsvCuv + "</td>";
          }
        }
        if (c == 2) { // esta es la columna de el corte
          if (xiVsvCuv >= 0 && xiVsvCuv <= LVsvCuv) {
            var CiVsvCuv = - (qVsvCuv * xiVsvCuv) ;
            CiVsvCuv = CiVsvCuv.toFixed(2);
            tabla += "<td>" + CiVsvCuv + "</td>";
          }
        }
        if (c == 3) { // esta es la columna de el momento
            var MiVsvCuv = - (qVsvCuv * Math.pow(xiVsvCuv, 2) / 2);
            MiVsvCuv = MiVsvCuv.toFixed(2);
            tabla += "<td>" + MiVsvCuv + "</td>";
        }
      }

      tabla += "</tr>"; // con esta etiqueta finalizo la fila
  }
  tabla += "</table>"; // aca finalizo la tabla
  cuerpoTablaListaVsvCuv.innerHTML = tabla;

}

function calcularReaccionesVsvMpe() // Viga Simple en Voladizo Momento Puntual en Extremo
{
  var LVsvMpe = document.getElementById("LVsvMpe");
  LVsvMpe = parseFloat(LVsvMpe.value);
  var MVsvMpe = document.getElementById("MVsvMpe");
  MVsvMpe = parseFloat(MVsvMpe.value);

  // GENERACION DE TABLA DE REACCIONES
  var cuerpoTablaReaccionesVsvMpe = document.getElementById("cuerpoTablaReaccionesVsvMpe");
  cuerpoTablaReaccionesVsvMpe.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
  var tablaReaccionesVsvMpe = "<table>"; // variable para albergar la tabla

  tablaReaccionesVsvMpe += "<tr>"; // con esta etiqueta inicializo la fila
  var RBVsvMpe = 0;
  var MBVsvMpe = (MVsvMpe);
  RBVsvMpe = RBVsvMpe.toFixed(2);
  MBVsvMpe = MBVsvMpe.toFixed(2);
  tablaReaccionesVsvMpe += "<td>" + RBVsvMpe + "</td>"; // imprimo en la casilla abajo de RB su valor
  tablaReaccionesVsvMpe += "<td>" + MBVsvMpe + "</td>"; // imprimo en la casilla abajo de MB su valor
  tablaReaccionesVsvMpe += "</tr>"; // cierro la fila
  tablaReaccionesVsvMpe += "</table>"; // cierro la tabla
  cuerpoTablaReaccionesVsvMpe.innerHTML = tablaReaccionesVsvMpe; // imprimo en html

  // GENERACION DE TABLA DE ESFUERZOS DE CORTE
  var cuerpoTablaCortesVsvMpe = document.getElementById("cuerpoTablaCortesVsvMpe");
  cuerpoTablaCortesVsvMpe.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
  var tablaCortesVsvMpe = "<table>"; // variable para albergar la tabla

  tablaCortesVsvMpe += "<tr>"; // con esta etiqueta inicializo la fila
  var VABVsvMpe = 0;
  VABVsvMpe = VABVsvMpe.toFixed(2);
  tablaCortesVsvMpe += "<td>" + VABVsvMpe + "</td>"; // imprimo en la casilla abajo de VAB su valor
  tablaCortesVsvMpe += "</tr>"; // cierro la fila
  tablaCortesVsvMpe += "</table>"; // cierro la tabla
  cuerpoTablaCortesVsvMpe.innerHTML = tablaCortesVsvMpe; // imprimo en html

  // GENERACION DE TABLA DE MOMENTO MAXIMO
  var cuerpoTablaMomentoVsvMpe = document.getElementById("cuerpoTablaMomentoVsvMpe");
  cuerpoTablaMomentoVsvMpe.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
  var tablaMomentoVsvMpe = "<table>"; // variable para albergar la tabla

  tablaMomentoVsvMpe += "<tr>"; // con esta etiqueta inicializo la fila
  var MABVsvMpe = - (MVsvMpe);
  MABVsvMpe = MABVsvMpe.toFixed(2);
  tablaMomentoVsvMpe += "<td>" + MABVsvMpe + "</td>"; // imprimo en la casilla abajo de MAB su valor
  tablaMomentoVsvMpe += "</tr>"; // cierro la fila
  tablaMomentoVsvMpe += "</table>"; // cierro la tabla
  cuerpoTablaMomentoVsvMpe.innerHTML = tablaMomentoVsvMpe; // imprimo en html

  // GENERACION DE TABLA PARA EL LISTADO DE SOLICITACIONES

  var xVsvMpe = LVsvMpe * 0.025;
  if (xVsvMpe < 0.05) { // artificio para que no quede x = 0
    xVsvMpe = 0.05;
  }
  xVsvMpe = xVsvMpe.toFixed(1); //redondeo a 1 decimal el valor que va a ir aumentando X de fila a fila
  var numFilasVsvMpe = 1 + Math.trunc(LVsvMpe/xVsvMpe); // 1 es por la fila inicial (X=0)
  var numColumnasVsvMpe = 3;
  var cuerpoTablaListaVsvMpe = document.getElementById("cuerpoTablaListaVsvMpe");

  cuerpoTablaListaVsvMpe.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
  var tabla = "<table>"; // variable para albergar la tabla

  for (var f = 0; f <= numFilasVsvMpe ; f++) { // aca hago correr las numFilas
      tabla += "<tr>"; // con esta etiqueta inicializo la fila
      for (var c = 1; c <= numColumnasVsvMpe; c++) { // aca hago correr las numColumnas
        if (c == 1) { // esta es la columna de las xi
          var xiVsvMpe = xVsvMpe * f;
          xiVsvMpe = xiVsvMpe.toFixed(1); //redondeo a 1 decimal el valor de x que adopta la fila
          if (xiVsvMpe < LVsvMpe) {
            tabla += "<td>" + xiVsvMpe + "</td>";
          } else {
            xiVsvMpe = LVsvMpe;
            f = numFilasVsvMpe;
            tabla += "<td>" + xiVsvMpe + "</td>";
          }
        }
        if (c == 2) { // esta es la columna de el corte
          if (xiVsvMpe >= 0 && xiVsvMpe <= LVsvMpe) {
            var CiVsvMpe = 0;
            CiVsvMpe = CiVsvMpe.toFixed(2);
            tabla += "<td>" + CiVsvMpe + "</td>";
          }
        }
        if (c == 3) { // esta es la columna de el momento
          if (xiVsvMpe >= 0 && xiVsvMpe <= LVsvMpe) {
            var MiVsvMpe = - (MVsvMpe) ;
            MiVsvMpe = MiVsvMpe.toFixed(2);
            tabla += "<td>" + MiVsvMpe + "</td>";
          }
        }
      }

      tabla += "</tr>"; // con esta etiqueta finalizo la fila
  }
  tabla += "</table>"; // aca finalizo la tabla
  cuerpoTablaListaVsvMpe.innerHTML = tabla;

}

function calcularReaccionesVsvMpi() // Viga Simple en Voladizo Momento Puntual en Intermedio
{
  var LVsvMpi = document.getElementById("LVsvMpi");
  LVsvMpi = parseFloat(LVsvMpi.value);
  var aVsvMpi = document.getElementById("aVsvMpi");
  aVsvMpi = parseFloat(aVsvMpi.value);
  var MVsvMpi = document.getElementById("MVsvMpi");
  MVsvMpi = parseFloat(MVsvMpi.value);

  // GENERACION DE TABLA DE REACCIONES
  var cuerpoTablaReaccionesVsvMpi = document.getElementById("cuerpoTablaReaccionesVsvMpi");
  cuerpoTablaReaccionesVsvMpi.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
  var tablaReaccionesVsvMpi = "<table>"; // variable para albergar la tabla

  tablaReaccionesVsvMpi += "<tr>"; // con esta etiqueta inicializo la fila
  var RBVsvMpi = 0;
  var MBVsvMpi = (MVsvMpi);
  RBVsvMpi = RBVsvMpi.toFixed(2);
  MBVsvMpi = MBVsvMpi.toFixed(2);
  tablaReaccionesVsvMpi += "<td>" + RBVsvMpi + "</td>"; // imprimo en la casilla abajo de RB su valor
  tablaReaccionesVsvMpi += "<td>" + MBVsvMpi + "</td>"; // imprimo en la casilla abajo de MB su valor
  tablaReaccionesVsvMpi += "</tr>"; // cierro la fila
  tablaReaccionesVsvMpi += "</table>"; // cierro la tabla
  cuerpoTablaReaccionesVsvMpi.innerHTML = tablaReaccionesVsvMpi; // imprimo en html

  // GENERACION DE TABLA DE ESFUERZOS DE CORTE
  var cuerpoTablaCortesVsvMpi = document.getElementById("cuerpoTablaCortesVsvMpi");
  cuerpoTablaCortesVsvMpi.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
  var tablaCortesVsvMpi = "<table>"; // variable para albergar la tabla

  tablaCortesVsvMpi += "<tr>"; // con esta etiqueta inicializo la fila
  var VABVsvMpi = 0;
  VABVsvMpi = VABVsvMpi.toFixed(2);
  tablaCortesVsvMpi += "<td>" + VABVsvMpi + "</td>"; // imprimo en la casilla abajo de VAB su valor
  tablaCortesVsvMpi += "</tr>"; // cierro la fila
  tablaCortesVsvMpi += "</table>"; // cierro la tabla
  cuerpoTablaCortesVsvMpi.innerHTML = tablaCortesVsvMpi; // imprimo en html

  // GENERACION DE TABLA DE MOMENTO MAXIMO
  var cuerpoTablaMomentoVsvMpi = document.getElementById("cuerpoTablaMomentoVsvMpi");
  cuerpoTablaMomentoVsvMpi.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
  var tablaMomentoVsvMpi = "<table>"; // variable para albergar la tabla

  tablaMomentoVsvMpi += "<tr>"; // con esta etiqueta inicializo la fila
  var MACVsvMpi = 0;
  var MCBVsvMpi = - (MVsvMpi);
  MACVsvMpi = MACVsvMpi.toFixed(2);
  MCBVsvMpi = MCBVsvMpi.toFixed(2);
  tablaMomentoVsvMpi += "<td>" + MACVsvMpi + "</td>"; // imprimo en la casilla abajo de MAC su valor
  tablaMomentoVsvMpi += "<td>" + MCBVsvMpi + "</td>"; // imprimo en la casilla abajo de MCB su valor
  tablaMomentoVsvMpi += "</tr>"; // cierro la fila
  tablaMomentoVsvMpi += "</table>"; // cierro la tabla
  cuerpoTablaMomentoVsvMpi.innerHTML = tablaMomentoVsvMpi; // imprimo en html

  // GENERACION DE TABLA PARA EL LISTADO DE SOLICITACIONES

  var xVsvMpi = LVsvMpi * 0.025;
  if (xVsvMpi < 0.05) { // artificio para que no quede x = 0
    xVsvMpi = 0.05;
  }
  xVsvMpi = xVsvMpi.toFixed(1); //redondeo a 1 decimal el valor que va a ir aumentando X de fila a fila
  var numFilasVsvMpi = 1 + Math.trunc(LVsvMpi/xVsvMpi); // 1 es por la fila inicial (X=0)
  var numColumnasVsvMpi = 3;
  var cuerpoTablaListaVsvMpi = document.getElementById("cuerpoTablaListaVsvMpi");

  cuerpoTablaListaVsvMpi.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
  var tabla = "<table>"; // variable para albergar la tabla

  for (var f = 0; f <= numFilasVsvMpi ; f++) { // aca hago correr las numFilas
      tabla += "<tr>"; // con esta etiqueta inicializo la fila
      for (var c = 1; c <= numColumnasVsvMpi; c++) { // aca hago correr las numColumnas
        if (c == 1) { // esta es la columna de las xi
          var xiVsvMpi = xVsvMpi * f;
          xiVsvMpi = xiVsvMpi.toFixed(1); //redondeo a 1 decimal el valor de x que adopta la fila
          if (xiVsvMpi < LVsvMpi) {
            tabla += "<td>" + xiVsvMpi + "</td>";
          } else {
            xiVsvMpi = LVsvMpi;
            f = numFilasVsvMpi;
            tabla += "<td>" + xiVsvMpi + "</td>";
          }
        }
        if (c == 2) { // esta es la columna de el corte
          if (xiVsvMpi >= 0 && xiVsvMpi <= LVsvMpi) {
            var CiVsvMpi = 0;
            CiVsvMpi = CiVsvMpi.toFixed(2);
            tabla += "<td>" + CiVsvMpi + "</td>";
          }
        }
        if (c == 3) { // esta es la columna de el momento
          if (xiVsvMpi >= 0 && xiVsvMpi < aVsvMpi) {
            var MiVsvMpi = 0;
            MiVsvMpi = MiVsvMpi.toFixed(2);
            tabla += "<td>" + MiVsvMpi + "</td>";
          }
          if (xiVsvMpi >= aVsvMpi && xiVsvMpi <= LVsvMpi) {
            var MiVsvMpi = - (MVsvMpi);
            MiVsvMpi = MiVsvMpi.toFixed(2);
            tabla += "<td>" + MiVsvMpi + "</td>";
          }
        }
      }

      tabla += "</tr>"; // con esta etiqueta finalizo la fila
  }
  tabla += "</table>"; // aca finalizo la tabla
  cuerpoTablaListaVsvMpi.innerHTML = tabla;

}

// botones de calcular de las distintas cargas VSV

var calcularVsvCpe = document.getElementById("calcularVsvCpe");
calcularVsvCpe.addEventListener ("click", calcularReaccionesVsvCpe);

var calcularVsvCpg = document.getElementById("calcularVsvCpg");
calcularVsvCpg.addEventListener ("click", calcularReaccionesVsvCpg);

var calcularVsvCui = document.getElementById("calcularVsvCui");
calcularVsvCui.addEventListener ("click", calcularReaccionesVsvCui);

var calcularVsvCuv = document.getElementById("calcularVsvCuv");
calcularVsvCuv.addEventListener ("click", calcularReaccionesVsvCuv);

var calcularVsvMpe = document.getElementById("calcularVsvMpe");
calcularVsvMpe.addEventListener ("click", calcularReaccionesVsvMpe);

var calcularVsvMpi = document.getElementById("calcularVsvMpi");
calcularVsvMpi.addEventListener ("click", calcularReaccionesVsvMpi);

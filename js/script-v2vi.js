
var resultado = document.getElementById("resultado"); // ??

// funcion para el boton de "Descargar en PDF"

function generatePDF() {
  const element = document.getElementById("container");

  html2pdf()
  .from(element)
  .save();
}

// funciones de calcular de las distintas cargas V2VI

function calcularReaccionesV2viCp1v() // Viga de 2 Vanos Iguales Carga Puntual en el 1er vano
{
    var LV2viCp1v = document.getElementById("LV2viCp1v");
    LV2viCp1v = parseFloat(LV2viCp1v.value);
    var aV2viCp1v = document.getElementById("aV2viCp1v");
    aV2viCp1v = parseFloat(aV2viCp1v.value);
    var FV2viCp1v = document.getElementById("FV2viCp1v");
    FV2viCp1v = parseFloat(FV2viCp1v.value);

    // GENERACION DE TABLA DE REACCIONES
    var cuerpoTablaReaccionesV2viCp1v = document.getElementById("cuerpoTablaReaccionesV2viCp1v");
    cuerpoTablaReaccionesV2viCp1v.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
    var tablaReaccionesV2viCp1v = "<table>"; // variable para albergar la tabla

    tablaReaccionesV2viCp1v += "<tr>"; // con esta etiqueta inicializo la fila
    var RAV2viCp1v = FV2viCp1v * ((4 * Math.pow(LV2viCp1v, 3)) - (5 * aV2viCp1v * Math.pow(LV2viCp1v, 2)) + Math.pow(aV2viCp1v, 3)) / (4 * Math.pow(LV2viCp1v , 3));
    var RBV2viCp1v = FV2viCp1v * aV2viCp1v * ((3 * Math.pow(LV2viCp1v, 2)) - Math.pow(aV2viCp1v, 2)) / (2 * Math.pow(LV2viCp1v, 3));
    var RCV2viCp1v = - (FV2viCp1v * aV2viCp1v * ((Math.pow(LV2viCp1v, 2)) - Math.pow(aV2viCp1v, 2)) / (4 * Math.pow(LV2viCp1v, 3)));
    var MABCV2viCp1v = 0;
    RAV2viCp1v = RAV2viCp1v.toFixed(2);
    RBV2viCp1v = RBV2viCp1v.toFixed(2);
    RCV2viCp1v = RCV2viCp1v.toFixed(2);
    MABCV2viCp1v = MABCV2viCp1v.toFixed(2);
    tablaReaccionesV2viCp1v += "<td>" + RAV2viCp1v + "</td>"; // imprimo en la casilla abajo de RA su valor
    tablaReaccionesV2viCp1v += "<td>" + RBV2viCp1v + "</td>"; // imprimo en la casilla abajo de RB su valor
    tablaReaccionesV2viCp1v += "<td>" + RCV2viCp1v + "</td>"; // imprimo en la casilla abajo de RC su valor
    tablaReaccionesV2viCp1v += "<td>" + MABCV2viCp1v + "</td>"; // imprimo en la casilla abajo de MABC su valor
    tablaReaccionesV2viCp1v += "</tr>"; // cierro la fila
    tablaReaccionesV2viCp1v += "</table>"; // cierro la tabla
    cuerpoTablaReaccionesV2viCp1v.innerHTML = tablaReaccionesV2viCp1v; // imprimo en html

    // GENERACION DE TABLA DE ESFUERZOS DE CORTE
    var cuerpoTablaCortesV2viCp1v = document.getElementById("cuerpoTablaCortesV2viCp1v");
    cuerpoTablaCortesV2viCp1v.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
    var tablaCortesV2viCp1v = "<table>"; // variable para albergar la tabla

    tablaCortesV2viCp1v += "<tr>"; // con esta etiqueta inicializo la fila
    var VADV2viCp1v = FV2viCp1v * ((4 * Math.pow(LV2viCp1v, 3)) - (5 * aV2viCp1v * Math.pow(LV2viCp1v, 2)) + Math.pow(aV2viCp1v, 3)) / (4 * Math.pow(LV2viCp1v, 3));
    var VDBV2viCp1v = FV2viCp1v * aV2viCp1v * (Math.pow(aV2viCp1v, 2) - (5 * Math.pow(LV2viCp1v, 2))) / (4 * Math.pow(LV2viCp1v, 3));
    var VBCV2viCp1v = FV2viCp1v * aV2viCp1v * ((Math.pow(LV2viCp1v, 2)) - Math.pow(aV2viCp1v, 2)) / (4 * Math.pow(LV2viCp1v, 3));
    VADV2viCp1v = VADV2viCp1v.toFixed(2);
    VDBV2viCp1v = VDBV2viCp1v.toFixed(2);
    VBCV2viCp1v = VBCV2viCp1v.toFixed(2);
    tablaCortesV2viCp1v += "<td>" + VADV2viCp1v + "</td>"; // imprimo en la casilla abajo de VAD su valor
    tablaCortesV2viCp1v += "<td>" + VDBV2viCp1v + "</td>"; // imprimo en la casilla abajo de VAB su valor
    tablaCortesV2viCp1v += "<td>" + VBCV2viCp1v + "</td>"; // imprimo en la casilla abajo de VAB su valor
    tablaCortesV2viCp1v += "</tr>"; // cierro la fila
    tablaCortesV2viCp1v += "</table>"; // cierro la tabla
    cuerpoTablaCortesV2viCp1v.innerHTML = tablaCortesV2viCp1v; // imprimo en html

    // GENERACION DE TABLA DE MOMENTO MAXIMO
    var cuerpoTablaMomentoV2viCp1v = document.getElementById("cuerpoTablaMomentoV2viCp1v");
    cuerpoTablaMomentoV2viCp1v.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
    var tablaMomentoV2viCp1v = "<table>"; // variable para albergar la tabla

    tablaMomentoV2viCp1v += "<tr>"; // con esta etiqueta inicializo la fila
    var MAV2viCp1v = 0;
    var MDV2viCp1v = FV2viCp1v * aV2viCp1v * ((4 * Math.pow(LV2viCp1v, 3)) - (5 * aV2viCp1v * Math.pow(LV2viCp1v, 2)) + Math.pow(aV2viCp1v, 3)) / (4 * Math.pow(LV2viCp1v, 3));
    var MBV2viCp1v = - (FV2viCp1v * aV2viCp1v * (Math.pow(LV2viCp1v, 2) - Math.pow(aV2viCp1v, 2)) / (4 * Math.pow(LV2viCp1v, 2)));
    var MCV2viCp1v = 0;
    MAV2viCp1v = MAV2viCp1v.toFixed(2);
    MDV2viCp1v = MDV2viCp1v.toFixed(2);
    MBV2viCp1v = MBV2viCp1v.toFixed(2);
    MCV2viCp1v = MCV2viCp1v.toFixed(2);
    tablaMomentoV2viCp1v += "<td>" + MAV2viCp1v + "</td>"; // imprimo en la casilla abajo de MA su valor
    tablaMomentoV2viCp1v += "<td>" + MDV2viCp1v + "</td>"; // imprimo en la casilla abajo de MD su valor
    tablaMomentoV2viCp1v += "<td>" + MBV2viCp1v + "</td>"; // imprimo en la casilla abajo de MB su valor
    tablaMomentoV2viCp1v += "<td>" + MCV2viCp1v + "</td>"; // imprimo en la casilla abajo de MC su valor
    tablaMomentoV2viCp1v += "</tr>"; // cierro la fila
    tablaMomentoV2viCp1v += "</table>"; // cierro la tabla
    cuerpoTablaMomentoV2viCp1v.innerHTML = tablaMomentoV2viCp1v; // imprimo en html

    // GENERACION DE TABLA PARA EL LISTADO DE SOLICITACIONES

    var xV2viCp1v = LV2viCp1v * 0.025;
    if (xV2viCp1v < 0.05) { // artificio para que no quede x = 0
      xV2viCp1v = 0.05;
    }
    xV2viCp1v = xV2viCp1v.toFixed(1); //redondeo a 1 decimal el valor que va a ir aumentando X de fila a fila
    var numFilasV2viCp1v = 1 + Math.trunc((2 * LV2viCp1v)/xV2viCp1v); // 1 es por la fila inicial (X=0)
    var numColumnasV2viCp1v = 3;
    var cuerpoTablaListaV2viCp1v = document.getElementById("cuerpoTablaListaV2viCp1v");

    cuerpoTablaListaV2viCp1v.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
    var tabla = "<table>"; // variable para albergar la tabla

    for (var f = 0; f <= numFilasV2viCp1v ; f++) { // aca hago correr las numFilas
        tabla += "<tr>"; // con esta etiqueta inicializo la fila
        for (var c = 1; c <= numColumnasV2viCp1v; c++) { // aca hago correr las numColumnas
          if (c == 1) { // esta es la columna de las xi
            var xiV2viCp1v = xV2viCp1v * f;
            xiV2viCp1v = xiV2viCp1v.toFixed(1); //redondeo a 1 decimal el valor de x que adopta la fila
            if (xiV2viCp1v < (2 * LV2viCp1v)) {
              tabla += "<td>" + xiV2viCp1v + "</td>";
            } else {
              xiV2viCp1v = 2 * LV2viCp1v;
              f = numFilasV2viCp1v;
              tabla += "<td>" + xiV2viCp1v + "</td>";
            }
          }
          if (c == 2) { // esta es la columna de el corte
            if (xiV2viCp1v >= 0 && xiV2viCp1v < aV2viCp1v) {
              var CiV2viCp1v = FV2viCp1v * ((4 * Math.pow(LV2viCp1v, 3)) - (5 * aV2viCp1v * Math.pow(LV2viCp1v, 2)) + Math.pow(aV2viCp1v, 3)) / (4 * Math.pow(LV2viCp1v, 3));
              CiV2viCp1v = CiV2viCp1v.toFixed(2);
              tabla += "<td>" + CiV2viCp1v + "</td>";
            }
            if (xiV2viCp1v >= aV2viCp1v && xiV2viCp1v < LV2viCp1v) {
              var CiV2viCp1v = FV2viCp1v * aV2viCp1v * (Math.pow(aV2viCp1v, 2) - (5 * Math.pow(LV2viCp1v, 2))) / (4 * Math.pow(LV2viCp1v, 3));
              CiV2viCp1v = CiV2viCp1v.toFixed(2);
              tabla += "<td>" + CiV2viCp1v + "</td>";
            }
            if (xiV2viCp1v >= LV2viCp1v && xiV2viCp1v <= (2 * LV2viCp1v)) {
              var CiV2viCp1v = FV2viCp1v * aV2viCp1v * ((Math.pow(LV2viCp1v, 2)) - Math.pow(aV2viCp1v, 2)) / (4 * Math.pow(LV2viCp1v, 3));
              CiV2viCp1v = CiV2viCp1v.toFixed(2);
              tabla += "<td>" + CiV2viCp1v + "</td>";
            }
          }
          if (c == 3) { // esta es la columna de el momento
            if (xiV2viCp1v >= 0 && xiV2viCp1v < aV2viCp1v) {
              var MiV2viCp1v = FV2viCp1v * xiV2viCp1v * ((4 * Math.pow(LV2viCp1v, 3)) - (5 * aV2viCp1v * Math.pow(LV2viCp1v, 2)) + Math.pow(aV2viCp1v, 3)) / (4 * Math.pow(LV2viCp1v, 3));
              MiV2viCp1v = MiV2viCp1v.toFixed(2);
              tabla += "<td>" + MiV2viCp1v + "</td>";
            }
            if (xiV2viCp1v >= aV2viCp1v && xiV2viCp1v < LV2viCp1v) {
              var MiV2viCp1v = (FV2viCp1v * aV2viCp1v * xiV2viCp1v * ((Math.pow(aV2viCp1v, 2)) - (5 * Math.pow(LV2viCp1v, 2))) / (4 * Math.pow(LV2viCp1v, 3))) + (FV2viCp1v * aV2viCp1v);
              MiV2viCp1v = MiV2viCp1v.toFixed(2);
              tabla += "<td>" + MiV2viCp1v + "</td>";
            }
            if (xiV2viCp1v >= LV2viCp1v && xiV2viCp1v <= (2 * LV2viCp1v)) {
              var MiV2viCp1v = FV2viCp1v * aV2viCp1v * ((Math.pow(LV2viCp1v, 2)) - Math.pow(aV2viCp1v, 2)) * (xiV2viCp1v - (2 * LV2viCp1v)) / (4 * Math.pow(LV2viCp1v, 3));
              MiV2viCp1v = MiV2viCp1v.toFixed(2);
              tabla += "<td>" + MiV2viCp1v + "</td>";
            }
          }

        }

        tabla += "</tr>"; // con esta etiqueta finalizo la fila
    }
    tabla += "</table>"; // aca finalizo la tabla
    cuerpoTablaListaV2viCp1v.innerHTML = tabla;

}

function calcularReaccionesV2viCu1v() // Viga de 2 Vanos Iguales Carga Uniforme en el 1er vano
{
  var LV2viCu1v = document.getElementById("LV2viCu1v");
  LV2viCu1v = parseFloat(LV2viCu1v.value);
  var qV2viCu1v = document.getElementById("qV2viCu1v");
  qV2viCu1v = parseFloat(qV2viCu1v.value);
  
  // GENERACION DE TABLA DE REACCIONES
  var cuerpoTablaReaccionesV2viCu1v = document.getElementById("cuerpoTablaReaccionesV2viCu1v");
  cuerpoTablaReaccionesV2viCu1v.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
  var tablaReaccionesV2viCu1v = "<table>"; // variable para albergar la tabla

  tablaReaccionesV2viCu1v += "<tr>"; // con esta etiqueta inicializo la fila
  var RAV2viCu1v = 7 * qV2viCu1v * LV2viCu1v / 16;
  var RBV2viCu1v = 5 * qV2viCu1v * LV2viCu1v / 8;
  var RCV2viCu1v = - (qV2viCu1v * LV2viCu1v / 16);
  var MABCV2viCu1v = 0;
  RAV2viCu1v = RAV2viCu1v.toFixed(2);
  RBV2viCu1v = RBV2viCu1v.toFixed(2);
  RCV2viCu1v = RCV2viCu1v.toFixed(2);
  MABCV2viCu1v = MABCV2viCu1v.toFixed(2);
  tablaReaccionesV2viCu1v += "<td>" + RAV2viCu1v + "</td>"; // imprimo en la casilla abajo de RA su valor
  tablaReaccionesV2viCu1v += "<td>" + RBV2viCu1v + "</td>"; // imprimo en la casilla abajo de RB su valor
  tablaReaccionesV2viCu1v += "<td>" + RCV2viCu1v + "</td>"; // imprimo en la casilla abajo de RC su valor
  tablaReaccionesV2viCu1v += "<td>" + MABCV2viCu1v + "</td>"; // imprimo en la casilla abajo de MABC su valor
  tablaReaccionesV2viCu1v += "</tr>"; // cierro la fila
  tablaReaccionesV2viCu1v += "</table>"; // cierro la tabla
  cuerpoTablaReaccionesV2viCu1v.innerHTML = tablaReaccionesV2viCu1v; // imprimo en html

  // GENERACION DE TABLA DE ESFUERZOS DE CORTE
  var cuerpoTablaCortesV2viCu1v = document.getElementById("cuerpoTablaCortesV2viCu1v");
  cuerpoTablaCortesV2viCu1v.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
  var tablaCortesV2viCu1v = "<table>"; // variable para albergar la tabla

  tablaCortesV2viCu1v += "<tr>"; // con esta etiqueta inicializo la fila
  var VAV2viCu1v = qV2viCu1v * ((7 * LV2viCu1v) - (16 * 0)) / 16;
  var VBizqV2viCu1v = - (9 * qV2viCu1v * LV2viCu1v) / 16;
  var VBderCV2viCu1v = qV2viCu1v * LV2viCu1v / 16;
  VAV2viCu1v = VAV2viCu1v.toFixed(2);
  VBizqV2viCu1v = VBizqV2viCu1v.toFixed(2);
  VBderCV2viCu1v = VBderCV2viCu1v.toFixed(2);
  tablaCortesV2viCu1v += "<td>" + VAV2viCu1v + "</td>"; // imprimo en la casilla abajo de VA su valor
  tablaCortesV2viCu1v += "<td>" + VBizqV2viCu1v + "</td>"; // imprimo en la casilla abajo de VBizq su valor
  tablaCortesV2viCu1v += "<td>" + VBderCV2viCu1v + "</td>"; // imprimo en la casilla abajo de VBderC su valor
  tablaCortesV2viCu1v += "</tr>"; // cierro la fila
  tablaCortesV2viCu1v += "</table>"; // cierro la tabla
  cuerpoTablaCortesV2viCu1v.innerHTML = tablaCortesV2viCu1v; // imprimo en html

  // GENERACION DE TABLA DE MOMENTO MAXIMO
  var cuerpoTablaMomentoV2viCu1v = document.getElementById("cuerpoTablaMomentoV2viCu1v");
  cuerpoTablaMomentoV2viCu1v.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
  var tablaMomentoV2viCu1v = "<table>"; // variable para albergar la tabla

  tablaMomentoV2viCu1v += "<tr>"; // con esta etiqueta inicializo la fila
  var MAV2viCu1v = qV2viCu1v * 0 * ((7 * LV2viCu1v) - (8 * 0)) / 16;
  var MmaxV2viCu1v = (49 * qV2viCu1v * Math.pow(LV2viCu1v, 2)) / 512;
  var MBV2viCu1v = - (qV2viCu1v * LV2viCu1v * ((2 * LV2viCu1v) - LV2viCu1v) / 16);
  var MCV2viCu1v = - (qV2viCu1v * LV2viCu1v * ((2 * LV2viCu1v) - (2 * LV2viCu1v)) / 16);
  MAV2viCu1v = MAV2viCu1v.toFixed(2);
  MmaxV2viCu1v = MmaxV2viCu1v.toFixed(2);
  MBV2viCu1v = MBV2viCu1v.toFixed(2);
  MCV2viCu1v = MCV2viCu1v.toFixed(2);
  tablaMomentoV2viCu1v += "<td>" + MAV2viCu1v + "</td>"; // imprimo en la casilla abajo de MA su valor
  tablaMomentoV2viCu1v += "<td>" + MmaxV2viCu1v + "</td>"; // imprimo en la casilla abajo de Mmax su valor
  tablaMomentoV2viCu1v += "<td>" + MBV2viCu1v + "</td>"; // imprimo en la casilla abajo de MB su valor
  tablaMomentoV2viCu1v += "<td>" + MCV2viCu1v + "</td>"; // imprimo en la casilla abajo de MC su valor
  tablaMomentoV2viCu1v += "</tr>"; // cierro la fila
  tablaMomentoV2viCu1v += "</table>"; // cierro la tabla
  cuerpoTablaMomentoV2viCu1v.innerHTML = tablaMomentoV2viCu1v; // imprimo en html

  // GENERACION DE TABLA PARA EL LISTADO DE SOLICITACIONES

  var xV2viCu1v = LV2viCu1v * 0.025;
  if (xV2viCu1v < 0.05) { // artificio para que no quede x = 0
    xV2viCu1v = 0.05;
  }
  xV2viCu1v = xV2viCu1v.toFixed(1); //redondeo a 1 decimal el valor que va a ir aumentando X de fila a fila
  var numFilasV2viCu1v = 1 + Math.trunc((2 * LV2viCu1v) / xV2viCu1v); // 1 es por la fila inicial (X=0)
  var numColumnasV2viCu1v = 3;
  var cuerpoTablaListaV2viCu1v = document.getElementById("cuerpoTablaListaV2viCu1v");

  cuerpoTablaListaV2viCu1v.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
  var tabla = "<table>"; // variable para albergar la tabla

  for (var f = 0; f <= numFilasV2viCu1v; f++) { // aca hago correr las numFilas
    tabla += "<tr>"; // con esta etiqueta inicializo la fila
    for (var c = 1; c <= numColumnasV2viCu1v; c++) { // aca hago correr las numColumnas
      if (c == 1) { // esta es la columna de las xi
        var xiV2viCu1v = xV2viCu1v * f;
        xiV2viCu1v = xiV2viCu1v.toFixed(1); //redondeo a 1 decimal el valor de x que adopta la fila
        if (xiV2viCu1v < (2 * LV2viCu1v)) {
          tabla += "<td>" + xiV2viCu1v + "</td>";
        } else {
          xiV2viCu1v = 2 * LV2viCu1v;
          f = numFilasV2viCu1v;
          tabla += "<td>" + xiV2viCu1v + "</td>";
        }
      }
      if (c == 2) { // esta es la columna de el corte
        if (xiV2viCu1v >= 0 && xiV2viCu1v < LV2viCu1v) {
          var CiV2viCu1v = qV2viCu1v * ((7 * LV2viCu1v) - (16 * xiV2viCu1v)) / 16;
          CiV2viCu1v = CiV2viCu1v.toFixed(2);
          tabla += "<td>" + CiV2viCu1v + "</td>";
        }
        if (xiV2viCu1v == LV2viCu1v) {
          var CiBizqV2viCu1v = - ((9 * qV2viCu1v * LV2viCu1v) / 16);
          var CiBderV2viCu1v = (qV2viCu1v * LV2viCu1v) / 16;
          CiBizqV2viCu1v = CiBizqV2viCu1v.toFixed(2);
          CiBderV2viCu1v = CiBderV2viCu1v.toFixed(2);
          tabla += "<td>" + CiBizqV2viCu1v + "/" + CiBderV2viCu1v + "</td>";
        }
        if (xiV2viCu1v > LV2viCu1v && xiV2viCu1v <= (2 * LV2viCu1v)) {
          var CiV2viCu1v = (qV2viCu1v * LV2viCu1v) / 16;
          CiV2viCu1v = CiV2viCu1v.toFixed(2);
          tabla += "<td>" + CiV2viCu1v + "</td>";
        }
      }
      if (c == 3) { // esta es la columna de el momento
        if (xiV2viCu1v >= 0 && xiV2viCu1v < LV2viCu1v) {
          var MiV2viCu1v = qV2viCu1v * xiV2viCu1v * ((7 * LV2viCu1v) - (8 * xiV2viCu1v)) / 16;
          MiV2viCu1v = MiV2viCu1v.toFixed(2);
          tabla += "<td>" + MiV2viCu1v + "</td>";
        }
        if (xiV2viCu1v >= LV2viCu1v && xiV2viCu1v <= (2 * LV2viCu1v)) {
          var MiV2viCu1v = - (qV2viCu1v * LV2viCu1v * ((2 * LV2viCu1v) - xiV2viCu1v) / 16);
          MiV2viCu1v = MiV2viCu1v.toFixed(2);
          tabla += "<td>" + MiV2viCu1v + "</td>";
        }
      }

    }

    tabla += "</tr>"; // con esta etiqueta finalizo la fila
  }
  tabla += "</table>"; // aca finalizo la tabla
  cuerpoTablaListaV2viCu1v.innerHTML = tabla;

}

function calcularReaccionesV2viCu2v() // Viga de 2 Vanos Iguales Carga Uniforme en los 2 vanos
{
  var LV2viCu2v = document.getElementById("LV2viCu2v");
  LV2viCu2v = parseFloat(LV2viCu2v.value);
  var qV2viCu2v = document.getElementById("qV2viCu2v");
  qV2viCu2v = parseFloat(qV2viCu2v.value);

  // GENERACION DE TABLA DE REACCIONES
  var cuerpoTablaReaccionesV2viCu2v = document.getElementById("cuerpoTablaReaccionesV2viCu2v");
  cuerpoTablaReaccionesV2viCu2v.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
  var tablaReaccionesV2viCu2v = "<table>"; // variable para albergar la tabla

  tablaReaccionesV2viCu2v += "<tr>"; // con esta etiqueta inicializo la fila
  var RAV2viCu2v = 3 * qV2viCu2v * LV2viCu2v / 8;
  var RBV2viCu2v = 5 * qV2viCu2v * LV2viCu2v / 4;
  var RCV2viCu2v = 3 * qV2viCu2v * LV2viCu2v / 8;
  var MABCV2viCu2v = 0;
  RAV2viCu2v = RAV2viCu2v.toFixed(2);
  RBV2viCu2v = RBV2viCu2v.toFixed(2);
  RCV2viCu2v = RCV2viCu2v.toFixed(2);
  MABCV2viCu2v = MABCV2viCu2v.toFixed(2);
  tablaReaccionesV2viCu2v += "<td>" + RAV2viCu2v + "</td>"; // imprimo en la casilla abajo de RA su valor
  tablaReaccionesV2viCu2v += "<td>" + RBV2viCu2v + "</td>"; // imprimo en la casilla abajo de RB su valor
  tablaReaccionesV2viCu2v += "<td>" + RCV2viCu2v + "</td>"; // imprimo en la casilla abajo de RC su valor
  tablaReaccionesV2viCu2v += "<td>" + MABCV2viCu2v + "</td>"; // imprimo en la casilla abajo de MABC su valor
  tablaReaccionesV2viCu2v += "</tr>"; // cierro la fila
  tablaReaccionesV2viCu2v += "</table>"; // cierro la tabla
  cuerpoTablaReaccionesV2viCu2v.innerHTML = tablaReaccionesV2viCu2v; // imprimo en html

  // GENERACION DE TABLA DE ESFUERZOS DE CORTE
  var cuerpoTablaCortesV2viCu2v = document.getElementById("cuerpoTablaCortesV2viCu2v");
  cuerpoTablaCortesV2viCu2v.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
  var tablaCortesV2viCu2v = "<table>"; // variable para albergar la tabla

  tablaCortesV2viCu2v += "<tr>"; // con esta etiqueta inicializo la fila
  var VAV2viCu2v = qV2viCu2v * ((3 * LV2viCu2v) - (8 * 0)) / 8;
  var VBizqV2viCu2v = - (5 * qV2viCu2v * LV2viCu2v / 8);
  var VBderV2viCu2v = (5 * qV2viCu2v * LV2viCu2v / 8);
  var VCV2viCu2v = qV2viCu2v * ((13 * LV2viCu2v) - (8 * (2 * LV2viCu2v))) / 8;
  VAV2viCu2v = VAV2viCu2v.toFixed(2);
  VBizqV2viCu2v = VBizqV2viCu2v.toFixed(2);
  VBderV2viCu2v = VBderV2viCu2v.toFixed(2);
  VCV2viCu2v = VCV2viCu2v.toFixed(2);
  tablaCortesV2viCu2v += "<td>" + VAV2viCu2v + "</td>"; // imprimo en la casilla abajo de VA su valor
  tablaCortesV2viCu2v += "<td>" + VBizqV2viCu2v + "</td>"; // imprimo en la casilla abajo de VBizq su valor
  tablaCortesV2viCu2v += "<td>" + VBderV2viCu2v + "</td>"; // imprimo en la casilla abajo de VBder su valor
  tablaCortesV2viCu2v += "<td>" + VCV2viCu2v + "</td>"; // imprimo en la casilla abajo de VC su valor
  tablaCortesV2viCu2v += "</tr>"; // cierro la fila
  tablaCortesV2viCu2v += "</table>"; // cierro la tabla
  cuerpoTablaCortesV2viCu2v.innerHTML = tablaCortesV2viCu2v; // imprimo en html

  // GENERACION DE TABLA DE MOMENTO MAXIMO
  var cuerpoTablaMomentoV2viCu2v = document.getElementById("cuerpoTablaMomentoV2viCu2v");
  cuerpoTablaMomentoV2viCu2v.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
  var tablaMomentoV2viCu2v = "<table>"; // variable para albergar la tabla

  tablaMomentoV2viCu2v += "<tr>"; // con esta etiqueta inicializo la fila
  var MAV2viCu2v = qV2viCu2v * 0 * ((3 * LV2viCu2v) - (4 * 0)) / 8;
  var MmaxV2viCu2v = 9 * qV2viCu2v * Math.pow(LV2viCu2v, 2) / 128;
  var MBV2viCu2v = - (qV2viCu2v * Math.pow(LV2viCu2v, 2) / 8);
  var MCV2viCu2v = qV2viCu2v * ((2 * LV2viCu2v) - (2 * LV2viCu2v)) * ((4 * (2 * LV2viCu2v)) - (5 * LV2viCu2v)) / 8;
  MAV2viCu2v = MAV2viCu2v.toFixed(2);
  MmaxV2viCu2v = MmaxV2viCu2v.toFixed(2);
  MBV2viCu2v = MBV2viCu2v.toFixed(2);
  MCV2viCu2v = MCV2viCu2v.toFixed(2);
  tablaMomentoV2viCu2v += "<td>" + MAV2viCu2v + "</td>"; // imprimo en la casilla abajo de MA su valor
  tablaMomentoV2viCu2v += "<td>" + MmaxV2viCu2v + "</td>"; // imprimo en la casilla abajo de Mmax su valor
  tablaMomentoV2viCu2v += "<td>" + MBV2viCu2v + "</td>"; // imprimo en la casilla abajo de MB su valor
  tablaMomentoV2viCu2v += "<td>" + MCV2viCu2v + "</td>"; // imprimo en la casilla abajo de MC su valor
  tablaMomentoV2viCu2v += "</tr>"; // cierro la fila
  tablaMomentoV2viCu2v += "</table>"; // cierro la tabla
  cuerpoTablaMomentoV2viCu2v.innerHTML = tablaMomentoV2viCu2v; // imprimo en html

  // GENERACION DE TABLA PARA EL LISTADO DE SOLICITACIONES

  var xV2viCu2v = LV2viCu2v * 0.025;
  if (xV2viCu2v < 0.05) { // artificio para que no quede x = 0
    xV2viCu2v = 0.05;
  }
  xV2viCu2v = xV2viCu2v.toFixed(1); //redondeo a 1 decimal el valor que va a ir aumentando X de fila a fila
  var numFilasV2viCu2v = 1 + Math.trunc((2 * LV2viCu2v) / xV2viCu2v); // 1 es por la fila inicial (X=0)
  var numColumnasV2viCu2v = 3;
  var cuerpoTablaListaV2viCu2v = document.getElementById("cuerpoTablaListaV2viCu2v");

  cuerpoTablaListaV2viCu2v.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
  var tabla = "<table>"; // variable para albergar la tabla

  for (var f = 0; f <= numFilasV2viCu2v; f++) { // aca hago correr las numFilas
    tabla += "<tr>"; // con esta etiqueta inicializo la fila
    for (var c = 1; c <= numColumnasV2viCu2v; c++) { // aca hago correr las numColumnas
      if (c == 1) { // esta es la columna de las xi
        var xiV2viCu2v = xV2viCu2v * f;
        xiV2viCu2v = xiV2viCu2v.toFixed(1); //redondeo a 1 decimal el valor de x que adopta la fila
        if (xiV2viCu2v < (2 * LV2viCu2v)) {
          tabla += "<td>" + xiV2viCu2v + "</td>";
        } else {
          xiV2viCu2v = 2 * LV2viCu2v;
          f = numFilasV2viCu2v;
          tabla += "<td>" + xiV2viCu2v + "</td>";
        }
      }
      if (c == 2) { // esta es la columna de el corte
        if (xiV2viCu2v >= 0 && xiV2viCu2v < LV2viCu2v) {
          var CiV2viCu2v = qV2viCu2v * ((3 * LV2viCu2v) - (8 * xiV2viCu2v)) / 8;
          CiV2viCu2v = CiV2viCu2v.toFixed(2);
          tabla += "<td>" + CiV2viCu2v + "</td>";
        }
        if (xiV2viCu2v == LV2viCu2v) {
          var CiBizqV2viCu2v = - (5 * qV2viCu2v * LV2viCu2v / 8);
          var CiBderV2viCu2v = (5 * qV2viCu2v * LV2viCu2v / 8);
          CiBizqV2viCu2v = CiBizqV2viCu2v.toFixed(2);
          CiBderV2viCu2v = CiBderV2viCu2v.toFixed(2);
          tabla += "<td>" + CiBizqV2viCu2v + "/" + CiBderV2viCu2v + "</td>";
        }
        if (xiV2viCu2v > LV2viCu2v && xiV2viCu2v <= (2 * LV2viCu2v)) {
          var CiV2viCu2v = qV2viCu2v * ((13 * LV2viCu2v) - (8 * xiV2viCu2v)) / 8;
          CiV2viCu2v = CiV2viCu2v.toFixed(2);
          tabla += "<td>" + CiV2viCu2v + "</td>";
        }
      }
      if (c == 3) { // esta es la columna de el momento
        if (xiV2viCu2v >= 0 && xiV2viCu2v < LV2viCu2v) {
          var MiV2viCu2v = qV2viCu2v * xiV2viCu2v * ((3 * LV2viCu2v) - (4 * xiV2viCu2v)) / 8;
          MiV2viCu2v = MiV2viCu2v.toFixed(2);
          tabla += "<td>" + MiV2viCu2v + "</td>";
        }
        if (xiV2viCu2v >= LV2viCu2v && xiV2viCu2v <= (2 * LV2viCu2v)) {
          var MiV2viCu2v = qV2viCu2v * ((2 * LV2viCu2v) - xiV2viCu2v) * ((4 * xiV2viCu2v) - (5 * LV2viCu2v)) / 8;
          MiV2viCu2v = MiV2viCu2v.toFixed(2);
          tabla += "<td>" + MiV2viCu2v + "</td>";
        }
      }

    }

    tabla += "</tr>"; // con esta etiqueta finalizo la fila
  }
  tabla += "</table>"; // aca finalizo la tabla
  cuerpoTablaListaV2viCu2v.innerHTML = tabla;

}

// botones de calcular de las distintas cargas V2VI

var calcularV2viCp1v = document.getElementById("calcularV2viCp1v");
calcularV2viCp1v.addEventListener ("click", calcularReaccionesV2viCp1v);

var calcularV2viCu1v = document.getElementById("calcularV2viCu1v");
calcularV2viCu1v.addEventListener ("click", calcularReaccionesV2viCu1v);

var calcularV2viCu2v = document.getElementById("calcularV2viCu2v");
calcularV2viCu2v.addEventListener ("click", calcularReaccionesV2viCu2v);

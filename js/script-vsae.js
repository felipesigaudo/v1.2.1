
var resultado = document.getElementById("resultado"); // ??

// funcion para el boton de "Descargar en PDF"

function generatePDF() {
  const element = document.getElementById("container");

  html2pdf()
    .from(element)
    .save();
}

// funciones de calcular de las distintas cargas VSAE

function calcularReaccionesVsaeCpg() // Viga Simple Apoyada-Empotrada Carga Puntual Generica
{
    var LVsaeCpg = document.getElementById("LVsaeCpg");
    LVsaeCpg = parseFloat(LVsaeCpg.value);
    var aVsaeCpg = document.getElementById("aVsaeCpg");
    aVsaeCpg = parseFloat(aVsaeCpg.value);
    var FVsaeCpg = document.getElementById("FVsaeCpg");
    FVsaeCpg = parseFloat(FVsaeCpg.value);

    // GENERACION DE TABLA DE REACCIONES
    var cuerpoTablaReaccionesVsaeCpg = document.getElementById("cuerpoTablaReaccionesVsaeCpg");
    cuerpoTablaReaccionesVsaeCpg.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
    var tablaReaccionesVsaeCpg = "<table>"; // variable para albergar la tabla

    tablaReaccionesVsaeCpg += "<tr>"; // con esta etiqueta inicializo la fila
    var bVsaeCpg = LVsaeCpg - aVsaeCpg;
    var RAVsaeCpg = FVsaeCpg * Math.pow (bVsaeCpg, 2) * (3 * LVsaeCpg - bVsaeCpg) / (2 * Math.pow (LVsaeCpg, 3));
    var RBVsaeCpg = FVsaeCpg * aVsaeCpg * (3 * Math.pow (LVsaeCpg, 2) - Math.pow (aVsaeCpg, 2)) / (2 * Math.pow (LVsaeCpg, 3));
    var MAVsaeCpg = 0;
    var MBVsaeCpg = (FVsaeCpg * aVsaeCpg * (Math.pow (LVsaeCpg, 2) - Math.pow (aVsaeCpg, 2)) / (2 * Math.pow (LVsaeCpg, 2)));
    RAVsaeCpg = RAVsaeCpg.toFixed(2);
    RBVsaeCpg = RBVsaeCpg.toFixed(2);
    MAVsaeCpg = MAVsaeCpg.toFixed(2);
    MBVsaeCpg = MBVsaeCpg.toFixed(2);
    tablaReaccionesVsaeCpg += "<td>" + RAVsaeCpg + "</td>"; // imprimo en la casilla abajo de RA su valor
    tablaReaccionesVsaeCpg += "<td>" + MAVsaeCpg + "</td>"; // imprimo en la casilla abajo de MA su valor
    tablaReaccionesVsaeCpg += "<td>" + RBVsaeCpg + "</td>"; // imprimo en la casilla abajo de RB su valor
    tablaReaccionesVsaeCpg += "<td>" + MBVsaeCpg + "</td>"; // imprimo en la casilla abajo de MB su valor
    tablaReaccionesVsaeCpg += "</tr>"; // cierro la fila
    tablaReaccionesVsaeCpg += "</table>"; // cierro la tabla
    cuerpoTablaReaccionesVsaeCpg.innerHTML = tablaReaccionesVsaeCpg; // imprimo en html

    // GENERACION DE TABLA DE ESFUERZOS DE CORTE
    var cuerpoTablaCortesVsaeCpg = document.getElementById("cuerpoTablaCortesVsaeCpg");
    cuerpoTablaCortesVsaeCpg.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
    var tablaCortesVsaeCpg = "<table>"; // variable para albergar la tabla

    tablaCortesVsaeCpg += "<tr>"; // con esta etiqueta inicializo la fila
    var VACVsaeCpg = FVsaeCpg * Math.pow (bVsaeCpg, 2) * (3 * LVsaeCpg - bVsaeCpg) / (2 * Math.pow (LVsaeCpg, 3));
    var VCBVsaeCpg = - (FVsaeCpg * aVsaeCpg * (3 * Math.pow (LVsaeCpg, 2) - Math.pow (aVsaeCpg, 2)) / (2 * Math.pow (LVsaeCpg, 3)));
    VACVsaeCpg = VACVsaeCpg.toFixed(2);
    VCBVsaeCpg = VCBVsaeCpg.toFixed(2);
    tablaCortesVsaeCpg += "<td>" + VACVsaeCpg + "</td>"; // imprimo en la casilla abajo de VAC su valor
    tablaCortesVsaeCpg += "<td>" + VCBVsaeCpg + "</td>"; // imprimo en la casilla abajo de VCB su valor
    tablaCortesVsaeCpg += "</tr>"; // cierro la fila
    tablaCortesVsaeCpg += "</table>"; // cierro la tabla
    cuerpoTablaCortesVsaeCpg.innerHTML = tablaCortesVsaeCpg; // imprimo en html

    // GENERACION DE TABLA DE MOMENTO MAXIMO
    var cuerpoTablaMomentoVsaeCpg = document.getElementById("cuerpoTablaMomentoVsaeCpg");
    cuerpoTablaMomentoVsaeCpg.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
    var tablaMomentoVsaeCpg = "<table>"; // variable para albergar la tabla

    tablaMomentoVsaeCpg += "<tr>"; // con esta etiqueta inicializo la fila
    var MAVsaeCpg = 0;
    var MCVsaeCpg = (FVsaeCpg * aVsaeCpg * Math.pow (bVsaeCpg, 2) * (3 * aVsaeCpg + 2 * bVsaeCpg)) / (2 * Math.pow (LVsaeCpg, 3));
    var MBVsaeCpg = - (FVsaeCpg * aVsaeCpg * (Math.pow (LVsaeCpg, 2) - Math.pow (aVsaeCpg, 2)) / (2 * Math.pow (LVsaeCpg, 2)));
    MAVsaeCpg = MAVsaeCpg.toFixed(2);
    MCVsaeCpg = MCVsaeCpg.toFixed(2);
    MBVsaeCpg = MBVsaeCpg.toFixed(2);
    tablaMomentoVsaeCpg += "<td>" + MAVsaeCpg + "</td>"; // imprimo en la casilla abajo de MA su valor
    tablaMomentoVsaeCpg += "<td>" + MCVsaeCpg + "</td>"; // imprimo en la casilla abajo de MC su valor
    tablaMomentoVsaeCpg += "<td>" + MBVsaeCpg + "</td>"; // imprimo en la casilla abajo de MB su valor
    tablaMomentoVsaeCpg += "</tr>"; // cierro la fila
    tablaMomentoVsaeCpg += "</table>"; // cierro la tabla
    cuerpoTablaMomentoVsaeCpg.innerHTML = tablaMomentoVsaeCpg; // imprimo en html

    // GENERACION DE TABLA PARA EL LISTADO DE SOLICITACIONES

    var xVsaeCpg = LVsaeCpg * 0.025;
    if (xVsaeCpg < 0.05) { // artificio para que no quede x = 0
      xVsaeCpg = 0.05;
    }
    xVsaeCpg = xVsaeCpg.toFixed(1); //redondeo a 1 decimal el valor que va a ir aumentando X de fila a fila
    var numFilasVsaeCpg = 1 + Math.trunc(LVsaeCpg/xVsaeCpg); // 1 es por la fila inicial (X=0)
    var numColumnasVsaeCpg = 3;
    var cuerpoTablaListaVsaeCpg = document.getElementById("cuerpoTablaListaVsaeCpg");

    cuerpoTablaListaVsaeCpg.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
    var tabla = "<table>"; // variable para albergar la tabla

    for (var f = 0; f <= numFilasVsaeCpg ; f++) { // aca hago correr las numFilas
        tabla += "<tr>"; // con esta etiqueta inicializo la fila
        for (var c = 1; c <= numColumnasVsaeCpg; c++) { // aca hago correr las numColumnas
          if (c == 1) { // esta es la columna de las xi
            var xiVsaeCpg = xVsaeCpg * f;
            xiVsaeCpg = xiVsaeCpg.toFixed(1); //redondeo a 1 decimal el valor de x que adopta la fila
            if (xiVsaeCpg < LVsaeCpg) {
              tabla += "<td>" + xiVsaeCpg + "</td>";
            } else {
              xiVsaeCpg = LVsaeCpg;
              f = numFilasVsaeCpg;
              tabla += "<td>" + xiVsaeCpg + "</td>";
            }
          }
          if (c == 2) { // esta es la columna de el corte
            if (xiVsaeCpg <= aVsaeCpg) {
              var CiVsaeCpg = FVsaeCpg * Math.pow (bVsaeCpg, 2) * (3 * LVsaeCpg - bVsaeCpg) / (2 * Math.pow (LVsaeCpg, 3));
              CiVsaeCpg = CiVsaeCpg.toFixed(2);
              tabla += "<td>" + CiVsaeCpg + "</td>";
            }
            if (xiVsaeCpg > aVsaeCpg) {
              var CiVsaeCpg = - (FVsaeCpg * aVsaeCpg * (3 * Math.pow (LVsaeCpg, 2) - Math.pow (aVsaeCpg, 2)) / (2 * Math.pow (LVsaeCpg, 3)));
              CiVsaeCpg = CiVsaeCpg.toFixed(2);
              tabla += "<td>" + CiVsaeCpg + "</td>";
            }
          }
          if (c == 3) { // esta es la columna de el momento
            if (xiVsaeCpg <= aVsaeCpg) {
              var MiVsaeCpg = (FVsaeCpg * xiVsaeCpg * Math.pow (bVsaeCpg, 2) * (3 * aVsaeCpg + 2 * bVsaeCpg)) / (2 * Math.pow (LVsaeCpg, 3));
              MiVsaeCpg = MiVsaeCpg.toFixed(2);
              tabla += "<td>" + MiVsaeCpg + "</td>";
            }
            if (xiVsaeCpg > aVsaeCpg) {
              var MiVsaeCpg = FVsaeCpg * aVsaeCpg * (2 * Math.pow (LVsaeCpg, 3) - 3 * Math.pow (LVsaeCpg, 2) * xiVsaeCpg + Math.pow (aVsaeCpg, 2) * xiVsaeCpg) / (2 * Math.pow (LVsaeCpg, 3));
              MiVsaeCpg = MiVsaeCpg.toFixed(2);
              tabla += "<td>" + MiVsaeCpg + "</td>";
            }
          }

        }

        tabla += "</tr>"; // con esta etiqueta finalizo la fila
    }
    tabla += "</table>"; // aca finalizo la tabla
    cuerpoTablaListaVsaeCpg.innerHTML = tabla;

}

function calcularReaccionesVsaeCpc() // Viga Simple Apoyada-Empotrada Carga Puntual Centrada
{
  var LVsaeCpc = document.getElementById("LVsaeCpc");
  LVsaeCpc = parseFloat(LVsaeCpc.value);
  var FVsaeCpc = document.getElementById("FVsaeCpc");
  FVsaeCpc = parseFloat(FVsaeCpc.value);

  // GENERACION DE TABLA DE REACCIONES
  var cuerpoTablaReaccionesVsaeCpc = document.getElementById("cuerpoTablaReaccionesVsaeCpc");
  cuerpoTablaReaccionesVsaeCpc.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
  var tablaReaccionesVsaeCpc = "<table>"; // variable para albergar la tabla

  tablaReaccionesVsaeCpc += "<tr>"; // con esta etiqueta inicializo la fila
  var RAVsaeCpc = 5 * FVsaeCpc / 16;
  var RBVsaeCpc = 11 * FVsaeCpc / 16;
  var MAVsaeCpc = (5 * FVsaeCpc * 0 / 16);
  var MBVsaeCpc = (3 * FVsaeCpc * LVsaeCpc / 16);
  RAVsaeCpc = RAVsaeCpc.toFixed(2);
  RBVsaeCpc = RBVsaeCpc.toFixed(2);
  MAVsaeCpc = MAVsaeCpc.toFixed(2);
  MBVsaeCpc = MBVsaeCpc.toFixed(2);
  tablaReaccionesVsaeCpc += "<td>" + RAVsaeCpc + "</td>"; // imprimo en la casilla abajo de RA su valor
  tablaReaccionesVsaeCpc += "<td>" + MAVsaeCpc + "</td>"; // imprimo en la casilla abajo de MA su valor
  tablaReaccionesVsaeCpc += "<td>" + RBVsaeCpc + "</td>"; // imprimo en la casilla abajo de RB su valor
  tablaReaccionesVsaeCpc += "<td>" + MBVsaeCpc + "</td>"; // imprimo en la casilla abajo de MB su valor
  tablaReaccionesVsaeCpc += "</tr>"; // cierro la fila
  tablaReaccionesVsaeCpc += "</table>"; // cierro la tabla
  cuerpoTablaReaccionesVsaeCpc.innerHTML = tablaReaccionesVsaeCpc; // imprimo en html

  // GENERACION DE TABLA DE ESFUERZOS DE CORTE
  var cuerpoTablaCortesVsaeCpc = document.getElementById("cuerpoTablaCortesVsaeCpc");
  cuerpoTablaCortesVsaeCpc.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
  var tablaCortesVsaeCpc = "<table>"; // variable para albergar la tabla

  tablaCortesVsaeCpc += "<tr>"; // con esta etiqueta inicializo la fila
  var VACVsaeCpc = 5 * FVsaeCpc / 16;
  var VCBVsaeCpc = - (11 * FVsaeCpc / 16);
  VACVsaeCpc = VACVsaeCpc.toFixed(2);
  VCBVsaeCpc = VCBVsaeCpc.toFixed(2);
  tablaCortesVsaeCpc += "<td>" + VACVsaeCpc + "</td>"; // imprimo en la casilla abajo de VAC su valor
  tablaCortesVsaeCpc += "<td>" + VCBVsaeCpc + "</td>"; // imprimo en la casilla abajo de VCB su valor
  tablaCortesVsaeCpc += "</tr>"; // cierro la fila
  tablaCortesVsaeCpc += "</table>"; // cierro la tabla
  cuerpoTablaCortesVsaeCpc.innerHTML = tablaCortesVsaeCpc; // imprimo en html

  // GENERACION DE TABLA DE MOMENTO MAXIMO
  var cuerpoTablaMomentoVsaeCpc = document.getElementById("cuerpoTablaMomentoVsaeCpc");
  cuerpoTablaMomentoVsaeCpc.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
  var tablaMomentoVsaeCpc = "<table>"; // variable para albergar la tabla

  tablaMomentoVsaeCpc += "<tr>"; // con esta etiqueta inicializo la fila
  var MAVsaeCpc = (5 * FVsaeCpc * 0 / 16);
  var MCVsaeCpc = 5 * FVsaeCpc * LVsaeCpc / 32;
  var MBVsaeCpc = - (3 * FVsaeCpc * LVsaeCpc / 16);
  MAVsaeCpc = MAVsaeCpc.toFixed(2);
  MCVsaeCpc = MCVsaeCpc.toFixed(2);
  MBVsaeCpc = MBVsaeCpc.toFixed(2);
  tablaMomentoVsaeCpc += "<td>" + MAVsaeCpc + "</td>"; // imprimo en la casilla abajo de MA su valor
  tablaMomentoVsaeCpc += "<td>" + MCVsaeCpc + "</td>"; // imprimo en la casilla abajo de MC su valor
  tablaMomentoVsaeCpc += "<td>" + MBVsaeCpc + "</td>"; // imprimo en la casilla abajo de MB su valor
  tablaMomentoVsaeCpc += "</tr>"; // cierro la fila
  tablaMomentoVsaeCpc += "</table>"; // cierro la tabla
  cuerpoTablaMomentoVsaeCpc.innerHTML = tablaMomentoVsaeCpc; // imprimo en html

  // GENERACION DE TABLA PARA EL LISTADO DE SOLICITACIONES

  var xVsaeCpc = LVsaeCpc * 0.025;
  if (xVsaeCpc < 0.05) { // artificio para que no quede x = 0
    xVsaeCpc = 0.05;
  }
  xVsaeCpc = xVsaeCpc.toFixed(1); //redondeo a 1 decimal el valor que va a ir aumentando X de fila a fila
  var numFilasVsaeCpc = 1 + Math.trunc(LVsaeCpc/xVsaeCpc); // 1 es por la fila inicial (X=0)
  var numColumnasVsaeCpc = 3;
  var cuerpoTablaListaVsaeCpc = document.getElementById("cuerpoTablaListaVsaeCpc");

  cuerpoTablaListaVsaeCpc.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
  var tabla = "<table>"; // variable para albergar la tabla

  for (var f = 0; f <= numFilasVsaeCpc ; f++) { // aca hago correr las numFilas
      tabla += "<tr>"; // con esta etiqueta inicializo la fila
      for (var c = 1; c <= numColumnasVsaeCpc; c++) { // aca hago correr las numColumnas
        if (c == 1) { // esta es la columna de las xi
          var xiVsaeCpc = xVsaeCpc * f;
          xiVsaeCpc = xiVsaeCpc.toFixed(1); //redondeo a 1 decimal el valor de x que adopta la fila
          if (xiVsaeCpc < LVsaeCpc) {
            tabla += "<td>" + xiVsaeCpc + "</td>";
          } else {
            xiVsaeCpc = LVsaeCpc;
            f = numFilasVsaeCpc;
            tabla += "<td>" + xiVsaeCpc + "</td>";
          }
        }
        if (c == 2) { // esta es la columna de el corte
          if (xiVsaeCpc <= LVsaeCpc / 2) {
            var CiVsaeCpc = 5 * FVsaeCpc / 16 ;
            CiVsaeCpc = CiVsaeCpc.toFixed(2);
            tabla += "<td>" + CiVsaeCpc + "</td>";
          }
          if (xiVsaeCpc > LVsaeCpc / 2) {
            var CiVsaeCpc = - (11 * FVsaeCpc / 16) ;
            CiVsaeCpc = CiVsaeCpc.toFixed(2);
            tabla += "<td>" + CiVsaeCpc + "</td>";
          }
        }
        if (c == 3) { // esta es la columna de el momento
          if (xiVsaeCpc <= LVsaeCpc / 2) {
            var MiVsaeCpc = 5 * FVsaeCpc * xiVsaeCpc / 16;
            MiVsaeCpc = MiVsaeCpc.toFixed(2);
            tabla += "<td>" + MiVsaeCpc + "</td>";
          }
          if (xiVsaeCpc > LVsaeCpc / 2) {
            var MiVsaeCpc = FVsaeCpc * LVsaeCpc * ((11 * (LVsaeCpc - xiVsaeCpc) / LVsaeCpc) - 3) / 16;
            MiVsaeCpc = MiVsaeCpc.toFixed(2);
            tabla += "<td>" + MiVsaeCpc + "</td>";
          }
        }

      }

      tabla += "</tr>"; // con esta etiqueta finalizo la fila
  }
  tabla += "</table>"; // aca finalizo la tabla
  cuerpoTablaListaVsaeCpc.innerHTML = tabla;

}

function calcularReaccionesVsaeCps() // Viga Simple Apoyada-Empotrada Cargas Puntuales Simetricas
{
    var LVsaeCps = document.getElementById("LVsaeCps");
    LVsaeCps = parseFloat(LVsaeCps.value);
    var aVsaeCps = document.getElementById("aVsaeCps");
    aVsaeCps = parseFloat(aVsaeCps.value);
    var FVsaeCps = document.getElementById("FVsaeCps");
    FVsaeCps = parseFloat(FVsaeCps.value);

    // GENERACION DE TABLA DE REACCIONES
    var cuerpoTablaReaccionesVsaeCps = document.getElementById("cuerpoTablaReaccionesVsaeCps");
    cuerpoTablaReaccionesVsaeCps.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
    var tablaReaccionesVsaeCps = "<table>"; // variable para albergar la tabla

    tablaReaccionesVsaeCps += "<tr>"; // con esta etiqueta inicializo la fila
    var RAVsaeCps = FVsaeCps * (((2 * Math.pow(LVsaeCps, 2)) + (3 * Math.pow(aVsaeCps, 2)) - (3 * aVsaeCps * LVsaeCps)) / (2 * Math.pow(LVsaeCps, 2)));
    var RBVsaeCps = FVsaeCps * (((2 * Math.pow(LVsaeCps, 2)) - (3 * Math.pow(aVsaeCps, 2)) + (3 * aVsaeCps * LVsaeCps)) / (2 * Math.pow(LVsaeCps, 2)));
    var MAVsaeCps = FVsaeCps * 0 * (((2 * Math.pow(LVsaeCps, 2)) + (3 * Math.pow(aVsaeCps, 2)) - (3 * aVsaeCps * LVsaeCps)) / (2 * Math.pow(LVsaeCps, 2)));
    var MBVsaeCps = 3 * FVsaeCps * aVsaeCps * ((LVsaeCps - aVsaeCps) / (2 * LVsaeCps));
    RAVsaeCps = RAVsaeCps.toFixed(2);
    RBVsaeCps = RBVsaeCps.toFixed(2);
    MAVsaeCps = MAVsaeCps.toFixed(2);
    MBVsaeCps = MBVsaeCps.toFixed(2);
    tablaReaccionesVsaeCps += "<td>" + RAVsaeCps + "</td>"; // imprimo en la casilla abajo de RA su valor
    tablaReaccionesVsaeCps += "<td>" + MAVsaeCps + "</td>"; // imprimo en la casilla abajo de MA su valor
    tablaReaccionesVsaeCps += "<td>" + RBVsaeCps + "</td>"; // imprimo en la casilla abajo de RB su valor
    tablaReaccionesVsaeCps += "<td>" + MBVsaeCps + "</td>"; // imprimo en la casilla abajo de MB su valor
    tablaReaccionesVsaeCps += "</tr>"; // cierro la fila
    tablaReaccionesVsaeCps += "</table>"; // cierro la tabla
    cuerpoTablaReaccionesVsaeCps.innerHTML = tablaReaccionesVsaeCps; // imprimo en html

    // GENERACION DE TABLA DE ESFUERZOS DE CORTE
    var cuerpoTablaCortesVsaeCps = document.getElementById("cuerpoTablaCortesVsaeCps");
    cuerpoTablaCortesVsaeCps.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
    var tablaCortesVsaeCps = "<table>"; // variable para albergar la tabla

    tablaCortesVsaeCps += "<tr>"; // con esta etiqueta inicializo la fila
    var VACVsaeCps = FVsaeCps * (((2 * Math.pow(LVsaeCps, 2)) + (3 * Math.pow(aVsaeCps, 2)) - (3 * aVsaeCps * LVsaeCps)) / (2 * Math.pow(LVsaeCps, 2)));
    var VCDVsaeCps = 3 * FVsaeCps * aVsaeCps * ((aVsaeCps - LVsaeCps) / (2 * Math.pow(LVsaeCps, 2)));
    var VDBVsaeCps = FVsaeCps * ((- (2 * Math.pow(LVsaeCps, 2)) + (3 * Math.pow(aVsaeCps, 2)) - (3 * aVsaeCps * LVsaeCps)) / (2 * Math.pow(LVsaeCps, 2)));
    VACVsaeCps = VACVsaeCps.toFixed(2);
    VCDVsaeCps = VCDVsaeCps.toFixed(2);
    VDBVsaeCps = VDBVsaeCps.toFixed(2);
    tablaCortesVsaeCps += "<td>" + VACVsaeCps + "</td>"; // imprimo en la casilla abajo de VAC su valor
    tablaCortesVsaeCps += "<td>" + VCDVsaeCps + "</td>"; // imprimo en la casilla abajo de VCD su valor
    tablaCortesVsaeCps += "<td>" + VDBVsaeCps + "</td>"; // imprimo en la casilla abajo de VDB su valor
    tablaCortesVsaeCps += "</tr>"; // cierro la fila
    tablaCortesVsaeCps += "</table>"; // cierro la tabla
    cuerpoTablaCortesVsaeCps.innerHTML = tablaCortesVsaeCps; // imprimo en html

    // GENERACION DE TABLA DE MOMENTO MAXIMO
    var cuerpoTablaMomentoVsaeCps = document.getElementById("cuerpoTablaMomentoVsaeCps");
    cuerpoTablaMomentoVsaeCps.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
    var tablaMomentoVsaeCps = "<table>"; // variable para albergar la tabla

    tablaMomentoVsaeCps += "<tr>"; // con esta etiqueta inicializo la fila
    var MAVsaeCps = FVsaeCps * 0 * (((2 * Math.pow(LVsaeCps, 2)) + (3 * Math.pow(aVsaeCps, 2)) - (3 * aVsaeCps * LVsaeCps)) / (2 * Math.pow(LVsaeCps, 2)));
    var MCVsaeCps = FVsaeCps * aVsaeCps * (((2 * Math.pow(LVsaeCps, 2)) + (3 * Math.pow(aVsaeCps, 2)) - (3 * aVsaeCps * LVsaeCps)) / (2 * Math.pow(LVsaeCps, 2)));
    var MDVsaeCps = FVsaeCps * (((3 * aVsaeCps * (aVsaeCps - LVsaeCps) * (LVsaeCps - aVsaeCps)) / (2 * Math.pow(LVsaeCps, 2))) + aVsaeCps);
    var MBVsaeCps = - (3 * FVsaeCps * aVsaeCps * ((LVsaeCps - aVsaeCps) / (2 * LVsaeCps)));
    MAVsaeCps = MAVsaeCps.toFixed(2);
    MCVsaeCps = MCVsaeCps.toFixed(2);
    MDVsaeCps = MDVsaeCps.toFixed(2);
    MBVsaeCps = MBVsaeCps.toFixed(2);
    tablaMomentoVsaeCps += "<td>" + MAVsaeCps + "</td>"; // imprimo en la casilla abajo de MA su valor
    tablaMomentoVsaeCps += "<td>" + MCVsaeCps + "</td>"; // imprimo en la casilla abajo de MC su valor
    tablaMomentoVsaeCps += "<td>" + MDVsaeCps + "</td>"; // imprimo en la casilla abajo de MD su valor
    tablaMomentoVsaeCps += "<td>" + MBVsaeCps + "</td>"; // imprimo en la casilla abajo de MB su valor
    tablaMomentoVsaeCps += "</tr>"; // cierro la fila
    tablaMomentoVsaeCps += "</table>"; // cierro la tabla
    cuerpoTablaMomentoVsaeCps.innerHTML = tablaMomentoVsaeCps; // imprimo en html

    // GENERACION DE TABLA PARA EL LISTADO DE SOLICITACIONES

    var xVsaeCps = LVsaeCps * 0.025;
    if (xVsaeCps < 0.05) { // artificio para que no quede x = 0
      xVsaeCps = 0.05;
    }
    xVsaeCps = xVsaeCps.toFixed(1); //redondeo a 1 decimal el valor que va a ir aumentando X de fila a fila
    var numFilasVsaeCps = 1 + Math.trunc(LVsaeCps/xVsaeCps); // 1 es por la fila inicial (X=0)
    var numColumnasVsaeCps = 3;
    var cuerpoTablaListaVsaeCps = document.getElementById("cuerpoTablaListaVsaeCps");

    cuerpoTablaListaVsaeCps.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
    var tabla = "<table>"; // variable para albergar la tabla

    for (var f = 0; f <= numFilasVsaeCps ; f++) { // aca hago correr las numFilas
        tabla += "<tr>"; // con esta etiqueta inicializo la fila
        for (var c = 1; c <= numColumnasVsaeCps; c++) { // aca hago correr las numColumnas
          if (c == 1) { // esta es la columna de las xi
            var xiVsaeCps = xVsaeCps * f;
            xiVsaeCps = xiVsaeCps.toFixed(1); //redondeo a 1 decimal el valor de x que adopta la fila
            if (xiVsaeCps < LVsaeCps) {
              tabla += "<td>" + xiVsaeCps + "</td>";
            } else {
              xiVsaeCps = LVsaeCps;
              f = numFilasVsaeCps;
              tabla += "<td>" + xiVsaeCps + "</td>";
            }
          }
          if (c == 2) { // esta es la columna de el corte
            if (xiVsaeCps < aVsaeCps) {
              var CiVsaeCps = FVsaeCps * (((2 * Math.pow(LVsaeCps, 2)) + (3 * Math.pow(aVsaeCps, 2)) - (3 * aVsaeCps * LVsaeCps)) / (2 * Math.pow(LVsaeCps, 2))) ;
              CiVsaeCps = CiVsaeCps.toFixed(2);
              tabla += "<td>" + CiVsaeCps + "</td>";
            }
            if (xiVsaeCps >= aVsaeCps && xiVsaeCps <= (LVsaeCps - aVsaeCps)) {
              var CiVsaeCps = 3 * FVsaeCps * aVsaeCps * ((aVsaeCps - LVsaeCps) / (2 * Math.pow(LVsaeCps, 2)));
              CiVsaeCps = CiVsaeCps.toFixed(2);
              tabla += "<td>" + CiVsaeCps + "</td>";
            }
            if (xiVsaeCps > (LVsaeCps - aVsaeCps)) {
              var CiVsaeCps = FVsaeCps * ((- (2 * Math.pow(LVsaeCps, 2)) + (3 * Math.pow(aVsaeCps, 2)) - (3 * aVsaeCps * LVsaeCps)) / (2 * Math.pow(LVsaeCps, 2)));
              CiVsaeCps = CiVsaeCps.toFixed(2);
              tabla += "<td>" + CiVsaeCps + "</td>";
            }
          }
          if (c == 3) { // esta es la columna de el momento
            if (xiVsaeCps < aVsaeCps) {
              var MiVsaeCps = FVsaeCps * xiVsaeCps * (((2 * Math.pow(LVsaeCps, 2)) + (3 * Math.pow(aVsaeCps, 2)) - (3 * aVsaeCps * LVsaeCps)) / (2 * Math.pow(LVsaeCps, 2)));
              MiVsaeCps = MiVsaeCps.toFixed(2);
              tabla += "<td>" + MiVsaeCps + "</td>";
            }
            if (xiVsaeCps >= aVsaeCps && xiVsaeCps <= (LVsaeCps - aVsaeCps)) {
              var MiVsaeCps = FVsaeCps * (((3 * aVsaeCps * (aVsaeCps - LVsaeCps) * xiVsaeCps) / (2 * Math.pow(LVsaeCps, 2))) + aVsaeCps);
              MiVsaeCps = MiVsaeCps.toFixed(2);
              tabla += "<td>" + MiVsaeCps + "</td>";
            }
            if (xiVsaeCps > (LVsaeCps - aVsaeCps)) {
              var MiVsaeCps = FVsaeCps * (((((3 * Math.pow(aVsaeCps, 2)) - (3 * aVsaeCps * LVsaeCps) - (2 * Math.pow(LVsaeCps, 2))) / (2 * Math.pow(LVsaeCps, 2))) * xiVsaeCps) + LVsaeCps);
              MiVsaeCps = MiVsaeCps.toFixed(2);
              tabla += "<td>" + MiVsaeCps + "</td>";
            }
          }

        }

        tabla += "</tr>"; // con esta etiqueta finalizo la fila
    }
    tabla += "</table>"; // aca finalizo la tabla
    cuerpoTablaListaVsaeCps.innerHTML = tabla;

}

function calcularReaccionesVsaeCui() // Viga Simple Apoyada-Empotrada Carga Uniforme en tramo Intermedio
{
  var LVsaeCui = document.getElementById("LVsaeCui");
  LVsaeCui = parseFloat(LVsaeCui.value);
  var aVsaeCui = document.getElementById("aVsaeCui");
  aVsaeCui = parseFloat(aVsaeCui.value);
  var cVsaeCui = document.getElementById("cVsaeCui");
  cVsaeCui = parseFloat(cVsaeCui.value);
  var qVsaeCui = document.getElementById("qVsaeCui");
  qVsaeCui = parseFloat(qVsaeCui.value);

  // GENERACION DE TABLA DE REACCIONES
  var cuerpoTablaReaccionesVsaeCui = document.getElementById("cuerpoTablaReaccionesVsaeCui");
  cuerpoTablaReaccionesVsaeCui.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
  var tablaReaccionesVsaeCui = "<table>"; // variable para albergar la tabla

  tablaReaccionesVsaeCui += "<tr>"; // con esta etiqueta inicializo la fila
  var bVsaeCui = LVsaeCui - aVsaeCui;
  var MBVsaeCui = ((qVsaeCui * aVsaeCui * bVsaeCui * cVsaeCui) / (2 * Math.pow(LVsaeCui, 2))) * (LVsaeCui + aVsaeCui - (Math.pow(cVsaeCui, 2) / (4 * bVsaeCui))) ;
  var RAVsaeCui = ((qVsaeCui * bVsaeCui * cVsaeCui) / LVsaeCui) + (- (MBVsaeCui) / LVsaeCui);
  var RBVsaeCui = ((qVsaeCui * aVsaeCui * cVsaeCui) / LVsaeCui) - (- (MBVsaeCui) / LVsaeCui);
  var MAVsaeCui = - (((qVsaeCui * bVsaeCui * cVsaeCui) / LVsaeCui) + (- (MBVsaeCui) / LVsaeCui)) * 0;
  RAVsaeCui = RAVsaeCui.toFixed(2);
  RBVsaeCui = RBVsaeCui.toFixed(2);
  MAVsaeCui = MAVsaeCui.toFixed(2);
  MBVsaeCui = MBVsaeCui.toFixed(2);
  tablaReaccionesVsaeCui += "<td>" + RAVsaeCui + "</td>"; // imprimo en la casilla abajo de RA su valor
  tablaReaccionesVsaeCui += "<td>" + MAVsaeCui + "</td>"; // imprimo en la casilla abajo de MA su valor
  tablaReaccionesVsaeCui += "<td>" + RBVsaeCui + "</td>"; // imprimo en la casilla abajo de RB su valor
  tablaReaccionesVsaeCui += "<td>" + MBVsaeCui + "</td>"; // imprimo en la casilla abajo de MB su valor
  tablaReaccionesVsaeCui += "</tr>"; // cierro la fila
  tablaReaccionesVsaeCui += "</table>"; // cierro la tabla
  cuerpoTablaReaccionesVsaeCui.innerHTML = tablaReaccionesVsaeCui; // imprimo en html

  // GENERACION DE TABLA DE ESFUERZOS DE CORTE
  var cuerpoTablaCortesVsaeCui = document.getElementById("cuerpoTablaCortesVsaeCui");
  cuerpoTablaCortesVsaeCui.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
  var tablaCortesVsaeCui = "<table>"; // variable para albergar la tabla

  tablaCortesVsaeCui += "<tr>"; // con esta etiqueta inicializo la fila
  var VACVsaeCui = ((qVsaeCui * bVsaeCui * cVsaeCui) / LVsaeCui) + (- (MBVsaeCui) / LVsaeCui);
  var VDBVsaeCui = - RBVsaeCui;
  VACVsaeCui = VACVsaeCui.toFixed(2);
  VDBVsaeCui = VDBVsaeCui.toFixed(2);
  tablaCortesVsaeCui += "<td>" + VACVsaeCui + "</td>"; // imprimo en la casilla abajo de VAC su valor
  tablaCortesVsaeCui += "<td>" + VDBVsaeCui + "</td>"; // imprimo en la casilla abajo de VDB su valor
  tablaCortesVsaeCui += "</tr>"; // cierro la fila
  tablaCortesVsaeCui += "</table>"; // cierro la tabla
  cuerpoTablaCortesVsaeCui.innerHTML = tablaCortesVsaeCui; // imprimo en html

  // GENERACION DE TABLA DE MOMENTO MAXIMO
  var cuerpoTablaMomentoVsaeCui = document.getElementById("cuerpoTablaMomentoVsaeCui");
  cuerpoTablaMomentoVsaeCui.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
  var tablaMomentoVsaeCui = "<table>"; // variable para albergar la tabla

  tablaMomentoVsaeCui += "<tr>"; // con esta etiqueta inicializo la fila
  var MAVsaeCui = (((qVsaeCui * bVsaeCui * cVsaeCui) / LVsaeCui) + (- (MBVsaeCui) / LVsaeCui)) * 0;
  var MBVsaeCui = - ((qVsaeCui * aVsaeCui * bVsaeCui * cVsaeCui) / (2 * Math.pow(LVsaeCui, 2))) * (LVsaeCui + aVsaeCui - (Math.pow(cVsaeCui, 2) / (4 * bVsaeCui)));
  MAVsaeCui = MAVsaeCui.toFixed(2);
  MBVsaeCui = MBVsaeCui.toFixed(2);
  tablaMomentoVsaeCui += "<td>" + MAVsaeCui + "</td>"; // imprimo en la casilla abajo de MA su valor
  tablaMomentoVsaeCui += "<td>" + MBVsaeCui + "</td>"; // imprimo en la casilla abajo de MB su valor
  tablaMomentoVsaeCui += "</tr>"; // cierro la fila
  tablaMomentoVsaeCui += "</table>"; // cierro la tabla
  cuerpoTablaMomentoVsaeCui.innerHTML = tablaMomentoVsaeCui; // imprimo en html

  // GENERACION DE TABLA PARA EL LISTADO DE SOLICITACIONES

  var xVsaeCui = LVsaeCui * 0.025;
  if (xVsaeCui < 0.05) { // artificio para que no quede x = 0
    xVsaeCui = 0.05;
  }
  xVsaeCui = xVsaeCui.toFixed(1); //redondeo a 1 decimal el valor que va a ir aumentando X de fila a fila
  var numFilasVsaeCui = 1 + Math.trunc(LVsaeCui/xVsaeCui); // 1 es por la fila inicial (X=0)
  var numColumnasVsaeCui = 3;
  var cuerpoTablaListaVsaeCui = document.getElementById("cuerpoTablaListaVsaeCui");

  cuerpoTablaListaVsaeCui.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
  var tabla = "<table>"; // variable para albergar la tabla

  for (var f = 0; f <= numFilasVsaeCui ; f++) { // aca hago correr las numFilas
    tabla += "<tr>"; // con esta etiqueta inicializo la fila
    for (var c = 1; c <= numColumnasVsaeCui; c++) { // aca hago correr las numColumnas
      if (c == 1) { // esta es la columna de las xi
        var xiVsaeCui = xVsaeCui * f;
        xiVsaeCui = xiVsaeCui.toFixed(1); //redondeo a 1 decimal el valor de x que adopta la fila
        if (xiVsaeCui < LVsaeCui) {
          tabla += "<td>" + xiVsaeCui + "</td>";
        } else {
          xiVsaeCui = LVsaeCui;
          f = numFilasVsaeCui;
          tabla += "<td>" + xiVsaeCui + "</td>";
        }
      }
      if (c == 2) { // esta es la columna de el corte
        if (xiVsaeCui >= 0 && xiVsaeCui <= (aVsaeCui - (cVsaeCui / 2))) {
          var CiVsaeCui = ((qVsaeCui * bVsaeCui * cVsaeCui) / LVsaeCui) + ((- ((qVsaeCui * aVsaeCui * bVsaeCui * cVsaeCui) / (2 * Math.pow(LVsaeCui, 2))) * (LVsaeCui + aVsaeCui - (Math.pow(cVsaeCui, 2) / (4 * bVsaeCui)))) / LVsaeCui);
          CiVsaeCui = CiVsaeCui.toFixed(2);
          tabla += "<td>" + CiVsaeCui + "</td>";
        }
        if (xiVsaeCui > (aVsaeCui - (cVsaeCui / 2)) && xiVsaeCui < (aVsaeCui + (cVsaeCui / 2))) {
          var CiVsaeCui = RAVsaeCui - (qVsaeCui * (xiVsaeCui - aVsaeCui + (cVsaeCui / 2)));
          CiVsaeCui = CiVsaeCui.toFixed(2);
          tabla += "<td>" + CiVsaeCui + "</td>";
        }
        if (xiVsaeCui >= (aVsaeCui + (cVsaeCui / 2))) {
          var CiVsaeCui = - RBVsaeCui;
          CiVsaeCui = CiVsaeCui.toFixed(2);
          tabla += "<td>" + CiVsaeCui + "</td>";
        }
      }
      if (c == 3) { // esta es la columna de el momento
        if (xiVsaeCui >= 0 && xiVsaeCui <= (aVsaeCui - (cVsaeCui / 2))) {
          var MBVsaeCui = ((qVsaeCui * aVsaeCui * bVsaeCui * cVsaeCui) / (2 * Math.pow(LVsaeCui, 2))) * (LVsaeCui + aVsaeCui - (Math.pow(cVsaeCui, 2) / (4 * bVsaeCui)));
          var MiVsaeCui = (((qVsaeCui * bVsaeCui * cVsaeCui) / LVsaeCui) + (- (MBVsaeCui) / LVsaeCui)) * xiVsaeCui;
          MiVsaeCui = MiVsaeCui.toFixed(2);
          tabla += "<td>" + MiVsaeCui + "</td>";
        }
        if (xiVsaeCui > (aVsaeCui - (cVsaeCui / 2)) && xiVsaeCui < (aVsaeCui + (cVsaeCui / 2))) {
          var MBVsaeCui = ((qVsaeCui * aVsaeCui * bVsaeCui * cVsaeCui) / (2 * Math.pow(LVsaeCui, 2))) * (LVsaeCui + aVsaeCui - (Math.pow(cVsaeCui, 2) / (4 * bVsaeCui)));
          var MiVsaeCui = ((((qVsaeCui * bVsaeCui * cVsaeCui) / LVsaeCui) + (- (MBVsaeCui) / LVsaeCui)) * xiVsaeCui) - ((qVsaeCui / 2) * Math.pow((xiVsaeCui - aVsaeCui + (cVsaeCui / 2)), 2));
          MiVsaeCui = MiVsaeCui.toFixed(2);
          tabla += "<td>" + MiVsaeCui + "</td>";
        }
        if (xiVsaeCui >= (aVsaeCui + (cVsaeCui / 2))) {
          var MBVsaeCui = - ((qVsaeCui * aVsaeCui * bVsaeCui * cVsaeCui) / (2 * Math.pow(LVsaeCui, 2))) * (LVsaeCui + aVsaeCui - (Math.pow(cVsaeCui, 2) / (4 * bVsaeCui)));
          var RBVsaeCui = ((qVsaeCui * aVsaeCui * cVsaeCui) / LVsaeCui) - (MBVsaeCui / LVsaeCui);
          var MiVsaeCui = (RBVsaeCui * (LVsaeCui - xiVsaeCui)) + MBVsaeCui;
          MiVsaeCui = MiVsaeCui.toFixed(2);
          tabla += "<td>" + MiVsaeCui + "</td>";
        }
      }
    }

    tabla += "</tr>"; // con esta etiqueta finalizo la fila
  }
  tabla += "</table>"; // aca finalizo la tabla
  cuerpoTablaListaVsaeCui.innerHTML = tabla;

}

function calcularReaccionesVsaeCuv() // Viga Simple Apoyada-Empotrada Carga Uniforme en todo el Vano
{
  var LVsaeCuv = document.getElementById("LVsaeCuv");
  LVsaeCuv = parseFloat(LVsaeCuv.value);
  var qVsaeCuv = document.getElementById("qVsaeCuv");
  qVsaeCuv = parseFloat(qVsaeCuv.value);

  // GENERACION DE TABLA DE REACCIONES
  var cuerpoTablaReaccionesVsaeCuv = document.getElementById("cuerpoTablaReaccionesVsaeCuv");
  cuerpoTablaReaccionesVsaeCuv.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
  var tablaReaccionesVsaeCuv = "<table>"; // variable para albergar la tabla

  tablaReaccionesVsaeCuv += "<tr>"; // con esta etiqueta inicializo la fila
  var RAVsaeCuv = 3 * qVsaeCuv * LVsaeCuv / 8;
  var RBVsaeCuv = 5 * qVsaeCuv * LVsaeCuv / 8;
  var MAVsaeCuv = - (qVsaeCuv * 0 * ((3 * LVsaeCuv) - (4 * 0)) / 8);
  var MBVsaeCuv = qVsaeCuv * Math.pow(LVsaeCuv, 2) / 8;
  RAVsaeCuv = RAVsaeCuv.toFixed(2);
  RBVsaeCuv = RBVsaeCuv.toFixed(2);
  MAVsaeCuv = MAVsaeCuv.toFixed(2);
  MBVsaeCuv = MBVsaeCuv.toFixed(2);
  tablaReaccionesVsaeCuv += "<td>" + RAVsaeCuv + "</td>"; // imprimo en la casilla abajo de RA su valor
  tablaReaccionesVsaeCuv += "<td>" + MAVsaeCuv + "</td>"; // imprimo en la casilla abajo de MA su valor
  tablaReaccionesVsaeCuv += "<td>" + RBVsaeCuv + "</td>"; // imprimo en la casilla abajo de RB su valor
  tablaReaccionesVsaeCuv += "<td>" + MBVsaeCuv + "</td>"; // imprimo en la casilla abajo de MB su valor
  tablaReaccionesVsaeCuv += "</tr>"; // cierro la fila
  tablaReaccionesVsaeCuv += "</table>"; // cierro la tabla
  cuerpoTablaReaccionesVsaeCuv.innerHTML = tablaReaccionesVsaeCuv; // imprimo en html

  // GENERACION DE TABLA DE ESFUERZOS DE CORTE
  var cuerpoTablaCortesVsaeCuv = document.getElementById("cuerpoTablaCortesVsaeCuv");
  cuerpoTablaCortesVsaeCuv.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
  var tablaCortesVsaeCuv = "<table>"; // variable para albergar la tabla

  tablaCortesVsaeCuv += "<tr>"; // con esta etiqueta inicializo la fila
  var VAVsaeCuv = 3 * qVsaeCuv * LVsaeCuv / 8;
  var VBVsaeCuv = - (5 * qVsaeCuv * LVsaeCuv / 8);
  VAVsaeCuv = VAVsaeCuv.toFixed(2);
  VBVsaeCuv = VBVsaeCuv.toFixed(2);
  tablaCortesVsaeCuv += "<td>" + VAVsaeCuv + "</td>"; // imprimo en la casilla abajo de VA su valor
  tablaCortesVsaeCuv += "<td>" + VBVsaeCuv + "</td>"; // imprimo en la casilla abajo de VB su valor
  tablaCortesVsaeCuv += "</tr>"; // cierro la fila
  tablaCortesVsaeCuv += "</table>"; // cierro la tabla
  cuerpoTablaCortesVsaeCuv.innerHTML = tablaCortesVsaeCuv; // imprimo en html

  // GENERACION DE TABLA DE MOMENTO MAXIMO
  var cuerpoTablaMomentoVsaeCuv = document.getElementById("cuerpoTablaMomentoVsaeCuv");
  cuerpoTablaMomentoVsaeCuv.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
  var tablaMomentoVsaeCuv = "<table>"; // variable para albergar la tabla

  tablaMomentoVsaeCuv += "<tr>"; // con esta etiqueta inicializo la fila
  var MAVsaeCuv = qVsaeCuv * 0 * ((3 * LVsaeCuv) - (4 * 0)) / 8;
  var MmaxVsaeCuv = 9 * qVsaeCuv * Math.pow(LVsaeCuv, 2) / 128;
  var MBVsaeCuv = - (qVsaeCuv * Math.pow(LVsaeCuv, 2) / 8);
  MAVsaeCuv = MAVsaeCuv.toFixed(2);
  MmaxVsaeCuv = MmaxVsaeCuv.toFixed(2);
  MBVsaeCuv = MBVsaeCuv.toFixed(2);
  tablaMomentoVsaeCuv += "<td>" + MAVsaeCuv + "</td>"; // imprimo en la casilla abajo de MA su valor
  tablaMomentoVsaeCuv += "<td>" + MmaxVsaeCuv + "</td>"; // imprimo en la casilla abajo de Mmax su valor
  tablaMomentoVsaeCuv += "<td>" + MBVsaeCuv + "</td>"; // imprimo en la casilla abajo de MB su valor
  tablaMomentoVsaeCuv += "</tr>"; // cierro la fila
  tablaMomentoVsaeCuv += "</table>"; // cierro la tabla
  cuerpoTablaMomentoVsaeCuv.innerHTML = tablaMomentoVsaeCuv; // imprimo en html

  // GENERACION DE TABLA PARA EL LISTADO DE SOLICITACIONES

  var xVsaeCuv = LVsaeCuv * 0.025;
  if (xVsaeCuv < 0.05) { // artificio para que no quede x = 0
    xVsaeCuv = 0.05;
  }
  xVsaeCuv = xVsaeCuv.toFixed(1); //redondeo a 1 decimal el valor que va a ir aumentando X de fila a fila
  var numFilasVsaeCuv = 1 + Math.trunc(LVsaeCuv/xVsaeCuv); // 1 es por la fila inicial (X=0)
  var numColumnasVsaeCuv = 3;
  var cuerpoTablaListaVsaeCuv = document.getElementById("cuerpoTablaListaVsaeCuv");

  cuerpoTablaListaVsaeCuv.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
  var tabla = "<table>"; // variable para albergar la tabla

  for (var f = 0; f <= numFilasVsaeCuv ; f++) { // aca hago correr las numFilas
    tabla += "<tr>"; // con esta etiqueta inicializo la fila
    for (var c = 1; c <= numColumnasVsaeCuv; c++) { // aca hago correr las numColumnas
      if (c == 1) { // esta es la columna de las xi
        var xiVsaeCuv = xVsaeCuv * f;
        xiVsaeCuv = xiVsaeCuv.toFixed(1); //redondeo a 1 decimal el valor de x que adopta la fila
        if (xiVsaeCuv < LVsaeCuv) {
          tabla += "<td>" + xiVsaeCuv + "</td>";
        } else {
          xiVsaeCuv = LVsaeCuv;
          f = numFilasVsaeCuv;
          tabla += "<td>" + xiVsaeCuv + "</td>";
        }
      }
      if (c == 2) { // esta es la columna de el corte
        var CiVsaeCuv = qVsaeCuv * LVsaeCuv * ((3 / 8) - (xiVsaeCuv / LVsaeCuv));
        CiVsaeCuv = CiVsaeCuv.toFixed(2);
        tabla += "<td>" + CiVsaeCuv + "</td>";
      }
      if (c == 3) { // esta es la columna de el momento
        var MiVsaeCuv = qVsaeCuv * xiVsaeCuv * ((3 * LVsaeCuv) - (4 * xiVsaeCuv)) / 8;
        MiVsaeCuv = MiVsaeCuv.toFixed(2);
        tabla += "<td>" + MiVsaeCuv + "</td>";
      }
    }

    tabla += "</tr>"; // con esta etiqueta finalizo la fila
  }
  tabla += "</table>"; // aca finalizo la tabla
  cuerpoTablaListaVsaeCuv.innerHTML = tabla;

}

function calcularReaccionesVsaeMpi() // Viga Simple Apoyada-Empotrada Momento Puntual Intermedio
{
  var LVsaeMpi = document.getElementById("LVsaeMpi");
  LVsaeMpi = parseFloat(LVsaeMpi.value);
  var aVsaeMpi = document.getElementById("aVsaeMpi");
  aVsaeMpi = parseFloat(aVsaeMpi.value);
  var MVsaeMpi = document.getElementById("MVsaeMpi");
  MVsaeMpi = parseFloat(MVsaeMpi.value);

  // GENERACION DE TABLA DE REACCIONES
  var cuerpoTablaReaccionesVsaeMpi = document.getElementById("cuerpoTablaReaccionesVsaeMpi");
  cuerpoTablaReaccionesVsaeMpi.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
  var tablaReaccionesVsaeMpi = "<table>"; // variable para albergar la tabla

  tablaReaccionesVsaeMpi += "<tr>"; // con esta etiqueta inicializo la fila
  var bVsaeMpi = LVsaeMpi - aVsaeMpi;
  var RAVsaeMpi = 3 * MVsaeMpi * (Math.pow(LVsaeMpi, 2) - Math.pow(aVsaeMpi, 2)) / (2 * Math.pow(LVsaeMpi, 3));
  var RBVsaeMpi = - (3 * MVsaeMpi * (Math.pow(LVsaeMpi, 2) - Math.pow(aVsaeMpi, 2)) / (2 * Math.pow(LVsaeMpi, 3)));
  var MAVsaeMpi = - (3 * MVsaeMpi * 0 * (Math.pow(LVsaeMpi, 2) - Math.pow(aVsaeMpi, 2)) / (2 * Math.pow(LVsaeMpi, 3)));
  var MBVsaeMpi = - (MVsaeMpi * (Math.pow(LVsaeMpi, 2) - (3 * Math.pow(aVsaeMpi, 2))) / (2 * Math.pow(LVsaeMpi, 2)));
  RAVsaeMpi = RAVsaeMpi.toFixed(2);
  RBVsaeMpi = RBVsaeMpi.toFixed(2);
  MAVsaeMpi = MAVsaeMpi.toFixed(2);
  MBVsaeMpi = MBVsaeMpi.toFixed(2);
  tablaReaccionesVsaeMpi += "<td>" + RAVsaeMpi + "</td>"; // imprimo en la casilla abajo de RA su valor
  tablaReaccionesVsaeMpi += "<td>" + MAVsaeMpi + "</td>"; // imprimo en la casilla abajo de MA su valor
  tablaReaccionesVsaeMpi += "<td>" + RBVsaeMpi + "</td>"; // imprimo en la casilla abajo de RB su valor
  tablaReaccionesVsaeMpi += "<td>" + MBVsaeMpi + "</td>"; // imprimo en la casilla abajo de MB su valor
  tablaReaccionesVsaeMpi += "</tr>"; // cierro la fila
  tablaReaccionesVsaeMpi += "</table>"; // cierro la tabla
  cuerpoTablaReaccionesVsaeMpi.innerHTML = tablaReaccionesVsaeMpi; // imprimo en html

  // GENERACION DE TABLA DE ESFUERZOS DE CORTE
  var cuerpoTablaCortesVsaeMpi = document.getElementById("cuerpoTablaCortesVsaeMpi");
  cuerpoTablaCortesVsaeMpi.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
  var tablaCortesVsaeMpi = "<table>"; // variable para albergar la tabla

  tablaCortesVsaeMpi += "<tr>"; // con esta etiqueta inicializo la fila
  var VABVsaeMpi = 3 * MVsaeMpi * (Math.pow(LVsaeMpi, 2) - Math.pow(aVsaeMpi, 2)) / (2 * Math.pow(LVsaeMpi, 3));
  VABVsaeMpi = VABVsaeMpi.toFixed(2);
  tablaCortesVsaeMpi += "<td>" + VABVsaeMpi + "</td>"; // imprimo en la casilla abajo de VAB su valor
  tablaCortesVsaeMpi += "</tr>"; // cierro la fila
  tablaCortesVsaeMpi += "</table>"; // cierro la tabla
  cuerpoTablaCortesVsaeMpi.innerHTML = tablaCortesVsaeMpi; // imprimo en html

  // GENERACION DE TABLA DE MOMENTO MAXIMO
  var cuerpoTablaMomentoVsaeMpi = document.getElementById("cuerpoTablaMomentoVsaeMpi");
  cuerpoTablaMomentoVsaeMpi.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
  var tablaMomentoVsaeMpi = "<table>"; // variable para albergar la tabla

  tablaMomentoVsaeMpi += "<tr>"; // con esta etiqueta inicializo la fila
  var bVsaeMpi = LVsaeMpi - aVsaeMpi;
  var MAVsaeMpi = 3 * MVsaeMpi * 0 * (Math.pow(LVsaeMpi, 2) - Math.pow(aVsaeMpi, 2)) / (2 * Math.pow(LVsaeMpi, 3));
  var MCizqVsaeMpi = (3 * MVsaeMpi * (Math.pow(LVsaeMpi, 2) - Math.pow(aVsaeMpi, 2)) / (2 * Math.pow(LVsaeMpi, 3))) * aVsaeMpi;
  var MCderVsaeMpi = ((3 * MVsaeMpi * (Math.pow(LVsaeMpi, 2) - Math.pow(aVsaeMpi, 2)) / (2 * Math.pow(LVsaeMpi, 3))) * aVsaeMpi) - MVsaeMpi;
  var MBVsaeMpi = MVsaeMpi * (Math.pow(LVsaeMpi, 2) - (3 * Math.pow(aVsaeMpi, 2))) / (2 * Math.pow(LVsaeMpi, 2));
  MAVsaeMpi = MAVsaeMpi.toFixed(2);
  MCizqVsaeMpi = MCizqVsaeMpi.toFixed(2);
  MCderVsaeMpi = MCderVsaeMpi.toFixed(2);
  MBVsaeMpi = MBVsaeMpi.toFixed(2);
  tablaMomentoVsaeMpi += "<td>" + MAVsaeMpi + "</td>"; // imprimo en la casilla abajo de MA su valor
  tablaMomentoVsaeMpi += "<td>" + MCizqVsaeMpi + "</td>"; // imprimo en la casilla abajo de MCizq su valor
  tablaMomentoVsaeMpi += "<td>" + MCderVsaeMpi + "</td>"; // imprimo en la casilla abajo de MCder su valor
  tablaMomentoVsaeMpi += "<td>" + MBVsaeMpi + "</td>"; // imprimo en la casilla abajo de MB su valor
  tablaMomentoVsaeMpi += "</tr>"; // cierro la fila
  tablaMomentoVsaeMpi += "</table>"; // cierro la tabla
  cuerpoTablaMomentoVsaeMpi.innerHTML = tablaMomentoVsaeMpi; // imprimo en html

  // GENERACION DE TABLA PARA EL LISTADO DE SOLICITACIONES

  var xVsaeMpi = LVsaeMpi * 0.025;
  if (xVsaeMpi < 0.05) { // artificio para que no quede x = 0
    xVsaeMpi = 0.05;
  }
  xVsaeMpi = xVsaeMpi.toFixed(1); //redondeo a 1 decimal el valor que va a ir aumentando X de fila a fila
  var numFilasVsaeMpi = 1 + Math.trunc(LVsaeMpi/xVsaeMpi); // 1 es por la fila inicial (X=0)
  var numColumnasVsaeMpi = 3;
  var cuerpoTablaListaVsaeMpi = document.getElementById("cuerpoTablaListaVsaeMpi");

  cuerpoTablaListaVsaeMpi.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
  var tabla = "<table>"; // variable para albergar la tabla

  for (var f = 0; f <= numFilasVsaeMpi ; f++) { // aca hago correr las numFilas
    tabla += "<tr>"; // con esta etiqueta inicializo la fila
    for (var c = 1; c <= numColumnasVsaeMpi; c++) { // aca hago correr las numColumnas
      if (c == 1) { // esta es la columna de las xi
        var xiVsaeMpi = xVsaeMpi * f;
        xiVsaeMpi = xiVsaeMpi.toFixed(1); //redondeo a 1 decimal el valor de x que adopta la fila
        if (xiVsaeMpi < LVsaeMpi) {
          tabla += "<td>" + xiVsaeMpi + "</td>";
        } else {
          xiVsaeMpi = LVsaeMpi;
          f = numFilasVsaeMpi;
          tabla += "<td>" + xiVsaeMpi + "</td>";
        }
      }
      if (c == 2) { // esta es la columna de el corte
        if (xiVsaeMpi >= 0 && xiVsaeMpi <= LVsaeMpi) {
          var CiVsaeMpi = 3 * MVsaeMpi * (Math.pow(LVsaeMpi, 2) - Math.pow(aVsaeMpi, 2)) / (2 * Math.pow(LVsaeMpi, 3));
          CiVsaeMpi = CiVsaeMpi.toFixed(2);
          tabla += "<td>" + CiVsaeMpi + "</td>";
        }
      }
      if (c == 3) { // esta es la columna de el momento
        if (xiVsaeMpi >= 0 && xiVsaeMpi < aVsaeMpi) {
          var MiVsaeMpi = 3 * MVsaeMpi * xiVsaeMpi * (Math.pow(LVsaeMpi, 2) - Math.pow(aVsaeMpi, 2)) / (2 * Math.pow(LVsaeMpi, 3));
          MiVsaeMpi = MiVsaeMpi.toFixed(2);
          tabla += "<td>" + MiVsaeMpi + "</td>";
        }
        if (xiVsaeMpi == aVsaeMpi) {
          var MiizqVsaeMpi = (3 * MVsaeMpi * (Math.pow(LVsaeMpi, 2) - Math.pow(aVsaeMpi, 2)) / (2 * Math.pow(LVsaeMpi, 3))) * aVsaeMpi;
          var MiderVsaeMpi = ((3 * MVsaeMpi * (Math.pow(LVsaeMpi, 2) - Math.pow(aVsaeMpi, 2)) / (2 * Math.pow(LVsaeMpi, 3))) * aVsaeMpi) - MVsaeMpi;
          MiizqVsaeMpi = MiizqVsaeMpi.toFixed(2);
          MiderVsaeMpi = MiderVsaeMpi.toFixed(2);
          tabla += "<td>" + MiizqVsaeMpi + " / " + MiderVsaeMpi + "</td>";
        }
        if (xiVsaeMpi > aVsaeMpi) {
          var MiVsaeMpi = MVsaeMpi * ((3 * xiVsaeMpi * (1 - (Math.pow(aVsaeMpi, 2) / Math.pow(LVsaeMpi, 2))) / LVsaeMpi) - 2) / 2;
          MiVsaeMpi = MiVsaeMpi.toFixed(2);
          tabla += "<td>" + MiVsaeMpi + "</td>";
        }
      }
    }

    tabla += "</tr>"; // con esta etiqueta finalizo la fila
  }
  tabla += "</table>"; // aca finalizo la tabla
  cuerpoTablaListaVsaeMpi.innerHTML = tabla;

}

function calcularReaccionesVsaeMpe() // Viga Simple Apoyada-Empotrada Momento Puntual en un Extremo
{
  var LVsaeMpe = document.getElementById("LVsaeMpe");
  LVsaeMpe = parseFloat(LVsaeMpe.value);
  var MVsaeMpe = document.getElementById("MVsaeMpe");
  MVsaeMpe = parseFloat(MVsaeMpe.value);

  // GENERACION DE TABLA DE REACCIONES
  var cuerpoTablaReaccionesVsaeMpe = document.getElementById("cuerpoTablaReaccionesVsaeMpe");
  cuerpoTablaReaccionesVsaeMpe.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
  var tablaReaccionesVsaeMpe = "<table>"; // variable para albergar la tabla

  tablaReaccionesVsaeMpe += "<tr>"; // con esta etiqueta inicializo la fila
  var RAVsaeMpe = 3 * MVsaeMpe / (2 * LVsaeMpe);
  var RBVsaeMpe = - (3 * MVsaeMpe / (2 * LVsaeMpe));
  var MAVsaeMpe = - (MVsaeMpe * ((3 * 0 / LVsaeMpe) - 2) / 2);
  var MBVsaeMpe = - (MVsaeMpe / 2);
  RAVsaeMpe = RAVsaeMpe.toFixed(2);
  RBVsaeMpe = RBVsaeMpe.toFixed(2);
  MAVsaeMpe = MAVsaeMpe.toFixed(2);
  MBVsaeMpe = MBVsaeMpe.toFixed(2);
  tablaReaccionesVsaeMpe += "<td>" + RAVsaeMpe + "</td>"; // imprimo en la casilla abajo de RA su valor
  tablaReaccionesVsaeMpe += "<td>" + MAVsaeMpe + "</td>"; // imprimo en la casilla abajo de MA su valor
  tablaReaccionesVsaeMpe += "<td>" + RBVsaeMpe + "</td>"; // imprimo en la casilla abajo de RB su valor
  tablaReaccionesVsaeMpe += "<td>" + MBVsaeMpe + "</td>"; // imprimo en la casilla abajo de MB su valor
  tablaReaccionesVsaeMpe += "</tr>"; // cierro la fila
  tablaReaccionesVsaeMpe += "</table>"; // cierro la tabla
  cuerpoTablaReaccionesVsaeMpe.innerHTML = tablaReaccionesVsaeMpe; // imprimo en html

  // GENERACION DE TABLA DE ESFUERZOS DE CORTE
  var cuerpoTablaCortesVsaeMpe = document.getElementById("cuerpoTablaCortesVsaeMpe");
  cuerpoTablaCortesVsaeMpe.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
  var tablaCortesVsaeMpe = "<table>"; // variable para albergar la tabla

  tablaCortesVsaeMpe += "<tr>"; // con esta etiqueta inicializo la fila
  var VABVsaeMpe = 3 * MVsaeMpe / (2 * LVsaeMpe);
  VABVsaeMpe = VABVsaeMpe.toFixed(2);
  tablaCortesVsaeMpe += "<td>" + VABVsaeMpe + "</td>"; // imprimo en la casilla abajo de VAB su valor
  tablaCortesVsaeMpe += "</tr>"; // cierro la fila
  tablaCortesVsaeMpe += "</table>"; // cierro la tabla
  cuerpoTablaCortesVsaeMpe.innerHTML = tablaCortesVsaeMpe; // imprimo en html

  // GENERACION DE TABLA DE MOMENTO MAXIMO
  var cuerpoTablaMomentoVsaeMpe = document.getElementById("cuerpoTablaMomentoVsaeMpe");
  cuerpoTablaMomentoVsaeMpe.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
  var tablaMomentoVsaeMpe = "<table>"; // variable para albergar la tabla

  tablaMomentoVsaeMpe += "<tr>"; // con esta etiqueta inicializo la fila
  var MAVsaeMpe = MVsaeMpe * ((3 * 0 / LVsaeMpe) - 2) / 2;
  var MBVsaeMpe = MVsaeMpe / 2;
  MAVsaeMpe = MAVsaeMpe.toFixed(2);
  MBVsaeMpe = MBVsaeMpe.toFixed(2);
  tablaMomentoVsaeMpe += "<td>" + MAVsaeMpe + "</td>"; // imprimo en la casilla abajo de MA su valor
  tablaMomentoVsaeMpe += "<td>" + MBVsaeMpe + "</td>"; // imprimo en la casilla abajo de MB su valor
  tablaMomentoVsaeMpe += "</tr>"; // cierro la fila
  tablaMomentoVsaeMpe += "</table>"; // cierro la tabla
  cuerpoTablaMomentoVsaeMpe.innerHTML = tablaMomentoVsaeMpe; // imprimo en html

  // GENERACION DE TABLA PARA EL LISTADO DE SOLICITACIONES

  var xVsaeMpe = LVsaeMpe * 0.025;
  if (xVsaeMpe < 0.05) { // artificio para que no quede x = 0
    xVsaeMpe = 0.05;
  }
  xVsaeMpe = xVsaeMpe.toFixed(1); //redondeo a 1 decimal el valor que va a ir aumentando X de fila a fila
  var numFilasVsaeMpe = 1 + Math.trunc(LVsaeMpe / xVsaeMpe); // 1 es por la fila inicial (X=0)
  var numColumnasVsaeMpe = 3;
  var cuerpoTablaListaVsaeMpe = document.getElementById("cuerpoTablaListaVsaeMpe");

  cuerpoTablaListaVsaeMpe.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
  var tabla = "<table>"; // variable para albergar la tabla

  for (var f = 0; f <= numFilasVsaeMpe; f++) { // aca hago correr las numFilas
    tabla += "<tr>"; // con esta etiqueta inicializo la fila
    for (var c = 1; c <= numColumnasVsaeMpe; c++) { // aca hago correr las numColumnas
      if (c == 1) { // esta es la columna de las xi
        var xiVsaeMpe = xVsaeMpe * f;
        xiVsaeMpe = xiVsaeMpe.toFixed(1); //redondeo a 1 decimal el valor de x que adopta la fila
        if (xiVsaeMpe < LVsaeMpe) {
          tabla += "<td>" + xiVsaeMpe + "</td>";
        } else {
          xiVsaeMpe = LVsaeMpe;
          f = numFilasVsaeMpe;
          tabla += "<td>" + xiVsaeMpe + "</td>";
        }
      }
      if (c == 2) { // esta es la columna de el corte
        if (xiVsaeMpe >= 0 && xiVsaeMpe <= LVsaeMpe) {
          var CiVsaeMpe = 3 * MVsaeMpe / (2 * LVsaeMpe);
          CiVsaeMpe = CiVsaeMpe.toFixed(2);
          tabla += "<td>" + CiVsaeMpe + "</td>";
        }
      }
      if (c == 3) { // esta es la columna de el momento
        if (xiVsaeMpe >= 0 && xiVsaeMpe <= LVsaeMpe) {
          var MiVsaeMpe = MVsaeMpe * ((3 * xiVsaeMpe / LVsaeMpe) - 2) / 2;
          MiVsaeMpe = MiVsaeMpe.toFixed(2);
          tabla += "<td>" + MiVsaeMpe + "</td>";
        }
      }

    }
    tabla += "</tr>"; // con esta etiqueta finalizo la fila
  }
  tabla += "</table>"; // aca finalizo la tabla
  cuerpoTablaListaVsaeMpe.innerHTML = tabla;

}

// botones de calcular de las distintas cargas VSAE

var calcularVsaeCpg = document.getElementById("calcularVsaeCpg");
calcularVsaeCpg.addEventListener ("click", calcularReaccionesVsaeCpg);

var calcularVsaeCpc = document.getElementById("calcularVsaeCpc");
calcularVsaeCpc.addEventListener ("click", calcularReaccionesVsaeCpc);

var calcularVsaeCps = document.getElementById("calcularVsaeCps");
calcularVsaeCps.addEventListener ("click", calcularReaccionesVsaeCps);

var calcularVsaeCui = document.getElementById("calcularVsaeCui");
calcularVsaeCui.addEventListener ("click", calcularReaccionesVsaeCui);

var calcularVsaeCuv = document.getElementById("calcularVsaeCuv");
calcularVsaeCuv.addEventListener ("click", calcularReaccionesVsaeCuv);

var calcularVsaeMpi = document.getElementById("calcularVsaeMpi");
calcularVsaeMpi.addEventListener ("click", calcularReaccionesVsaeMpi);

var calcularVsaeMpe = document.getElementById("calcularVsaeMpe");
calcularVsaeMpe.addEventListener ("click", calcularReaccionesVsaeMpe);

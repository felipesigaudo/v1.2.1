
var resultado = document.getElementById("resultado"); // ??

// funcion para el boton de "Descargar en PDF"

function generatePDF() {
  const element = document.getElementById("container");

  html2pdf()
    .from(element)
    .save();
}

// funciones de calcular de las distintas cargas VSE

function calcularReaccionesVseCpg() // Viga Simple Empotrada Carga Puntual Generica
{
    var LVseCpg = document.getElementById("LVseCpg");
    LVseCpg = parseFloat(LVseCpg.value);
    var aVseCpg = document.getElementById("aVseCpg");
    aVseCpg = parseFloat(aVseCpg.value);
    var FVseCpg = document.getElementById("FVseCpg");
    FVseCpg = parseFloat(FVseCpg.value);

    // GENERACION DE TABLA DE REACCIONES
    var cuerpoTablaReaccionesVseCpg = document.getElementById("cuerpoTablaReaccionesVseCpg");
    cuerpoTablaReaccionesVseCpg.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
    var tablaReaccionesVseCpg = "<table>"; // variable para albergar la tabla

    tablaReaccionesVseCpg += "<tr>"; // con esta etiqueta inicializo la fila
    var bVseCpg = LVseCpg - aVseCpg;
    var RAVseCpg = FVseCpg * Math.pow (bVseCpg, 2) * (LVseCpg + 2 * aVseCpg) / Math.pow (LVseCpg, 3);
    var RBVseCpg = FVseCpg * Math.pow (aVseCpg, 2) * (LVseCpg + 2 * bVseCpg) / Math.pow (LVseCpg, 3);
    var MAVseCpg = (FVseCpg * aVseCpg * Math.pow (bVseCpg, 2) / Math.pow (LVseCpg, 2));
    var MBVseCpg = (FVseCpg * bVseCpg * Math.pow (aVseCpg, 2) / Math.pow (LVseCpg, 2));
    RAVseCpg = RAVseCpg.toFixed(2);
    RBVseCpg = RBVseCpg.toFixed(2);
    MAVseCpg = MAVseCpg.toFixed(2);
    MBVseCpg = MBVseCpg.toFixed(2);
    tablaReaccionesVseCpg += "<td>" + RAVseCpg + "</td>"; // imprimo en la casilla abajo de RA su valor
    tablaReaccionesVseCpg += "<td>" + MAVseCpg + "</td>"; // imprimo en la casilla abajo de MA su valor
    tablaReaccionesVseCpg += "<td>" + RBVseCpg + "</td>"; // imprimo en la casilla abajo de RB su valor
    tablaReaccionesVseCpg += "<td>" + MBVseCpg + "</td>"; // imprimo en la casilla abajo de MB su valor
    tablaReaccionesVseCpg += "</tr>"; // cierro la fila
    tablaReaccionesVseCpg += "</table>"; // cierro la tabla
    cuerpoTablaReaccionesVseCpg.innerHTML = tablaReaccionesVseCpg; // imprimo en html

    // GENERACION DE TABLA DE ESFUERZOS DE CORTE
    var cuerpoTablaCortesVseCpg = document.getElementById("cuerpoTablaCortesVseCpg");
    cuerpoTablaCortesVseCpg.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
    var tablaCortesVseCpg = "<table>"; // variable para albergar la tabla

    tablaCortesVseCpg += "<tr>"; // con esta etiqueta inicializo la fila
    var VACVseCpg = FVseCpg * Math.pow (bVseCpg, 2) * (LVseCpg + 2 * aVseCpg) / Math.pow (LVseCpg, 3);
    var VCBVseCpg = - (FVseCpg * Math.pow (aVseCpg, 2) * (LVseCpg + 2 * bVseCpg) / Math.pow (LVseCpg, 3));
    VACVseCpg = VACVseCpg.toFixed(2);
    VCBVseCpg = VCBVseCpg.toFixed(2);
    tablaCortesVseCpg += "<td>" + VACVseCpg + "</td>"; // imprimo en la casilla abajo de VAC su valor
    tablaCortesVseCpg += "<td>" + VCBVseCpg + "</td>"; // imprimo en la casilla abajo de VCB su valor
    tablaCortesVseCpg += "</tr>"; // cierro la fila
    tablaCortesVseCpg += "</table>"; // cierro la tabla
    cuerpoTablaCortesVseCpg.innerHTML = tablaCortesVseCpg; // imprimo en html

    // GENERACION DE TABLA DE MOMENTO MAXIMO
    var cuerpoTablaMomentoVseCpg = document.getElementById("cuerpoTablaMomentoVseCpg");
    cuerpoTablaMomentoVseCpg.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
    var tablaMomentoVseCpg = "<table>"; // variable para albergar la tabla

    tablaMomentoVseCpg += "<tr>"; // con esta etiqueta inicializo la fila
    var MAVseCpg = - (FVseCpg * aVseCpg * Math.pow (bVseCpg, 2) / Math.pow (LVseCpg, 2));
    var MCVseCpg = 2 * FVseCpg * Math.pow (aVseCpg, 2) * Math.pow (bVseCpg, 2) / Math.pow (LVseCpg, 3);
    var MBVseCpg = - (FVseCpg * bVseCpg * Math.pow (aVseCpg, 2) / Math.pow (LVseCpg, 2));
    MAVseCpg = MAVseCpg.toFixed(2);
    MCVseCpg = MCVseCpg.toFixed(2);
    MBVseCpg = MBVseCpg.toFixed(2);
    tablaMomentoVseCpg += "<td>" + MAVseCpg + "</td>"; // imprimo en la casilla abajo de MA su valor
    tablaMomentoVseCpg += "<td>" + MCVseCpg + "</td>"; // imprimo en la casilla abajo de MC su valor
    tablaMomentoVseCpg += "<td>" + MBVseCpg + "</td>"; // imprimo en la casilla abajo de MB su valor
    tablaMomentoVseCpg += "</tr>"; // cierro la fila
    tablaMomentoVseCpg += "</table>"; // cierro la tabla
    cuerpoTablaMomentoVseCpg.innerHTML = tablaMomentoVseCpg; // imprimo en html

    // GENERACION DE TABLA PARA EL LISTADO DE SOLICITACIONES

    var xVseCpg = LVseCpg * 0.025;
    if (xVseCpg < 0.05) { // artificio para que no quede x = 0
      xVseCpg = 0.05;
    }
    xVseCpg = xVseCpg.toFixed(1); //redondeo a 1 decimal el valor que va a ir aumentando X de fila a fila
    var numFilasVseCpg = 1 + Math.trunc(LVseCpg/xVseCpg); // 1 es por la fila inicial (X=0)
    var numColumnasVseCpg = 3;
    var cuerpoTablaListaVseCpg = document.getElementById("cuerpoTablaListaVseCpg");

    cuerpoTablaListaVseCpg.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
    var tabla = "<table>"; // variable para albergar la tabla

    for (var f = 0; f <= numFilasVseCpg ; f++) { // aca hago correr las numFilas
        tabla += "<tr>"; // con esta etiqueta inicializo la fila
        for (var c = 1; c <= numColumnasVseCpg; c++) { // aca hago correr las numColumnas
          if (c == 1) { // esta es la columna de las xi
            var xiVseCpg = xVseCpg * f;
            xiVseCpg = xiVseCpg.toFixed(1); //redondeo a 1 decimal el valor de x que adopta la fila
            if (xiVseCpg < LVseCpg) {
              tabla += "<td>" + xiVseCpg + "</td>";
            } else {
              xiVseCpg = LVseCpg;
              f = numFilasVseCpg;
              tabla += "<td>" + xiVseCpg + "</td>";
            }
          }
          if (c == 2) { // esta es la columna de el corte
            if (xiVseCpg <= aVseCpg) {
              var CiVseCpg = FVseCpg * Math.pow (bVseCpg, 2) * (LVseCpg + 2 * aVseCpg) / Math.pow (LVseCpg, 3);
              CiVseCpg = CiVseCpg.toFixed(2);
              tabla += "<td>" + CiVseCpg + "</td>";
            }
            if (xiVseCpg > aVseCpg) {
              var CiVseCpg = - (FVseCpg * Math.pow (aVseCpg, 2) * (LVseCpg + 2 * bVseCpg) / Math.pow (LVseCpg, 3));
              CiVseCpg = CiVseCpg.toFixed(2);
              tabla += "<td>" + CiVseCpg + "</td>";
            }
          }
          if (c == 3) { // esta es la columna de el momento
            if (xiVseCpg <= aVseCpg) {
              var MiVseCpg = FVseCpg * Math.pow (bVseCpg, 2) * (LVseCpg * xiVseCpg + 2 * aVseCpg * xiVseCpg - aVseCpg * LVseCpg) / Math.pow (LVseCpg, 3);
              MiVseCpg = MiVseCpg.toFixed(2);
              tabla += "<td>" + MiVseCpg + "</td>";
            }
            if (xiVseCpg > aVseCpg) {
              var MiVseCpg = FVseCpg * Math.pow (aVseCpg, 2) * (LVseCpg * bVseCpg + Math.pow (LVseCpg, 2) - LVseCpg * xiVseCpg - 2 * bVseCpg * xiVseCpg) / Math.pow (LVseCpg, 3);
              MiVseCpg = MiVseCpg.toFixed(2);
              tabla += "<td>" + MiVseCpg + "</td>";
            }
          }

        }

        tabla += "</tr>"; // con esta etiqueta finalizo la fila
    }
    tabla += "</table>"; // aca finalizo la tabla
    cuerpoTablaListaVseCpg.innerHTML = tabla;

}

function calcularReaccionesVseCpc() // Viga Simple Empotrada Carga Puntual Centrada
{
  var LVseCpc = document.getElementById("LVseCpc");
  LVseCpc = parseFloat(LVseCpc.value);
  var FVseCpc = document.getElementById("FVseCpc");
  FVseCpc = parseFloat(FVseCpc.value);

  // GENERACION DE TABLA DE REACCIONES
  var cuerpoTablaReaccionesVseCpc = document.getElementById("cuerpoTablaReaccionesVseCpc");
  cuerpoTablaReaccionesVseCpc.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
  var tablaReaccionesVseCpc = "<table>"; // variable para albergar la tabla

  tablaReaccionesVseCpc += "<tr>"; // con esta etiqueta inicializo la fila
  var RAVseCpc = FVseCpc / 2;
  var RBVseCpc = FVseCpc / 2;
  var MAVseCpc = (FVseCpc * LVseCpc / 8);
  var MBVseCpc = (FVseCpc * LVseCpc / 8);
  RAVseCpc = RAVseCpc.toFixed(2);
  RBVseCpc = RBVseCpc.toFixed(2);
  MAVseCpc = MAVseCpc.toFixed(2);
  MBVseCpc = MBVseCpc.toFixed(2);
  tablaReaccionesVseCpc += "<td>" + RAVseCpc + "</td>"; // imprimo en la casilla abajo de RA su valor
  tablaReaccionesVseCpc += "<td>" + MAVseCpc + "</td>"; // imprimo en la casilla abajo de MA su valor
  tablaReaccionesVseCpc += "<td>" + RBVseCpc + "</td>"; // imprimo en la casilla abajo de RB su valor
  tablaReaccionesVseCpc += "<td>" + MBVseCpc + "</td>"; // imprimo en la casilla abajo de MB su valor
  tablaReaccionesVseCpc += "</tr>"; // cierro la fila
  tablaReaccionesVseCpc += "</table>"; // cierro la tabla
  cuerpoTablaReaccionesVseCpc.innerHTML = tablaReaccionesVseCpc; // imprimo en html

  // GENERACION DE TABLA DE ESFUERZOS DE CORTE
  var cuerpoTablaCortesVseCpc = document.getElementById("cuerpoTablaCortesVseCpc");
  cuerpoTablaCortesVseCpc.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
  var tablaCortesVseCpc = "<table>"; // variable para albergar la tabla

  tablaCortesVseCpc += "<tr>"; // con esta etiqueta inicializo la fila
  var VACVseCpc = FVseCpc / 2;
  var VCBVseCpc = - (FVseCpc / 2);
  VACVseCpc = VACVseCpc.toFixed(2);
  VCBVseCpc = VCBVseCpc.toFixed(2);
  tablaCortesVseCpc += "<td>" + VACVseCpc + "</td>"; // imprimo en la casilla abajo de VAC su valor
  tablaCortesVseCpc += "<td>" + VCBVseCpc + "</td>"; // imprimo en la casilla abajo de VCB su valor
  tablaCortesVseCpc += "</tr>"; // cierro la fila
  tablaCortesVseCpc += "</table>"; // cierro la tabla
  cuerpoTablaCortesVseCpc.innerHTML = tablaCortesVseCpc; // imprimo en html

  // GENERACION DE TABLA DE MOMENTO MAXIMO
  var cuerpoTablaMomentoVseCpc = document.getElementById("cuerpoTablaMomentoVseCpc");
  cuerpoTablaMomentoVseCpc.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
  var tablaMomentoVseCpc = "<table>"; // variable para albergar la tabla

  tablaMomentoVseCpc += "<tr>"; // con esta etiqueta inicializo la fila
  var MAVseCpc = - (FVseCpc * LVseCpc / 8);
  var MCVseCpc = FVseCpc * LVseCpc / 8
  var MBVseCpc = - (FVseCpc * LVseCpc / 8);
  MAVseCpc = MAVseCpc.toFixed(2);
  MCVseCpc = MCVseCpc.toFixed(2);
  MBVseCpc = MBVseCpc.toFixed(2);
  tablaMomentoVseCpc += "<td>" + MAVseCpc + "</td>"; // imprimo en la casilla abajo de MA su valor
  tablaMomentoVseCpc += "<td>" + MCVseCpc + "</td>"; // imprimo en la casilla abajo de MC su valor
  tablaMomentoVseCpc += "<td>" + MBVseCpc + "</td>"; // imprimo en la casilla abajo de MB su valor
  tablaMomentoVseCpc += "</tr>"; // cierro la fila
  tablaMomentoVseCpc += "</table>"; // cierro la tabla
  cuerpoTablaMomentoVseCpc.innerHTML = tablaMomentoVseCpc; // imprimo en html

  // GENERACION DE TABLA PARA EL LISTADO DE SOLICITACIONES

  var xVseCpc = LVseCpc * 0.025;
  if (xVseCpc < 0.05) { // artificio para que no quede x = 0
    xVseCpc = 0.05;
  }
  xVseCpc = xVseCpc.toFixed(1); //redondeo a 1 decimal el valor que va a ir aumentando X de fila a fila
  var numFilasVseCpc = 1 + Math.trunc(LVseCpc/xVseCpc); // 1 es por la fila inicial (X=0)
  var numColumnasVseCpc = 3;
  var cuerpoTablaListaVseCpc = document.getElementById("cuerpoTablaListaVseCpc");

  cuerpoTablaListaVseCpc.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
  var tabla = "<table>"; // variable para albergar la tabla

  for (var f = 0; f <= numFilasVseCpc ; f++) { // aca hago correr las numFilas
      tabla += "<tr>"; // con esta etiqueta inicializo la fila
      for (var c = 1; c <= numColumnasVseCpc; c++) { // aca hago correr las numColumnas
        if (c == 1) { // esta es la columna de las xi
          var xiVseCpc = xVseCpc * f;
          xiVseCpc = xiVseCpc.toFixed(1); //redondeo a 1 decimal el valor de x que adopta la fila
          if (xiVseCpc < LVseCpc) {
            tabla += "<td>" + xiVseCpc + "</td>";
          } else {
            xiVseCpc = LVseCpc;
            f = numFilasVseCpc;
            tabla += "<td>" + xiVseCpc + "</td>";
          }
        }
        if (c == 2) { // esta es la columna de el corte
          if (xiVseCpc <= LVseCpc / 2) {
            var CiVseCpc = FVseCpc / 2 ;
            CiVseCpc = CiVseCpc.toFixed(2);
            tabla += "<td>" + CiVseCpc + "</td>";
          }
          if (xiVseCpc > LVseCpc / 2) {
            var CiVseCpc = - (FVseCpc / 2) ;
            CiVseCpc = CiVseCpc.toFixed(2);
            tabla += "<td>" + CiVseCpc + "</td>";
          }
        }
        if (c == 3) { // esta es la columna de el momento
          if (xiVseCpc <= LVseCpc / 2) {
            var MiVseCpc = FVseCpc * LVseCpc * ((4 * xiVseCpc / LVseCpc) - 1) / 8;
            MiVseCpc = MiVseCpc.toFixed(2);
            tabla += "<td>" + MiVseCpc + "</td>";
          }
          if (xiVseCpc > LVseCpc / 2) {
            var MiVseCpc = FVseCpc * LVseCpc * (3 - (4 * xiVseCpc / LVseCpc)) / 8;
            MiVseCpc = MiVseCpc.toFixed(2);
            tabla += "<td>" + MiVseCpc + "</td>";
          }
        }

      }

      tabla += "</tr>"; // con esta etiqueta finalizo la fila
  }
  tabla += "</table>"; // aca finalizo la tabla
  cuerpoTablaListaVseCpc.innerHTML = tabla;

}

function calcularReaccionesVseCps() // Viga Simple Empotrada Cargas Puntuales Simetricas
{
    var LVseCps = document.getElementById("LVseCps");
    LVseCps = parseFloat(LVseCps.value);
    var aVseCps = document.getElementById("aVseCps");
    aVseCps = parseFloat(aVseCps.value);
    var FVseCps = document.getElementById("FVseCps");
    FVseCps = parseFloat(FVseCps.value);

    // GENERACION DE TABLA DE REACCIONES
    var cuerpoTablaReaccionesVseCps = document.getElementById("cuerpoTablaReaccionesVseCps");
    cuerpoTablaReaccionesVseCps.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
    var tablaReaccionesVseCps = "<table>"; // variable para albergar la tabla

    tablaReaccionesVseCps += "<tr>"; // con esta etiqueta inicializo la fila
    var RAVseCps = FVseCps;
    var RBVseCps = FVseCps;
    var MAVseCps = (FVseCps * aVseCps * (LVseCps - aVseCps) / LVseCps);
    var MBVseCps = (FVseCps * aVseCps * (LVseCps - aVseCps) / LVseCps);
    RAVseCps = RAVseCps.toFixed(2);
    RBVseCps = RBVseCps.toFixed(2);
    MAVseCps = MAVseCps.toFixed(2);
    MBVseCps = MBVseCps.toFixed(2);
    tablaReaccionesVseCps += "<td>" + RAVseCps + "</td>"; // imprimo en la casilla abajo de RA su valor
    tablaReaccionesVseCps += "<td>" + MAVseCps + "</td>"; // imprimo en la casilla abajo de MA su valor
    tablaReaccionesVseCps += "<td>" + RBVseCps + "</td>"; // imprimo en la casilla abajo de RB su valor
    tablaReaccionesVseCps += "<td>" + MBVseCps + "</td>"; // imprimo en la casilla abajo de MB su valor
    tablaReaccionesVseCps += "</tr>"; // cierro la fila
    tablaReaccionesVseCps += "</table>"; // cierro la tabla
    cuerpoTablaReaccionesVseCps.innerHTML = tablaReaccionesVseCps; // imprimo en html

    // GENERACION DE TABLA DE ESFUERZOS DE CORTE
    var cuerpoTablaCortesVseCps = document.getElementById("cuerpoTablaCortesVseCps");
    cuerpoTablaCortesVseCps.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
    var tablaCortesVseCps = "<table>"; // variable para albergar la tabla

    tablaCortesVseCps += "<tr>"; // con esta etiqueta inicializo la fila
    var VACVseCps = FVseCps;
    var VCDVseCps = 0;
    var VDBVseCps = - (FVseCps);
    VACVseCps = VACVseCps.toFixed(2);
    VCDVseCps = VCDVseCps.toFixed(2);
    VDBVseCps = VDBVseCps.toFixed(2);
    tablaCortesVseCps += "<td>" + VACVseCps + "</td>"; // imprimo en la casilla abajo de VAC su valor
    tablaCortesVseCps += "<td>" + VCDVseCps + "</td>"; // imprimo en la casilla abajo de VCD su valor
    tablaCortesVseCps += "<td>" + VDBVseCps + "</td>"; // imprimo en la casilla abajo de VDB su valor
    tablaCortesVseCps += "</tr>"; // cierro la fila
    tablaCortesVseCps += "</table>"; // cierro la tabla
    cuerpoTablaCortesVseCps.innerHTML = tablaCortesVseCps; // imprimo en html

    // GENERACION DE TABLA DE MOMENTO MAXIMO
    var cuerpoTablaMomentoVseCps = document.getElementById("cuerpoTablaMomentoVseCps");
    cuerpoTablaMomentoVseCps.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
    var tablaMomentoVseCps = "<table>"; // variable para albergar la tabla

    tablaMomentoVseCps += "<tr>"; // con esta etiqueta inicializo la fila
    var MAVseCps = - (FVseCps * aVseCps * (LVseCps - aVseCps) / LVseCps);
    var MBVseCps = - (FVseCps * aVseCps * (LVseCps - aVseCps) / LVseCps);
    var MCDVseCps = FVseCps * Math.pow(aVseCps, 2) / LVseCps;
    MAVseCps = MAVseCps.toFixed(2);
    MBVseCps = MBVseCps.toFixed(2);
    MCDVseCps = MCDVseCps.toFixed(2);
    tablaMomentoVseCps += "<td>" + MAVseCps + "</td>"; // imprimo en la casilla abajo de Mmax su valor
    tablaMomentoVseCps += "<td>" + MCDVseCps + "</td>"; // imprimo en la casilla abajo de Mmax su valor
    tablaMomentoVseCps += "<td>" + MBVseCps + "</td>"; // imprimo en la casilla abajo de Mmax su valor
    tablaMomentoVseCps += "</tr>"; // cierro la fila
    tablaMomentoVseCps += "</table>"; // cierro la tabla
    cuerpoTablaMomentoVseCps.innerHTML = tablaMomentoVseCps; // imprimo en html

    // GENERACION DE TABLA PARA EL LISTADO DE SOLICITACIONES

    var xVseCps = LVseCps * 0.025;
    if (xVseCps < 0.05) { // artificio para que no quede x = 0
      xVseCps = 0.05;
    }
    xVseCps = xVseCps.toFixed(1); //redondeo a 1 decimal el valor que va a ir aumentando X de fila a fila
    var numFilasVseCps = 1 + Math.trunc(LVseCps/xVseCps); // 1 es por la fila inicial (X=0)
    var numColumnasVseCps = 3;
    var cuerpoTablaListaVseCps = document.getElementById("cuerpoTablaListaVseCps");

    cuerpoTablaListaVseCps.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
    var tabla = "<table>"; // variable para albergar la tabla

    for (var f = 0; f <= numFilasVseCps ; f++) { // aca hago correr las numFilas
        tabla += "<tr>"; // con esta etiqueta inicializo la fila
        for (var c = 1; c <= numColumnasVseCps; c++) { // aca hago correr las numColumnas
          if (c == 1) { // esta es la columna de las xi
            var xiVseCps = xVseCps * f;
            xiVseCps = xiVseCps.toFixed(1); //redondeo a 1 decimal el valor de x que adopta la fila
            if (xiVseCps < LVseCps) {
              tabla += "<td>" + xiVseCps + "</td>";
            } else {
              xiVseCps = LVseCps;
              f = numFilasVseCps;
              tabla += "<td>" + xiVseCps + "</td>";
            }
          }
          if (c == 2) { // esta es la columna de el corte
            if (xiVseCps < aVseCps) {
              var CiVseCps = FVseCps ;
              CiVseCps = CiVseCps.toFixed(2);
              tabla += "<td>" + CiVseCps + "</td>";
            }
            if (xiVseCps >= aVseCps && xiVseCps <= (LVseCps - aVseCps)) {
              var CiVseCps = 0 ;
              CiVseCps = CiVseCps.toFixed(2);
              tabla += "<td>" + CiVseCps + "</td>";
            }
            if (xiVseCps > (LVseCps - aVseCps)) {
              var CiVseCps = - (FVseCps) ;
              CiVseCps = CiVseCps.toFixed(2);
              tabla += "<td>" + CiVseCps + "</td>";
            }
          }
          if (c == 3) { // esta es la columna de el momento
            if (xiVseCps < aVseCps) {
              var MiVseCps = FVseCps * (LVseCps * (xiVseCps - aVseCps) + Math.pow(aVseCps, 2)) / LVseCps;
              MiVseCps = MiVseCps.toFixed(2);
              tabla += "<td>" + MiVseCps + "</td>";
            }
            if (xiVseCps >= aVseCps && xiVseCps <= (LVseCps - aVseCps)) {
              var MiVseCps = FVseCps * Math.pow(aVseCps, 2) / LVseCps;
              MiVseCps = MiVseCps.toFixed(2);
              tabla += "<td>" + MiVseCps + "</td>";
            }
            if (xiVseCps > (LVseCps - aVseCps)) {
              var MiVseCps = FVseCps * (LVseCps * (LVseCps - xiVseCps - aVseCps) + Math.pow(aVseCps, 2)) / LVseCps;
              MiVseCps = MiVseCps.toFixed(2);
              tabla += "<td>" + MiVseCps + "</td>";
            }
          }

        }

        tabla += "</tr>"; // con esta etiqueta finalizo la fila
    }
    tabla += "</table>"; // aca finalizo la tabla
    cuerpoTablaListaVseCps.innerHTML = tabla;

}

function calcularReaccionesVseCue() // Viga Simple Empotrada Carga Univorme en un Extremo
{
    var LVseCue = document.getElementById("LVseCue");
    LVseCue = parseFloat(LVseCue.value);
    var aVseCue = document.getElementById("aVseCue");
    aVseCue = parseFloat(aVseCue.value);
    var qVseCue = document.getElementById("qVseCue");
    qVseCue = parseFloat(qVseCue.value);

    // GENERACION DE TABLA DE REACCIONES
    var cuerpoTablaReaccionesVseCue = document.getElementById("cuerpoTablaReaccionesVseCue");
    cuerpoTablaReaccionesVseCue.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
    var tablaReaccionesVseCue = "<table>"; // variable para albergar la tabla

    tablaReaccionesVseCue += "<tr>"; // con esta etiqueta inicializo la fila
    var bVseCue = LVseCue - aVseCue;
    var MAVseCue = (qVseCue * Math.pow(aVseCue, 2) * (6 * Math.pow(LVseCue, 2) - 8 * LVseCue * aVseCue + 3 * Math.pow(aVseCue, 2))) / (12 * Math.pow(LVseCue, 2));
    var MBVseCue = ((qVseCue * Math.pow(aVseCue, 3)) * (1 - ((3 * aVseCue) / (4 * LVseCue))) / (3 * LVseCue));
    var RAVseCue = (qVseCue * aVseCue * (LVseCue + bVseCue) / (2 * LVseCue)) - ((- MAVseCue + MBVseCue) / LVseCue);
    var RBVseCue = (qVseCue * Math.pow(aVseCue, 2) / (2 * LVseCue)) + ((- MAVseCue + MBVseCue) / LVseCue);
    RAVseCue = RAVseCue.toFixed(2);
    RBVseCue = RBVseCue.toFixed(2);
    MAVseCue = MAVseCue.toFixed(2);
    MBVseCue = MBVseCue.toFixed(2);
    tablaReaccionesVseCue += "<td>" + RAVseCue + "</td>"; // imprimo en la casilla abajo de RA su valor
    tablaReaccionesVseCue += "<td>" + MAVseCue + "</td>"; // imprimo en la casilla abajo de MA su valor
    tablaReaccionesVseCue += "<td>" + RBVseCue + "</td>"; // imprimo en la casilla abajo de RB su valor
    tablaReaccionesVseCue += "<td>" + MBVseCue + "</td>"; // imprimo en la casilla abajo de MB su valor
    tablaReaccionesVseCue += "</tr>"; // cierro la fila
    tablaReaccionesVseCue += "</table>"; // cierro la tabla
    cuerpoTablaReaccionesVseCue.innerHTML = tablaReaccionesVseCue; // imprimo en html

    // GENERACION DE TABLA DE ESFUERZOS DE CORTE
    var cuerpoTablaCortesVseCue = document.getElementById("cuerpoTablaCortesVseCue");
    cuerpoTablaCortesVseCue.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
    var tablaCortesVseCue = "<table>"; // variable para albergar la tabla

    tablaCortesVseCue += "<tr>"; // con esta etiqueta inicializo la fila
    var VAVseCue = + RAVseCue;
    var VCBVseCue = RAVseCue - (qVseCue * aVseCue);
    VAVseCue = VAVseCue.toFixed(2);
    VCBVseCue = VCBVseCue.toFixed(2);
    tablaCortesVseCue += "<td>" + VAVseCue + "</td>"; // imprimo en la casilla abajo de VA su valor
    tablaCortesVseCue += "<td>" + VCBVseCue + "</td>"; // imprimo en la casilla abajo de VCB su valor
    tablaCortesVseCue += "</tr>"; // cierro la fila
    tablaCortesVseCue += "</table>"; // cierro la tabla
    cuerpoTablaCortesVseCue.innerHTML = tablaCortesVseCue; // imprimo en html

    // GENERACION DE TABLA DE MOMENTO MAXIMO
    var cuerpoTablaMomentoVseCue = document.getElementById("cuerpoTablaMomentoVseCue");
    cuerpoTablaMomentoVseCue.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
    var tablaMomentoVseCue = "<table>"; // variable para albergar la tabla

    tablaMomentoVseCue += "<tr>"; // con esta etiqueta inicializo la fila
    var MAVseCue = - (qVseCue * Math.pow(aVseCue, 2) * (6 * Math.pow(LVseCue, 2) - 8 * LVseCue * aVseCue + 3 * Math.pow(aVseCue, 2))) / (12 * Math.pow(LVseCue, 2));
    var XMMaxVseCue = RAVseCue / qVseCue;
    var MMaxVseCue = RAVseCue * XMMaxVseCue + MAVseCue - (qVseCue * Math.pow(XMMaxVseCue, 2) / 2);
    var MBVseCue = - ((qVseCue * Math.pow(aVseCue, 3)) * (1 - ((3 * aVseCue) / (4 * LVseCue))) / (3 * LVseCue));
    MAVseCue = MAVseCue.toFixed(2);
    MMaxVseCue = MMaxVseCue.toFixed(2);
    MBVseCue = MBVseCue.toFixed(2);
    tablaMomentoVseCue += "<td>" + MAVseCue + "</td>"; // imprimo en la casilla abajo de MA su valor
    tablaMomentoVseCue += "<td>" + MMaxVseCue + "</td>"; // imprimo en la casilla abajo de MMax su valor
    tablaMomentoVseCue += "<td>" + MBVseCue + "</td>"; // imprimo en la casilla abajo de MB su valor
    tablaMomentoVseCue += "</tr>"; // cierro la fila
    tablaMomentoVseCue += "</table>"; // cierro la tabla
    cuerpoTablaMomentoVseCue.innerHTML = tablaMomentoVseCue; // imprimo en html

    // GENERACION DE TABLA PARA EL LISTADO DE SOLICITACIONES

    var xVseCue = LVseCue * 0.025;
    if (xVseCue < 0.05) { // artificio para que no quede x = 0
      xVseCue = 0.05;
    }
    xVseCue = xVseCue.toFixed(1); //redondeo a 1 decimal el valor que va a ir aumentando X de fila a fila
    var numFilasVseCue = 1 + Math.trunc(LVseCue/xVseCue); // 1 es por la fila inicial (X=0)
    var numColumnasVseCue = 3;
    var cuerpoTablaListaVseCue = document.getElementById("cuerpoTablaListaVseCue");

    cuerpoTablaListaVseCue.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
    var tabla = "<table>"; // variable para albergar la tabla

    for (var f = 0; f <= numFilasVseCue ; f++) { // aca hago correr las numFilas
        tabla += "<tr>"; // con esta etiqueta inicializo la fila
        for (var c = 1; c <= numColumnasVseCue; c++) { // aca hago correr las numColumnas
          if (c == 1) { // esta es la columna de las xi
            var xiVseCue = xVseCue * f;
            xiVseCue = xiVseCue.toFixed(1); //redondeo a 1 decimal el valor de x que adopta la fila
            if (xiVseCue < LVseCue) {
              tabla += "<td>" + xiVseCue + "</td>";
            } else {
              xiVseCue = LVseCue;
              f = numFilasVseCue;
              tabla += "<td>" + xiVseCue + "</td>";
            }
          }
          if (c == 2) { // esta es la columna de el corte
            if (xiVseCue >= 0 && xiVseCue <= aVseCue) {
              var CiVseCue = RAVseCue - (qVseCue * xiVseCue);
              CiVseCue = CiVseCue.toFixed(2);
              tabla += "<td>" + CiVseCue + "</td>";
            }
            if (xiVseCue > aVseCue) {
              var CiVseCue = RAVseCue - (qVseCue * aVseCue);
              CiVseCue = CiVseCue.toFixed(2);
              tabla += "<td>" + CiVseCue + "</td>";
            }
          }
          if (c == 3) { // esta es la columna de el momento
            if (xiVseCue <= aVseCue) {
              var MAVseCue = - (qVseCue * Math.pow(aVseCue, 2) * (6 * Math.pow(LVseCue, 2) - 8 * LVseCue * aVseCue + 3 * Math.pow(aVseCue, 2))) / (12 * Math.pow(LVseCue, 2));
              var RAVseCue = (qVseCue * aVseCue * (LVseCue + bVseCue) / (2 * LVseCue)) - ((MAVseCue - MBVseCue) / LVseCue);
              var MiVseCue = (RAVseCue * xiVseCue) + MAVseCue - (qVseCue * Math.pow(xiVseCue, 2) / 2);
              MiVseCue = MiVseCue.toFixed(2);
              tabla += "<td>" + MiVseCue + "</td>";
            }
            if (xiVseCue > aVseCue) {
              var MBVseCue = - ((qVseCue * Math.pow(aVseCue, 3)) * (1 - ((3 * aVseCue) / (4 * LVseCue))) / (3 * LVseCue));
              var RBVseCue = (qVseCue * Math.pow(aVseCue, 2) / (2 * LVseCue)) + ((MAVseCue - MBVseCue) / LVseCue);
              var MiVseCue = (RBVseCue * (LVseCue - xiVseCue)) + (MBVseCue);
              MiVseCue = MiVseCue.toFixed(2);
              tabla += "<td>" + MiVseCue + "</td>";
            }
          }
        }

        tabla += "</tr>"; // con esta etiqueta finalizo la fila
    }
    tabla += "</table>"; // aca finalizo la tabla
    cuerpoTablaListaVseCue.innerHTML = tabla;

}

function calcularReaccionesVseCuv() // Viga Simple Empotrada Carga Uniforme en todo el Vano
{
  var LVseCuv = document.getElementById("LVseCuv");
  LVseCuv = parseFloat(LVseCuv.value);
  var qVseCuv = document.getElementById("qVseCuv");
  qVseCuv = parseFloat(qVseCuv.value);

  // GENERACION DE TABLA DE REACCIONES
  var cuerpoTablaReaccionesVseCuv = document.getElementById("cuerpoTablaReaccionesVseCuv");
  cuerpoTablaReaccionesVseCuv.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
  var tablaReaccionesVseCuv = "<table>"; // variable para albergar la tabla

  tablaReaccionesVseCuv += "<tr>"; // con esta etiqueta inicializo la fila
  var RAVseCuv = qVseCuv * LVseCuv / 2;
  var RBVseCuv = qVseCuv * LVseCuv / 2;
  var MAVseCuv = (qVseCuv * Math.pow(LVseCuv, 2) / 12);
  var MBVseCuv = (qVseCuv * Math.pow(LVseCuv, 2) / 12);
  RAVseCuv = RAVseCuv.toFixed(2);
  RBVseCuv = RBVseCuv.toFixed(2);
  MAVseCuv = MAVseCuv.toFixed(2);
  MBVseCuv = MBVseCuv.toFixed(2);
  tablaReaccionesVseCuv += "<td>" + RAVseCuv + "</td>"; // imprimo en la casilla abajo de RA su valor
  tablaReaccionesVseCuv += "<td>" + MAVseCuv + "</td>"; // imprimo en la casilla abajo de MA su valor
  tablaReaccionesVseCuv += "<td>" + RBVseCuv + "</td>"; // imprimo en la casilla abajo de RB su valor
  tablaReaccionesVseCuv += "<td>" + MBVseCuv + "</td>"; // imprimo en la casilla abajo de MB su valor
  tablaReaccionesVseCuv += "</tr>"; // cierro la fila
  tablaReaccionesVseCuv += "</table>"; // cierro la tabla
  cuerpoTablaReaccionesVseCuv.innerHTML = tablaReaccionesVseCuv; // imprimo en html

  // GENERACION DE TABLA DE ESFUERZOS DE CORTE
  var cuerpoTablaCortesVseCuv = document.getElementById("cuerpoTablaCortesVseCuv");
  cuerpoTablaCortesVseCuv.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
  var tablaCortesVseCuv = "<table>"; // variable para albergar la tabla

  tablaCortesVseCuv += "<tr>"; // con esta etiqueta inicializo la fila
  var VAVseCuv = qVseCuv * LVseCuv / 2;
  var VBVseCuv = - (qVseCuv * LVseCuv / 2);
  VAVseCuv = VAVseCuv.toFixed(2);
  VBVseCuv = VBVseCuv.toFixed(2);
  tablaCortesVseCuv += "<td>" + VAVseCuv + "</td>"; // imprimo en la casilla abajo de VA su valor
  tablaCortesVseCuv += "<td>" + VBVseCuv + "</td>"; // imprimo en la casilla abajo de VB su valor
  tablaCortesVseCuv += "</tr>"; // cierro la fila
  tablaCortesVseCuv += "</table>"; // cierro la tabla
  cuerpoTablaCortesVseCuv.innerHTML = tablaCortesVseCuv; // imprimo en html

  // GENERACION DE TABLA DE MOMENTO MAXIMO
  var cuerpoTablaMomentoVseCuv = document.getElementById("cuerpoTablaMomentoVseCuv");
  cuerpoTablaMomentoVseCuv.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
  var tablaMomentoVseCuv = "<table>"; // variable para albergar la tabla

  tablaMomentoVseCuv += "<tr>"; // con esta etiqueta inicializo la fila
  var MAVseCuv = - (qVseCuv * Math.pow(LVseCuv, 2) / 12);
  var MmaxVseCuv = (qVseCuv * Math.pow(LVseCuv, 2) / 24);
  var MBVseCuv = - (qVseCuv * Math.pow(LVseCuv, 2) / 12);
  MAVseCuv = MAVseCuv.toFixed(2);
  MmaxVseCuv = MmaxVseCuv.toFixed(2);
  MBVseCuv = MBVseCuv.toFixed(2);
  tablaMomentoVseCuv += "<td>" + MAVseCuv + "</td>"; // imprimo en la casilla abajo de MA su valor
  tablaMomentoVseCuv += "<td>" + MmaxVseCuv + "</td>"; // imprimo en la casilla abajo de Mmax su valor
  tablaMomentoVseCuv += "<td>" + MBVseCuv + "</td>"; // imprimo en la casilla abajo de MB su valor
  tablaMomentoVseCuv += "</tr>"; // cierro la fila
  tablaMomentoVseCuv += "</table>"; // cierro la tabla
  cuerpoTablaMomentoVseCuv.innerHTML = tablaMomentoVseCuv; // imprimo en html

  // GENERACION DE TABLA PARA EL LISTADO DE SOLICITACIONES

  var xVseCuv = LVseCuv * 0.025;
  if (xVseCuv < 0.05) { // artificio para que no quede x = 0
    xVseCuv = 0.05;
  }
  xVseCuv = xVseCuv.toFixed(1); //redondeo a 1 decimal el valor que va a ir aumentando X de fila a fila
  var numFilasVseCuv = 1 + Math.trunc(LVseCuv/xVseCuv); // 1 es por la fila inicial (X=0)
  var numColumnasVseCuv = 3;
  var cuerpoTablaListaVseCuv = document.getElementById("cuerpoTablaListaVseCuv");

  cuerpoTablaListaVseCuv.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
  var tabla = "<table>"; // variable para albergar la tabla

  for (var f = 0; f <= numFilasVseCuv ; f++) { // aca hago correr las numFilas
      tabla += "<tr>"; // con esta etiqueta inicializo la fila
      for (var c = 1; c <= numColumnasVseCuv; c++) { // aca hago correr las numColumnas
        if (c == 1) { // esta es la columna de las xi
          var xiVseCuv = xVseCuv * f;
          xiVseCuv = xiVseCuv.toFixed(1); //redondeo a 1 decimal el valor de x que adopta la fila
          if (xiVseCuv < LVseCuv) {
            tabla += "<td>" + xiVseCuv + "</td>";
          } else {
            xiVseCuv = LVseCuv;
            f = numFilasVseCuv;
            tabla += "<td>" + xiVseCuv + "</td>";
          }
        }
        if (c == 2) { // esta es la columna de el corte
            var CiVseCuv = qVseCuv * ((LVseCuv / 2) - xiVseCuv) ;
            CiVseCuv = CiVseCuv.toFixed(2);
            tabla += "<td>" + CiVseCuv + "</td>";
        }
        if (c == 3) { // esta es la columna de el momento
            var MiVseCuv = - (qVseCuv * (Math.pow(LVseCuv, 2) - 6 * LVseCuv * xiVseCuv + 6 * Math.pow(xiVseCuv, 2)) / 12);
            MiVseCuv = MiVseCuv.toFixed(2);
            tabla += "<td>" + MiVseCuv + "</td>";
        }
      }

      tabla += "</tr>"; // con esta etiqueta finalizo la fila
  }
  tabla += "</table>"; // aca finalizo la tabla
  cuerpoTablaListaVseCuv.innerHTML = tabla;

}

function calcularReaccionesVseCui() // Viga Simple Empotrada Carga Uniforme en tramo Intermedio
{
  var LVseCui = document.getElementById("LVseCui");
  LVseCui = parseFloat(LVseCui.value);
  var aVseCui = document.getElementById("aVseCui");
  aVseCui = parseFloat(aVseCui.value);
  var cVseCui = document.getElementById("cVseCui");
  cVseCui = parseFloat(cVseCui.value);
  var qVseCui = document.getElementById("qVseCui");
  qVseCui = parseFloat(qVseCui.value);

  // GENERACION DE TABLA DE REACCIONES
  var cuerpoTablaReaccionesVseCui = document.getElementById("cuerpoTablaReaccionesVseCui");
  cuerpoTablaReaccionesVseCui.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
  var tablaReaccionesVseCui = "<table>"; // variable para albergar la tabla

  tablaReaccionesVseCui += "<tr>"; // con esta etiqueta inicializo la fila
  var bVseCui = LVseCui - aVseCui;
  var MAVseCui = (qVseCui * Math.pow(cVseCui, 3) * (LVseCui - 3 * bVseCui + (12 * aVseCui * Math.pow(bVseCui, 2) / Math.pow(cVseCui, 2))) / (12 * Math.pow(LVseCui, 2)));
  var MBVseCui = (qVseCui * Math.pow(cVseCui, 3) * (LVseCui - 3 * aVseCui + (12 * bVseCui * Math.pow(aVseCui, 2) / Math.pow(cVseCui, 2))) / (12 * Math.pow(LVseCui, 2)));
  var RAVseCui = (qVseCui * bVseCui * cVseCui / LVseCui) - ((- MAVseCui + MBVseCui) / LVseCui);
  var RBVseCui = (qVseCui * aVseCui * cVseCui / LVseCui) + ((- MAVseCui + MBVseCui) / LVseCui);
  RAVseCui = RAVseCui.toFixed(2);
  RBVseCui = RBVseCui.toFixed(2);
  MAVseCui = MAVseCui.toFixed(2);
  MBVseCui = MBVseCui.toFixed(2);
  tablaReaccionesVseCui += "<td>" + RAVseCui + "</td>"; // imprimo en la casilla abajo de RA su valor
  tablaReaccionesVseCui += "<td>" + MAVseCui + "</td>"; // imprimo en la casilla abajo de MA su valor
  tablaReaccionesVseCui += "<td>" + RBVseCui + "</td>"; // imprimo en la casilla abajo de RB su valor
  tablaReaccionesVseCui += "<td>" + MBVseCui + "</td>"; // imprimo en la casilla abajo de MB su valor
  tablaReaccionesVseCui += "</tr>"; // cierro la fila
  tablaReaccionesVseCui += "</table>"; // cierro la tabla
  cuerpoTablaReaccionesVseCui.innerHTML = tablaReaccionesVseCui; // imprimo en html

  // GENERACION DE TABLA DE ESFUERZOS DE CORTE
  var cuerpoTablaCortesVseCui = document.getElementById("cuerpoTablaCortesVseCui");
  cuerpoTablaCortesVseCui.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
  var tablaCortesVseCui = "<table>"; // variable para albergar la tabla

  tablaCortesVseCui += "<tr>"; // con esta etiqueta inicializo la fila
  var VACVseCui = + (RAVseCui);
  var VDBVseCui = - (RBVseCui);
  VACVseCui = VACVseCui.toFixed(2);
  VDBVseCui = VDBVseCui.toFixed(2);
  tablaCortesVseCui += "<td>" + VACVseCui + "</td>"; // imprimo en la casilla abajo de VAC su valor
  tablaCortesVseCui += "<td>" + VDBVseCui + "</td>"; // imprimo en la casilla abajo de VDB su valor
  tablaCortesVseCui += "</tr>"; // cierro la fila
  tablaCortesVseCui += "</table>"; // cierro la tabla
  cuerpoTablaCortesVseCui.innerHTML = tablaCortesVseCui; // imprimo en html

  // GENERACION DE TABLA DE MOMENTO MAXIMO
  var cuerpoTablaMomentoVseCui = document.getElementById("cuerpoTablaMomentoVseCui");
  cuerpoTablaMomentoVseCui.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
  var tablaMomentoVseCui = "<table>"; // variable para albergar la tabla

  tablaMomentoVseCui += "<tr>"; // con esta etiqueta inicializo la fila
  var MAVseCui = - (qVseCui * Math.pow(cVseCui, 3) * (LVseCui - 3 * bVseCui + (12 * aVseCui * Math.pow(bVseCui, 2) / Math.pow(cVseCui, 2))) / (12 * Math.pow(LVseCui, 2)));
  var MBVseCui = - (qVseCui * Math.pow(cVseCui, 3) * (LVseCui - 3 * aVseCui + (12 * bVseCui * Math.pow(aVseCui, 2) / Math.pow(cVseCui, 2))) / (12 * Math.pow(LVseCui, 2)));
  MAVseCui = MAVseCui.toFixed(2);
  MBVseCui = MBVseCui.toFixed(2);
  tablaMomentoVseCui += "<td>" + MAVseCui + "</td>"; // imprimo en la casilla abajo de MA su valor
  tablaMomentoVseCui += "<td>" + MBVseCui + "</td>"; // imprimo en la casilla abajo de MB su valor
  tablaMomentoVseCui += "</tr>"; // cierro la fila
  tablaMomentoVseCui += "</table>"; // cierro la tabla
  cuerpoTablaMomentoVseCui.innerHTML = tablaMomentoVseCui; // imprimo en html

  // GENERACION DE TABLA PARA EL LISTADO DE SOLICITACIONES

  var xVseCui = LVseCui * 0.025;
  if (xVseCui < 0.05) { // artificio para que no quede x = 0
    xVseCui = 0.05;
  }
  xVseCui = xVseCui.toFixed(1); //redondeo a 1 decimal el valor que va a ir aumentando X de fila a fila
  var numFilasVseCui = 1 + Math.trunc(LVseCui/xVseCui); // 1 es por la fila inicial (X=0)
  var numColumnasVseCui = 3;
  var cuerpoTablaListaVseCui = document.getElementById("cuerpoTablaListaVseCui");

  cuerpoTablaListaVseCui.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
  var tabla = "<table>"; // variable para albergar la tabla

  for (var f = 0; f <= numFilasVseCui ; f++) { // aca hago correr las numFilas
      tabla += "<tr>"; // con esta etiqueta inicializo la fila
      for (var c = 1; c <= numColumnasVseCui; c++) { // aca hago correr las numColumnas
        if (c == 1) { // esta es la columna de las xi
          var xiVseCui = xVseCui * f;
          xiVseCui = xiVseCui.toFixed(1); //redondeo a 1 decimal el valor de x que adopta la fila
          if (xiVseCui < LVseCui) {
            tabla += "<td>" + xiVseCui + "</td>";
          } else {
            xiVseCui = LVseCui;
            f = numFilasVseCui;
            tabla += "<td>" + xiVseCui + "</td>";
          }
        }
        if (c == 2) { // esta es la columna de el corte
          if (xiVseCui >= 0 && xiVseCui <= (aVseCui - (cVseCui / 2))) {
            var CiVseCui = + (RAVseCui);
            CiVseCui = CiVseCui.toFixed(2);
            tabla += "<td>" + CiVseCui + "</td>";
          }
          if (xiVseCui > (aVseCui - (cVseCui / 2)) && xiVseCui < (aVseCui + (cVseCui / 2))) {
            var CiVseCui = RAVseCui - (qVseCui * (xiVseCui - aVseCui + (cVseCui / 2)));
            CiVseCui = CiVseCui.toFixed(2);
            tabla += "<td>" + CiVseCui + "</td>";
          }
          if (xiVseCui >= (aVseCui + (cVseCui / 2))) {
            var CiVseCui = - (RBVseCui);
            CiVseCui = CiVseCui.toFixed(2);
            tabla += "<td>" + CiVseCui + "</td>";
          }
        }
        if (c == 3) { // esta es la columna de el momento
          if (xiVseCui >= 0 && xiVseCui <= (aVseCui - (cVseCui / 2))) {
            var MAVseCui = - (qVseCui * Math.pow(cVseCui, 3) * (LVseCui - 3 * bVseCui + (12 * aVseCui * Math.pow(bVseCui, 2) / Math.pow(cVseCui, 2))) / (12 * Math.pow(LVseCui, 2)));
            var MiVseCui = + (RAVseCui * xiVseCui) + MAVseCui;
            MiVseCui = MiVseCui.toFixed(2);
            tabla += "<td>" + MiVseCui + "</td>";
          }
          if (xiVseCui > (aVseCui - (cVseCui / 2)) && xiVseCui < (aVseCui + (cVseCui / 2))) {
            var MiVseCui = (RAVseCui * xiVseCui) + MAVseCui - (qVseCui * Math.pow(xiVseCui - aVseCui + (cVseCui / 2), 2) / 2);
            MiVseCui = MiVseCui.toFixed(2);
            tabla += "<td>" + MiVseCui + "</td>";
          }
          if (xiVseCui >= (aVseCui + (cVseCui / 2))) {
            var MBVseCui = - (qVseCui * Math.pow(cVseCui, 3) * (LVseCui - 3 * aVseCui + (12 * bVseCui * Math.pow(aVseCui, 2) / Math.pow(cVseCui, 2))) / (12 * Math.pow(LVseCui, 2)));
            var MiVseCui = RBVseCui * (LVseCui - xiVseCui) + MBVseCui;
            MiVseCui = MiVseCui.toFixed(2);
            tabla += "<td>" + MiVseCui + "</td>";
          }
        }
      }

      tabla += "</tr>"; // con esta etiqueta finalizo la fila
  }
  tabla += "</table>"; // aca finalizo la tabla
  cuerpoTablaListaVseCui.innerHTML = tabla;

}

function calcularReaccionesVseMpi() // Viga Simple Empotrada Momento Puntual en Intermedio
{
  var LVseMpi = document.getElementById("LVseMpi");
  LVseMpi = parseFloat(LVseMpi.value);
  var aVseMpi = document.getElementById("aVseMpi");
  aVseMpi = parseFloat(aVseMpi.value);
  var MVseMpi = document.getElementById("MVseMpi");
  MVseMpi = parseFloat(MVseMpi.value);

  // GENERACION DE TABLA DE REACCIONES
  var cuerpoTablaReaccionesVseMpi = document.getElementById("cuerpoTablaReaccionesVseMpi");
  cuerpoTablaReaccionesVseMpi.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
  var tablaReaccionesVseMpi = "<table>"; // variable para albergar la tabla

  tablaReaccionesVseMpi += "<tr>"; // con esta etiqueta inicializo la fila
  var bVseMpi = LVseMpi - aVseMpi;
  var RAVseMpi = 6 * MVseMpi * aVseMpi * bVseMpi / Math.pow(LVseMpi, 3);
  var RBVseMpi = - (6 * MVseMpi * aVseMpi * bVseMpi / Math.pow(LVseMpi, 3));
  var MAVseMpi = - ((- MVseMpi) * bVseMpi * (2 - (3 * bVseMpi / LVseMpi)) / LVseMpi);
  var MBVseMpi = + ((- MVseMpi) * aVseMpi * (2 - (3 * aVseMpi / LVseMpi)) / LVseMpi);
  RAVseMpi = RAVseMpi.toFixed(2);
  RBVseMpi = RBVseMpi.toFixed(2);
  MAVseMpi = MAVseMpi.toFixed(2);
  MBVseMpi = MBVseMpi.toFixed(2);
  tablaReaccionesVseMpi += "<td>" + RAVseMpi + "</td>"; // imprimo en la casilla abajo de RA su valor
  tablaReaccionesVseMpi += "<td>" + MAVseMpi + "</td>"; // imprimo en la casilla abajo de MA su valor
  tablaReaccionesVseMpi += "<td>" + RBVseMpi + "</td>"; // imprimo en la casilla abajo de RB su valor
  tablaReaccionesVseMpi += "<td>" + MBVseMpi + "</td>"; // imprimo en la casilla abajo de MB su valor
  tablaReaccionesVseMpi += "</tr>"; // cierro la fila
  tablaReaccionesVseMpi += "</table>"; // cierro la tabla
  cuerpoTablaReaccionesVseMpi.innerHTML = tablaReaccionesVseMpi; // imprimo en html

  // GENERACION DE TABLA DE ESFUERZOS DE CORTE
  var cuerpoTablaCortesVseMpi = document.getElementById("cuerpoTablaCortesVseMpi");
  cuerpoTablaCortesVseMpi.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
  var tablaCortesVseMpi = "<table>"; // variable para albergar la tabla

  tablaCortesVseMpi += "<tr>"; // con esta etiqueta inicializo la fila
  var VABVseMpi = 6 * MVseMpi * aVseMpi * bVseMpi / Math.pow(LVseMpi, 3);
  VABVseMpi = VABVseMpi.toFixed(2);
  tablaCortesVseMpi += "<td>" + VABVseMpi + "</td>"; // imprimo en la casilla abajo de VAB su valor
  tablaCortesVseMpi += "</tr>"; // cierro la fila
  tablaCortesVseMpi += "</table>"; // cierro la tabla
  cuerpoTablaCortesVseMpi.innerHTML = tablaCortesVseMpi; // imprimo en html

  // GENERACION DE TABLA DE MOMENTO MAXIMO
  var cuerpoTablaMomentoVseMpi = document.getElementById("cuerpoTablaMomentoVseMpi");
  cuerpoTablaMomentoVseMpi.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
  var tablaMomentoVseMpi = "<table>"; // variable para albergar la tabla

  tablaMomentoVseMpi += "<tr>"; // con esta etiqueta inicializo la fila
  var bVseMpi = LVseMpi - aVseMpi;
  var MAVseMpi = ((- MVseMpi) * bVseMpi * (2 - (3 * bVseMpi / LVseMpi)) / LVseMpi);
  var MCizqVseMpi = MAVseMpi + ((6 * MVseMpi * Math.pow(aVseMpi, 2) * bVseMpi) / Math.pow(LVseMpi, 3));
  var MCderVseMpi = MAVseMpi - (MVseMpi * (Math.pow(LVseMpi, 3) - (6 * Math.pow(aVseMpi, 2) * bVseMpi)) / Math.pow(LVseMpi, 3));
  var MBVseMpi = - ((- MVseMpi) * aVseMpi * (2 - (3 * aVseMpi / LVseMpi)) / LVseMpi);
  MAVseMpi = MAVseMpi.toFixed(2);
  MCizqVseMpi = MCizqVseMpi.toFixed(2);
  MCderVseMpi = MCderVseMpi.toFixed(2);
  MBVseMpi = MBVseMpi.toFixed(2);
  tablaMomentoVseMpi += "<td>" + MAVseMpi + "</td>"; // imprimo en la casilla abajo de MA su valor
  tablaMomentoVseMpi += "<td>" + MCizqVseMpi + "</td>"; // imprimo en la casilla abajo de MCizq su valor
  tablaMomentoVseMpi += "<td>" + MCderVseMpi + "</td>"; // imprimo en la casilla abajo de MCder su valor
  tablaMomentoVseMpi += "<td>" + MBVseMpi + "</td>"; // imprimo en la casilla abajo de MB su valor
  tablaMomentoVseMpi += "</tr>"; // cierro la fila
  tablaMomentoVseMpi += "</table>"; // cierro la tabla
  cuerpoTablaMomentoVseMpi.innerHTML = tablaMomentoVseMpi; // imprimo en html

  // GENERACION DE TABLA PARA EL LISTADO DE SOLICITACIONES

  var xVseMpi = LVseMpi * 0.025;
  if (xVseMpi < 0.05) { // artificio para que no quede x = 0
    xVseMpi = 0.05;
  }
  xVseMpi = xVseMpi.toFixed(1); //redondeo a 1 decimal el valor que va a ir aumentando X de fila a fila
  var numFilasVseMpi = 1 + Math.trunc(LVseMpi/xVseMpi); // 1 es por la fila inicial (X=0)
  var numColumnasVseMpi = 3;
  var cuerpoTablaListaVseMpi = document.getElementById("cuerpoTablaListaVseMpi");

  cuerpoTablaListaVseMpi.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
  var tabla = "<table>"; // variable para albergar la tabla

  for (var f = 0; f <= numFilasVseMpi ; f++) { // aca hago correr las numFilas
      tabla += "<tr>"; // con esta etiqueta inicializo la fila
      for (var c = 1; c <= numColumnasVseMpi; c++) { // aca hago correr las numColumnas
        if (c == 1) { // esta es la columna de las xi
          var xiVseMpi = xVseMpi * f;
          xiVseMpi = xiVseMpi.toFixed(1); //redondeo a 1 decimal el valor de x que adopta la fila
          if (xiVseMpi < LVseMpi) {
            tabla += "<td>" + xiVseMpi + "</td>";
          } else {
            xiVseMpi = LVseMpi;
            f = numFilasVseMpi;
            tabla += "<td>" + xiVseMpi + "</td>";
          }
        }
        if (c == 2) { // esta es la columna de el corte
          if (xiVseMpi >= 0 && xiVseMpi <= LVseMpi) {
            var CiVseMpi = 6 * MVseMpi * aVseMpi * bVseMpi / Math.pow(LVseMpi, 3);
            CiVseMpi = CiVseMpi.toFixed(2);
            tabla += "<td>" + CiVseMpi + "</td>";
          }
        }
        if (c == 3) { // esta es la columna de el momento
          if (xiVseMpi >= 0 && xiVseMpi < aVseMpi) {
            var MiVseMpi = MVseMpi * aVseMpi * (1 - (3 * aVseMpi * (1 - 2 * xiVseMpi / LVseMpi) / LVseMpi)) / LVseMpi;
            MiVseMpi = MiVseMpi.toFixed(2);
            tabla += "<td>" + MiVseMpi + "</td>";
          }
          if (xiVseMpi == aVseMpi) {
            var MAVseMpi = MVseMpi * aVseMpi * (1 - (3 * aVseMpi / LVseMpi)) / LVseMpi;
            var MiizqVseMpi = + (MAVseMpi + ((6 * MVseMpi * Math.pow(aVseMpi, 2) * bVseMpi) / Math.pow(LVseMpi, 3)));
            var MiderVseMpi = + (MAVseMpi - (MVseMpi * (Math.pow(LVseMpi, 3) - (6 * Math.pow(aVseMpi, 2) * bVseMpi)) / Math.pow(LVseMpi, 3)));
            MiizqVseMpi = MiizqVseMpi.toFixed(2);
            MiderVseMpi = MiderVseMpi.toFixed(2);
            tabla += "<td>" + MiizqVseMpi + " / " + MiderVseMpi + "</td>";
          }
          if (xiVseMpi > aVseMpi) {
            var MiVseMpi = - (MVseMpi * bVseMpi * (1 - (3 * bVseMpi * (1 - 2 * (LVseMpi - xiVseMpi) / LVseMpi) / LVseMpi)) / LVseMpi);
            MiVseMpi = MiVseMpi.toFixed(2);
            tabla += "<td>" + MiVseMpi + "</td>";
          }
        }
      }

      tabla += "</tr>"; // con esta etiqueta finalizo la fila
  }
  tabla += "</table>"; // aca finalizo la tabla
  cuerpoTablaListaVseMpi.innerHTML = tabla;

}


// botones de calcular de las distintas cargas VSE

var calcularVseCpg = document.getElementById("calcularVseCpg");
calcularVseCpg.addEventListener ("click", calcularReaccionesVseCpg);

var calcularVseCpc = document.getElementById("calcularVseCpc");
calcularVseCpc.addEventListener ("click", calcularReaccionesVseCpc);

var calcularVseCps = document.getElementById("calcularVseCps");
calcularVseCps.addEventListener ("click", calcularReaccionesVseCps);

var calcularVseCue = document.getElementById("calcularVseCue");
calcularVseCue.addEventListener ("click", calcularReaccionesVseCue);

var calcularVseCuv = document.getElementById("calcularVseCuv");
calcularVseCuv.addEventListener ("click", calcularReaccionesVseCuv);

var calcularVseCui = document.getElementById("calcularVseCui");
calcularVseCui.addEventListener ("click", calcularReaccionesVseCui);

var calcularVseMpi = document.getElementById("calcularVseMpi");
calcularVseMpi.addEventListener ("click", calcularReaccionesVseMpi);


var resultado = document.getElementById("resultado"); // ??

// funcion para el boton de "Descargar en PDF"

function generatePDF() {
  const element = document.getElementById("container");

  html2pdf()
  .from(element)
  .save();
}

// funciones de calcular de las distintas cargas VSA

function calcularReaccionesVsaCpg() // Viga Simplemente Apoyada Carga Puntual Generica
{
    var LVsaCpg = document.getElementById("LVsaCpg");
    LVsaCpg = parseFloat(LVsaCpg.value);
    var aVsaCpg = document.getElementById("aVsaCpg");
    aVsaCpg = parseFloat(aVsaCpg.value);
    var FVsaCpg = document.getElementById("FVsaCpg");
    FVsaCpg = parseFloat(FVsaCpg.value);

    // GENERACION DE TABLA DE REACCIONES
    var cuerpoTablaReaccionesVsaCpg = document.getElementById("cuerpoTablaReaccionesVsaCpg");
    cuerpoTablaReaccionesVsaCpg.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
    var tablaReaccionesVsaCpg = "<table>"; // variable para albergar la tabla

    tablaReaccionesVsaCpg += "<tr>"; // con esta etiqueta inicializo la fila
    var bVsaCpg = LVsaCpg - aVsaCpg;
    var RAVsaCpg = FVsaCpg * bVsaCpg / LVsaCpg;
    var MAVsaCpg = FVsaCpg * bVsaCpg * 0 / LVsaCpg;
    var RBVsaCpg = FVsaCpg * aVsaCpg / LVsaCpg;
    var MBVsaCpg = FVsaCpg * aVsaCpg * (LVsaCpg - LVsaCpg) / LVsaCpg;
    RAVsaCpg = RAVsaCpg.toFixed(2);
    MAVsaCpg = MAVsaCpg.toFixed(2);
    RBVsaCpg = RBVsaCpg.toFixed(2);
    MBVsaCpg = MBVsaCpg.toFixed(2);
    tablaReaccionesVsaCpg += "<td>" + RAVsaCpg + "</td>"; // imprimo en la casilla abajo de RA su valor
    tablaReaccionesVsaCpg += "<td>" + MAVsaCpg + "</td>"; // imprimo en la casilla abajo de MA su valor
    tablaReaccionesVsaCpg += "<td>" + RBVsaCpg + "</td>"; // imprimo en la casilla abajo de RB su valor
    tablaReaccionesVsaCpg += "<td>" + MBVsaCpg + "</td>"; // imprimo en la casilla abajo de MB su valor
    tablaReaccionesVsaCpg += "</tr>"; // cierro la fila
    tablaReaccionesVsaCpg += "</table>"; // cierro la tabla
    cuerpoTablaReaccionesVsaCpg.innerHTML = tablaReaccionesVsaCpg; // imprimo en html

    // GENERACION DE TABLA DE ESFUERZOS DE CORTE
    var cuerpoTablaCortesVsaCpg = document.getElementById("cuerpoTablaCortesVsaCpg");
    cuerpoTablaCortesVsaCpg.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
    var tablaCortesVsaCpg = "<table>"; // variable para albergar la tabla

    tablaCortesVsaCpg += "<tr>"; // con esta etiqueta inicializo la fila
    var VACVsaCpg = FVsaCpg * bVsaCpg / LVsaCpg;
    var VCBVsaCpg = - (FVsaCpg * aVsaCpg / LVsaCpg);
    VACVsaCpg = VACVsaCpg.toFixed(2);
    VCBVsaCpg = VCBVsaCpg.toFixed(2);
    tablaCortesVsaCpg += "<td>" + VACVsaCpg + "</td>"; // imprimo en la casilla abajo de VAC su valor
    tablaCortesVsaCpg += "<td>" + VCBVsaCpg + "</td>"; // imprimo en la casilla abajo de VCB su valor
    tablaCortesVsaCpg += "</tr>"; // cierro la fila
    tablaCortesVsaCpg += "</table>"; // cierro la tabla
    cuerpoTablaCortesVsaCpg.innerHTML = tablaCortesVsaCpg; // imprimo en html

    // GENERACION DE TABLA DE MOMENTO MAXIMO
    var cuerpoTablaMomentoVsaCpg = document.getElementById("cuerpoTablaMomentoVsaCpg");
    cuerpoTablaMomentoVsaCpg.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
    var tablaMomentoVsaCpg = "<table>"; // variable para albergar la tabla

    tablaMomentoVsaCpg += "<tr>"; // con esta etiqueta inicializo la fila
    var MmaxVsaCpg = FVsaCpg * aVsaCpg * bVsaCpg / LVsaCpg;
    MmaxVsaCpg = MmaxVsaCpg.toFixed(2);
    tablaMomentoVsaCpg += "<td>" + MmaxVsaCpg + "</td>"; // imprimo en la casilla abajo de Mmax su valor
    tablaMomentoVsaCpg += "</tr>"; // cierro la fila
    tablaMomentoVsaCpg += "</table>"; // cierro la tabla
    cuerpoTablaMomentoVsaCpg.innerHTML = tablaMomentoVsaCpg; // imprimo en html

    // GENERACION DE TABLA PARA EL LISTADO DE SOLICITACIONES

    var xVsaCpg = LVsaCpg * 0.025;
    if (xVsaCpg < 0.05) { // artificio para que no quede x = 0
      xVsaCpg = 0.05;
    }
    xVsaCpg = xVsaCpg.toFixed(1); //redondeo a 1 decimal el valor que va a ir aumentando X de fila a fila
    var numFilasVsaCpg = 1 + Math.trunc(LVsaCpg/xVsaCpg); // 1 es por la fila inicial (X=0)
    var numColumnasVsaCpg = 3;
    var cuerpoTablaListaVsaCpg = document.getElementById("cuerpoTablaListaVsaCpg");

    cuerpoTablaListaVsaCpg.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
    var tabla = "<table>"; // variable para albergar la tabla

    for (var f = 0; f <= numFilasVsaCpg ; f++) { // aca hago correr las numFilas
        tabla += "<tr>"; // con esta etiqueta inicializo la fila
        for (var c = 1; c <= numColumnasVsaCpg; c++) { // aca hago correr las numColumnas
          if (c == 1) { // esta es la columna de las xi
            var xiVsaCpg = xVsaCpg * f;
            xiVsaCpg = xiVsaCpg.toFixed(1); //redondeo a 1 decimal el valor de x que adopta la fila
            if (xiVsaCpg < LVsaCpg) {
              tabla += "<td>" + xiVsaCpg + "</td>";
            } else {
              xiVsaCpg = LVsaCpg;
              f = numFilasVsaCpg;
              tabla += "<td>" + xiVsaCpg + "</td>";
            }
          }
          if (c == 2) { // esta es la columna de el corte
            if (xiVsaCpg <= aVsaCpg) {
              var CiVsaCpg = FVsaCpg * bVsaCpg / LVsaCpg ;
              CiVsaCpg = CiVsaCpg.toFixed(2);
              tabla += "<td>" + CiVsaCpg + "</td>";
            }
            if (xiVsaCpg > aVsaCpg) {
              var CiVsaCpg = - FVsaCpg * aVsaCpg / LVsaCpg ;
              CiVsaCpg = CiVsaCpg.toFixed(2);
              tabla += "<td>" + CiVsaCpg + "</td>";
            }
          }
          if (c == 3) { // esta es la columna de el momento
            if (xiVsaCpg <= aVsaCpg) {
              var MiVsaCpg = FVsaCpg * bVsaCpg * xiVsaCpg / LVsaCpg ;
              MiVsaCpg = MiVsaCpg.toFixed(2);
              tabla += "<td>" + MiVsaCpg + "</td>";
            }
            if (xiVsaCpg > aVsaCpg) {
              var MiVsaCpg = FVsaCpg * aVsaCpg * (LVsaCpg - xiVsaCpg) / LVsaCpg ;
              MiVsaCpg = MiVsaCpg.toFixed(2);
              tabla += "<td>" + MiVsaCpg + "</td>";
            }
          }

        }

        tabla += "</tr>"; // con esta etiqueta finalizo la fila
    }
    tabla += "</table>"; // aca finalizo la tabla
    cuerpoTablaListaVsaCpg.innerHTML = tabla;

}

function calcularReaccionesVsaCpc() // Viga Simplemente Apoyada Carga Puntual Centrada
{
  var LVsaCpc = document.getElementById("LVsaCpc");
  LVsaCpc = parseFloat(LVsaCpc.value);
  var FVsaCpc = document.getElementById("FVsaCpc");
  FVsaCpc = parseFloat(FVsaCpc.value);

  // GENERACION DE TABLA DE REACCIONES
  var cuerpoTablaReaccionesVsaCpc = document.getElementById("cuerpoTablaReaccionesVsaCpc");
  cuerpoTablaReaccionesVsaCpc.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
  var tablaReaccionesVsaCpc = "<table>"; // variable para albergar la tabla

  tablaReaccionesVsaCpc += "<tr>"; // con esta etiqueta inicializo la fila
  var RAVsaCpc = FVsaCpc / 2;
  var MAVsaCpc = FVsaCpc * 0 / 2;
  var RBVsaCpc = FVsaCpc / 2;
  var MBVsaCpc = FVsaCpc * 0 / 2;
  RAVsaCpc = RAVsaCpc.toFixed(2);
  MAVsaCpc = MAVsaCpc.toFixed(2);
  RBVsaCpc = RBVsaCpc.toFixed(2);
  MBVsaCpc = MBVsaCpc.toFixed(2);
  tablaReaccionesVsaCpc += "<td>" + RAVsaCpc + "</td>"; // imprimo en la casilla abajo de RA su valor
  tablaReaccionesVsaCpc += "<td>" + MAVsaCpc + "</td>"; // imprimo en la casilla abajo de MA su valor
  tablaReaccionesVsaCpc += "<td>" + RBVsaCpc + "</td>"; // imprimo en la casilla abajo de RB su valor
  tablaReaccionesVsaCpc += "<td>" + MBVsaCpc + "</td>"; // imprimo en la casilla abajo de MB su valor
  tablaReaccionesVsaCpc += "</tr>"; // cierro la fila
  tablaReaccionesVsaCpc += "</table>"; // cierro la tabla
  cuerpoTablaReaccionesVsaCpc.innerHTML = tablaReaccionesVsaCpc; // imprimo en html

  // GENERACION DE TABLA DE ESFUERZOS DE CORTE
  var cuerpoTablaCortesVsaCpc = document.getElementById("cuerpoTablaCortesVsaCpc");
  cuerpoTablaCortesVsaCpc.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
  var tablaCortesVsaCpc = "<table>"; // variable para albergar la tabla

  tablaCortesVsaCpc += "<tr>"; // con esta etiqueta inicializo la fila
  var VACVsaCpc = FVsaCpc / 2;
  var VCBVsaCpc = - (FVsaCpc / 2);
  VACVsaCpc = VACVsaCpc.toFixed(2);
  VCBVsaCpc = VCBVsaCpc.toFixed(2);
  tablaCortesVsaCpc += "<td>" + VACVsaCpc + "</td>"; // imprimo en la casilla abajo de VAC su valor
  tablaCortesVsaCpc += "<td>" + VCBVsaCpc + "</td>"; // imprimo en la casilla abajo de VCB su valor
  tablaCortesVsaCpc += "</tr>"; // cierro la fila
  tablaCortesVsaCpc += "</table>"; // cierro la tabla
  cuerpoTablaCortesVsaCpc.innerHTML = tablaCortesVsaCpc; // imprimo en html

  // GENERACION DE TABLA DE MOMENTO MAXIMO
  var cuerpoTablaMomentoVsaCpc = document.getElementById("cuerpoTablaMomentoVsaCpc");
  cuerpoTablaMomentoVsaCpc.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
  var tablaMomentoVsaCpc = "<table>"; // variable para albergar la tabla

  tablaMomentoVsaCpc += "<tr>"; // con esta etiqueta inicializo la fila
  var MmaxVsaCpc = FVsaCpc * LVsaCpc / 4;
  MmaxVsaCpc = MmaxVsaCpc.toFixed(2);
  tablaMomentoVsaCpc += "<td>" + MmaxVsaCpc + "</td>"; // imprimo en la casilla abajo de Mmax su valor
  tablaMomentoVsaCpc += "</tr>"; // cierro la fila
  tablaMomentoVsaCpc += "</table>"; // cierro la tabla
  cuerpoTablaMomentoVsaCpc.innerHTML = tablaMomentoVsaCpc; // imprimo en html

  // GENERACION DE TABLA PARA EL LISTADO DE SOLICITACIONES

  var xVsaCpc = LVsaCpc * 0.025;
  if (xVsaCpc < 0.05) { // artificio para que no quede x = 0
    xVsaCpc = 0.05;
  }
  xVsaCpc = xVsaCpc.toFixed(1); //redondeo a 1 decimal el valor que va a ir aumentando X de fila a fila
  var numFilasVsaCpc = 1 + Math.trunc(LVsaCpc/xVsaCpc); // 1 es por la fila inicial (X=0)
  var numColumnasVsaCpc = 3;
  var cuerpoTablaListaVsaCpc = document.getElementById("cuerpoTablaListaVsaCpc");

  cuerpoTablaListaVsaCpc.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
  var tabla = "<table>"; // variable para albergar la tabla

  for (var f = 0; f <= numFilasVsaCpc ; f++) { // aca hago correr las numFilas
      tabla += "<tr>"; // con esta etiqueta inicializo la fila
      for (var c = 1; c <= numColumnasVsaCpc; c++) { // aca hago correr las numColumnas
        if (c == 1) { // esta es la columna de las xi
          var xiVsaCpc = xVsaCpc * f;
          xiVsaCpc = xiVsaCpc.toFixed(1); //redondeo a 1 decimal el valor de x que adopta la fila
          if (xiVsaCpc < LVsaCpc) {
            tabla += "<td>" + xiVsaCpc + "</td>";
          } else {
            xiVsaCpc = LVsaCpc;
            f = numFilasVsaCpc;
            tabla += "<td>" + xiVsaCpc + "</td>";
          }
        }
        if (c == 2) { // esta es la columna de el corte
          if (xiVsaCpc <= LVsaCpc / 2) {
            var CiVsaCpc = FVsaCpc / 2 ;
            CiVsaCpc = CiVsaCpc.toFixed(2);
            tabla += "<td>" + CiVsaCpc + "</td>";
          }
          if (xiVsaCpc > LVsaCpc / 2) {
            var CiVsaCpc = - (FVsaCpc / 2) ;
            CiVsaCpc = CiVsaCpc.toFixed(2);
            tabla += "<td>" + CiVsaCpc + "</td>";
          }
        }
        if (c == 3) { // esta es la columna de el momento
          if (xiVsaCpc <= LVsaCpc / 2) {
            var MiVsaCpc = FVsaCpc * xiVsaCpc / 2 ;
            MiVsaCpc = MiVsaCpc.toFixed(2);
            tabla += "<td>" + MiVsaCpc + "</td>";
          }
          if (xiVsaCpc > LVsaCpc / 2) {
            var MiVsaCpc = FVsaCpc * (LVsaCpc - xiVsaCpc) / 2 ;
            MiVsaCpc = MiVsaCpc.toFixed(2);
            tabla += "<td>" + MiVsaCpc + "</td>";
          }
        }

      }

      tabla += "</tr>"; // con esta etiqueta finalizo la fila
  }
  tabla += "</table>"; // aca finalizo la tabla
  cuerpoTablaListaVsaCpc.innerHTML = tabla;

}

function calcularReaccionesVsaCps() // Viga Simplemente Apoyada Cargas Puntuales Simetricas
{
    var LVsaCps = document.getElementById("LVsaCps");
    LVsaCps = parseFloat(LVsaCps.value);
    var aVsaCps = document.getElementById("aVsaCps");
    aVsaCps = parseFloat(aVsaCps.value);
    var FVsaCps = document.getElementById("FVsaCps");
    FVsaCps = parseFloat(FVsaCps.value);

    // GENERACION DE TABLA DE REACCIONES
    var cuerpoTablaReaccionesVsaCps = document.getElementById("cuerpoTablaReaccionesVsaCps");
    cuerpoTablaReaccionesVsaCps.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
    var tablaReaccionesVsaCps = "<table>"; // variable para albergar la tabla

    tablaReaccionesVsaCps += "<tr>"; // con esta etiqueta inicializo la fila
    var RAVsaCps = FVsaCps;
    var MAVsaCps = FVsaCps * 0;
    var RBVsaCps = FVsaCps;
    var MBVsaCps = FVsaCps * (LVsaCps - LVsaCps);
    RAVsaCps = RAVsaCps.toFixed(2);
    MAVsaCps = MAVsaCps.toFixed(2);
    RBVsaCps = RBVsaCps.toFixed(2);
    MBVsaCps = MBVsaCps.toFixed(2);
    tablaReaccionesVsaCps += "<td>" + RAVsaCps + "</td>"; // imprimo en la casilla abajo de RA su valor
    tablaReaccionesVsaCps += "<td>" + MAVsaCps + "</td>"; // imprimo en la casilla abajo de MA su valor
    tablaReaccionesVsaCps += "<td>" + RBVsaCps + "</td>"; // imprimo en la casilla abajo de RB su valor
    tablaReaccionesVsaCps += "<td>" + MBVsaCps + "</td>"; // imprimo en la casilla abajo de MB su valor
    tablaReaccionesVsaCps += "</tr>"; // cierro la fila
    tablaReaccionesVsaCps += "</table>"; // cierro la tabla
    cuerpoTablaReaccionesVsaCps.innerHTML = tablaReaccionesVsaCps; // imprimo en html

    // GENERACION DE TABLA DE ESFUERZOS DE CORTE
    var cuerpoTablaCortesVsaCps = document.getElementById("cuerpoTablaCortesVsaCps");
    cuerpoTablaCortesVsaCps.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
    var tablaCortesVsaCps = "<table>"; // variable para albergar la tabla

    tablaCortesVsaCps += "<tr>"; // con esta etiqueta inicializo la fila
    var VACVsaCps = FVsaCps;
    var VCDVsaCps = 0;
    var VDBVsaCps = - (FVsaCps);
    VACVsaCps = VACVsaCps.toFixed(2);
    VCDVsaCps = VCDVsaCps.toFixed(2);
    VDBVsaCps = VDBVsaCps.toFixed(2);
    tablaCortesVsaCps += "<td>" + VACVsaCps + "</td>"; // imprimo en la casilla abajo de VAC su valor
    tablaCortesVsaCps += "<td>" + VCDVsaCps + "</td>"; // imprimo en la casilla abajo de VCD su valor
    tablaCortesVsaCps += "<td>" + VDBVsaCps + "</td>"; // imprimo en la casilla abajo de VDB su valor
    tablaCortesVsaCps += "</tr>"; // cierro la fila
    tablaCortesVsaCps += "</table>"; // cierro la tabla
    cuerpoTablaCortesVsaCps.innerHTML = tablaCortesVsaCps; // imprimo en html

    // GENERACION DE TABLA DE MOMENTO MAXIMO
    var cuerpoTablaMomentoVsaCps = document.getElementById("cuerpoTablaMomentoVsaCps");
    cuerpoTablaMomentoVsaCps.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
    var tablaMomentoVsaCps = "<table>"; // variable para albergar la tabla

    tablaMomentoVsaCps += "<tr>"; // con esta etiqueta inicializo la fila
    var MmaxVsaCps = FVsaCps * aVsaCps;
    MmaxVsaCps = MmaxVsaCps.toFixed(2);
    tablaMomentoVsaCps += "<td>" + MmaxVsaCps + "</td>"; // imprimo en la casilla abajo de Mmax su valor
    tablaMomentoVsaCps += "</tr>"; // cierro la fila
    tablaMomentoVsaCps += "</table>"; // cierro la tabla
    cuerpoTablaMomentoVsaCps.innerHTML = tablaMomentoVsaCps; // imprimo en html

    // GENERACION DE TABLA PARA EL LISTADO DE SOLICITACIONES

    var xVsaCps = LVsaCps * 0.025;
    if (xVsaCps < 0.05) { // artificio para que no quede x = 0
      xVsaCps = 0.05;
    }
    xVsaCps = xVsaCps.toFixed(1); //redondeo a 1 decimal el valor que va a ir aumentando X de fila a fila
    var numFilasVsaCps = 1 + Math.trunc(LVsaCps/xVsaCps); // 1 es por la fila inicial (X=0)
    var numColumnasVsaCps = 3;
    var cuerpoTablaListaVsaCps = document.getElementById("cuerpoTablaListaVsaCps");

    cuerpoTablaListaVsaCps.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
    var tabla = "<table>"; // variable para albergar la tabla

    for (var f = 0; f <= numFilasVsaCps ; f++) { // aca hago correr las numFilas
        tabla += "<tr>"; // con esta etiqueta inicializo la fila
        for (var c = 1; c <= numColumnasVsaCps; c++) { // aca hago correr las numColumnas
          if (c == 1) { // esta es la columna de las xi
            var xiVsaCps = xVsaCps * f;
            xiVsaCps = xiVsaCps.toFixed(1); //redondeo a 1 decimal el valor de x que adopta la fila
            if (xiVsaCps < LVsaCps) {
              tabla += "<td>" + xiVsaCps + "</td>";
            } else {
              xiVsaCps = LVsaCps;
              f = numFilasVsaCps;
              tabla += "<td>" + xiVsaCps + "</td>";
            }
          }
          if (c == 2) { // esta es la columna de el corte
            if (xiVsaCps < aVsaCps) {
              var CiVsaCps = FVsaCps;
              CiVsaCps = CiVsaCps.toFixed(2);
              tabla += "<td>" + CiVsaCps + "</td>";
            }
            if (xiVsaCps >= aVsaCps && xiVsaCps <= (LVsaCps - aVsaCps)) {
              var CiVsaCps = 0 ;
              CiVsaCps = CiVsaCps.toFixed(2);
              tabla += "<td>" + CiVsaCps + "</td>";
            }
            if (xiVsaCps > (LVsaCps - aVsaCps)) {
              var CiVsaCps = - (FVsaCps) ;
              CiVsaCps = CiVsaCps.toFixed(2);
              tabla += "<td>" + CiVsaCps + "</td>";
            }
          }
          if (c == 3) { // esta es la columna de el momento
            if (xiVsaCps < aVsaCps) {
              var MiVsaCps = FVsaCps * xiVsaCps;
              MiVsaCps = MiVsaCps.toFixed(2);
              tabla += "<td>" + MiVsaCps + "</td>";
            }
            if (xiVsaCps >= aVsaCps && xiVsaCps <= (LVsaCps - aVsaCps)) {
              var MiVsaCps = FVsaCps * aVsaCps;
              MiVsaCps = MiVsaCps.toFixed(2);
              tabla += "<td>" + MiVsaCps + "</td>";
            }
            if (xiVsaCps > (LVsaCps - aVsaCps)) {
              var MiVsaCps = FVsaCps * (LVsaCps - xiVsaCps);
              MiVsaCps = MiVsaCps.toFixed(2);
              tabla += "<td>" + MiVsaCps + "</td>";
            }
          }

        }

        tabla += "</tr>"; // con esta etiqueta finalizo la fila
    }
    tabla += "</table>"; // aca finalizo la tabla
    cuerpoTablaListaVsaCps.innerHTML = tabla;

}

function calcularReaccionesVsaCue() // Viga Simplemente Apoyada Carga Univorme en un Extremo
{
    var LVsaCue = document.getElementById("LVsaCue");
    LVsaCue = parseFloat(LVsaCue.value);
    var aVsaCue = document.getElementById("aVsaCue");
    aVsaCue = parseFloat(aVsaCue.value);
    var qVsaCue = document.getElementById("qVsaCue");
    qVsaCue = parseFloat(qVsaCue.value);

    // GENERACION DE TABLA DE REACCIONES
    var cuerpoTablaReaccionesVsaCue = document.getElementById("cuerpoTablaReaccionesVsaCue");
    cuerpoTablaReaccionesVsaCue.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
    var tablaReaccionesVsaCue = "<table>"; // variable para albergar la tabla

    tablaReaccionesVsaCue += "<tr>"; // con esta etiqueta inicializo la fila
    var bVsaCue = LVsaCue - aVsaCue;
    var RAVsaCue = qVsaCue * aVsaCue * (bVsaCue + (aVsaCue / 2)) / LVsaCue;
    var MAVsaCue = (qVsaCue * aVsaCue * (bVsaCue + (aVsaCue / 2)) * 0 / LVsaCue) - (qVsaCue * Math.pow(0, 2) / 2);
    var RBVsaCue = qVsaCue * Math.pow(aVsaCue, 2) / (2 * LVsaCue);
    var MBVsaCue = qVsaCue * Math.pow(aVsaCue, 2) * (LVsaCue - LVsaCue) / (2 * LVsaCue);
    RAVsaCue = RAVsaCue.toFixed(2);
    MAVsaCue = MAVsaCue.toFixed(2);
    RBVsaCue = RBVsaCue.toFixed(2);
    MBVsaCue = MBVsaCue.toFixed(2);
    tablaReaccionesVsaCue += "<td>" + RAVsaCue + "</td>"; // imprimo en la casilla abajo de RA su valor
    tablaReaccionesVsaCue += "<td>" + MAVsaCue + "</td>"; // imprimo en la casilla abajo de MA su valor
    tablaReaccionesVsaCue += "<td>" + RBVsaCue + "</td>"; // imprimo en la casilla abajo de RB su valor
    tablaReaccionesVsaCue += "<td>" + MBVsaCue + "</td>"; // imprimo en la casilla abajo de MB su valor
    tablaReaccionesVsaCue += "</tr>"; // cierro la fila
    tablaReaccionesVsaCue += "</table>"; // cierro la tabla
    cuerpoTablaReaccionesVsaCue.innerHTML = tablaReaccionesVsaCue; // imprimo en html

    // GENERACION DE TABLA DE ESFUERZOS DE CORTE
    var cuerpoTablaCortesVsaCue = document.getElementById("cuerpoTablaCortesVsaCue");
    cuerpoTablaCortesVsaCue.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
    var tablaCortesVsaCue = "<table>"; // variable para albergar la tabla

    tablaCortesVsaCue += "<tr>"; // con esta etiqueta inicializo la fila
    var VAVsaCue = qVsaCue * aVsaCue * (bVsaCue + (aVsaCue / 2)) / LVsaCue;
    var VCBVsaCue = - (qVsaCue * Math.pow(aVsaCue, 2) / (2 * LVsaCue));
    VAVsaCue = VAVsaCue.toFixed(2);
    VCBVsaCue = VCBVsaCue.toFixed(2);
    tablaCortesVsaCue += "<td>" + VAVsaCue + "</td>"; // imprimo en la casilla abajo de VA su valor
    tablaCortesVsaCue += "<td>" + VCBVsaCue + "</td>"; // imprimo en la casilla abajo de VCB su valor
    tablaCortesVsaCue += "</tr>"; // cierro la fila
    tablaCortesVsaCue += "</table>"; // cierro la tabla
    cuerpoTablaCortesVsaCue.innerHTML = tablaCortesVsaCue; // imprimo en html

    // GENERACION DE TABLA DE MOMENTO MAXIMO
    var cuerpoTablaMomentoVsaCue = document.getElementById("cuerpoTablaMomentoVsaCue");
    cuerpoTablaMomentoVsaCue.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
    var tablaMomentoVsaCue = "<table>"; // variable para albergar la tabla

    tablaMomentoVsaCue += "<tr>"; // con esta etiqueta inicializo la fila
    var MmaxVsaCue = qVsaCue * Math.pow(aVsaCue, 2) * Math.pow((1 - (aVsaCue / (2 * LVsaCue))), 2) / 2;
    MmaxVsaCue = MmaxVsaCue.toFixed(2);
    tablaMomentoVsaCue += "<td>" + MmaxVsaCue + "</td>"; // imprimo en la casilla abajo de Mmax su valor
    tablaMomentoVsaCue += "</tr>"; // cierro la fila
    tablaMomentoVsaCue += "</table>"; // cierro la tabla
    cuerpoTablaMomentoVsaCue.innerHTML = tablaMomentoVsaCue; // imprimo en html

    // GENERACION DE TABLA PARA EL LISTADO DE SOLICITACIONES

    var xVsaCue = LVsaCue * 0.025;
    if (xVsaCue < 0.05) { // artificio para que no quede x = 0
      xVsaCue = 0.05;
    }
    xVsaCue = xVsaCue.toFixed(1); //redondeo a 1 decimal el valor que va a ir aumentando X de fila a fila
    var numFilasVsaCue = 1 + Math.trunc(LVsaCue/xVsaCue); // 1 es por la fila inicial (X=0)
    var numColumnasVsaCue = 3;
    var cuerpoTablaListaVsaCue = document.getElementById("cuerpoTablaListaVsaCue");

    cuerpoTablaListaVsaCue.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
    var tabla = "<table>"; // variable para albergar la tabla

    for (var f = 0; f <= numFilasVsaCue ; f++) { // aca hago correr las numFilas
        tabla += "<tr>"; // con esta etiqueta inicializo la fila
        for (var c = 1; c <= numColumnasVsaCue; c++) { // aca hago correr las numColumnas
          if (c == 1) { // esta es la columna de las xi
            var xiVsaCue = xVsaCue * f;
            xiVsaCue = xiVsaCue.toFixed(1); //redondeo a 1 decimal el valor de x que adopta la fila
            if (xiVsaCue < LVsaCue) {
              tabla += "<td>" + xiVsaCue + "</td>";
            } else {
              xiVsaCue = LVsaCue;
              f = numFilasVsaCue;
              tabla += "<td>" + xiVsaCue + "</td>";
            }
          }
          if (c == 2) { // esta es la columna de el corte
            if (xiVsaCue == 0) {
              var CiVsaCue = qVsaCue * aVsaCue * (bVsaCue + (aVsaCue / 2)) / LVsaCue;
              CiVsaCue = CiVsaCue.toFixed(2);
              tabla += "<td>" + CiVsaCue + "</td>";
            }
            if (xiVsaCue > 0 && xiVsaCue <= aVsaCue) {
              var CiVsaCue = (qVsaCue * aVsaCue * (bVsaCue + (aVsaCue / 2)) / LVsaCue) - qVsaCue * xiVsaCue;
              CiVsaCue = CiVsaCue.toFixed(2);
              tabla += "<td>" + CiVsaCue + "</td>";
            }
            if (xiVsaCue > aVsaCue) {
              var CiVsaCue = - (qVsaCue * Math.pow(aVsaCue, 2) / (2 * LVsaCue));
              CiVsaCue = CiVsaCue.toFixed(2);
              tabla += "<td>" + CiVsaCue + "</td>";
            }
          }
          if (c == 3) { // esta es la columna de el momento
            if (xiVsaCue <= aVsaCue) {
              var MiVsaCue = (qVsaCue * aVsaCue * (bVsaCue + (aVsaCue / 2)) * xiVsaCue / LVsaCue) - (qVsaCue * Math.pow(xiVsaCue, 2) / 2);
              MiVsaCue = MiVsaCue.toFixed(2);
              tabla += "<td>" + MiVsaCue + "</td>";
            }
            if (xiVsaCue > aVsaCue) {
              var MiVsaCue = qVsaCue * Math.pow(aVsaCue, 2) * (LVsaCue - xiVsaCue) / (2 * LVsaCue);
              MiVsaCue = MiVsaCue.toFixed(2);
              tabla += "<td>" + MiVsaCue + "</td>";
            }
          }

        }

        tabla += "</tr>"; // con esta etiqueta finalizo la fila
    }
    tabla += "</table>"; // aca finalizo la tabla
    cuerpoTablaListaVsaCue.innerHTML = tabla;

}

function calcularReaccionesVsaCuv() // Viga Simplemente Apoyada Carga Uniforme en todo el Vano
{
  var LVsaCuv = document.getElementById("LVsaCuv");
  LVsaCuv = parseFloat(LVsaCuv.value);
  var qVsaCuv = document.getElementById("qVsaCuv");
  qVsaCuv = parseFloat(qVsaCuv.value);

  // GENERACION DE TABLA DE REACCIONES
  var cuerpoTablaReaccionesVsaCuv = document.getElementById("cuerpoTablaReaccionesVsaCuv");
  cuerpoTablaReaccionesVsaCuv.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
  var tablaReaccionesVsaCuv = "<table>"; // variable para albergar la tabla

  tablaReaccionesVsaCuv += "<tr>"; // con esta etiqueta inicializo la fila
  var RAVsaCuv = qVsaCuv * LVsaCuv / 2;
  var MAVsaCuv = qVsaCuv * 0 * (LVsaCuv - 0) / 2;
  var RBVsaCuv = qVsaCuv * LVsaCuv / 2;
  var MBVsaCuv = qVsaCuv * LVsaCuv * (LVsaCuv - LVsaCuv) / 2;
  RAVsaCuv = RAVsaCuv.toFixed(2);
  MAVsaCuv = MAVsaCuv.toFixed(2);
  RBVsaCuv = RBVsaCuv.toFixed(2);
  MBVsaCuv = MBVsaCuv.toFixed(2);
  tablaReaccionesVsaCuv += "<td>" + RAVsaCuv + "</td>"; // imprimo en la casilla abajo de RA su valor
  tablaReaccionesVsaCuv += "<td>" + MAVsaCuv + "</td>"; // imprimo en la casilla abajo de MA su valor
  tablaReaccionesVsaCuv += "<td>" + RBVsaCuv + "</td>"; // imprimo en la casilla abajo de RB su valor
  tablaReaccionesVsaCuv += "<td>" + MBVsaCuv + "</td>"; // imprimo en la casilla abajo de MB su valor
  tablaReaccionesVsaCuv += "</tr>"; // cierro la fila
  tablaReaccionesVsaCuv += "</table>"; // cierro la tabla
  cuerpoTablaReaccionesVsaCuv.innerHTML = tablaReaccionesVsaCuv; // imprimo en html

  // GENERACION DE TABLA DE ESFUERZOS DE CORTE
  var cuerpoTablaCortesVsaCuv = document.getElementById("cuerpoTablaCortesVsaCuv");
  cuerpoTablaCortesVsaCuv.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
  var tablaCortesVsaCuv = "<table>"; // variable para albergar la tabla

  tablaCortesVsaCuv += "<tr>"; // con esta etiqueta inicializo la fila
  var VAVsaCuv = qVsaCuv * LVsaCuv / 2;
  var VBVsaCuv = - (qVsaCuv * LVsaCuv / 2);
  VAVsaCuv = VAVsaCuv.toFixed(2);
  VBVsaCuv = VBVsaCuv.toFixed(2);
  tablaCortesVsaCuv += "<td>" + VAVsaCuv + "</td>"; // imprimo en la casilla abajo de VA su valor
  tablaCortesVsaCuv += "<td>" + VBVsaCuv + "</td>"; // imprimo en la casilla abajo de VB su valor
  tablaCortesVsaCuv += "</tr>"; // cierro la fila
  tablaCortesVsaCuv += "</table>"; // cierro la tabla
  cuerpoTablaCortesVsaCuv.innerHTML = tablaCortesVsaCuv; // imprimo en html

  // GENERACION DE TABLA DE MOMENTO MAXIMO
  var cuerpoTablaMomentoVsaCuv = document.getElementById("cuerpoTablaMomentoVsaCuv");
  cuerpoTablaMomentoVsaCuv.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
  var tablaMomentoVsaCuv = "<table>"; // variable para albergar la tabla

  tablaMomentoVsaCuv += "<tr>"; // con esta etiqueta inicializo la fila
  var MmaxVsaCuv = qVsaCuv * Math.pow(LVsaCuv, 2) / 8;
  MmaxVsaCuv = MmaxVsaCuv.toFixed(2);
  tablaMomentoVsaCuv += "<td>" + MmaxVsaCuv + "</td>"; // imprimo en la casilla abajo de Mmax su valor
  tablaMomentoVsaCuv += "</tr>"; // cierro la fila
  tablaMomentoVsaCuv += "</table>"; // cierro la tabla
  cuerpoTablaMomentoVsaCuv.innerHTML = tablaMomentoVsaCuv; // imprimo en html

  // GENERACION DE TABLA PARA EL LISTADO DE SOLICITACIONES

  var xVsaCuv = LVsaCuv * 0.025;
  if (xVsaCuv < 0.05) { // artificio para que no quede x = 0
    xVsaCuv = 0.05;
  }
  xVsaCuv = xVsaCuv.toFixed(1); //redondeo a 1 decimal el valor que va a ir aumentando X de fila a fila
  var numFilasVsaCuv = 1 + Math.trunc(LVsaCuv/xVsaCuv); // 1 es por la fila inicial (X=0)
  var numColumnasVsaCuv = 3;
  var cuerpoTablaListaVsaCuv = document.getElementById("cuerpoTablaListaVsaCuv");

  cuerpoTablaListaVsaCuv.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
  var tabla = "<table>"; // variable para albergar la tabla

  for (var f = 0; f <= numFilasVsaCuv ; f++) { // aca hago correr las numFilas
      tabla += "<tr>"; // con esta etiqueta inicializo la fila
      for (var c = 1; c <= numColumnasVsaCuv; c++) { // aca hago correr las numColumnas
        if (c == 1) { // esta es la columna de las xi
          var xiVsaCuv = xVsaCuv * f;
          xiVsaCuv = xiVsaCuv.toFixed(1); //redondeo a 1 decimal el valor de x que adopta la fila
          if (xiVsaCuv < LVsaCuv) {
            tabla += "<td>" + xiVsaCuv + "</td>";
          } else {
            xiVsaCuv = LVsaCuv;
            f = numFilasVsaCuv;
            tabla += "<td>" + xiVsaCuv + "</td>";
          }
        }
        if (c == 2) { // esta es la columna de el corte
          if (xiVsaCuv == 0) {
            var CiVsaCuv = qVsaCuv * LVsaCuv / 2 ;
            CiVsaCuv = CiVsaCuv.toFixed(2);
            tabla += "<td>" + CiVsaCuv + "</td>";
          }
          if (xiVsaCuv > 0 && xiVsaCuv < LVsaCuv) {
            var CiVsaCuv = qVsaCuv * ((LVsaCuv / 2) - xiVsaCuv) ;
            CiVsaCuv = CiVsaCuv.toFixed(2);
            tabla += "<td>" + CiVsaCuv + "</td>";
          }
          if (xiVsaCuv == LVsaCuv) {
            var CiVsaCuv = - (qVsaCuv * LVsaCuv / 2);
            CiVsaCuv = CiVsaCuv.toFixed(2);
            tabla += "<td>" + CiVsaCuv + "</td>";
          }
        }
        if (c == 3) { // esta es la columna de el momento
            var MiVsaCuv = qVsaCuv * xiVsaCuv * (LVsaCuv - xiVsaCuv) / 2 ;
            MiVsaCuv = MiVsaCuv.toFixed(2);
            tabla += "<td>" + MiVsaCuv + "</td>";
        }
      }

      tabla += "</tr>"; // con esta etiqueta finalizo la fila
  }
  tabla += "</table>"; // aca finalizo la tabla
  cuerpoTablaListaVsaCuv.innerHTML = tabla;

}

function calcularReaccionesVsaCui() // Viga Simplemente Apoyada Carga Uniforme en tramo Intermedio
{
  var LVsaCui = document.getElementById("LVsaCui");
  LVsaCui = parseFloat(LVsaCui.value);
  var aVsaCui = document.getElementById("aVsaCui");
  aVsaCui = parseFloat(aVsaCui.value);
  var cVsaCui = document.getElementById("cVsaCui");
  cVsaCui = parseFloat(cVsaCui.value);
  var qVsaCui = document.getElementById("qVsaCui");
  qVsaCui = parseFloat(qVsaCui.value);

  // GENERACION DE TABLA DE REACCIONES
  var cuerpoTablaReaccionesVsaCui = document.getElementById("cuerpoTablaReaccionesVsaCui");
  cuerpoTablaReaccionesVsaCui.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
  var tablaReaccionesVsaCui = "<table>"; // variable para albergar la tabla

  tablaReaccionesVsaCui += "<tr>"; // con esta etiqueta inicializo la fila
  var bVsaCui = LVsaCui - aVsaCui;
  var RAVsaCui = qVsaCui * bVsaCui * cVsaCui / LVsaCui;
  var MAVsaCui = (qVsaCui * bVsaCui * cVsaCui / LVsaCui) * 0;
  var RBVsaCui = qVsaCui * aVsaCui * cVsaCui / LVsaCui;
  var MBVsaCui = (qVsaCui * aVsaCui * cVsaCui / LVsaCui) * (LVsaCui - LVsaCui);
  RAVsaCui = RAVsaCui.toFixed(2);
  MAVsaCui = MAVsaCui.toFixed(2);
  RBVsaCui = RBVsaCui.toFixed(2);
  MBVsaCui = MBVsaCui.toFixed(2);
  tablaReaccionesVsaCui += "<td>" + RAVsaCui + "</td>"; // imprimo en la casilla abajo de RA su valor
  tablaReaccionesVsaCui += "<td>" + MAVsaCui + "</td>"; // imprimo en la casilla abajo de MA su valor
  tablaReaccionesVsaCui += "<td>" + RBVsaCui + "</td>"; // imprimo en la casilla abajo de RB su valor
  tablaReaccionesVsaCui += "<td>" + MBVsaCui + "</td>"; // imprimo en la casilla abajo de MB su valor
  tablaReaccionesVsaCui += "</tr>"; // cierro la fila
  tablaReaccionesVsaCui += "</table>"; // cierro la tabla
  cuerpoTablaReaccionesVsaCui.innerHTML = tablaReaccionesVsaCui; // imprimo en html

  // GENERACION DE TABLA DE ESFUERZOS DE CORTE
  var cuerpoTablaCortesVsaCui = document.getElementById("cuerpoTablaCortesVsaCui");
  cuerpoTablaCortesVsaCui.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
  var tablaCortesVsaCui = "<table>"; // variable para albergar la tabla

  tablaCortesVsaCui += "<tr>"; // con esta etiqueta inicializo la fila
  var VACVsaCui = qVsaCui * bVsaCui * cVsaCui / LVsaCui;
  var VDBVsaCui = - (qVsaCui * aVsaCui * cVsaCui / LVsaCui);
  VACVsaCui = VACVsaCui.toFixed(2);
  VDBVsaCui = VDBVsaCui.toFixed(2);
  tablaCortesVsaCui += "<td>" + VACVsaCui + "</td>"; // imprimo en la casilla abajo de VAC su valor
  tablaCortesVsaCui += "<td>" + VDBVsaCui + "</td>"; // imprimo en la casilla abajo de VDB su valor
  tablaCortesVsaCui += "</tr>"; // cierro la fila
  tablaCortesVsaCui += "</table>"; // cierro la tabla
  cuerpoTablaCortesVsaCui.innerHTML = tablaCortesVsaCui; // imprimo en html

  // GENERACION DE TABLA DE MOMENTO MAXIMO
  var cuerpoTablaMomentoVsaCui = document.getElementById("cuerpoTablaMomentoVsaCui");
  cuerpoTablaMomentoVsaCui.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
  var tablaMomentoVsaCui = "<table>"; // variable para albergar la tabla

  tablaMomentoVsaCui += "<tr>"; // con esta etiqueta inicializo la fila
  var MmaxVsaCui = qVsaCui * bVsaCui * cVsaCui * ((2 * aVsaCui) - cVsaCui + (bVsaCui * cVsaCui / LVsaCui)) / (2 * LVsaCui);
  MmaxVsaCui = MmaxVsaCui.toFixed(2);
  tablaMomentoVsaCui += "<td>" + MmaxVsaCui + "</td>"; // imprimo en la casilla abajo de Mmax su valor
  tablaMomentoVsaCui += "</tr>"; // cierro la fila
  tablaMomentoVsaCui += "</table>"; // cierro la tabla
  cuerpoTablaMomentoVsaCui.innerHTML = tablaMomentoVsaCui; // imprimo en html

  // GENERACION DE TABLA PARA EL LISTADO DE SOLICITACIONES

  var xVsaCui = LVsaCui * 0.025;
  if (xVsaCui < 0.05) { // artificio para que no quede x = 0
    xVsaCui = 0.05;
  }
  xVsaCui = xVsaCui.toFixed(1); //redondeo a 1 decimal el valor que va a ir aumentando X de fila a fila
  var numFilasVsaCui = 1 + Math.trunc(LVsaCui/xVsaCui); // 1 es por la fila inicial (X=0)
  var numColumnasVsaCui = 3;
  var cuerpoTablaListaVsaCui = document.getElementById("cuerpoTablaListaVsaCui");

  cuerpoTablaListaVsaCui.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
  var tabla = "<table>"; // variable para albergar la tabla

  for (var f = 0; f <= numFilasVsaCui ; f++) { // aca hago correr las numFilas
      tabla += "<tr>"; // con esta etiqueta inicializo la fila
      for (var c = 1; c <= numColumnasVsaCui; c++) { // aca hago correr las numColumnas
        if (c == 1) { // esta es la columna de las xi
          var xiVsaCui = xVsaCui * f;
          xiVsaCui = xiVsaCui.toFixed(1); //redondeo a 1 decimal el valor de x que adopta la fila
          if (xiVsaCui < LVsaCui) {
            tabla += "<td>" + xiVsaCui + "</td>";
          } else {
            xiVsaCui = LVsaCui;
            f = numFilasVsaCui;
            tabla += "<td>" + xiVsaCui + "</td>";
          }
        }
        if (c == 2) { // esta es la columna de el corte
          if (xiVsaCui >= 0 && xiVsaCui <= (aVsaCui - (cVsaCui / 2))) {
            var CiVsaCui = (qVsaCui * bVsaCui * cVsaCui / LVsaCui);
            CiVsaCui = CiVsaCui.toFixed(2);
            tabla += "<td>" + CiVsaCui + "</td>";
          }
          if (xiVsaCui > (aVsaCui - (cVsaCui / 2)) && xiVsaCui < (aVsaCui + (cVsaCui / 2))) {
            var CiVsaCui = (qVsaCui * bVsaCui * cVsaCui / LVsaCui) - (qVsaCui * (xiVsaCui - aVsaCui + cVsaCui / 2) ) ;
            CiVsaCui = CiVsaCui.toFixed(2);
            tabla += "<td>" + CiVsaCui + "</td>";
          }
          if (xiVsaCui >= (aVsaCui + (cVsaCui / 2))) {
            var CiVsaCui = - (qVsaCui * aVsaCui * cVsaCui / LVsaCui);
            CiVsaCui = CiVsaCui.toFixed(2);
            tabla += "<td>" + CiVsaCui + "</td>";
          }
        }
        if (c == 3) { // esta es la columna de el momento
          if (xiVsaCui >= 0 && xiVsaCui <= (aVsaCui - (cVsaCui / 2))) {
            var MiVsaCui = (qVsaCui * bVsaCui * cVsaCui / LVsaCui) * xiVsaCui ;
            MiVsaCui = MiVsaCui.toFixed(2);
            tabla += "<td>" + MiVsaCui + "</td>";
          }
          if (xiVsaCui > (aVsaCui - (cVsaCui / 2)) && xiVsaCui < (aVsaCui + (cVsaCui / 2))) {
            var MiVsaCui = ((qVsaCui * bVsaCui * cVsaCui / LVsaCui) * xiVsaCui) - (qVsaCui * Math.pow(xiVsaCui - aVsaCui + (cVsaCui / 2), 2) / 2) ;
            MiVsaCui = MiVsaCui.toFixed(2);
            tabla += "<td>" + MiVsaCui + "</td>";
          }
          if (xiVsaCui >= (aVsaCui + (cVsaCui / 2))) {
            var MiVsaCui = (qVsaCui * aVsaCui * cVsaCui / LVsaCui) * (LVsaCui - xiVsaCui) ;
            MiVsaCui = MiVsaCui.toFixed(2);
            tabla += "<td>" + MiVsaCui + "</td>";
          }
        }
      }

      tabla += "</tr>"; // con esta etiqueta finalizo la fila
  }
  tabla += "</table>"; // aca finalizo la tabla
  cuerpoTablaListaVsaCui.innerHTML = tabla;

}

function calcularReaccionesVsaMpe() // Viga Simplemente Apoyada Momento Puntual en Extremo
{
  var LVsaMpe = document.getElementById("LVsaMpe");
  LVsaMpe = parseFloat(LVsaMpe.value);
  var MVsaMpe = document.getElementById("MVsaMpe");
  MVsaMpe = parseFloat(MVsaMpe.value);

  // GENERACION DE TABLA DE REACCIONES
  var cuerpoTablaReaccionesVsaMpe = document.getElementById("cuerpoTablaReaccionesVsaMpe");
  cuerpoTablaReaccionesVsaMpe.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
  var tablaReaccionesVsaMpe = "<table>"; // variable para albergar la tabla

  tablaReaccionesVsaMpe += "<tr>"; // con esta etiqueta inicializo la fila
  var RAVsaMpe = MVsaMpe / LVsaMpe;
  var MAVsaMpe = 0;
  var RBVsaMpe = - (MVsaMpe / LVsaMpe);
  var MBVsaMpe = 0;
  RAVsaMpe = RAVsaMpe.toFixed(2);
  MAVsaMpe = MAVsaMpe.toFixed(2);
  RBVsaMpe = RBVsaMpe.toFixed(2);
  MBVsaMpe = MBVsaMpe.toFixed(2);
  tablaReaccionesVsaMpe += "<td>" + RAVsaMpe + "</td>"; // imprimo en la casilla abajo de RA su valor
  tablaReaccionesVsaMpe += "<td>" + MAVsaMpe + "</td>"; // imprimo en la casilla abajo de MA su valor
  tablaReaccionesVsaMpe += "<td>" + RBVsaMpe + "</td>"; // imprimo en la casilla abajo de RB su valor
  tablaReaccionesVsaMpe += "<td>" + MBVsaMpe + "</td>"; // imprimo en la casilla abajo de MB su valor
  tablaReaccionesVsaMpe += "</tr>"; // cierro la fila
  tablaReaccionesVsaMpe += "</table>"; // cierro la tabla
  cuerpoTablaReaccionesVsaMpe.innerHTML = tablaReaccionesVsaMpe; // imprimo en html

  // GENERACION DE TABLA DE ESFUERZOS DE CORTE
  var cuerpoTablaCortesVsaMpe = document.getElementById("cuerpoTablaCortesVsaMpe");
  cuerpoTablaCortesVsaMpe.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
  var tablaCortesVsaMpe = "<table>"; // variable para albergar la tabla

  tablaCortesVsaMpe += "<tr>"; // con esta etiqueta inicializo la fila
  var VABVsaMpe = MVsaMpe / LVsaMpe;
  VABVsaMpe = VABVsaMpe.toFixed(2);
  tablaCortesVsaMpe += "<td>" + VABVsaMpe + "</td>"; // imprimo en la casilla abajo de VAB su valor
  tablaCortesVsaMpe += "</tr>"; // cierro la fila
  tablaCortesVsaMpe += "</table>"; // cierro la tabla
  cuerpoTablaCortesVsaMpe.innerHTML = tablaCortesVsaMpe; // imprimo en html

  // GENERACION DE TABLA DE MOMENTO MAXIMO
  var cuerpoTablaMomentoVsaMpe = document.getElementById("cuerpoTablaMomentoVsaMpe");
  cuerpoTablaMomentoVsaMpe.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
  var tablaMomentoVsaMpe = "<table>"; // variable para albergar la tabla

  tablaMomentoVsaMpe += "<tr>"; // con esta etiqueta inicializo la fila
  var MmaxVsaMpe = - MVsaMpe;
  MmaxVsaMpe = MmaxVsaMpe.toFixed(2);
  tablaMomentoVsaMpe += "<td>" + MmaxVsaMpe + "</td>"; // imprimo en la casilla abajo de Mmax su valor
  tablaMomentoVsaMpe += "</tr>"; // cierro la fila
  tablaMomentoVsaMpe += "</table>"; // cierro la tabla
  cuerpoTablaMomentoVsaMpe.innerHTML = tablaMomentoVsaMpe; // imprimo en html

  // GENERACION DE TABLA PARA EL LISTADO DE SOLICITACIONES

  var xVsaMpe = LVsaMpe * 0.025;
  if (xVsaMpe < 0.05) { // artificio para que no quede x = 0
    xVsaMpe = 0.05;
  }
  xVsaMpe = xVsaMpe.toFixed(1); //redondeo a 1 decimal el valor que va a ir aumentando X de fila a fila
  var numFilasVsaMpe = 1 + Math.trunc(LVsaMpe/xVsaMpe); // 1 es por la fila inicial (X=0)
  var numColumnasVsaMpe = 3;
  var cuerpoTablaListaVsaMpe = document.getElementById("cuerpoTablaListaVsaMpe");

  cuerpoTablaListaVsaMpe.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
  var tabla = "<table>"; // variable para albergar la tabla

  for (var f = 0; f <= numFilasVsaMpe ; f++) { // aca hago correr las numFilas
      tabla += "<tr>"; // con esta etiqueta inicializo la fila
      for (var c = 1; c <= numColumnasVsaMpe; c++) { // aca hago correr las numColumnas
        if (c == 1) { // esta es la columna de las xi
          var xiVsaMpe = xVsaMpe * f;
          xiVsaMpe = xiVsaMpe.toFixed(1); //redondeo a 1 decimal el valor de x que adopta la fila
          if (xiVsaMpe < LVsaMpe) {
            tabla += "<td>" + xiVsaMpe + "</td>";
          } else {
            xiVsaMpe = LVsaMpe;
            f = numFilasVsaMpe;
            tabla += "<td>" + xiVsaMpe + "</td>";
          }
        }
        if (c == 2) { // esta es la columna de el corte
          if (xiVsaMpe >= 0 && xiVsaMpe <= LVsaMpe) {
            var CiVsaMpe = MVsaMpe / LVsaMpe;
            CiVsaMpe = CiVsaMpe.toFixed(2);
            tabla += "<td>" + CiVsaMpe + "</td>";
          }
        }
        if (c == 3) { // esta es la columna de el momento
          if (xiVsaMpe == 0) {
            var MiVsaMpe = - MVsaMpe ;
            MiVsaMpe = MiVsaMpe.toFixed(2);
            tabla += "<td>" + MiVsaMpe + "</td>";
          }
          if (xiVsaMpe > 0 && xiVsaMpe < LVsaMpe) {
            var MiVsaMpe = - MVsaMpe * ( 1 - xiVsaMpe / LVsaMpe) ;
            MiVsaMpe = MiVsaMpe.toFixed(2);
            tabla += "<td>" + MiVsaMpe + "</td>";
          }
          if (xiVsaMpe == LVsaMpe) {
            var MiVsaMpe = 0 ;
            MiVsaMpe = MiVsaMpe.toFixed(2);
            tabla += "<td>" + MiVsaMpe + "</td>";
          }
        }
      }

      tabla += "</tr>"; // con esta etiqueta finalizo la fila
  }
  tabla += "</table>"; // aca finalizo la tabla
  cuerpoTablaListaVsaMpe.innerHTML = tabla;

}

function calcularReaccionesVsaMpi() // Viga Simplemente Apoyada Momento Puntual en Intermedio
{
  var LVsaMpi = document.getElementById("LVsaMpi");
  LVsaMpi = parseFloat(LVsaMpi.value);
  var aVsaMpi = document.getElementById("aVsaMpi");
  aVsaMpi = parseFloat(aVsaMpi.value);
  var MVsaMpi = document.getElementById("MVsaMpi");
  MVsaMpi = parseFloat(MVsaMpi.value);

  // GENERACION DE TABLA DE REACCIONES
  var cuerpoTablaReaccionesVsaMpi = document.getElementById("cuerpoTablaReaccionesVsaMpi");
  cuerpoTablaReaccionesVsaMpi.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
  var tablaReaccionesVsaMpi = "<table>"; // variable para albergar la tabla

  tablaReaccionesVsaMpi += "<tr>"; // con esta etiqueta inicializo la fila
  var RAVsaMpi = MVsaMpi / LVsaMpi;
  var MAVsaMpi = (MVsaMpi / LVsaMpi) * 0;
  var RBVsaMpi = - (MVsaMpi / LVsaMpi);
  var MBVsaMpi = - (MVsaMpi / LVsaMpi) * (LVsaMpi - LVsaMpi);
  RAVsaMpi = RAVsaMpi.toFixed(2);
  MAVsaMpi = MAVsaMpi.toFixed(2);
  RBVsaMpi = RBVsaMpi.toFixed(2);
  MBVsaMpi = MBVsaMpi.toFixed(2);
  tablaReaccionesVsaMpi += "<td>" + RAVsaMpi + "</td>"; // imprimo en la casilla abajo de RA su valor
  tablaReaccionesVsaMpi += "<td>" + MAVsaMpi + "</td>"; // imprimo en la casilla abajo de MA su valor
  tablaReaccionesVsaMpi += "<td>" + RBVsaMpi + "</td>"; // imprimo en la casilla abajo de RB su valor
  tablaReaccionesVsaMpi += "<td>" + MBVsaMpi + "</td>"; // imprimo en la casilla abajo de MB su valor
  tablaReaccionesVsaMpi += "</tr>"; // cierro la fila
  tablaReaccionesVsaMpi += "</table>"; // cierro la tabla
  cuerpoTablaReaccionesVsaMpi.innerHTML = tablaReaccionesVsaMpi; // imprimo en html

  // GENERACION DE TABLA DE ESFUERZOS DE CORTE
  var cuerpoTablaCortesVsaMpi = document.getElementById("cuerpoTablaCortesVsaMpi");
  cuerpoTablaCortesVsaMpi.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
  var tablaCortesVsaMpi = "<table>"; // variable para albergar la tabla

  tablaCortesVsaMpi += "<tr>"; // con esta etiqueta inicializo la fila
  var VABVsaMpi = MVsaMpi / LVsaMpi;
  VABVsaMpi = VABVsaMpi.toFixed(2);
  tablaCortesVsaMpi += "<td>" + VABVsaMpi + "</td>"; // imprimo en la casilla abajo de VAB su valor
  tablaCortesVsaMpi += "</tr>"; // cierro la fila
  tablaCortesVsaMpi += "</table>"; // cierro la tabla
  cuerpoTablaCortesVsaMpi.innerHTML = tablaCortesVsaMpi; // imprimo en html

  // GENERACION DE TABLA DE MOMENTO MAXIMO
  var cuerpoTablaMomentoVsaMpi = document.getElementById("cuerpoTablaMomentoVsaMpi");
  cuerpoTablaMomentoVsaMpi.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
  var tablaMomentoVsaMpi = "<table>"; // variable para albergar la tabla

  tablaMomentoVsaMpi += "<tr>"; // con esta etiqueta inicializo la fila
  var bVsaMpi = LVsaMpi - aVsaMpi;
  var MCizqVsaMpi = (MVsaMpi / LVsaMpi) * aVsaMpi;
  var MCderVsaMpi = - (MVsaMpi / LVsaMpi) * bVsaMpi;
  MCizqVsaMpi = MCizqVsaMpi.toFixed(2);
  MCderVsaMpi = MCderVsaMpi.toFixed(2);
  tablaMomentoVsaMpi += "<td>" + MCizqVsaMpi + "</td>"; // imprimo en la casilla abajo de MCizq su valor
  tablaMomentoVsaMpi += "<td>" + MCderVsaMpi + "</td>"; // imprimo en la casilla abajo de MCder su valor
  tablaMomentoVsaMpi += "</tr>"; // cierro la fila
  tablaMomentoVsaMpi += "</table>"; // cierro la tabla
  cuerpoTablaMomentoVsaMpi.innerHTML = tablaMomentoVsaMpi; // imprimo en html

  // GENERACION DE TABLA PARA EL LISTADO DE SOLICITACIONES

  var xVsaMpi = LVsaMpi * 0.025;
  if (xVsaMpi < 0.05) { // artificio para que no quede x = 0
    xVsaMpi = 0.05;
  }
  xVsaMpi = xVsaMpi.toFixed(1); //redondeo a 1 decimal el valor que va a ir aumentando X de fila a fila
  var numFilasVsaMpi = 1 + Math.trunc(LVsaMpi/xVsaMpi); // 1 es por la fila inicial (X=0)
  var numColumnasVsaMpi = 3;
  var cuerpoTablaListaVsaMpi = document.getElementById("cuerpoTablaListaVsaMpi");

  cuerpoTablaListaVsaMpi.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
  var tabla = "<table>"; // variable para albergar la tabla

  for (var f = 0; f <= numFilasVsaMpi ; f++) { // aca hago correr las numFilas
      tabla += "<tr>"; // con esta etiqueta inicializo la fila
      for (var c = 1; c <= numColumnasVsaMpi; c++) { // aca hago correr las numColumnas
        if (c == 1) { // esta es la columna de las xi
          var xiVsaMpi = xVsaMpi * f;
          xiVsaMpi = xiVsaMpi.toFixed(1); //redondeo a 1 decimal el valor de x que adopta la fila
          if (xiVsaMpi < LVsaMpi) {
            tabla += "<td>" + xiVsaMpi + "</td>";
          } else {
            xiVsaMpi = LVsaMpi;
            f = numFilasVsaMpi;
            tabla += "<td>" + xiVsaMpi + "</td>";
          }
        }
        if (c == 2) { // esta es la columna de el corte
          if (xiVsaMpi >= 0 && xiVsaMpi <= LVsaMpi) {
            var CiVsaMpi = MVsaMpi / LVsaMpi;
            CiVsaMpi = CiVsaMpi.toFixed(2);
            tabla += "<td>" + CiVsaMpi + "</td>";
          }
        }
        if (c == 3) { // esta es la columna de el momento
          if (xiVsaMpi >= 0 && xiVsaMpi < aVsaMpi) {
            var MiVsaMpi = (MVsaMpi / LVsaMpi) * xiVsaMpi;
            MiVsaMpi = MiVsaMpi.toFixed(2);
            tabla += "<td>" + MiVsaMpi + "</td>";
          }
          if (xiVsaMpi == aVsaMpi) {
            var MiizqVsaMpi = (MVsaMpi / LVsaMpi) * aVsaMpi;
            var MiderVsaMpi = - (MVsaMpi / LVsaMpi) * bVsaMpi;
            MiizqVsaMpi = MiizqVsaMpi.toFixed(2);
            MiderVsaMpi = MiderVsaMpi.toFixed(2);
            tabla += "<td>" + MiizqVsaMpi + " / " + MiderVsaMpi + "</td>";
          }
          if (xiVsaMpi > aVsaMpi) {
            var MiVsaMpi = - (MVsaMpi / LVsaMpi) * (LVsaMpi - xiVsaMpi) ;
            MiVsaMpi = MiVsaMpi.toFixed(2);
            tabla += "<td>" + MiVsaMpi + "</td>";
          }
        }
      }

      tabla += "</tr>"; // con esta etiqueta finalizo la fila
  }
  tabla += "</table>"; // aca finalizo la tabla
  cuerpoTablaListaVsaMpi.innerHTML = tabla;

}

function calcularReaccionesVsaMpce() // Viga Simplemente Apoyada Momentos Puntuales Contrarios en Extremos
{
  var LVsaMpce = document.getElementById("LVsaMpce");
  LVsaMpce = parseFloat(LVsaMpce.value);
  var MAVsaMpce = document.getElementById("MaVsaMpce");
  MAVsaMpce = parseFloat(MAVsaMpce.value);
  var MBVsaMpce = document.getElementById("MbVsaMpce");
  MBVsaMpce = parseFloat(MBVsaMpce.value);

  // GENERACION DE TABLA DE REACCIONES
  var cuerpoTablaReaccionesVsaMpce = document.getElementById("cuerpoTablaReaccionesVsaMpce");
  cuerpoTablaReaccionesVsaMpce.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
  var tablaReaccionesVsaMpce = "<table>"; // variable para albergar la tabla

  tablaReaccionesVsaMpce += "<tr>"; // con esta etiqueta inicializo la fila
  var RAVsaMpce = (MAVsaMpce - MBVsaMpce) / LVsaMpce;
  var MAReaccionVsaMpce = 0;
  var RBVsaMpce = - (MAVsaMpce - MBVsaMpce) / LVsaMpce;
  var MBReaccionVsaMpce = 0;
  RAVsaMpce = RAVsaMpce.toFixed(2);
  MAReaccionVsaMpce = MAReaccionVsaMpce.toFixed(2);
  RBVsaMpce = RBVsaMpce.toFixed(2);
  MBReaccionVsaMpce = MBReaccionVsaMpce.toFixed(2);
  tablaReaccionesVsaMpce += "<td>" + RAVsaMpce + "</td>"; // imprimo en la casilla abajo de RA su valor
  tablaReaccionesVsaMpce += "<td>" + MAReaccionVsaMpce + "</td>"; // imprimo en la casilla abajo de MA su valor
  tablaReaccionesVsaMpce += "<td>" + RBVsaMpce + "</td>"; // imprimo en la casilla abajo de RB su valor
  tablaReaccionesVsaMpce += "<td>" + MBReaccionVsaMpce + "</td>"; // imprimo en la casilla abajo de MB su valor
  tablaReaccionesVsaMpce += "</tr>"; // cierro la fila
  tablaReaccionesVsaMpce += "</table>"; // cierro la tabla
  cuerpoTablaReaccionesVsaMpce.innerHTML = tablaReaccionesVsaMpce; // imprimo en html

  // GENERACION DE TABLA DE ESFUERZOS DE CORTE
  var cuerpoTablaCortesVsaMpce = document.getElementById("cuerpoTablaCortesVsaMpce");
  cuerpoTablaCortesVsaMpce.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
  var tablaCortesVsaMpce = "<table>"; // variable para albergar la tabla

  tablaCortesVsaMpce += "<tr>"; // con esta etiqueta inicializo la fila
  var VABVsaMpce = (MAVsaMpce - MBVsaMpce) / LVsaMpce;
  VABVsaMpce = VABVsaMpce.toFixed(2);
  tablaCortesVsaMpce += "<td>" + VABVsaMpce + "</td>"; // imprimo en la casilla abajo de VAB su valor
  tablaCortesVsaMpce += "</tr>"; // cierro la fila
  tablaCortesVsaMpce += "</table>"; // cierro la tabla
  cuerpoTablaCortesVsaMpce.innerHTML = tablaCortesVsaMpce; // imprimo en html

  // GENERACION DE TABLA DE MOMENTO MAXIMO
  var cuerpoTablaMomentoVsaMpce = document.getElementById("cuerpoTablaMomentoVsaMpce");
  cuerpoTablaMomentoVsaMpce.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
  var tablaMomentoVsaMpce = "<table>"; // variable para albergar la tabla

  tablaMomentoVsaMpce += "<tr>"; // con esta etiqueta inicializo la fila
  var MAComparacionVsaMpce = Math.abs(MAVsaMpce);
  var MBComparacionVsaMpce = Math.abs(MBVsaMpce);
  if (MAComparacionVsaMpce >= MBComparacionVsaMpce) {
    MAMaxVsaMpce = - (MAVsaMpce.toFixed(2));
    tablaMomentoVsaMpce += "<td>" + MAMaxVsaMpce + "</td>"; // imprimo en la casilla abajo de MCizq su valor
    tablaMomentoVsaMpce += "</tr>"; // cierro la fila
    tablaMomentoVsaMpce += "</table>"; // cierro la tabla
    cuerpoTablaMomentoVsaMpce.innerHTML = tablaMomentoVsaMpce; // imprimo en html
  }
  else {
    MBMaxVsaMpce = - (MBVsaMpce.toFixed(2));
    tablaMomentoVsaMpce += "<td>" + MBMaxVsaMpce + "</td>"; // imprimo en la casilla abajo de MCizq su valor
    tablaMomentoVsaMpce += "</tr>"; // cierro la fila
    tablaMomentoVsaMpce += "</table>"; // cierro la tabla
    cuerpoTablaMomentoVsaMpce.innerHTML = tablaMomentoVsaMpce; // imprimo en html
  }

  // GENERACION DE TABLA PARA EL LISTADO DE SOLICITACIONES

  var xVsaMpce = LVsaMpce * 0.025;
  if (xVsaMpce < 0.05) { // artificio para que no quede x = 0
    xVsaMpce = 0.05;
  }
  xVsaMpce = xVsaMpce.toFixed(1); //redondeo a 1 decimal el valor que va a ir aumentando X de fila a fila
  var numFilasVsaMpce = 1 + Math.trunc(LVsaMpce/xVsaMpce); // 1 es por la fila inicial (X=0)
  var numColumnasVsaMpce = 3;
  var cuerpoTablaListaVsaMpce = document.getElementById("cuerpoTablaListaVsaMpce");

  cuerpoTablaListaVsaMpce.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
  var tabla = "<table>"; // variable para albergar la tabla

  for (var f = 0; f <= numFilasVsaMpce ; f++) { // aca hago correr las numFilas
      tabla += "<tr>"; // con esta etiqueta inicializo la fila
      for (var c = 1; c <= numColumnasVsaMpce; c++) { // aca hago correr las numColumnas
        if (c == 1) { // esta es la columna de las xi
          var xiVsaMpce = xVsaMpce * f;
          xiVsaMpce = xiVsaMpce.toFixed(1); //redondeo a 1 decimal el valor de x que adopta la fila
          if (xiVsaMpce < LVsaMpce) {
            tabla += "<td>" + xiVsaMpce + "</td>";
          } else {
            xiVsaMpce = LVsaMpce;
            f = numFilasVsaMpce;
            tabla += "<td>" + xiVsaMpce + "</td>";
          }
        }
        if (c == 2) { // esta es la columna de el corte
          if (xiVsaMpce >= 0 && xiVsaMpce <= LVsaMpce) {
            var CiVsaMpce = (MAVsaMpce - MBVsaMpce) / LVsaMpce;
            CiVsaMpce = CiVsaMpce.toFixed(2);
            tabla += "<td>" + CiVsaMpce + "</td>";
          }
        }
        if (c == 3) { // esta es la columna de el momento
          if (xiVsaMpce == 0) {
            var MiVsaMpce = - MAVsaMpce;
            MiVsaMpce = MiVsaMpce.toFixed(2);
            tabla += "<td>" + MiVsaMpce + "</td>";
          }
          if (xiVsaMpce > 0 && xiVsaMpce < LVsaMpce) {
            var MiVsaMpce = - (MAVsaMpce * (LVsaMpce - xiVsaMpce) / LVsaMpce) - (MBVsaMpce * xiVsaMpce / LVsaMpce);
            MiVsaMpce = MiVsaMpce.toFixed(2);
            tabla += "<td>" + MiVsaMpce + "</td>";
          }
          if (xiVsaMpce == LVsaMpce) {
            var MiVsaMpce = - MBVsaMpce;
            MiVsaMpce = MiVsaMpce.toFixed(2);
            tabla += "<td>" + MiVsaMpce + "</td>";
          }
        }
      }

      tabla += "</tr>"; // con esta etiqueta finalizo la fila
  }
  tabla += "</table>"; // aca finalizo la tabla
  cuerpoTablaListaVsaMpce.innerHTML = tabla;

}

function calcularReaccionesVsaMped() // Viga Simplemente Apoyada Momentos Puntuales en Extremos
{
  var LVsaMped = document.getElementById("LVsaMped");
  LVsaMped = parseFloat(LVsaMped.value);
  var MAVsaMped = document.getElementById("MaVsaMped");
  MAVsaMped = parseFloat(MAVsaMped.value);
  var MBVsaMped = document.getElementById("MbVsaMped");
  MBVsaMped = parseFloat(MBVsaMped.value);

  // GENERACION DE TABLA DE REACCIONES
  var cuerpoTablaReaccionesVsaMped = document.getElementById("cuerpoTablaReaccionesVsaMped");
  cuerpoTablaReaccionesVsaMped.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
  var tablaReaccionesVsaMped = "<table>"; // variable para albergar la tabla

  tablaReaccionesVsaMped += "<tr>"; // con esta etiqueta inicializo la fila
  var RAVsaMped = (MAVsaMped + MBVsaMped) / LVsaMped;
  var MAReaccionVsaMped = 0;
  var RBVsaMped = - (MAVsaMped + MBVsaMped) / LVsaMped;
  var MBReaccionVsaMped = 0;
  RAVsaMped = RAVsaMped.toFixed(2);
  MAReaccionVsaMped = MAReaccionVsaMped.toFixed(2);
  RBVsaMped = RBVsaMped.toFixed(2);
  MBReaccionVsaMped = MBReaccionVsaMped.toFixed(2);
  tablaReaccionesVsaMped += "<td>" + RAVsaMped + "</td>"; // imprimo en la casilla abajo de RA su valor
  tablaReaccionesVsaMped += "<td>" + MAReaccionVsaMped + "</td>"; // imprimo en la casilla abajo de MA su valor
  tablaReaccionesVsaMped += "<td>" + RBVsaMped + "</td>"; // imprimo en la casilla abajo de RB su valor
  tablaReaccionesVsaMped += "<td>" + MBReaccionVsaMped + "</td>"; // imprimo en la casilla abajo de MB su valor
  tablaReaccionesVsaMped += "</tr>"; // cierro la fila
  tablaReaccionesVsaMped += "</table>"; // cierro la tabla
  cuerpoTablaReaccionesVsaMped.innerHTML = tablaReaccionesVsaMped; // imprimo en html

  // GENERACION DE TABLA DE ESFUERZOS DE CORTE
  var cuerpoTablaCortesVsaMped = document.getElementById("cuerpoTablaCortesVsaMped");
  cuerpoTablaCortesVsaMped.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
  var tablaCortesVsaMped = "<table>"; // variable para albergar la tabla

  tablaCortesVsaMped += "<tr>"; // con esta etiqueta inicializo la fila
  var VABVsaMped = (MAVsaMped + MBVsaMped) / LVsaMped;
  VABVsaMped = VABVsaMped.toFixed(2);
  tablaCortesVsaMped += "<td>" + VABVsaMped + "</td>"; // imprimo en la casilla abajo de VAB su valor
  tablaCortesVsaMped += "</tr>"; // cierro la fila
  tablaCortesVsaMped += "</table>"; // cierro la tabla
  cuerpoTablaCortesVsaMped.innerHTML = tablaCortesVsaMped; // imprimo en html

  // GENERACION DE TABLA DE MOMENTO MAXIMO
  var cuerpoTablaMomentoVsaMped = document.getElementById("cuerpoTablaMomentoVsaMped");
  cuerpoTablaMomentoVsaMped.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
  var tablaMomentoVsaMped = "<table>"; // variable para albergar la tabla

  tablaMomentoVsaMped += "<tr>"; // con esta etiqueta inicializo la fila
  var MAComparacionVsaMped = Math.abs(MAVsaMped);
  var MBComparacionVsaMped = Math.abs(MBVsaMped);
  if (MAComparacionVsaMped >= MBComparacionVsaMped) {
    MAMaxVsaMped = - (MAVsaMped.toFixed(2));
    tablaMomentoVsaMped += "<td>" + MAMaxVsaMped + "</td>"; // imprimo en la casilla abajo de MCizq su valor
    tablaMomentoVsaMped += "</tr>"; // cierro la fila
    tablaMomentoVsaMped += "</table>"; // cierro la tabla
    cuerpoTablaMomentoVsaMped.innerHTML = tablaMomentoVsaMped; // imprimo en html
  }
  else {
    MBMaxVsaMped = MBVsaMped.toFixed(2);
    tablaMomentoVsaMped += "<td>" + MBMaxVsaMped + "</td>"; // imprimo en la casilla abajo de MCizq su valor
    tablaMomentoVsaMped += "</tr>"; // cierro la fila
    tablaMomentoVsaMped += "</table>"; // cierro la tabla
    cuerpoTablaMomentoVsaMped.innerHTML = tablaMomentoVsaMped; // imprimo en html
  }

  // GENERACION DE TABLA PARA EL LISTADO DE SOLICITACIONES

  var xVsaMped = LVsaMped * 0.025;
  if (xVsaMped < 0.05) { // artificio para que no quede x = 0
    xVsaMped = 0.05;
  }
  xVsaMped = xVsaMped.toFixed(1); //redondeo a 1 decimal el valor que va a ir aumentando X de fila a fila
  var numFilasVsaMped = 1 + Math.trunc(LVsaMped/xVsaMped); // 1 es por la fila inicial (X=0)
  var numColumnasVsaMped = 3;
  var cuerpoTablaListaVsaMped = document.getElementById("cuerpoTablaListaVsaMped");

  cuerpoTablaListaVsaMped.innerHTML = ""; // limpio el contenedor de la tabla de todo posible contenido html
  var tabla = "<table>"; // variable para albergar la tabla

  for (var f = 0; f <= numFilasVsaMped ; f++) { // aca hago correr las numFilas
      tabla += "<tr>"; // con esta etiqueta inicializo la fila
      for (var c = 1; c <= numColumnasVsaMped; c++) { // aca hago correr las numColumnas
        if (c == 1) { // esta es la columna de las xi
          var xiVsaMped = xVsaMped * f;
          xiVsaMped = xiVsaMped.toFixed(1); //redondeo a 1 decimal el valor de x que adopta la fila
          if (xiVsaMped < LVsaMped) {
            tabla += "<td>" + xiVsaMped + "</td>";
          } else {
            xiVsaMped = LVsaMped;
            f = numFilasVsaMped;
            tabla += "<td>" + xiVsaMped + "</td>";
          }
        }
        if (c == 2) { // esta es la columna de el corte
          if (xiVsaMped >= 0 && xiVsaMped <= LVsaMped) {
            var CiVsaMped = (MAVsaMped + MBVsaMped) / LVsaMped;
            CiVsaMped = CiVsaMped.toFixed(2);
            tabla += "<td>" + CiVsaMped + "</td>";
          }
        }
        if (c == 3) { // esta es la columna de el momento
          if (xiVsaMped == 0) {
            var MiVsaMped = - MAVsaMped;
            MiVsaMped = MiVsaMped.toFixed(2);
            tabla += "<td>" + MiVsaMped + "</td>";
          }
          if (xiVsaMped > 0 && xiVsaMped < LVsaMped) {
            var MiVsaMped = - (MAVsaMped * (LVsaMped - xiVsaMped) / LVsaMped) + (MBVsaMped * xiVsaMped / LVsaMped);
            MiVsaMped = MiVsaMped.toFixed(2);
            tabla += "<td>" + MiVsaMped + "</td>";
          }
          if (xiVsaMped == LVsaMped) {
            var MiVsaMped = MBVsaMped;
            MiVsaMped = MiVsaMped.toFixed(2);
            tabla += "<td>" + MiVsaMped + "</td>";
          }
        }
      }

      tabla += "</tr>"; // con esta etiqueta finalizo la fila
  }
  tabla += "</table>"; // aca finalizo la tabla
  cuerpoTablaListaVsaMped.innerHTML = tabla;

}


// botones de calcular de las distintas cargas VSA

var calcularVsaCpg = document.getElementById("calcularVsaCpg");
calcularVsaCpg.addEventListener ("click", calcularReaccionesVsaCpg);

var calcularVsaCpc = document.getElementById("calcularVsaCpc");
calcularVsaCpc.addEventListener ("click", calcularReaccionesVsaCpc);

var calcularVsaCps = document.getElementById("calcularVsaCps");
calcularVsaCps.addEventListener ("click", calcularReaccionesVsaCps);

var calcularVsaCue = document.getElementById("calcularVsaCue");
calcularVsaCue.addEventListener ("click", calcularReaccionesVsaCue);

var calcularVsaCuv = document.getElementById("calcularVsaCuv");
calcularVsaCuv.addEventListener ("click", calcularReaccionesVsaCuv);

var calcularVsaCui = document.getElementById("calcularVsaCui");
calcularVsaCui.addEventListener ("click", calcularReaccionesVsaCui);

var calcularVsaMpe = document.getElementById("calcularVsaMpe");
calcularVsaMpe.addEventListener ("click", calcularReaccionesVsaMpe);

var calcularVsaMpi = document.getElementById("calcularVsaMpi");
calcularVsaMpi.addEventListener ("click", calcularReaccionesVsaMpi);

var calcularVsaMpce = document.getElementById("calcularVsaMpce");
calcularVsaMpce.addEventListener ("click", calcularReaccionesVsaMpce);

var calcularVsaMped = document.getElementById("calcularVsaMped");
calcularVsaMped.addEventListener ("click", calcularReaccionesVsaMped);

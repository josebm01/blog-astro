export function convertirAFecha(fechaStr: string): number {
    const partesFecha = fechaStr.split(" ");
    const dia = parseInt(partesFecha[0]);
    const mes = partesFecha[1];
    const ano = parseInt(partesFecha[2]);
    const mesesAbreviados: any = {
      ene: 0, feb: 1, mar: 2, abr: 3, may: 4, jun: 5,
      jul: 6, ago: 7, sep: 8, oct: 9, nov: 10, dic: 11
    };
  
    const mesNumero = mesesAbreviados[mes];
    return Date.parse(`${mesNumero + 1}/${dia}/${ano}`);
  }
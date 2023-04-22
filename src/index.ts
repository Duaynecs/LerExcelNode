import * as XLSX from "xlsx";


const arq = XLSX.readFile('../101-Grupos_Alimento_Básico-Martins.xlsx');

let dados: any = [];

const aba = arq.SheetNames;

for (let i = 0; i < aba.length; i++) {
  const temp = XLSX.utils.sheet_to_json(arq.Sheets[arq.SheetNames[1]])

  temp.forEach((res) => {
    dados.push(res)
  })
}

console.log(dados);

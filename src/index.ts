import * as XLSX from "xlsx";

// importando arquivo
const file = XLSX.readFile("Martins.xlsx");

// criando armazenamento dos dados
let data: any = [];

// vendo quatas abas tem na planilha
const sheet = file.SheetNames;

// fazendo o loop das abas
for (let i = 0; i < sheet.length; i++) {
  // importando os dados das abas
  const temp = XLSX.utils.sheet_to_json(file.Sheets[file.SheetNames[i]])

  // fazendo o loop de linha a linha
  temp.forEach((res) => {
    // adicionando o registo a variavel de armazenamento
    data.push(res)
  })
}

// mostrando na tela os dados
console.log(data);

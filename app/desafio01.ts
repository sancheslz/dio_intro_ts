// Como podemos rodar isso em um arquivo .ts sem causar erros? 

interface iEmployee {
  code: number,
  name: string,
}

let employee = {} as iEmployee;
employee.code = 10;
employee.name = "John";

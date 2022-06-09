// Como podemos melhorar o esse código usando TS? 

enum Profession {
  Actress = 'atriz',
  Baker = 'padeiro'
}

interface iPerson {
  nome: string,
  idade: Number,
  profissao: Profession
}

let pessoa1 = {} as iPerson
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = Profession.Actress

let pessoa2 = {} as iPerson
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = Profession.Baker;

let pessoa3: iPerson = {
    nome: "laura",
    idade: 32,
    profissao: Profession.Actress
};

let pessoa4: iPerson = {
    nome: "carlos",
    idade: 19,
    profissao: Profession.Baker
}
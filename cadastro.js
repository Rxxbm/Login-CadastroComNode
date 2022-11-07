var mysql = require('mysql')

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345678",
});
function cadastrar(email, senha){
    email = document.getElementById('exampleInputEmail1').value;
    senha = document.getElementById("exampleInputPassword1").value;
    con.query("create database cadastrologin", (error) => {
        if(error){return console.log('Não foi possível criar o banco de dados')}
        console.log("O banco foi criado com sucesso!")
        con.query("create table alunos(email VARCHAR(88), senha VARCHAR(88));", (error, res) => {
            if(error) {return console.log("Não foi possível inserir a tabela alunos")}
            console.log("A tabela foi criada com sucesso!")
            con.query("insert into alunos (email, senha) values ("+email+"'"+senha+"')")
        })
    });
}
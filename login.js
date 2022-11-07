var mysql = require('mysql')
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345678",
    database: 'cadastrologin'
});
function logar(email, senha){
    email = document.getElementById('exampleInputEmail1').value;
    senha = document.getElementById("exampleInputPassword1").value;
    con.connect((error) => {
        if(error){return console.log("O banco de dados não conectou: ", error)}
        console.log("O banco conectou com sucesso!")
        var sql = "select * from alunos where email='"+email+"' and senha='"+senha+"'";
        con.query(sql, (error, res) => {
            if(error){return alert("Senha ou Usuário Incorreto")}
            alert("Logado com Sucesso " + res[0].email)
        })
    });
}

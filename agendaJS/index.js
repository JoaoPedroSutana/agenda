let agenda = [];
let posicaoAtual = 0;
let isEditing = false;
let editIndex = null;
function incluir(){
        console.log('Incluindo...');
        document.getElementById('in').disabled = true;
        document.getElementById('nome').readOnly = false;
        document.getElementById('sobre').readOnly = false;
        document.getElementById('ende').readOnly = false;
        document.getElementById('tele').readOnly = false;
        document.getElementById('ca').classList.remove('button:disabled');
        document.getElementById('sa').disabled = false;
        document.getElementById('ca').disabled = false;
        document.getElementById('sa').classList.remove('button:disabled');
        isEditing = false;
        editIndex = null;
}
function editar(){
        console.log('Editando...');
        document.getElementById('nome').readOnly = false;
        document.getElementById('sobre').readOnly = false;
        document.getElementById('ende').readOnly = false;
        document.getElementById('tele').readOnly = false;
        document.getElementById('sa').disabled = false;
        document.getElementById('ca').disabled = false;
        document.getElementById('sa').classList.remove('button:disabled');
        isEditing = true;
        editIndex = posicaoAtual;
}
document.getElementById('botaoProximo').addEventListener('click', proximoContato);
document.getElementById('botaoAnterior').addEventListener('click', contatoAnterior);
document.getElementById('botaoPrimeiro').addEventListener('click', primeiroContato);
document.getElementById('botaoUltimo').addEventListener('click', ultimoContato);
function proximoContato() {
        if (posicaoAtual < agenda.length - 1) {
                posicaoAtual++;
                exibirContato();
        }
}
function contatoAnterior() {
        if (posicaoAtual > 0) {
                posicaoAtual--;
                exibirContato();
        }
}
function primeiroContato() {
        posicaoAtual = 0;
        exibirContato();
}    
function ultimoContato() {
        posicaoAtual = agenda.length - 1;
        exibirContato();
}
function exibirContato() {
        let contatoAtual = agenda[posicaoAtual];
        document.getElementById('nome').value = contatoAtual.nome;
        document.getElementById('sobre').value = contatoAtual.sobrenome;
        document.getElementById('ende').value = contatoAtual.endereco;
        document.getElementById('tele').value = contatoAtual.telefone;
}
function salvar(){
        let nome = document.getElementById('nome').value;
        let sobrenome = document.getElementById('sobre').value;
        let endereco = document.getElementById('ende').value;
        let telefone = document.getElementById('tele').value;
        let novoContato = {
                nome: nome,
                sobrenome: sobrenome,
                endereco: endereco,
                telefone: telefone
        };
        if (isEditing && editIndex !== null) {
                agenda[editIndex] = novoContato;
        } else {
                agenda.push(novoContato);
        }
        if (nome == "" && sobrenome == "" && endereço == "" && telefone == ""){
                document.getElementById('sa').disabled = true;
        }
        if (nome == ""){
                document.getElementById('nome').classList.add("erro");
                document.getElementById('erro').innerHTML = "Preencha este campo!";
        }
        else {
                if (agenda.length > 999999999) {
                        alert("Você atingiu o limite máximo de contatos (999999999).");
                }
                console.log('Item salvo!');
                document.getElementById('in').disabled = false;
                document.getElementById('ex').disabled = false;
                document.getElementById('ex').classList.remove('button:disabled');
                document.getElementById('ed').disabled = false;
                document.getElementById('ed').classList.remove('button:disabled');
                document.getElementById('sa').disabled = true;
                document.getElementById('ca').disabled = true;
                document.getElementById('nome').value = "";
                document.getElementById('nome').readOnly = true;
                document.getElementById('sobre').value = "";
                document.getElementById('sobre').readOnly = true;
                document.getElementById('ende').value = "";
                document.getElementById('ende').readOnly = true;
                document.getElementById('tele').value = "";
                document.getElementById('tele').readOnly = true;
        }
}
function cancelar(){
        console.log('Item cancelado!');
        document.getElementById('in').disabled = false;
        document.getElementById('sa').disabled = true;
        document.getElementById('ca').disabled = true;
        document.getElementById('nome').value = "";
        document.getElementById('nome').readOnly = true;
        document.getElementById('sobre').value = "";
        document.getElementById('sobre').readOnly = true;
        document.getElementById('ende').value = "";
        document.getElementById('ende').readOnly = true;
        document.getElementById('tele').value = "";
        document.getElementById('tele').readOnly = true;
        document.getElementById('nome').classList.remove('erro');
        document.getElementById('erro').innerHTML = "";
}
function excluir(){
        console.log('Item excluído!');
        document.getElementById('sa').classList.remove('button:disabled');
        agenda.splice(posicaoAtual, 1);
        if (agenda.length === 0) {
                posicaoAtual = 0;
                document.getElementById('nome').value = "";
                document.getElementById('sobre').value = "";
                document.getElementById('ende').value = "";
                document.getElementById('tele').value = "";
                document.getElementById('ex').disabled = true;
                document.getElementById('ex').classList.add('button:disabled');
                document.getElementById('ed').disabled = true;
                document.getElementById('ed').classList.add('button:disabled');
        } else {
                if (posicaoAtual >= agenda.length) {
                posicaoAtual = agenda.length - 1;
                }
                exibirContato();
        }
}
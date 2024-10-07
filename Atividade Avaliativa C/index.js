personagens =[{nome:"Link",vida:20,forca:10,resistencia:7},{nome:-1,vida:30,forca:12431,resistencia:2}]
armas =[{nome:"Espada",dano:6,alcance:1},{nome:"Espada Longa",dano:7,alcance:2},{nome:"Arco",dano:5,alcance:10}]
itens =[{nome:"Poção de vida",efeito:"Regeneração de vida"},{nome:"Rupees",efeito:"Nenhum"},{nome:"Bomba",efeito:"Dano Explosivo"}]

function erro(motivo,local){
    //function para fazer retornos de erro mais rapidamente
    frase = "ERRO: "+local+" tem "+motivo+" Invalido"
    alert(frase)
    menuPrincipal()
}

function lista(){
    //função para listar os personagens, armas e itens existentes
    frase ="Os Personagens São    ||  "
    for(personagen of personagens){
        frase += "Nome: "+personagen.nome+" Vida: "+personagen.vida+" Forca: "+personagen.forca+" Resistencia: "+personagen.resistencia+"  ||    "
        //roda por todos os personagens do array de personagens e salva as informações deles na variavel frase
    }
    alert(frase)
    frase = "As Armas São   ||  "
    //substitui o conteudo anterior da variavel
    for(arma of armas){
        frase += "Nome: "+arma.nome+" Dano: "+arma.dano+" Alcance: "+arma.alcance+"  ||    "
        //roda por todos as armas do array de armas e salva as informações delas na variavel frase
    }
    alert(frase)
    frase = "Os Itens São   ||  "
    //substitui o conteudo anterior da variavel
    for(iten of itens){
        frase += "Nome: "+iten.nome+" Efeito: "+iten.efeito+"  ||    "
        //roda por todos os itens do array de itens e salva as informações deles na variavel frase
    }
    alert(frase)
    menuPrincipal()
}

function validaArray(){
    for(i=0;i<personagens.length-1;i++){
        if((typeof personagens[i].nome) !== String){
            alert(i)
            alert(personagens[i].nome)
            alert(typeof personagens[i].nome)
            personagens.splice(i,1)
        }
        if(typeof personagens[i].vida !==Number|| personagens[i].vida >20 ||personagens[i].vida <0){
            alert(personagens[i].vida)
            personagens.splice(i,1)
        }
        
    }
    for(i=0;i<armas.length-1;i++){
        if(typeof armas[i].nome!== String){
            armas.splice(i,1)
        }
        if(typeof armas[i].dano!== Number){
            armas.splice(i,1)
        }
        if(typeof armas[i].alcance!== Number){
            armas.splice(i,1)
        }
    }
    for(i=0;i<itens.length-1;i++){
        if(typeof itens[i].nome!==String){
            itens.splice(i,1)
        }
        if(typeof itens[i].efeito!==String){
            itens.splice(i,1)
        }
    }
}


function menuPrincipal(){
    //O menu principal onde as funções podem ser acessadas e iniciadas
    resposta=Number(prompt("Escolha uma das opções (1)Lista (2)Validar Personagen (3)Validar Arma (4) Validar Iten"))

    if(resposta===4){
        validarItens()
        //chama função validar itens
    }else if(resposta===2){
        validarPersonagens()
        //chama função validar personagens
    }else if(resposta===3){
        validarArmas()
        //chama função validar armas
    }else if(resposta ===1){
        lista()
        //chama função lista
    }else{
        erro("Commando","menu principal")
    }


}





function validarItens(){
    //função para validar itens
    a=false
    b=false
    //duas variaveis com false para eu poder salvar se algo existe no array igual com o que eu procurar
    nome1 = prompt("Digite o nome")
    for(i=0;i<itens.length;i++){
        if(nome1===itens[i].nome){
            a=true
        }}
        if(a===false){
            return erro("Nome","Iten")
        }
        //comparação do nome
    efeito1 = prompt("Digite o Efeito")
    for(i=0;i<itens.length;i++){
        if(efeito1===itens[i].efeito&&nome1===itens[i].nome){
            b=true
        }}
        if(b===false){
            return erro("Efeito","Iten")
        }
        //comparação do efeito
        alert("Iten Validado com sucesso")
        //aviso de sucesso
    
    menuPrincipal()
    //retorna para o menu principal
}

function validarPersonagens(){
    //função para validar personagens
    a=false
    b=false
    c=false
    d=false
    //variaveis com false para eu poder salvar se algo existe no array igual com o que eu procurar
    nome1 = prompt("Digite o nome")
    for(per of personagens){
        if(nome1===per.nome){
            a=true
        }}
        if(a===false){
       
            return erro("Nome","Personagen")
        }
        //comparação do nome
    vida1 = Number(prompt("Digite o Valor de Vida"))
        if(vida1>=1&&vida1<=20){
            d=true
        }
        if(d===false){ return erro("Vida","Personagen") }
        //comparação da vida não pode ser nem menor que 1 ou maior que 20
    forca1 = Number(prompt("Digite o Valor de Força"))
    for(per of personagens){
        if(forca1===per.forca&&nome1===per.nome){
            b=true
        }}
        if(b===false){
            return erro("Valor de Força","Personagen")
        }
        //comparação da força
    resistencia1 = Number(prompt("Digite o Valor de Resistencia"))
    for(per of personagens){
        if(resistencia1===per.resistencia&&nome1===per.nome){
            c=true
        }}
        if(c===false){
            return erro("Valor de Resistencia","Personagen")
        }
        //comparação da resistencia

        

    
    
    alert("Persongen Validado com sucesso")
    //aviso de sucesso

    menuPrincipal()
    //retorna ao menu principal
}

function validarArmas(){
    //função para validar armas
    a=false
    b=false
    c=false
    //variaveis com false para eu poder salvar se algo existe no array igual com o que eu procurar
    nome1 = prompt("Digite o nome")
    for(i=0;i<armas.length;i++){
        if(nome1===armas[i].nome){
            a=true
        }}
        if(a===false){
            return erro("Nome","Arma")
        }
        //comparação do nome
    dano1 = Number(prompt("Digite o Valor de Dano"))
    for(i=0;i<armas.length;i++){
        if(dano1===armas[i].dano&&nome1===armas[i].nome){
            b=true
        }}
        if(b===false){
            return erro("Valor de Dano","Arma")
        }
        //comparação do dano
    alcance1 = Number(prompt("Digite O Valor de Alcance"))
    for(i=0;i<armas.length;i++){
        if(alcance1 === armas[i].alcance&&nome1===armas[i].nome){
            c=true
        }}
        if(c===false){
            return erro("Valor de Alcance","Arma")
        }
        //comparação do alcance
  
alert("Arma Validada com sucesso")
//aviso de sucesso
    
    menuPrincipal()
    //retorna ao menu principal
}
validaArray()
menuPrincipal()
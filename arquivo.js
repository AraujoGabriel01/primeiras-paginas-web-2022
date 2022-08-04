function filtrar(categoriaEscolhida){
    
    var listaDasCategoriasExistentes = document.getElementsByClassName('categoria')

    for(i=0; i<listaDasCategoriasExistentes.length; i++){

        var categoriaAtual = document.getElementsByClassName('categoria')[i]
        var listaDeReceitas = document.getElementsByClassName('receita')
        
        var isCategoriaEscolhida = categoriaAtual.textContent.toUpperCase() == categoriaEscolhida.toUpperCase()
        var isCategoriaTodas = categoriaEscolhida.toUpperCase() == "TODAS"
        
        if(isCategoriaEscolhida || isCategoriaTodas){
            listaDeReceitas[i].style.display = ''

        }else{
            listaDeReceitas[i].style.display = 'none'
        }
    }
}
function contador() {
    var nInicio = document.getElementById('txtinicio')
    var nFim = document.getElementById('txtfim')
    var nPasso = document.getElementById('txtpasso')
    let res = document.getElementById('res')

    if (nInicio.value.length == 0 || nFim.value.length == 0 || nPasso.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(nInicio.value)
        let f = Number(nFim.value)
        let p = Number(nPasso.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1.')
            p = 1
        }
        if (i < f) {
            //contagem crescente
            for (let c = i; c <= f; c+=p) {
                res.innerHTML += `${c} \u{1F449}` 
            } 
        } else {
            //contagem regressiva
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}

function mostraHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError ('Esperando instância de Date');
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second:'2-digit'
    } )


}


try{
    const data = new Date('07-30-2020 12:12:12');
const hora = mostraHora(data);

console.log(hora);

} catch(e) {
    //tratar erro
    //console.log(e)
} finally {
    console.log('sempre estarei aqui')
}
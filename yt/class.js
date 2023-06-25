class Carderno {
    constructor(marca, folhas, capa){
        this.marca = marca;
        this.folhas = folhas;
        this.capa = capa;

    }
    
    dizOi(){
        console.log('ola')
    }
}

const Tilibra = new Carderno('tilibra', 200, 'Papelão')
console.log(Tilibra.dizOi())
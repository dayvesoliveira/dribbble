function MenuItensFactory(){

    var fatory = this;

    fatory.menuItens = [
        {url:'/', name:'Popular'},
        {url:'/shots/recent', name:'Recent'},
        {url:'/shots/debuts', name:'Debuts'},
        {url:'/shots/teams', name:'Teams'},
        {url:'/shots/playoffs', name:'Playoffs'}
    ];

    function getMenuItens(){
        return fatory.menuItens;
    }

    function setMenuItens( itens ) {
        fatory.menuItens = itens;
    }

    function addMenuItens( a ) {
        fatory.menuItens.push( a );
    }

    return {
        setMenuItens: setMenuItens,
        addMenuItens: addMenuItens,
        getMenuItens: getMenuItens
    };

}

export default MenuItensFactory;
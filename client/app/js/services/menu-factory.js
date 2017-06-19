function MenuFactory() {
    
    var factory = {};

    var sortShorts = [
        {url:'/shots/recent', name:'Recent'},
        {url:'/shots/views', name:'Most Viewed'},
        {url:'/shots/comments', name:'Most Commented'}
    ];
    
    var widthShorts = [
        {url:'/images/small', name:'Images Small'},
        {url:'/images/large', name:'Images Large'}
    ];
    
    factory.getSort = getSort;
    factory.getWidthShots = getWidthShots;
    
    function getSort(){
        return sortShorts;
    }

    function getWidthShots(){
        return widthShorts;
    }

    return factory;

}

export default MenuFactory;
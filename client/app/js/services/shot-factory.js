function ShotFactory( $http ){

    var shotFactory = {},
        _urlapi     = 'https://api.dribbble.com/v1/shots',
        TOKEN       = 'Bearer ';
    
    shotFactory.getList     = getList;
    shotFactory.getTypeList = getTypeList;
    shotFactory.page        = page;
    shotFactory.likeShot    = likeShot;

    /** 
     * @method _page
     * 
     * @param {String} url
     * @param {String/int} page
     * @param {String/int} perpage
     * 
     * @return promise
     */
    function page(page, perpage){
        return _get(_urlapi +'?page='+ page +'&per_page'+ perpage );
    }

    /** 
     * @method _page
     * @return promise
     */
    function getList(){
        return _get(_urlapi +'?list');
    }

    /** 
     * @method getTypeList
     * 
     * @param type
     * @return promise
     */
    function getTypeList( type ) {
        return _get(_urlapi +'?list&sort='+ type);
    }

    /** 
     * @method _get
     * 
     * @param type
     * @return promise
     */
    function _get( url ){
        return $http.get( url ? url : _urlapi ,{headers:{'Authorization': TOKEN}});
    }

    function likeShot( shot ){
        return $http.post( shot.user.likes_url ,{headers:{'Authorization': TOKEN}});
    }

    return shotFactory;

}

export default ShotFactory;
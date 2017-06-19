function ViewShotFactory( $http ){

    var self = {},
        _urlapi     = 'https://api.dribbble.com/v1/shots',
        TOKEN       = 'Bearer e0631e6461043841566e0c44768a31436421b5b11c82046847e01259f67f7ec4';
    
    self.get = get;

    function get( shotsId ){
        return $http.get( _urlapi +'/'+ shotsId ,{headers:{'Authorization': TOKEN}});
    }

    return self;
}

export default ViewShotFactory;
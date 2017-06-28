function ViewShotFactory( $http ){

    var self = {},
        _urlapi     = 'https://api.dribbble.com/v1/shots',
        TOKEN       = 'Bearer ';
    
    self.get = get;

    function get( shotsId ){
        return $http.get( _urlapi +'/'+ shotsId ,{headers:{'Authorization': TOKEN}});
    }

    return self;
}

export default ViewShotFactory;
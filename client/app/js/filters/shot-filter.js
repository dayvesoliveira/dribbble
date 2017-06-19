function ShotFilter(){
    return function (shots, searchText){
        if (searchText != null && searchText !== "") {
            searchText = searchText.toLowerCase();
            return shots.filter( shots => shots.title.toLowerCase().includes(searchText) );
        }
        return shots;
    }
}

export default ShotFilter;
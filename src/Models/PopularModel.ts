class PopularModel {
    public results: []; 
    public id: number;
    public original_language: string;
    public original_title: string;
    public overview: string;
    public release_date: string;
    public vote_average: number;
    public popularity: number;
    public poster_path: FileList;

    public static ConvertToFromData(popular: PopularModel): FormData {
        const myFormData = new FormData();
        myFormData.append("original_language", popular.original_language);
        myFormData.append("original_title", popular.original_title);
        myFormData.append("release_date", popular.release_date);
        myFormData.append("vote_average", popular.vote_average.toString());
        myFormData.append("popularity", popular.popularity.toString());
        myFormData.append("poster_path", popular.poster_path.item(0));
        return myFormData;
    }
}

export default PopularModel;
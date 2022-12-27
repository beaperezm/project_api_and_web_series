const getDataApi = () => {
    return fetch('https://proyecto-react-api.vercel.app/series')
    .then((res) => res.json())
    .then((res) => {
    const cleanData = res.map((serie) => {
        return {
            id: serie.id,
            title: serie.title,
            director: serie.director,
            genre: serie.genre,
            platform: serie.platform,
            seasons: serie.seasons,
            synopsis: serie.synopsis,
            year: serie.year,
            picture: serie.picture
        }
    });
    return cleanData;
});
};


export default getDataApi;
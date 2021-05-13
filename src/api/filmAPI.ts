import axios from 'axios'
import {URL} from 'url'

const apiKey = process.env.APIKEY || 'k_so2y588i'

const instance = axios.create({
    baseURL: 'https://imdb-api.com/en/API/'
})

type FilmOnTitleResponseType = {
    'id': string
    'resultType': string,
    'image': URL,
    'title': string,
    'description': string
}
type BackDropType = {
    link: string
}

type GetIdResponseType = {
    'searchType': string
    'expression': string
    'results': FilmOnTitleResponseType[],
    'errorMessage': string
}

export type SimilarFilmType = {
    'id': string,
    'title': string
    'fullTitle': string
    'year': string
    'image': string
    'plot': string
    'directors': string
    'stars': string,
    'genres': string
    'imDbRating': string
}

export type FilmType = {
    'id': string,
    'title': string,
    'fullTitle': string,
    'type': string,
    'plot': string,
    'year': string,
    'image': string,
    'releaseDate': string,
    'awards': string,
    'imDbRating': string,
    'genres': string,
    'posters': {
        backdrops: BackDropType[]
    },
    'trailer': {
        'imDbId': string,
        'title': string,
        'fullTitle': string,
        'type': string,
        'year': string,
        'videoId': string,

        'videoTitle': string,
        'videoDescription': string,
        'thumbnailUrl': string,
        'uploadDate': string,
        'link': string,
        'linkEmbed': string,
        'errorMessage': string
    },
    'similars': SimilarFilmType[]
}

export const filmAPI = {
    getId(title: string) {
        return instance.get<GetIdResponseType>(`Search/${apiKey}/${title}`)
    },
    getFilm(id: string) {
        return instance.get<FilmType>(`Title/${apiKey}/${id}/Trailer,Images,Posters`)
    }
}
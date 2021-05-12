import axios from 'axios'
import {URL} from 'url'

const apiKey = 'k_so2y588i'

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

type GetIdResponseType = {
    'searchType': string
    'expression': string
    'results': FilmOnTitleResponseType[],
    'errorMessage': string
}

type ResponseStarType = {
    'id': string
    'name': string
}

type SimilarFilmType = {
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

type ImageItem = {
    'title': string
    'image': string
}

export type GetFilmResponseType = {
    'id': string,
    'title': string,
    'originalTitle': '',
    'fullTitle': string,
    'type': string,
    'year': string,
    'image': string,
    'releaseDate': string,
    'runtimeMins': string,
    'runtimeStr': string,
    'plot': string,
    'plotLocal': '',
    'plotLocalIsRtl': false,
    'awards': string,
    'directors': string,
    'directorList': [],
    'writers': string,
    'writerList': [],
    'stars': string,
    'starList': ResponseStarType[],
    'actorList': [],
    'fullCast': null | [],
    'genres': string,
    'genreList': [],
    'companies': string,
    'companyList': [],
    'countries': string,
    'countryList': [
        {
            'key': string,
            'value': string
        }
    ],
    'languages': string,
    'languageList': [],
    'contentRating': string,
    'imDbRating': string,
    'imDbRatingVotes': string,
    'metacriticRating': string,
    'ratings': {
        'imDbId': string,
        'title': string,
        'fullTitle': string,
        'type': string,
        'year': string,
        'imDb': string,
        'metacritic': string,
        'theMovieDb': string,
        'rottenTomatoes': string,
        'tV_com': string,
        'filmAffinity': string,
        'errorMessage': string
    },
    'wikipedia': null | string,
    'posters': null | string,
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
        'uploadDate': Date,
        'link': string,
        'linkEmbed': string,
        'errorMessage': string
    },
    'boxOffice': {
        'budget': string,
        'openingWeekendUSA': string,
        'grossUSA': string,
        'cumulativeWorldwideGross': string
    },
    'tagline': string,
    'keywords': string,
    'keywordList': string[]
    'similars': SimilarFilmType[]
    'tvSeriesInfo': {
        'yearEnd': string
        'creators': string
        'creatorList': {
            'id': string
            'name': string
        }[],
        'seasons': string[]
    },
    'tvEpisodeInfo': null | string,
    'errorMessage': '',
    'images': {
        'imDbId': string,
        'title': string,
        'fullTitle': string,
        'type': string,
        'year': string,
        'items': ImageItem[]
    }
}


export const filmAPI = {
    getId(title: string) {
        return instance.get<GetIdResponseType>(`Search/${apiKey}/${title}`)
    },
    getFilm(id: string) {
        return instance.get<GetFilmResponseType>(`Title/${apiKey}/${id}/Trailer,Images`)
    }
}
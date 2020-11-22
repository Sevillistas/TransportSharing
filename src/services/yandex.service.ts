import {request} from "./auth.service";

const geocodeUrl = 'https://geocode-maps.yandex.ru/1.x';
const apiKey = 'cce8c8c9-a3d9-45a9-a1ec-ce763a37a4b8';

export interface Point {
    x: number,
    y: number
}

interface GeoObject {
    GeoObject: {
        Point: {
            pos: string;
        }
    }
}

interface YandexGeocodeResponse {
    response: {
        GeoObjectCollection?: {
            featureMember?: Array<GeoObject>
        }
    }
}

export const geocode = async (address: string) : Promise<Point | null> => {
    const data: YandexGeocodeResponse = await request(`${geocodeUrl}?geocode=${address}&apikey=${apiKey}&format=json`);
    const coords = getCoords(data)
    console.log('Координаты указанного адреса: ', coords);
    return coords;
}

const getCoords = (geocodeData: YandexGeocodeResponse) : Point | null  => {
    const geoObjectCollection = geocodeData.response.GeoObjectCollection;

    if(geoObjectCollection && geoObjectCollection.featureMember?.length) {
        const coords = geoObjectCollection.featureMember.map(el => el.GeoObject.Point.pos.split(' '))
            .map(el => ({x: parseFloat(el[0]), y: parseFloat(el[1])}));
        return coords[0]; // TODO
    } else {
        return null;
    }
}
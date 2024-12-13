import { Injectable } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';

@Injectable()
export class PlacesService {
  private readonly nominatimUrl = 'https://nominatim.openstreetmap.org/search';

  async findPlaces(text: string): Promise<any> {
    const response: AxiosResponse<any> = await axios.get(this.nominatimUrl, {
      params: {
        q: text,
        format: 'json',
        addressdetails: 1,
        limit: 5,
      },
    });

    const { data, statusText } = response;

    let latitude_sul;
    let latitude_norte;
    let longitude_oeste;
    let longitude_leste;

    const boundingBoxs = data[0]?.boundingbox;
    if (Array.isArray(boundingBoxs)) {
      [latitude_sul, latitude_norte, longitude_oeste, longitude_leste] = boundingBoxs;
    }

    return {
      statusText,
      candidates: data.map((item) => ({
        formatted_address: `${item.address.road}, ${item.address?.municipality} - ${item.address?.state}, ${item.address?.postcode}, ${item.address?.country}`,
        geometry: {
          location: {
            lat: parseFloat(item.lat),
            lgn: parseFloat(item.lon),
          },
        },
        viewport: {
          northeast: {
            lat: parseFloat(latitude_norte),
            lgn: parseFloat(longitude_leste),
          },
          southwest: {
            lat: parseFloat(latitude_sul),
            lgn: parseFloat(longitude_oeste),
          },
        },
        name: item.display_name.split(',')[0],
        place_id: item.place_id,
      })),
    };
  }
}

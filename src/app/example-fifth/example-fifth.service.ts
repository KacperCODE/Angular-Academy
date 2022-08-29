import { FeaturesData } from './example-fifth.model';
import { Injectable } from "@angular/core";
@Injectable({
    providedIn: 'root'
})
export class ExampleFifthService {

    getFeaturesData(): FeaturesData[]  {
        const featuresData: FeaturesData[] = [
            {
                year: '2019',
                value: 200
            },
            {
                year: '2020',
                value: 100
            }
        ]

        return featuresData;
    }

    getPremiumFeaturesData(): FeaturesData[]  {
        const featuresData: FeaturesData[] = [
            {
                year: '2019',
                value: 500
            },
            {
                year: '2020',
                value: 1000
            }
        ]

        return featuresData;
    }

}

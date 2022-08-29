import { Injectable } from "@angular/core";

export enum FeatureStatus {
    Available,
    NotActive
}

@Injectable({
    providedIn: 'root'
})
export class ExampleThirdService {

    getFeatureFlag(): FeatureStatus {
        return FeatureStatus.Available;
    }

}
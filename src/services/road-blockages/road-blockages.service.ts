
import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { road_block } from "../../models/roadblockages/roadblockages.model";


@Injectable()
export class roadblockageService{

    private RoadblockRef = this.db.list<road_block>('road_block');

    constructor(private db: AngularFireDatabase) { }

    getRoadBlockNews() {
        return this.RoadblockRef;
    }
}
import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { trafficRoadSign } from "../../models/geofence/traffic-road-sign.model";


@Injectable()
export class TrafficRoadSignService {

    private TrafficSignRef = this.db.list<trafficRoadSign>('traffic_road_sign');

    constructor(private db: AngularFireDatabase) { }

    getTrafficRoadSign() {
        return this.TrafficSignRef;
    }
}
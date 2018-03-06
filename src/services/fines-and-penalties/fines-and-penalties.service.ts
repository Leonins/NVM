import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { violation_fines } from '../../models/finesAndPenalties/filesAndPenalties.model';


@Injectable()
export class FinesAndPenaltiesService {

    private finesAndPenaltiesRef = this.db.list<violation_fines>('violation_fines');

    constructor(private db: AngularFireDatabase) { }

    getFinesAndPenalties() {
        return this.finesAndPenaltiesRef;
    }
}
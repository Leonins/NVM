import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { general_news} from "../../models/generalnews/generalnews.model";


@Injectable()
export class GeneralnewsPageService {

    private GeneralRef = this.db.list<general_news>('general_news');

    constructor(private db: AngularFireDatabase) { }

    getGeneralNews() {
        return this.GeneralRef;
    }
}
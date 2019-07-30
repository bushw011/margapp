import {Injectable} from "@angular/core";
import {Observable} from "rxjs/index";
import {HttpClient} from "@angular/common/http";


@Injectable()
export class DataService {

  constructor(private http: HttpClient){
  }

  getMargData(): Observable<any>{
    return this.http.get("../assets/MargData.json");
  }

  select(flav) {
    this.getMargData().subscribe((data) => {
        console.log(data);
    })
  }

}

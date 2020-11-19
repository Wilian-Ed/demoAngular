import{Injectable} from '@angular/core'
import{HttpClient} from '@angular/common/http'

@Injectable({providedIn:'root'})
export class DemoService{
    constructor(
        private http : HttpClient
    ){
    }

    getAutenticacion(user,pass){
        return this.http.get(`http://localhost:8080/v0/autenticar?user=${user}&&pass=${pass}`);
    }
}
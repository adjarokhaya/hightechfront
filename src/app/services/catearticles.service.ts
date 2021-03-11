import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Articles } from './Articles.model';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CatearticlesService {
  constructor(private http: HttpClient) { }


  getarticles(categorieID) {
    return this.http.get<Object>("http://localhost:8080/Hightech/hightech/listearticle/articlebycategorie/"+categorieID);
    }

  getAllarticles(){
    return this.http.get<object>("http://localhost:8080/Hightech/hightech/listearticle");

  }

  DeleteArticle(idArticle){
    return this.http.delete("http://localhost:8080/Hightech/hightech/listearticle/"+idArticle);

  }
/*
  getAll(): Observable<Array<Articles>> {
    return this.http.get<Array<Articles>>(this.url);
    }*/
}

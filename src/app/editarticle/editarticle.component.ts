import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CatearticlesService } from '../services/catearticles.service';

@Component({
  selector: 'app-editarticle',
  templateUrl: './editarticle.component.html',
  styleUrls: ['./editarticle.component.css']
})
export class EditarticleComponent implements OnInit {
idarticle: any;
articlerecup: any;

  constructor(private article: CatearticlesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  this.idarticle=this.route.snapshot.paramMap.get('id');
  //console.log(this.idarticle);
  this.recupMission(this.idarticle);
}

recupMission(id){
  this.article.RecupMission(id).subscribe(
    (data) => {
      this.articlerecup=data;
      console.log(this.article);
    },
  );
}

EditArticle(){
  this.article.RecupMission(this.articlerecup).subscribe(
    (data)=> {
      this.articlerecup=data;
      console.log(this.articlerecup);
    },
  );
}

}
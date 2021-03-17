import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-helloworld',
  templateUrl: './helloworld.component.html',
  styleUrls: ['./helloworld.component.css']
})
export class HelloworldComponent implements OnInit {

nom_Article: String="Chemise";
taille_Article: number=40;
NomCategorie:String;
couleur_Article : String ="Blue";
message: String="Achat: pas encore effectué";
confirmation: boolean= false;
isColorChanged: boolean = false;
isFontChanged: boolean = false;

name: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  AchatArticle():void{
    this.confirmation=true
    this.message="article Acheté"
  }

  OnChoixCategorie(evt : Event){
    this.NomCategorie=(<HTMLInputElement>evt.target).value
  }

  setValue() {
    this.name = 'Nancy';
  }
}

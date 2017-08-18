import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  title = 'Projeto Pós-Graduação - CRUD com array - Angular';
  
   novoUsuario:any={}; 
   novoUsuario2:any={}; 
  
   //Array de usuarios
   usuarios = [
     {nome:"Brayan", email:"brayan@gmail.com"},
     {nome:"Izabelle", email:"izabelle@gmail.com"}
   ];
   
   //adicionar usuarios
    
 
 
   addUsuario(){
     this.usuarios.push(this.novoUsuario);
     this.novoUsuario={};
   }
 
   deletarUsuario(i){
     this.usuarios.splice(i, 1);
   }
 
   editarUsuario(i){
     this.novoUsuario2.nome = this.usuarios[i].nome;
     this.novoUsuario2.email = this.usuarios[i].email;
   }
 

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area',
  templateUrl:'./servers.component.html',
  // template: `
  // <div id="mainArea">
  //   <p>button Count : <span *ngFor='let i of log'>{{i}} </span></p>
  //   <button id="mainButton" (click)='onClick()'>Increase</button>
  // </div>
  // `,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  log : any= [];

    onClick(){
        this.log.push(this.log.length+1); 
    }
}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {


  // outside of the component we can use the element variable
  // @Input() element : {type : string, name:string,content:string} 


  // now outside we can use elenents but with the name servElement not element
  @Input('servElement')  element : {type : string, name:string,content:string}

  
  constructor() { }

  ngOnInit(): void {
  }

}

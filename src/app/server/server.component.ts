import { from } from "rxjs";
import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})
export class ServerComponent {
    serverName: string = "bablu";
    value: number = 10;
    keyupVar = "";
    inputEvent = 'some value';
    someText = ""

    values = {
        1: "bablu",
        2: "saroj"
    }

    getServerName() {
        return this.serverName;
    }

    booleanVar: boolean = false;

    getButtonStatus() {
        this.booleanVar = true;
        // console.log("hi");
        // return this.booleanVar;
    }

    onButtonClick() {
        this.someText = "text changed as button clicked.."
    }

    onButtonEvent(event: any) {
        this.inputEvent = event.target.value
    }

    onKeyUp(args: string) {
        this.keyupVar = args;
    }

    serverName1: string = '';
    serverName2: string = '';
    

    serverstatus = false;

    onUpdateServerName(server: any) {
        this.log.push(this.log.length + 1) ;
        this.serverName1 = server;
    }

    check(): boolean {
        if (this.serverName1 == "") {
            return true;
        }
        else
            return false;
    }


    onCreateServer() {
        this.serverstatus = true;
        this.serverName2 = this.serverName1;
    }



    numArray: number[] = [11, 22, 33, 44];

    objVar: Recipe[] = [
        new Recipe("pizza", 3),
        new Recipe("burger", 3),
        new Recipe("sizzling brownie", 3)
    ]


    serverStatus = ''

    constructor(){
        this.serverStatus = Math.random() > 0.3 ? 'online' : 'offline'; 
    }

    getColor(){
        return this.serverStatus === 'online' ? 'green' : 'red';
    }

    showSecret = false;

    log : any= [];

    onClick(){
        this.showSecret = ! this.showSecret;
        this.log.push(this.log.length+1 + "    "+new Date); 
    }


    // logical() : boolean{
    
    // }

    // getBackGroundColor(){
    //     if(this.log.length >= 5){
    //         return 'red';
    //     }

    //     return null;
    // }

}

export class Recipe {
    name: string;
    quantity: number;

    constructor(name: string, quantity: number) {
        this.name = name;
        this.quantity = quantity;
    }
}
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowthisButton:boolean=false;
  creationstatus:boolean=false;
  creationServer:string="No Server does Exist";
  serverName:string="test";
  servers:string[]=['server 1','server 2'];

  constructor() {
    setTimeout(()=>{this.allowthisButton=true;},2000);
  }
  CreationServerMethod(){
    this.servers.push(this.serverName);
    this.creationstatus=true;

  }
  ngOnInit() {
  }
  onUpdateServerNamer(event:any)
  {
    this.serverName=event.target.value;
  }

}

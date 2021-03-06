import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {


  @Output() bluePrintCreated=new EventEmitter<{serverName:string,serverContent:string}>();
  @Output()  serverCreated=new EventEmitter<{serverName:string,serverContent:string}>();
  newServerName:string="";
  newServerContent:string="";
  constructor() { }

  ngOnInit() {
  }
  OnAddServer(){
    this.serverCreated.emit({serverName:this.newServerName,serverContent:this.newServerContent});
  }
  OnAddBluePrint(){
    this.bluePrintCreated.emit({serverName:this.newServerName,serverContent:this.newServerContent});
  }


}

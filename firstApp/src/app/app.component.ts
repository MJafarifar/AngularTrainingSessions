import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstApp';

  serverElements=[{name:"Name test",type:"server",content:"description test"}];

    onServerAdded(serverData:{serverName:string,serverContent:string})
    {
      this.serverElements.push({
        type:'server',
        name:serverData.serverName,
        content:serverData.serverContent
      })
    }
  onBluePrintAdded(serverData:{serverName:string,serverContent:string})
    {
      this.serverElements.push({
        type:'bluePrint',
        name:serverData.serverName,
        content:serverData.serverContent
      })
    }
}

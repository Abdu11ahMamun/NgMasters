import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements= [{type: 'server', name: 'TestServer', content: 'Testing again'}];
  newServerName = '';
  newServerContent = '';

  onServerAdded(serverData: {serverName: string, serverContent: string}){
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    })
  }
  onBluePrintAdded(bluePrintCreated: {serverName: string, serverContent: string}){
    this.serverElements.push({
      type: 'server',
      name: bluePrintCreated.serverName,
      content: bluePrintCreated.serverContent
    })
  }
}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'] 
})
export class ServersComponent {
  name = 'Abdullah';
  id = 104;
  allowNewServers = false;
  OnActive = 'Ready to go';
  serverName = '';
  serverCreated= false;
  servers = ['Server 1', 'Server 2', 'Server 3'];
  

  constructor (){
    setTimeout(()=>{
      this.allowNewServers = true;
    },2000)
  }

  methodTesting(){
    return 'Successful Method Testing!';
  }
  OnActivateServer(){
    this.OnActive= 'Busy!!';
  }

  // "$even" is something that gives us access to date 
  OnEventBinding(event:Event){
    this.serverName = (<HTMLInputElement>event.target).value;

  }
  serverCreationStatus='No server was created';
  OncreateServer(){
    this.serverCreated= true;
    this.servers.push(this.serverName);
  }
}

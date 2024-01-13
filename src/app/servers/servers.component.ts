import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent {
  name = 'Abdullah';
  id = 104;
  allowNewServers = false;
  OnActive = 'Ready to go';
  serverName = '';
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
}

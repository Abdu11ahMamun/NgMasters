import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent {
  name = 'Abdullah';
  id = 104;

  methodTesting(){
    return 'Successful Method Testing!';
  }
}

import { Component } from '@angular/core';
import { NgForm  } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  email: string;

constructor() {   }


 public onSubmit(f: NgForm) {
      console.log('OnSubmit: ');
      console.log(f);

 }
}


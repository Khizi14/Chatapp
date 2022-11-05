import { Component } from '@angular/core';
import { Router, NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
doctor;
  constructor(private router: Router) { }

  ngOnInit() {
    this.doctor = [
      {
        img: 'assets/img/Doc1.jpg',
        name: 'Doctor 1'
      },
      {
        img: 'assets/img/Doc2.jpg',
        name: 'Doctor 2'
      },
      {
        img: 'assets/img/Doc3.jpg',
        name: 'Doctor 3'
      },
      {
        img: 'assets/img/Doc4.jpg',
        name: 'Doctor 4'
      },
      {
        img: 'assets/img/Doc5.jpg',
        name: 'Doctor 5'
      }
      ,
      {
        img: 'assets/img/Doc6.jpg',
        name: 'Doctor 6'
      }
    ]
    
  }

  goToDoctor(){

  }
}


import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { AngularFireDatabase } from "angularfire2/database";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  title = 'JavaSampleApproach';
  description = 'Angular-Firebase Demo';
 
  itemValue = '';
  items: Observable<any[]>;
  constructor(public db: AngularFireDatabase) {
    this.items = db.list('items').valueChanges();
  }

   onSubmit() {
    this.db.list('/items').push({ content: this.itemValue });
    this.itemValue = '';
  }
  ngOnInit() {
  }

}

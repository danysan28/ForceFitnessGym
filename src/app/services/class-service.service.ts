import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class ClassServiceService {

  classList: AngularFireList<any>;

  constructor(private firebasedb: AngularFireDatabase) { }

  getClassList(){
    this.classList = this.firebasedb.list('classes');
    return this.classList;
  }
}

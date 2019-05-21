import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { modelClass } from '../models/class';

@Injectable({
  providedIn: 'root'
})
export class ClassServiceService {

  classList: AngularFireList<modelClass>;

  constructor(private firebasedb: AngularFireDatabase) { }

  getClassList(){
    this.classList = this.firebasedb.list('classes');
    return this.classList;
  }
}

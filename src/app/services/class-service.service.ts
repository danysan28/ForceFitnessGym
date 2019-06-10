import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { modelFeedback } from '../models/feedback';

@Injectable({
  providedIn: 'root'
})
export class ClassServiceService {

  classList: AngularFireList<any>;
  scheduleList: AngularFireList<any>;
  feedbackList: AngularFireList<any>;

  constructor(private firebasedb: AngularFireDatabase) { }

  getClassList(){
    this.classList = this.firebasedb.list('classes');
    return this.classList;
  }

  getScheduleList(){
    this.scheduleList = this.firebasedb.list('schedule');
    return this.scheduleList;
  }

  getFeedbacks(){
    this.feedbackList = this.firebasedb.list('feedbacks');
    return this.feedbackList;
  }

  insertFeedback(feedback: modelFeedback){
    this.feedbackList.push({
      name: feedback.name,
      feedback: feedback.feedback,
      img: '../../../../assets/img/lifting-weight.jpg'
    });
  }

}

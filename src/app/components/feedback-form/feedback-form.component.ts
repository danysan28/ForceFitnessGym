import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ClassServiceService } from '../../services/class-service.service';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.scss']
})
export class FeedbackFormComponent implements OnInit {

  feedbackForm;

  constructor(private classService: ClassServiceService, private formBuilder: FormBuilder) { 
    this.feedbackForm = this.formBuilder.group({
      name: '',
      feedback: '',
      
    });
  }

  ngOnInit() {
    this.classService.getFeedbacks();
  }

  submitFeedback(feedbackContent: any){
    console.log(feedbackContent);
    this.classService.insertFeedback(feedbackContent);
    this.feedbackForm.reset();
  }

}

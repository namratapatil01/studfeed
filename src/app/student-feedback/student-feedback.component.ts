import { Component } from '@angular/core';

@Component({
  selector: 'app-student-feedback',
  templateUrl: './student-feedback.component.html',
  styleUrls: ['./student-feedback.component.css']
})
export class StudentFeedbackComponent {
  studentName: string = '';
  studentNumber: string = '';
  feedback: string = '';
  feedbackList: { studentName: string; studentNumber: string; feedback: string }[] = [];

  onSubmit() {
    if (this.studentName && this.studentNumber && this.feedback) {
      this.feedbackList.push({
        studentName: this.studentName,
        studentNumber: this.studentNumber,
        feedback: this.feedback,
      });
        // Clear form fields after submission
        this.studentName = '';
        this.studentNumber = '';
        this.feedback = '';
      }
    }
  
    onReset() {
      this.studentName = '';
      this.studentNumber = '';
      this.feedback = '';
    }

    onDelete(index: number) {
      this.feedbackList.splice(index, 1);
    }
  }
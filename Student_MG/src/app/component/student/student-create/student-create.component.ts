import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Student } from '../../models/student';
import { StudentService } from '../../services/student.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {
  student: Student = new Student();
  constructor(
    private dataSvc: StudentService,
    private router:Router
  ) { }
  insert(f: NgForm): void {
    if (f.invalid) return;
    this.dataSvc.postStudent(this.student)
      .subscribe(r => {
          this.router.navigateByUrl('student');
        },
        err => {
          
        });
  }
 
  ngOnInit(): void {
  }

}

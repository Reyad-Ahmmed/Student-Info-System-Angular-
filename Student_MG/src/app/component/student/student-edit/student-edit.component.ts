import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Student } from '../../models/student';
import { StudentService } from '../../services/student.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {

  student: Student = new Student();
  constructor(
    private dataService: StudentService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) { }
  update(f: NgForm): void {
    if (f.invalid) return;
    console.log(this.student);
    this.dataService.putStudent(this.student)
      .subscribe(r => {
        this.router.navigateByUrl('student');
      }, err => {
        
      });
  }
  ngOnInit(): void {
    let id = this.activateRoute.snapshot.params['id'];
    this.dataService.getStudentById(id)
      .subscribe(r => {
        this.student = r;
        console.log(r);
      },
        err => {

        });
    console.log(id);
  }

}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Student } from '../../models/student';
import { StudentService } from '../../services/student.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-delete',
  templateUrl: './student-delete.component.html',
  styleUrls: ['./student-delete.component.css']
})
export class StudentDeleteComponent implements OnInit {
  student: Student = new Student();
  student_id: number = 0;
  constructor(
    private dataService: StudentService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) { }
  delete(f: NgForm): void {
    if (f.invalid) return;
    console.log(this.student);
    this.dataService.deleteStudent(this.student_id)
      .subscribe(r => {
        this.router.navigateByUrl('student');
      }, err => {

      });
  }
  ngOnInit(): void {
    let id = this.activateRoute.snapshot.params['id'];
    this.student_id = id;
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

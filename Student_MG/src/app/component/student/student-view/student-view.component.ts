import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Student } from '../../models/student';
import { StudentService } from '../../services/student.service';
import { NotificationService } from '../../services/notification.service';
import { StudentDeleteComponent } from '../../student/student-delete/student-delete.component';

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.css']
})
export class StudentViewComponent implements OnInit {
  students: Student[] = [];

  constructor(private dataService: StudentService) { }
  
  ngOnInit(): void {
    this.dataService.getStudentList()
      .subscribe(r => {
          this.students = r;
        },
        err => {
          console.log(err);
        });
  }

}

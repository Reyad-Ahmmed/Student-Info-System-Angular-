import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../models/student'

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  getStudentList(): Observable<Student[]> {
    return this.http.get<Student[]>('http://localhost:57085/api/Students');
  }

  getStudentById(id: number): Observable<Student> {
    return this.http.get<Student>(`http://localhost:57085/api/Students/${id}`);
  }
  postStudent(data: Student): Observable<Student> {
    return this.http.post<Student>(`http://localhost:57085/api/Students`, data);
  }
  putStudent(data: Student): Observable<any> {
    return this.http.put<any>(`http://localhost:57085/api/Students/${data.id}`, data);
  }
  deleteStudent(id: number): Observable<Student> {
    return this.http.delete<Student>(`http://localhost:57085/api/Students/${id}`);
  }
}

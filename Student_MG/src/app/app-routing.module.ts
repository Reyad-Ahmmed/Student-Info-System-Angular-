import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { StudentViewComponent } from './component/student/student-view/student-view.component';
import { StudentCreateComponent } from './component/student/student-create/student-create.component';
import { StudentEditComponent } from './component/student/student-edit/student-edit.component';
import { StudentDeleteComponent } from './component/student/student-delete/student-delete.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'student', component: StudentViewComponent },
  { path: 'create', component: StudentCreateComponent },
  { path: 'edit/:id', component: StudentEditComponent },
  { path: 'delete/:id', component: StudentDeleteComponent },
  { path: '', component: HomeComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

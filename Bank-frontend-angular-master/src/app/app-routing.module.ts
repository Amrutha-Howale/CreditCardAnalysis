import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatementUploadComponent } from './statement-upload/statement-upload.component';
import { GraphdisplayComponent } from './graphdisplay/graphdisplay.component';

const routes: Routes = [

  {path:'',component:StatementUploadComponent},
  {path:'graphdisplay',component:GraphdisplayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

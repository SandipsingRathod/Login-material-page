import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HomeClass} from './College-Component/home';
import {AboutClass} from './College-Component/about';
import {ContactClass} from './College-Component/contact';
import {DepartmentClass} from './College-Component/department';
import { routes } from './College-Component/routing-config';
import { ResultClass } from './College-Component/result';
import { AdmissionClass } from './College-Component/admission';
import { CommitteeClass } from './College-Component/committee';
import { FacilitiesClass } from './College-Component/facilities';
import { FacultyClass } from './College-Component/faculty';
import { GalleryClass } from './College-Component/gallery';
import { CouncilClass } from './College-Component/council';
import { TandpClass } from './College-Component/tandp';
import { DisclosureClass } from './College-Component/disclosure';
import { DownloadClass } from './College-Component/download';
import { SarnaacClass } from './College-Component/sarnaac';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';
import { LoginGit } from './login.page.git/login';
import {MatFormFieldModule} from '@angular/material/form-field';
// import {MatFormFieldControl} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/'
import {MatSidenavModule} from '@angular/material/sidenav';


@NgModule({
  declarations: [
    AppComponent,
    HomeClass,AboutClass,ContactClass,
    DepartmentClass,ResultClass,AdmissionClass,
    CommitteeClass,FacilitiesClass,FacultyClass,GalleryClass,CouncilClass,
    TandpClass,DisclosureClass,DownloadClass,SarnaacClass,LoginGit
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,RouterModule.forRoot(routes),MatGridListModule,
    MatDividerModule,MatFormFieldModule,MatButtonModule,FormsModule,ReactiveFormsModule,
    MatIconModule,MatInputModule,MatSidenavModule
    
  ],
  providers: [],
  bootstrap: [LoginGit]
})
export class AppModule { }

import {Routes} from '@angular/router';
import {AboutClass} from './about';
import {ContactClass} from './contact';
import {DepartmentClass} from './department';
import { ResultClass } from './result';
import { AdmissionClass } from './admission';
import { CommitteeClass } from './committee';
import { FacilitiesClass } from './facilities';
import { FacultyClass } from './faculty';
import { GalleryClass } from './gallery';
import { CouncilClass } from './council';
import { TandpClass } from './tandp';
import { DisclosureClass } from './disclosure';
import { DownloadClass } from './download';
import { SarnaacClass } from './sarnaac';

export const routes:Routes=[
    {path:'about', component:AboutClass},
    {path:'contact', component:ContactClass},
    {path:'department', component:DepartmentClass},
    {path:'result', component:ResultClass},
    {path:'admission', component:AdmissionClass},
    {path:'committee', component:CommitteeClass},
    {path:'faculties', component:FacilitiesClass},
    {path:'faculty', component:FacultyClass},
    {path:'gallery', component:GalleryClass},
    {path:'tandp', component:TandpClass},
    {path:'disclosure', component:DisclosureClass},
    {path:'download', component:DownloadClass},
    {path:'sarnaac', component:SarnaacClass},
    {path:'council', component:CouncilClass}
    
];



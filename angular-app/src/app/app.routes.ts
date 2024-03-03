import { Routes } from '@angular/router'
import { ReferencesComponent } from './references/references.component'

export const routes: Routes = [
  { path: '', redirectTo: '/references', pathMatch: 'full' as any },
  { path: 'references', component: ReferencesComponent },
  { path: '**', redirectTo: '/references' },
]

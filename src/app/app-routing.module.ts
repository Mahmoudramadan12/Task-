import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SbjectComponent } from './sbject/sbject.component';
import { AppComponent } from './app.component';
import { ExerciseComponent } from './exercise/exercise.component';

const routes: Routes = [
  { path: '', component: AppComponent },

  { path: 'sbject', component: SbjectComponent },

  { path: 'exercise', component: ExerciseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

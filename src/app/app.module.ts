import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ClassesComponent } from './components/classes/classes.component';
import { HomeComponent } from './components/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//Services
import { ClassServiceService } from './services/class-service.service';

//firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

// Enviroment Config
import { environment } from '../environments/environment';
import { TargetClassComponent } from './components/classes/target-class/target-class.component';
import { WidgetsComponent } from './components/widgets/widgets.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FeedbackFormComponent } from './components/feedback-form/feedback-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ClassesComponent,
    HomeComponent,
    TargetClassComponent,
    WidgetsComponent,
    ScheduleComponent,
    CarouselComponent,
    FeedbackFormComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    NgbModule
  ],
  providers: [ClassServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

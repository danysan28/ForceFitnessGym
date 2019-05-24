import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ClassesComponent } from './components/classes/classes.component';
import { HomeComponent } from './components/home/home.component';

//Services
import { ClassServiceService } from './services/class-service.service';

//firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

// Enviroment Config
import { environment } from '../environments/environment';
import { TargetClassComponent } from './components/classes/target-class/target-class.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ClassesComponent,
    HomeComponent,
    TargetClassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [ClassServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

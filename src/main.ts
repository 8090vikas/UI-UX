import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { enableProdMode } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule for API requests
import { environment } from './environments/environment'; // Import environment

// Enable production mode if needed
if (environment.production) {
  enableProdMode();
}

// Bootstrap the standalone component and provide necessary modules
bootstrapApplication(AppComponent, {
  providers: [
    FormsModule, // Provide FormsModule
    HttpClientModule // Provide HttpClientModule
  ]
}).catch(err => console.error(err));

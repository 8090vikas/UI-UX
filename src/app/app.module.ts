import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component'; // Import the main AppComponent

// Standalone Component
@Component({
  selector: 'app-root',
  template: `
    <h1>Unsplash Search</h1>
    <input [(ngModel)]="searchQuery" placeholder="Search Photos..." />
    <button (click)="searchPhotos()">Search</button>

    <div class="results-container">
      <div *ngIf="photos.length === 0 && searchCompleted">No photos found. Try a different search term.</div>
      <div class="photo-card" *ngFor="let photo of photos">
        <img [src]="photo.urls.small" [alt]="photo.alt_description || 'Photo'" />
      </div>
    </div>
  `,
  standalone: true,
  imports: [FormsModule],
})
export class StandaloneAppComponent {
  searchQuery = '';
  photos: any[] = [];
  searchCompleted = false;

  searchPhotos() {
    // Placeholder for Unsplash API logic
    console.log('Searching for:', this.searchQuery);
    this.searchCompleted = true;

    // Example response data (replace with actual API call)
    this.photos = [
      { urls: { small: 'https://example.com/photo1.jpg' }, alt_description: 'Photo 1' },
      { urls: { small: 'https://example.com/photo2.jpg' }, alt_description: 'Photo 2' },
    ];
  }
}

// NgModule Definition (for traditional approach)
@NgModule({
  declarations: [
    AppComponent // Declare the main AppComponent for NgModule-based bootstrapping
  ],
  imports: [
    BrowserModule,
    FormsModule, // Enable template-driven forms
    HttpClientModule, // Support HTTP requests
  ],
  providers: [],
  bootstrap: [
    AppComponent, // Bootstrap AppComponent for NgModule-based bootstrapping
  ],
})
export class AppModule {}

// Bootstrap Standalone Component
bootstrapApplication(StandaloneAppComponent, {
  providers: [
    // Provide global services if needed
  ]
}).catch(err => console.error(err));

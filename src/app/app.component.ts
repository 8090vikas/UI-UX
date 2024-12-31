import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment'; // Import environment file
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  searchQuery = '';
  photos: any[] = [];
  searchCompleted = false;

  constructor(private http: HttpClient) {}

  searchPhotos() {
    if (!this.searchQuery.trim()) {
      alert('Please enter a search term.');
      return;
    }

    const accessKey = environment.unsplashAccessKey;
    const apiUrl = `https://api.unsplash.com/search/photos?query=${this.searchQuery}&client_id=${accessKey}`;

    this.http.get<any>(apiUrl).subscribe(
      (response) => {
        this.photos = response.results;
        this.searchCompleted = true;
      },
      (error) => {
        console.error('Error fetching Unsplash API:', error);
        alert('Something went wrong. Please try again later.');
      }
    );
  }
}

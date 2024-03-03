import { Component } from '@angular/core'
import { CommonModule, NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss',
})
export class ReferencesComponent {
  isLocal = window?.location?.host?.includes('localhost:4200')
  isLocalServer = window?.location?.host?.includes('localhost:3000')
  goBack() {
    let url = 'https://www.jasonrice.me/'
    if (this.isLocal) {
      url = 'http://localhost:8080/'
    } else if (this.isLocalServer) {
      url = 'http://localhost:3000/'
    }
    window.location.replace(url)
  }
}

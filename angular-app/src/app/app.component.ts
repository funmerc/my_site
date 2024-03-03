import { Component, OnInit } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { CommonModule } from '@angular/common'
import { LoadingService } from '../services/loading.service'

// import { trigger, state, style, transition, animate } from '@angular/animations'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  $isLoading: boolean | null = null

  title = 'angular-app'
  loadingService: LoadingService | null = null

  constructor(ls: LoadingService) {
    this.loadingService = ls
    this.loadingService.getIsLoading().subscribe((loading) => {
      this.$isLoading = loading
    })
  }

  ngOnInit() {
    this.loadingService?.setIsLoading(true)
  }
}

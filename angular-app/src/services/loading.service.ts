import { Injectable } from '@angular/core'
import { Subject, of, Observer, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  $isLoading: Subject<boolean> = new Subject<boolean>()
  constructor() {}

  getIsLoading(): Observable<boolean> {
    return this.$isLoading.asObservable()
  }

  setIsLoading(value: boolean): void {
    this.$isLoading.next(value)
  }
}

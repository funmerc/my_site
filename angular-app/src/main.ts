import { bootstrapApplication } from '@angular/platform-browser'
import { appConfig } from './app/app.config'
import { AppComponent } from './app/app.component'

bootstrapApplication(AppComponent, appConfig)
  .then((_r: any) => console.log('render complete'))
  .catch((err: any) => {
    console.error(err)
  })

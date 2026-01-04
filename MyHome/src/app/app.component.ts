import { Component } from '@angular/core';
import { HeaderComponent } from './shared/components/header/header.component';
import { ConstructionLevelSideBarComponent } from './ConstructionLevel/construction-level-side-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, ConstructionLevelSideBarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyHome';
}

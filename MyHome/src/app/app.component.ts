import { Component } from '@angular/core';
import { HeaderComponent } from './shared/components/header/header.component';
import { ManageConstructionLevelComponent } from "./ConstructionLevel/manage-construction-level/manage-construction-level.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, ManageConstructionLevelComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyHome';
}

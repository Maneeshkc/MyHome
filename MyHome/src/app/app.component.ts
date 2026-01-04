import { Component } from '@angular/core';
import { HeaderComponent } from './shared/components/header/header.component';
import { ConstructionLevelDetailsComponent } from "./ConstructionLevelDetails/construction-level-details.component";
import { ConstructionLevelSideBarComponent } from "./ConstructionLevelSideBar/construction-level-side-bar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, ConstructionLevelDetailsComponent, ConstructionLevelSideBarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyHome';
}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConstructionLevelModel } from '../../Model/ConstructionLevelModel';

@Component({
  selector: 'app-construction-level-details',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './construction-level-details.component.html',
  styleUrls: ['./construction-level-details.component.css']
})
export class ConstructionLevelDetailsComponent {
cancelEdit() {
throw new Error('Method not implemented.');
}
level: ConstructionLevelModel=new ConstructionLevelModel();
}

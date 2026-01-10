import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConstructionLevelModel } from '../../Model/ConstructionLevelModel';
import { ConstructionLevelService } from '../../service/ConstructionLevelService';

@Component({
  selector: 'app-construction-level-details',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './construction-level-details.component.html',
  styleUrls: ['./construction-level-details.component.css']
})
export class ConstructionLevelDetailsComponent implements OnChanges {
  @Input({ required: true }) levelId: number = 0;
  level: ConstructionLevelModel = new ConstructionLevelModel();

  constructor(private constuctinLevelService: ConstructionLevelService) {
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Level ID changed to:', this.levelId);
    if (this.levelId > 0) {
      this.level = this.constuctinLevelService.getById(this.levelId)!;
    }
    else if(this.levelId === -1){
      this.level = new ConstructionLevelModel();
    }
  }

  addEdit() {
    if (this.levelId === -1 ) {
      this.constuctinLevelService.add(this.level);
      this.level = new ConstructionLevelModel();
    } else {
      this.constuctinLevelService.update(this.level);
    }
  }
  delete() {
    if (this.levelId > 0) {
      this.constuctinLevelService.deleteById(this.levelId);
      this.level = new ConstructionLevelModel();
    }
  }


  cancelEdit() {
    // this.levelId = 0;
    //   this.level = new ConstructionLevelModel();
  }
}

import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { ConstructionLevelDetailsComponent } from "../ConstructionLevelDetails/construction-level-details.component";
import { ConstructionLevelService } from '../../service/ConstructionLevelService';
import { ConstructionLevelModel } from '../../Model/ConstructionLevelModel';

@Component({
  selector: 'app-construction-level-side-bar',
  standalone: true,
  imports: [NgFor, ConstructionLevelDetailsComponent],
  templateUrl: './construction-level-side-bar.component.html',
  styleUrls: ['./construction-level-side-bar.component.css']
})
export class ConstructionLevelSideBarComponent implements OnInit {
  levels: ConstructionLevelModel[] = [];
  activeIndex: number = 0;

  constructor(private constructionLevelService: ConstructionLevelService) { }

  ngOnInit(): void {
    this.levels = this.constructionLevelService.getAll();
  }

  setActive(event: Event,index: number): void {
    this.activeIndex = index-1;
    console.log(this.constructionLevelService.getById(index));
    console.log(event);
  }
}

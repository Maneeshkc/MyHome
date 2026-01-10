import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { ConstructionLevelDetailsComponent } from "../ConstructionLevelDetails/construction-level-details.component";
import { ConstructionLevelService } from '../../service/ConstructionLevelService';
import { ConstructionLevelModel } from '../../Model/ConstructionLevelModel';
import { ConstructionDashboardComponent } from "../construction-dashboard/construction-dashboard.component";

@Component({
  selector: 'app-construction-level-side-bar',
  standalone: true,
  imports: [NgFor, ConstructionLevelDetailsComponent, ConstructionDashboardComponent],
  templateUrl: './construction-level-side-bar.component.html',
  styleUrls: ['./construction-level-side-bar.component.css']
})
export class ConstructionLevelSideBarComponent implements OnInit {
  levels: ConstructionLevelModel[] = [];
  activeIndex: number = -1;
  selectedLevelId: number = 0;
  dashboardSelected: boolean = false;

  constructor(private constructionLevelService: ConstructionLevelService) { }

  ngOnInit(): void {
    this.levels = this.constructionLevelService.getAll();
  }

  setActive(index: number, levelId: number): void {
    this.activeIndex = index;
    this.selectedLevelId = levelId;
    this.dashboardSelected = false;
  }

  levelDeleted(event: string): void {
    if (event === 'deleted') {
      this.activeIndex = 0;
      this.selectedLevelId = this.constructionLevelService.getAll()[0]?.Id || 0;
    } else if (event === 'calcelled') {
      this.activeIndex = -1;
      this.selectedLevelId = 0;
    }
  }

  selectDashboard(): void {
    this.dashboardSelected = true;
  }
}

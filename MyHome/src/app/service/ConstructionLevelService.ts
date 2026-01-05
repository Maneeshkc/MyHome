import { Injectable } from '@angular/core';
import { ConstructionLevelModel } from '../Model/ConstructionLevelModel';

@Injectable({
  providedIn: 'root'
})
export class ConstructionLevelService {
  deleteById(id: number): boolean {
    const levels = this.getAll();
    const index = levels.findIndex(level => level.Id === id);
    if (index !== -1) {
      levels.splice(index, 1);
      return true;
    }
    return false;
  }
  private levels: ConstructionLevelModel[] = [
    { Id: 1, Tittle: 'Pre-Construction', Description: 'Initial planning and design.' },
    { Id: 2, Tittle: 'Foundation', Description: 'Laying the foundation.' },
    { Id: 3, Tittle: 'First Floor', Description: 'Building the first floor.' },
    { Id: 4, Tittle: 'Second Floor', Description: 'Building the second floor.' },
    { Id: 5, Tittle: 'Pastering', Description: 'Plastering the walls.' },
    { Id: 6, Tittle: 'Flooring', Description: 'Laying the floors.' },
    { Id: 7, Tittle: 'Interior', Description: 'Interior finishing.' },
    { Id: 8, Tittle: 'Final', Description: 'Final inspection and handover.' }
  ];
  getAll(): ConstructionLevelModel[] {
    return this.levels;
  }

  getById(id: number): ConstructionLevelModel | undefined {
    return this.levels.find(level => level.Id === id);
  }


  update(updatedLevel: ConstructionLevelModel): boolean {
    const index = this.levels.findIndex(level => level.Id === updatedLevel.Id);
    if (index !== -1) {
      this.levels[index] = { ...updatedLevel };
      return true;
    }
    return false;
  }
}

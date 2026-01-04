import { Injectable } from '@angular/core';
import { ConstructionLevelModel } from '../Model/ConstructionLevelModel';

@Injectable({
  providedIn: 'root'
})
export class ConstructionLevelService {
  getAll(): ConstructionLevelModel[] {
    return [
      { Id: 1, Tittle: 'Pre-Construction', Description: 'Initial planning and design.' },
      { Id: 2, Tittle: 'Foundation', Description: 'Laying the foundation.' },
      { Id: 3, Tittle: 'First Floor', Description: 'Building the first floor.' },
      { Id: 4, Tittle: 'Second Floor', Description: 'Building the second floor.' },
      { Id: 5, Tittle: 'Pastering', Description: 'Plastering the walls.' },
      { Id: 6, Tittle: 'Flooring', Description: 'Laying the floors.' },
      { Id: 7, Tittle: 'Interior', Description: 'Interior finishing.' },
      { Id: 8, Tittle: 'Final', Description: 'Final inspection and handover.' }
    ];
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Food } from '@interfaces/food';

@Injectable({
  providedIn: 'root',
})
export class ServiceFoodService {
  constructor(private http: HttpClient) {}

  handleError(): Array<Food> {
    return [];
  }

  async getFood(food: string): Promise<Array<Food>> {
    return await this.http
      .get<Array<Food>>(`${environment.apiUrl}${food}`)
      .toPromise()
      .catch(this.handleError);
  }
}

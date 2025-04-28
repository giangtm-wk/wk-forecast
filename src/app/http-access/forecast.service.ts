import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { mockPredictionDataAligned } from '@http-access/fbt.mock';
import forecastData from './fbs.mock';
import { catchError, of, timeout } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {
  private httpClient = inject(HttpClient);

  getForecastDataByServices() {
    return this.httpClient
      .get('https://example.com/api/forecast')
      .pipe(
        timeout(5000),
        catchError((_) => {
          return of(forecastData)
        })
      );
  }

  getForecastDataByTime() {
    return this.httpClient
      .get('https://example.com/api/forecast')
      .pipe(
        timeout(5000),
        catchError((_) => {
          return of(mockPredictionDataAligned())
        })
      );
  }
}

import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};
const deleteOptions = {
  responseType: 'text' as const
};
const typeTextOptions = {
  responseType: 'text' as const
};

export class EhrSystemService<T> {
  basePath = 'http://localhost:8080/infodatis/';
  listURL = 'list';
  addURL = 'add';
  // apiURL = this.basePath + 'api/';
  constructor(protected httpClient: HttpClient, protected actionUrl: string) {}
  public create(model: T): any {
    return this.httpClient.post(
      this.basePath + `${this.actionUrl}` + '/' + this.addURL,
      model,
      httpOptions
    );
  }
  public update(id: number, model: T): any {
    return this.httpClient.put<T>(
      `${this.basePath}${this.actionUrl}/${id}`,
      model,
      httpOptions
    );
  }
  public delete(id: number): Observable<any> {
    return this.httpClient.delete(`${this.basePath}${this.actionUrl}/${id}`, deleteOptions);
  }
  public get(url?: string): Observable<T[]> {
    return this.httpClient.get<T[]>(
      `${this.basePath}${this.actionUrl}/${this.listURL}`,
      httpOptions
    );
  }
  public getUrl(url?: string): Observable<any> {
    return this.httpClient.get<any>(
      `${this.basePath}${this.actionUrl}/${url}`,
      httpOptions
    );
  }
  public getById(id: number): Observable<T> {
    return this.httpClient.get<T>(
      `${this.basePath}${this.actionUrl}/${id}`,
      httpOptions
    );
  }
  public activateOrganisationUrl(url?: string): Observable<any> {
    return this.httpClient.get(
      `${this.basePath}${this.actionUrl}/${url}`,
      typeTextOptions
    );
  }
  public postUrlWithParams(model: T, tenantId: string, url: string): any {
    return this.httpClient.post<any>(`${this.basePath}${this.actionUrl}/${url}?tenantId=${tenantId}`,
      model, httpOptions);
  }

}

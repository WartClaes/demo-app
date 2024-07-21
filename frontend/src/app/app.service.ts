import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

export type RequestData = {
  firstName: string;
  lastName: string;
  skills: string;
  socials: {
    type?: string;
    url?: string;
  }[];
}

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private apiUrl = '/api';

  constructor(
    private http: HttpClient,
  ) {}

  postData(formData: RequestData): Observable<any> {
    return this.http.post(this.apiUrl, {
      ...formData,
      skills: formData.skills.split(',').filter(Boolean),
      socials: formData.socials.filter((s: any) => s.type && s.url),
    });
  }
}

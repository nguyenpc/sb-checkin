import { Http, Response } from '@angular/http';
import { Participant } from 'app/models/participant';
import { Injectable } from '@angular/core';

@Injectable()
export class ParticipantService {
    endpoint = 'http://59744105903c110011f56aa2.mockapi.io/participant';
    constructor(private http: Http) {

    }
    getList() {
        return this.http.get(this.endpoint)
            .map((res: Response) => res.json() as Participant[]);
    }
    get(id: number) {
        return this.http.get(this.endpoint + '/' + id)
            .map((res: Response) => res.json() as Participant);
    }
    add(people: Participant) {
        return this.http.post(this.endpoint, people)
            .map((res: Response) => res.json());
    }

    update(people: Participant) {
        return this.http.put(this.endpoint + '/' + people.id, people)
            .map((res: Response) => res.json());
    }
    delete(people: Participant) {
        return this.http.delete(this.endpoint + '/' + people.id)
            .map((res: Response) => res.json());
    }
}

import { HttpClient } from '@angular/common/http';
import { Participant } from 'app/models/participant';
import { Injectable } from '@angular/core';

@Injectable()
export class ParticipantService {
    endpoint = 'http://59744105903c110011f56aa2.mockapi.io/participant';
    constructor(private http: HttpClient) {

    }
    getList() {
        return this.http.get<Participant[]>(this.endpoint);
    }
    get(id: number) {
        return this.http.get<Participant>(this.endpoint + '/' + id);
    }
    add(people: Participant) {
        return this.http.post(this.endpoint, people);
    }

    update(people: Participant) {
        return this.http.put(this.endpoint + '/' + people.id, people);
    }
    delete(people: Participant) {
        return this.http.delete(this.endpoint + '/' + people.id);
    }
}

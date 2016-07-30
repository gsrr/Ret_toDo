import { Injectable }     from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class HeroService {
	constructor (private http: Http) {}
	private heroesUrl = 'http://127.0.0.1:5000/'

	getHeroes (): Observable<Hero[]> {
		return this.http.get(this.heroesUrl)
			.map(this.extractData)
			.catch(this.handleError);
	}

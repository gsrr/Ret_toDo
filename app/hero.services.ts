import { Injectable }     from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Hero }           from './hero';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class HeroService {
	constructor (private http: Http) {}
	private heroesUrl = 'http://127.0.0.1:5000/';  // URL to web API
	getHeroes (): Observable<Hero[]> {
		console.log("in heroService")
		return this.http.get(this.heroesUrl).map(res => res.json());
	}
}

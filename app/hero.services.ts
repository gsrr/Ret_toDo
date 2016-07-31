import { Injectable }     from 'angular2/core';
import { Http, Response, RequestOptions, Headers, Request, RequestMethod } from 'angular2/http';
import { Hero }           from './hero';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class HeroService {
	constructor (private http: Http) {}
	private heroesUrl = 'http://127.0.0.1:5000/';  // URL to web API
	private postUrl = 'http://127.0.0.1:5000/'; 

	getHeroes (): Observable<Hero[]> {
		console.log("in heroService")
		return this.http.get(this.heroesUrl).map(res => res.json());
	}

	postMethod (data) {
		this.headers = new Headers();
		this.headers.append("Content-Type", 'application/json');
		/*this.headers.append("Authorization", 'Bearer ' + localStorage.getItem('id_token'))*/

			this.requestoptions = new RequestOptions({
				method: RequestMethod.Post,
				url: this.postUrl,
				headers: this.headers,
				body: JSON.stringify({'aaa':'bbb'})
			})

		return this.http.request(new Request(this.requestoptions)).map((res => res.json());
	}

	getMethod () {
		console.log("in heroService")
		return this.http.get(this.heroesUrl).map(res => res.json());
	}
}

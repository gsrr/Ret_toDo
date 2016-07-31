import { Injectable }     from 'angular2/core';
import { Http, Response, RequestOptions, Headers, Request, RequestMethod } from 'angular2/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class HttpService {
	constructor (private http: Http) {}

	postMethod (url, data) {
		this.headers = new Headers();
		this.headers.append("Content-Type", 'application/json');

			this.requestoptions = new RequestOptions({
				method: RequestMethod.Post,
				url: url,
				headers: this.headers,
				body: JSON.stringify(data)
			})

		return this.http.request(new Request(this.requestoptions)).map((res => res.json());
	}
}

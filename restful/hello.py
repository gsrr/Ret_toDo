
from flask import Flask
from flask_restful import Resource, Api
from flask import make_response, request
import json

app = Flask(__name__)
api = Api(app)

class HelloWorld(Resource):
	def get(self):
		resp = make_response(json.dumps({'Hello' : 'World'}))
		h = resp.headers
		h['Access-Control-Allow-Origin'] = '*'
		return resp

api.add_resource(HelloWorld, '/')

if __name__ == '__main__':
	app.run(debug=True)

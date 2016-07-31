
from flask import Flask
from flask_restful import Resource, Api
from flask import make_response, request
from flask_restful import reqparse
import json

app = Flask(__name__)
api = Api(app)


def decorH(func):
	def wrap_func(self):
		resp = func(self)
		h = resp.headers
		h['Access-Control-Allow-Origin'] = '*'
		h['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS'
		h['Access-Control-Allow-Headers'] = 'X-Requested-With, Content-Type, Accept'
		return resp
	return wrap_func

class HelloWorld(Resource):
	@decorH
	def get(self):
		print "get"
		resp = make_response(json.dumps({'Hello' : 'World'}))
		return resp
	
	@decorH
	def post(self):
		print "post"
		parser = reqparse.RequestParser()
		parser.add_argument('tname')
		parser.add_argument('category')
		parser.add_argument('tdeadline')
		parser.add_argument('tremain')
		parser.add_argument('tprogress')
		parser.add_argument('tresult')
		args = parser.parse_args()
		print args
		resp = make_response(json.dumps({'Hello' : 'World'}))
		return resp	
		
	@decorH
	def options(self):
		print "options"
		print request
		resp = make_response(json.dumps({'Hello' : 'World'}))
		return resp	

api.add_resource(HelloWorld, '/')

if __name__ == '__main__':
	app.run(debug=True)

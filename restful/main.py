from flask import Flask
from flask_restful import Resource, Api
from flask import make_response, request
from flask_restful import reqparse
import json

import sys
sys.path.append("/home/jerry.cheng/Desktop/github/Ret_toDo/postsql")
import models

app = Flask(__name__)
api = Api(app)


def decorH(func):
	def wrap_func(self, cmd):
		resp = func(self, cmd)
		h = resp.headers
		h['Access-Control-Allow-Origin'] = '*'
		h['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS'
		h['Access-Control-Allow-Headers'] = 'X-Requested-With, Content-Type, Accept'
		return resp
	return wrap_func

def post_create():
	parser = reqparse.RequestParser()
	parser.add_argument('name')
	parser.add_argument('category')
	parser.add_argument('deadline')
	args = parser.parse_args()
	ret = models.insertData("tasks", args)
	resp = make_response(json.dumps(ret))
	return resp	
	
def post_comment():
	pass

def post_result():
	pass

def post_list():
	ret = {'status' : 0}
	data = models.listData("tasks")['data']
	ret['data'] = data
	resp = make_response(json.dumps(ret))
	return resp	

def post_delete():
	ret = {'status' : 0}
	parser = reqparse.RequestParser()
	parser.add_argument('name')
	args = parser.parse_args()
	data = models.deleteData("tasks", args)
	resp = make_response(json.dumps(ret))
	return resp	

class HelloWorld(Resource):
	@decorH
	def get(self, cmd):
		print "get:%s"%cmd
		resp = make_response(json.dumps({'Hello' : 'World'}))
		return resp
	
	@decorH
	def post(self, cmd):
		print cmd
		func = getattr(sys.modules[__name__], "post_" + cmd)
		return func()
		
	@decorH
	def options(self, cmd):
		print "options"
		print request
		resp = make_response(json.dumps({'Hello' : 'World'}))
		return resp	

api.add_resource(HelloWorld, '/<string:cmd>')

if __name__ == '__main__':
	app.run(debug=True)

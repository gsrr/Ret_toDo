import sys
import sqlalchemy
from sqlalchemy import Table, Column, ForeignKey
from sqlalchemy import text

INSERTERROR = 1001

def log(msg):
	with open("./sql.log", "w") as fw:
		fw.write(msg + "\n")

def connect(user, password, db, host='localhost', port=5432):
   	url = 'postgresql://%s:%s@%s:%d/%s'
	print url
	url = url%(user, password, host, port, db)
	con = sqlalchemy.create_engine(url, client_encoding='utf8')
	meta = sqlalchemy.MetaData(bind=con, reflect=True)
	return con, meta

def createTable(con, meta, paras):
	tbname = paras['tbname']
	#columns = paras['columns']
	columns = [
		Column('name', sqlalchemy.String, primary_key=True),
		Column('category', sqlalchemy.String, primary_key=False),
		Column('deadline', sqlalchemy.String, primary_key=False),
		Column('remainDays', sqlalchemy.Integer, primary_key=False),
		Column('progress', sqlalchemy.Integer, primary_key=False),
		Column('status', sqlalchemy.String, primary_key=False),
	]

	tasks = Table(tbname, meta, *(col for col in columns))
	meta.create_all(con)

def showTables(meta):
	for table in meta.tables:
		print table

def createDB(db, user):
	conn = con.connect()
	conn.execute("commit")
	conn.execute("create database %s"%db)
	ret = conn.execute("GRANT ALL PRIVILEGES ON DATABASE %s TO %s"%(db, user))
	return ret

def listDB(con):
	sql = text("SELECT datname FROM pg_database")
	ret = con.execute(sql)
	for row in ret:
		print row[0]

def listData(tb, paras = None):
	con, meta = connect("postgres", "postgres", "jerry")
	table = meta.tables[tb]
	sqlData = con.execute(table.select())
	data = []
	for row in sqlData:
		data.append(list(row))
			
	return {'status' : 0, 'data' : data}

def insertData(tb, paras):
	con, meta = connect("postgres", "postgres", "jerry")
	print paras
	clause = meta.tables[tb].insert().values(**paras)
	ret = con.execute(clause)
	if ret != None:
		return {'status' : 0}
	else:
		return {'status' : INSERTERROR}
	
def deleteData(tb, paras):
	con, meta = connect("postgres", "postgres", "jerry")
	table = meta.tables[tb]
	clause = table.delete().where(table.c.name == paras['name'])
	ret = con.execute(clause)
	return {'status' : 0}

def test_deleteData(args):
	print deleteData("tasks", {'name' : args[0]})

def test_createDB(args):
	con, meta = connect("postgres", "postgres", "")
	db = args[0]
	user = args[1]
	print createDB(db, user)

def test_createTable(args):
	db = args[0]
	user = args[1]
	passwd = user
	con, meta = connect(user, passwd, db)
	paras = {}
	paras['tbname'] = "tasks"

	print createTable(con, meta, paras)

def test_listData(args):
	for row in listData('tasks', {})['data']:
		print type(row)
		print row

if __name__ == "__main__":
	func = getattr(sys.modules[__name__], sys.argv[1])
	func(sys.argv[2:])
'''
showTables(meta)
clause = meta.tables['slams'].insert().values(name='Wimbledon', country='United Kingdom')
con.execute(clause)
victories = [
	{'slam': 'Wimbledon', 'year': 2003, 'result': 'W'},
	{'slam': 'Wimbledon', 'year': 2004, 'result': 'W'},
	{'slam': 'Wimbledon', 'year': 2005, 'result': 'W'}
]
con.execute(meta.tables['results'].insert(), victories)
'''

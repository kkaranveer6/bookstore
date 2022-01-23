from crypt import methods
from flask import Flask
from flask import request
from flask import jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

users = []
books = []

@app.route('/')
def index():
  return jsonify([book.to_json() for book in books])

"""
  login
  register
  add Book
  remove Book
"""

@app.route('/login', methods=['POST'])
def login_user():
  content = request.get_json()
  print(content['email'])
  for i in users:
    if i['email'] == content['email'] and i['password'] == content['password']:
      return 'login is successful'

@app.route('/register', methods=['POST'])
def register_user():
  details = request.get_json()
  users.append(details)
  print(users)
  return "register successful"
  
@app.route('/add', methods=["POST"])
def add():
  content = request.get_json()
  books.append(content)
  return 'added book' 

@app.route('/delete', methods=["POST"])
def delete():
  content = request.get_json()
  for i in books:
    if content["id"] == i["id"]:
      del i
    #   del books[i]

#import pandas as pd
from flaskext.mysql import MySQL
from flask import (
    Flask,
    render_template,
    jsonify)

from flask_sqlalchemy import SQLAlchemy
import pymysql

app = Flask(__name__)
mysql = MySQL()

# setup mysql connection
app.config['MYSQL_DATABASE_USER'] = 'root'
app.config['MYSQL_DATABASE_PASSWORD'] = 'Password1'
app.config['MYSQL_DATABASE_DB'] = 'disaster_db'
app.config['MYSQL_DATABASE_HOST'] = 'localhost'
mysql.init_app(app)

#db = pymysql.connect("localhost", "root", "Password1", "disaster_db")

conn = mysql.connect()
cursor =conn.cursor()

cursor.execute("SELECT * from disaster")
data = cursor.fetchone()

@app.route("/")
def index():
    #cursor = db.cursor()
    sql = "SELECT * FROM disaster"
    cursor.execute(sql)
    results = cursor.fetchall()
    
    # render an index.html template and pass it the data you retrieved from the database
    return render_template('index.html', results=results)

if __name__ == '__main__':
    app.run(debug=True)
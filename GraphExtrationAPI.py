# -*- coding: utf-8 -*-
"""
Created on Mon Dec 27 00:20:38 2021

@author: Administrator
"""


import matplotlib.pyplot as plt
from matplotlib.pyplot import pie, axis, show
from pymongo import MongoClient
import gridfs
import pandas
from bson.json_util import dumps
import glob
import os.path
import os
import csv
import urllib.request
from app import app
from flask import Flask, request, redirect, jsonify,send_file
from werkzeug.utils import secure_filename
from flask_cors import CORS, cross_origin
import pandas as pd




ALLOWED_EXTENSIONS = set(['pdf','csv'])

def allowed_file(filename):
	return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS



@app.route('/bankaccount', methods=['POST','GET'])
@cross_origin()
def bankaccount():
	account = request.files['file']
	if account and allowed_file(account.filename):
		filename = secure_filename(account.filename)
		account.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
		resp = jsonify({'message' : 'File successfully uploaded'})
		resp.status_code = 201
		return resp
	else:
		resp = jsonify({'message' : 'Allowed file types are pdf and csv only'})
		resp.status_code = 201
		return resp   
@app.route("/graph", methods = ['GET','POST'])
def graph():
    target_path ='D:\\uploads'
    folder_path = r'D:\\uploads'
    file_type = '\*csv'
    files = glob.glob(folder_path + file_type)
    max_file = max(files, key=os.path.getctime)


    app = Flask(__name__)



    client = MongoClient('localhost:27017')
    db = client.image

    fs = gridfs.GridFS(db)



    x = []
    y = []

    import_file = pd.read_csv(max_file)
   # import_file =import_file.iloc[: , :-1]
    #import_file['Credit'] = import_file['Credit'].fillna('0')

    #import_file['Debit'] = import_file['Debit'].fillna('0')

    print(import_file)
    print(max_file)
    with open(max_file,'r') as csvfile:
        plots = csv.reader(csvfile, delimiter = ',') 
        next(plots)
        for row in plots:
            x.append(row[4])
            y.append(row[1])

    fig = plt.figure()
    plt.bar(x, y, color = '#8dc641', width = 0.5, label = "Transaction")
    plt.xlabel('Balance')
    plt.ylabel('Description')
    plt.title('Bank Statement Analysis')
    plt.legend()
    plt.show()
    fig.savefig('D:\output\saved_figure.png')
    file = "saved_figure.png"
    return send_file("D:\output\saved_figure.png",mimetype=("image/png"))



if __name__ == "__main__":
    app.run()
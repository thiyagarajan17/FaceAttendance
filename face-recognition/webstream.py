from flask import Flask, Response, json, render_template, request
from werkzeug.utils import secure_filename
from flask import request
from os import path, getcwd
import time
import os
import json
app = Flask(__name__)
import cv2
from camera import VideoCamera
from save_camera import VideoCameraSave

got_names = []

def gen(camera):
    while True:
        frame, names = camera.get_frame()
        global got_names
        flag = 0
        present_list = got_names
        for name in names:
            if "Unknown" in name: 
                continue
            for i in present_list:
                if name in i['name']:
                    flag = 1
                    break
            if flag == 0:
                got_names.append({"name": name, "status": "Present"})
        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n\r\n')

def newEntry(camera, name):
    while True:
        frame = camera.newMember(name)
        yield(b'--frame\r\n'
              b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n\r\n')


@app.route('/api/names')
def send_names():
    global got_names
    data = json.dumps(got_names)
    return data


@app.route('/video_feed')
def video_feed():
    return Response(gen(VideoCamera()),
                    mimetype='multipart/x-mixed-replace; boundary=frame')

@app.route('/add_new')
def add_new():
    name = request.args.get('name')
    return Response(newEntry(VideoCameraSave(), name),
    mimetype='multipart/x-mixed-replace; boundary=frame')

@app.route('/api/new_record')
def newRecordTemplate():
    name = request.args.get('name')
    return render_template('register.html', name=name)


@app.route('/success')
def success():
    return render_template('success.html')


@app.route('/')
def index():
    return render_template('index.html')
app.run(host='0.0.0.0', port=5050, debug = True)

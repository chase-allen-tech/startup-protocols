from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
ors = CORS(app)
app.config["CORS_HEADERS"] = "Content-Type"


@app.route("/")
def hello_world():
    return "Hello World!"

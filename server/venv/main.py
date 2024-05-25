from flask import Flask, jsonify
from flask_cors import CORS
from read_excel_file import data


app = Flask(__name__)
cors = CORS(app, origins='*') ## Specify where we are accepting requests from

@app.route("/api/users", methods=['GET'])

def users():
    return data

if __name__ == "__main__":
    app.run(debug=True, port=8080)
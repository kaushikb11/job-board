from flask import Flask, render_template, jsonify
from data import get_jobs_data


app = Flask(__name__)


@app.route("/")
def index():
    return render_template('index.html')


@app.route("/jobs/<company>")
def get_jobs_by_company(company):
    jobs_data = get_jobs_data(company)
    return jsonify(jobs_data)


if __name__ == "__main__":
    app.run(debug=True, port=4000)

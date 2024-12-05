from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.tmpl.html')

@app.route('/amb')
def amb():
    return render_template('amb_system.tmpl.html')        

@app.route('/comm_hub')
def hub1():
    return render_template('comm_hub.tmpl.html')

@app.route('/rec')
def hub2():
    return render_template('records.html')

@app.route('/ann')
def hub3():
    return render_template('analytics.tmpl.html')


if __name__ == '__main__':
    app.run(port=8080)
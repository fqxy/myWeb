# -*- encoding:utf-8 -*-
import flask

app = flask.Flask(__name__)	#生成web app对象

@app.route('/')			#注册url
def p1():
    return flask.render_template('p1.html')

@app.route('/2')			#注册url
def p2():
    return flask.render_template('p2.html')

@app.route('/3')			#注册url
def p3():
    return flask.render_template('p3.html')


if __name__ == '__main__':	#主函数
    app.run(debug=True)

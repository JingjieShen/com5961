import os
from werkzeug.wsgi import SharedDataMiddleware
from werkzeug.wrappers import Request, Response
from flask import Flask, render_template

app = Flask(__name__)
root_path = os.path.sep.join(app.instance_path.split(os.path.sep)[:-1])
@app.route("/")

def result():
    ta_name_list = ["Bob","Mary","Kate","Tom","Simon","Lily"]
    ta_rate_list = [60,50,55,60,55,60]
    ta_hour_list = [4,5,6,5,4,6]
    
    index = 0 
    output =[]
    
    for x in ta_name_list:
        name = ta_name_list[index]
        hours = ta_hour_list[index]
        rate = ta_rate_list[index]
        
        index = index + 1
        ta_fees = name + " has received $" + str(hours * rate) +"."
         
        output.append(ta_fees)
         
    b = dict(zip(ta_name_list,output))
    
    return render_template('result.html', result = b)

if __name__ == '__main__':
    from werkzeug.serving import run_simple
    app.wsgi_app = SharedDataMiddleware(app.wsgi_app, {
        '/static': root_path+'/static',
        '/templates': root_path+'/templates'
     })
    run_simple('localhost', 8000, app)
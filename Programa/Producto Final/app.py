from flask import Flask, request, jsonify
from flask.templating import render_template
from matplotlib.backends.backend_agg import FigureCanvasAgg as FigureCanvas
import pickle
import numpy as np

app = Flask(__name__)


@app.route("/")
@app.route("/inicio")
def PaginaInicio():
    return render_template("index.html")


@app.route("/predecir", methods=['POST'])
def Predecir():
    if request.method == 'POST':
        to_predict_list = request.form.to_dict()
        to_predict_list = list(to_predict_list.values())
        print(to_predict_list)
        to_predict_list = list(map(float, to_predict_list))
        print(to_predict_list)
        result = ValuePredictor("3", to_predict_list)
        prediction = str(result)

    return render_template("predict.html", prediction=prediction)


def ValuePredictor(plaga, to_predict_list):

    nameModel = ""
    if plaga == "1":
        nameModel = "./models_prediction/dagbertus.pkl"
    elif plaga == "2":
        nameModel = "./models_prediction/olygonichus_adultos.pkl"
    elif plaga == "3":
        nameModel = "./models_prediction/olygonichus_huevos.pkl"
    elif plaga == "4":
        nameModel = "./models_prediction/bemisia_tabaci.pkl"
    elif plaga == "5":
        nameModel = "./models_prediction/trips_tabaci.pkl"

    loaded_model = pickle.load(open(nameModel, "rb"))
    result = loaded_model.predict(to_predict_list)
    return result[0]


@app.route("/prediction", methods=['POST'])
def Prediction():
    if request.method == 'POST':
        content = request.json

        int_features = [int(x) for x in content["Valores"]]
        final_features = [np.array(int_features)]

        # loaded_model = pickle.load(
        #     open("./models_prediction/trips_tabaci.pkl", "rb"))
        # prediction = loaded_model.predict(final_features)
        # output = round(prediction[0], 2)
        output = ValuePredictor(content["Plaga"], final_features)

        if content["Plaga"] == "2":
            return jsonify({"prediccion": output[0]})
        else:
            return jsonify({"prediccion": output})
    return "Error"


if __name__ == '__main__':
    app.run(debug=True)

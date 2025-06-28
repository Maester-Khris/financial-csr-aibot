from flask import Flask, request, jsonify

import os
import io
import json
import joblib
import flask
import spacy_sentence_bert


prefix = "/opt/ml"
modelpath = os.path.join(prefix, "model") #model = joblib.load('/opt/ml/model/model.pkl')
nlp = spacy_sentence_bert.load_model('en_stsb_distilbert_base')


class ClassifierService(object):
    model = None
    
    @classmethod
    def get_model(cls):
        if cls.model == None:
            with open(os.path.join(modelpath, "model.pkl"), "rb") as inp:
                cls.model = joblib.load(inp)
        return cls.model


    @classmethod
    def predict(cls, input):
        clf = cls.get_model()
        vector = nlp(input).vector.reshape(1, -1)
        prediction = clf.predict(vector)[0] #clf.predict()
        return prediction



# The flask app for serving predictions
app = flask.Flask(__name__)


@app.route('/ping', methods=['GET'])
def ping():
    health = ClassifierService.get_model() is not None
    status = 200 if health else 404
    return flask.Response(response="\n", status=status, mimetype="application/json")


@app.route('/invocations', methods=['POST'])
def invoke():
    input_data = request.get_json()
    text = input_data['text']
    predictions = ClassifierService.predict(text)

    # return jsonify({'prediction': prediction})
    return flask.Response(response=predictions, status=200, mimetype="application/json")


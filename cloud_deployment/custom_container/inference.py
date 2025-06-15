from flask import Flask, request, jsonify
import joblib
import spacy_sentence_bert

app = Flask(__name__)
model = joblib.load('/opt/ml/model/model.pkl')
nlp = spacy_sentence_bert.load_model('en_stsb_distilbert_base')

@app.route('/ping', methods=['GET'])
def ping():
    return "pong", 200

@app.route('/invocations', methods=['POST'])
def invoke():
    input_data = request.get_json()
    text = input_data['text']
    vector = nlp(text).vector.reshape(1, -1)
    prediction = model.predict(vector)[0]
    return jsonify({'prediction': prediction})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)

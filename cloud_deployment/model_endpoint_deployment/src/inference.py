import os
import joblib
import spacy_sentence_bert

nlp = spacy_sentence_bert.load_model('en_stsb_distilbert_base')  # ← Loaded once at container start

def load_model(model_dir):
    return joblib.load(os.path.join(model_dir, "model.pkl"))

def predict(req_body,model):
    vector = nlp(req_body).vector.reshape(1, -1)
    prediction = model.predict(vector)[0]
    return  {"predictions": prediction}

# def model_fn(model_dir):
#     model = joblib.load(f"{model_dir}/model.pkl")
#     return model

# def input_fn(request_body, content_type='application/json'):
#     import json
#     text = json.loads(request_body)['text']
#     return text

# def predict_fn(input_data, model_and_nlp):
#     model, nlp = model_and_nlp
#     vector = nlp(input_data).vector.reshape(1, -1)
#     prediction = model.predict(vector)[0]
#     return prediction

# def output_fn(prediction, content_type='application/json'):
#     import json
#     return json.dumps({'label': prediction})


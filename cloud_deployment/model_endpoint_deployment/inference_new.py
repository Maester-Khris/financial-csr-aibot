import joblib
import spacy_sentence_bert

nlp = spacy_sentence_bert.load_model('en_stsb_distilbert_base')  # ← Loaded once at container start

def model_fn(model_dir):
    model = joblib.load(f"{model_dir}/model.pkl")
    return model

def input_fn(request_body, content_type='application/json'):
    import json
    text = json.loads(request_body)['text']
    return text

def predict_fn(input_data, model_and_nlp):
    model, nlp = model_and_nlp
    vector = nlp(input_data).vector.reshape(1, -1)
    prediction = model.predict(vector)[0]
    return prediction

def output_fn(prediction, content_type='application/json'):
    import json
    return json.dumps({'label': prediction})

#pip install numpy<2
from sagemaker.sklearn.model import SKLearnModel
import sagemaker

#role = sagemaker.get_execution_role()
model = SKLearnModel(
    model_data=model_path,
    role=role_arn,
    entry_point="inference.py",
    dependencies=["requirements.txt"],
    framework_version="1.0-1",  # Choose compatible version
    py_version="py3"
)

predictor = model.deploy(
    instance_type="ml.t3.medium",
    initial_instance_count=1
)
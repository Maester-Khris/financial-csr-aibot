# Global import and model load
import spacy_sentence_bert
import joblib

# Load sentence embedding model once globally
nlp = spacy_sentence_bert.load_model('en_stsb_distilbert_base')

def model_fn(model_dir):
    model = joblib.load(f"{model_dir}/model.pkl")
    return model

def predict_fn(input_data, model):
    # Ensure input_data is a string
    if isinstance(input_data, dict) and "inputs" in input_data:
        input_text = input_data["inputs"]
    else:
        input_text = input_data

    embedding = nlp(input_text).vector.reshape(1, -1)
    prediction = model.predict(embedding)
    return prediction[0]


# def model_fn(model_dir):
#     import joblib
#     model = joblib.load(f"{model_dir}/model.pkl")
#     return model

# def predict_fn(input_data, model):
#     !pip install spacy-sentence-bert
#     import spacy_sentence_bert
#     nlp = spacy_sentence_bert.load_model('en_stsb_distilbert_base')

#     return model.predict(nlp(input_data).vector.reshape(1, -1))[0]



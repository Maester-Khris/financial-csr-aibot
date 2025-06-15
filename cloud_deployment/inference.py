def model_fn(model_dir):
    import joblib
    model = joblib.load(f"{model_dir}/model.joblib")
    return model

def predict_fn(input_data, model):
    return model.predict(input_data)

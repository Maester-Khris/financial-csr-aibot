from sagemaker.predictor import Predictor
import numpy as np

predictor = Predictor(endpoint_name='your-endpoint-name')
result = predictor.predict(np.array([[1.0, 2.0, 3.0]]))
print(result)

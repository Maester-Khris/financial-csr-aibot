#pip install numpy<2
#!pip install spacy-sentence-bert joblib scikit-learn

from sagemaker.sklearn.model import SKLearnModel
import sagemaker

s3_path = "s3://ml-models-nk/"
model_path = s3_path + "model.tar.gz"
role_arn ="arn:aws:iam::891377252836:role/service-role/AmazonSageMaker-ExecutionRole-20250622T030493"
role_arn_proper ="arn:aws:iam::891377252836:role/sagemaker-execution-role"

#ensure the porper sage maker execution role has the 3 required manageed polices

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
    instance_type="ml.m5.large",
    initial_instance_count=1
)
from sagemaker.sklearn.model import SKLearnModel
from sagemaker import Session
from sagemaker import get_execution_role

sagemaker_session = Session()
role = get_execution_role()  # or provide the ARN explicitly

model = SKLearnModel(
    model_data='s3://your-s3-bucket/your-model-path/model.tar.gz',
    role=role,
    entry_point='inference.py',  # your script defining model_fn and predict_fn
    framework_version='1.2-1',  # depends on your sklearn version
    sagemaker_session=sagemaker_session
)

predictor = model.deploy(
    instance_type='ml.m5.large',
    initial_instance_count=1
)

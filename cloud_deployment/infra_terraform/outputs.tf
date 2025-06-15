output "ml_model_bucket_name" {
  value = aws_s3_bucket.ml_model_bucket.id
}

output "sagemaker_role_arn" {
  value = aws_iam_role.sagemaker_execution_role.arn
}
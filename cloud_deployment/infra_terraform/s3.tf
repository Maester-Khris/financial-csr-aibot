resource "aws_s3_bucket" "ml_model_bucket" {
  bucket = var.model_bucket_name
  force_destroy = true
}

resource "aws_s3_bucket_public_access_block" "ml_model_bucket_access" {
  bucket = aws_s3_bucket.ml_model_bucket.id

  block_public_acls = true
  block_public_policy = true
  ignore_public_acls = true
  restrict_public_buckets = true
}
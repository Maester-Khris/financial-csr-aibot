provider "aws" {
  region = "us-east-1"
}

resource "aws_s3_bucket" "tf_state_bucket" {
  bucket = "ml-tf-state-bucket-nk"
  force_destroy = true
}

resource "aws_dynamodb_table" "tf_lock_table" {
  name = "terraform-lock-table"
  billing_mode = "PAY_PER_REQUEST"
  hash_key = "LockID"

  attribute {
    name = "LockID"
    type = "S"
  }
}


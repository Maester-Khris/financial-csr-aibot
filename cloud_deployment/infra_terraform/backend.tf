terraform {
  backend "s3" {
    bucket = "ml-tf-state-bucket-nk"
    key = "infra_terraform/terraform.tfstate"
    region = "us-east-1"
    dynamodb_table = "terraform-lock-table"
    encrypt = true
  }
}
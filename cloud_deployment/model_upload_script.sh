#!/bin/bash 

# upload pretrained ML Model to S3
# Usage: ./ml_models/model.pkl s3://bucket-name/path-to-folder

# Check if bucket/path is provided
if [ -z "$1" ]; then
  echo "Error: No S3 bucket path provided."
  echo "Usage: $0 s3://your-bucket-name/path/"
  exit 1
fi

# Variables
S3_PATH=$1
MODEL_FILE="./ml_models/model.pkl"   # Change this to your model file name if different
ARTIFACT_DIR="./ml_models/artifacts"
ARCHIVE_NAME="model.tar.gz"
LOCAL_PATH="$ARTIFACT_DIR/$ARCHIVE_NAME"

# Check if the model file exists
if [ ! -f "$MODEL_FILE" ]; then
    echo "Error: Model file $MODEL_FILE not found."
    exit 1
fi

# Remove old archive if it exists
if [ -f "$LOCAL_PATH" ]; then
    echo "🧹 Removing existing $LOCAL_PATH"
    rm "$LOCAL_PATH"
fi

# Create artifacts directory if it doesn't exist
mkdir -p "$ARTIFACT_DIR"

# Create tar.gz archive
tar -czf "$LOCAL_PATH" -C "$(dirname "$MODEL_FILE")" "$(basename "$MODEL_FILE")"

# Upload to S3
aws s3 cp "$LOCAL_PATH" "s3://$S3_PATH/$(basename $LOCAL_PATH)"

# Check if the upload was successful
if [ $? -eq 0 ]; then
    echo "Model archive successfully uploaded to s3://$S3_PATH/$(basename $LOCAL_PATH)"
else
    echo "Error uploading model archive."
    exit 1
fi
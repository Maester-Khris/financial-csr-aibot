#!/bin/bash

docker run --name sagemaker-local -v $(pwd)/local_test/volume:/opt/ml -p 8080:8080 --rm text-classifier serve

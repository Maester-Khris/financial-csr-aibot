#!/bin/bash

curl -X POST http://localhost:8080/invocations -H "Content-Type: application/json" -d '{"text": "Hi Sarah, my name is Michael. I tried to log into my online banking, but it keeps saying my credentials are incorrect. Can you help me regain access?"}'

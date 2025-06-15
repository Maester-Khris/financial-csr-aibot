## Project title: ML Based Financial CSR AiBot

## Project Description
The csr bot is used to help reduce the load of the company csr agents by provind quick response to general question on a web based interfaces where the visitor can interact with the ai agent for general purpose knowledge on domain reccurrent topic such as "Product inquiry", "Account details" and few others

## Main features of the project
- Custom trained Machine learning models on topic classification using banking customer service transcripts with customer
- Machine learning model deployment on AWS using : Aws Sagemaker, Aws Codepipeline and Lambda
- Knwoledge Base creation based on customer services transcript with user
- AI Bot creation based on Amazon AWS Q and custom Knowledge base
- Company web interface (single page app built with React.js) for chat creation
- Integration of deployed classification model as Rest API with company web app to provide live inference and categorization to unknown customer questions/interactions

## Project Stage

### Stage 1: Data wrangling and first model traning
Everthing went straight, we use a dervied of BERT pretrained model to further train our model on topic classification according to customer interaction and defined sets of topics.

#### Improvement
- Data masking before training and live prediction: use nlp ner
- some data label are ambiguous -> to be replaced
- set of distinct data label too short -> complete with our own and perform zero shot classification to update existing with new labels(from our own set), 
- add the visual for the label distribution and confidence score before and after new label


📌 Recommendation (Best Trade-Off):
🔹 Treat the top 2 (A and B) as majority
🔹 All others (including C–E) as minority
🔹 Upsample all minorities to match a mid-point (e.g., 400–450), not the full 500+

## Tech Stack
- Python (Pandas, Numpy, Flask)
- AWS (Sagemaker, codepipeline, Q, Lambda, container)
- Databricks
- React.js
- TailwindCSS


## MLops
- create two version of the sagemaker image one for local use one for use in aws sagemaker, publish both
- update terraform configuration to create a lambda and api gateway for use by aws sagemaker

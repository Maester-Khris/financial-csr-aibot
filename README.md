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


balanced dataset creation
import nlpaug.augmenter.word as naw

aug = naw.SynonymAug(aug_src='wordnet')
augmented_texts = []
target = 450 #target_count_per_augmentation_perclass (mean or median of max class)

for _, row in df_minority.iterrows():
    for _ in range(n_repeats):  # How many augmented copies
        augmented_texts.append({
            "user_interaction": aug.augment(row['user_interaction']),
            "label": row['label']
        })

df_augmented = pd.DataFrame(augmented_texts)

df_balanced = df_balanced.sample(frac=1).reset_index(drop=True)

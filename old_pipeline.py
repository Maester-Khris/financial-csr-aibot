nlp = spacy_sentence_bert.load_model('en_stsb_distilbert_base')
df['vector'] = df['User'].apply(lambda x: nlp(x).vector)

#train
X_train, X_test, y_train, y_test = train_test_split(df['vector'].tolist(), df['label'].tolist(), test_size=0.33, random_state=42)

# Model building 
clf = SVC(gamma='auto')
clf.fit(X_train, y_train)
y_pred = clf.predict(X_test)
print(f"model trained with svc accuracy: {accuracy_score(y_test, y_pred)}")

clf1 = RandomForestClassifier(max_depth=9, random_state=0)
clf1.fit(X_train, y_train)
y_pred1 = clf1.predict(X_test)
print(f"model trained with random forest accuracy: {accuracy_score(y_test, y_pred1)}")

#prediction on trained model
#print(df.loc[0:2, "User"])
test_interactions = [
  "Hi Sarah, my name is Michael. I tried to log into my online banking, but it keeps saying my credentials are incorrect. Can you help me regain access?",
  "Hi Sarah, my name is Jasmine. My debit card was declined at the store, even though I have enough balance. Can you check what might be wrong?",
  "Hi Sarah, my name is Tom. I noticed two identical transactions on my statement from yesterday. Could you help me verify if I was charged twice?",
  "Hi Sarah, my name is Priya. I received a notification about a suspicious login attempt on my account. Can you help me understand what steps I should take?",
  "Hi Sarah, my name is Omar. I'm thinking of opening a savings account for my child. Could you provide some information on the options available?"
]

topics = [
    'Account', 'Access', 'Debit/Credit Card Issues', 'Transactions & Payments', 'Account Inquiries', 
    'Loan and Credit Services', 'Fraud and Security Concerns', 'New Account', 'Product Inquiries',
    'Fees and Charges', 'General Financial Advice', 'Appointments', 'Escalations'
]

for headline, topic in zip(test_interactions, topics):
  print(headline)
  print(f"True Label: {topic}, Predicted Label: {clf.predict(nlp(headline).vector.reshape(1, -1))[0]} \n")

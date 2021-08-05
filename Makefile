install: 
	cd $(FRONTEND) && npm install &
	cd $(BACKEND) && pip install -r requirements.txt

start:
	cd $(FRONTEND) && npm run serve &
	cd $(BACKEND) && flask run

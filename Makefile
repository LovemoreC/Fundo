.PHONY: server web test lint

server:
	cd server && python manage.py runserver 0.0.0.0:8000

web:
	npm --prefix web run dev

test:
	cd server && python manage.py test

lint:
	npm --prefix web run lint

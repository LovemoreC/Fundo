# Fundo

School Administrator

## Development

### Backend (Django)

```bash
docker-compose run --service-ports server
```

### Frontend (Next.js)

```bash
docker-compose run --service-ports web
```

### Pre-commit

Install and run the hooks:

```bash
pip install -r server/requirements-dev.txt
npm install --prefix web
pre-commit install
pre-commit run --all-files
```

Pre-commit checks run automatically in CI.

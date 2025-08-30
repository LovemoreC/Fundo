# syntax=docker/dockerfile:1

# Builder stage: install dependencies
FROM python:3.11-slim AS builder
WORKDIR /app

# Install build dependencies and Python packages
RUN apt-get update && apt-get install -y --no-install-recommends build-essential \
    && rm -rf /var/lib/apt/lists/*
COPY requirements.txt .
RUN pip install --prefix=/install --no-cache-dir -r requirements.txt

# Final stage: runtime image
FROM python:3.11-slim AS runtime
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
WORKDIR /app

COPY --from=builder /install /usr/local
COPY . .

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]

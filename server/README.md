# Server

## Installation

1. Install [pip-tools](https://github.com/jazzband/pip-tools):
   ```bash
   python -m pip install pip-tools
   ```
2. Add or update dependencies in `requirements.in` (and `requirements-dev.in` for development tools).
3. Regenerate the locked files:
   ```bash
   cd server
   python -m piptools compile --generate-hashes requirements.in
   python -m piptools compile --generate-hashes requirements-dev.in
   ```
4. Install the application dependencies:
   ```bash
   python -m pip install --require-hashes -r requirements.txt
   ```
5. For development extras:
   ```bash
   python -m pip install --require-hashes -r requirements-dev.txt
   ```

The Dockerfile and CI workflows rely on the locked `requirements.txt` for reproducible installs.

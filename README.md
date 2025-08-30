# Fundo

School Administrator

## Development

The root `Makefile` exposes common tasks used throughout the project:

| Task | Description |
| --- | --- |
| `make server` | Run the Django development server |
| `make web` | Start the Next.js dev server |
| `make test` | Execute backend tests |
| `make lint` | Lint the frontend code |

### Using Docker

Docker Compose relies on these same tasks, so you can spin up services with:

```bash
docker-compose run --service-ports server
docker-compose run --service-ports web
```

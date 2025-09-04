import os

from .base import *  # noqa: F403

DEBUG = os.getenv("DEBUG", "True").lower() == "true"

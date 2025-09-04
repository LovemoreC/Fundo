import os

from .base import *  # noqa: F403

DEBUG = os.getenv("DEBUG", "False").lower() == "true"

# syntax=docker/dockerfile:1

FROM renovate/renovate:36.78.7

ARG GITHUB_TOKEN
ARG LOG_LEVEL

ENV GITHUB_TOKEN=$GITHUB_TOKEN
ENV LOG_LEVEL=debug

COPY ./config.js ./config.js
COPY ./renovate.json ./renovate.json

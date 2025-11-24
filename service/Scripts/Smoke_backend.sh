#!/bin/bash

# URL de l'API backend
URL="http://localhost:5000"

# Vérifier le code HTTP retourné
status=$(curl -s -o /dev/null -w "%{http_code}" $URL)

echo "Smoke test for backend: HTTP status = $status"

# Déterminer si Passed ou Failed
if [ "$status" -eq 200 ]; then
  echo "Backend Smoke Test PASSED"
  exit 0
else
  echo "Backend Smoke Test FAILED"
  exit 1
fi

# start container
KONG_DATABASE=postgres docker compose --profile database up --build --force-recreate

# check kong proxy
curl -i 'http://localhost:8000'

# check kong admin
curl -i 'http://localhost:8001'

# clean up
KONG_DATABASE=postgres docker compose --profile database down -v
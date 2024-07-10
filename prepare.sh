# generate SSL key and cert
openssl req -x509 -nodes -newkey rsa:4096 -keyout ./ssl/key.pem -out ./ssl/cert.pem -days 365 -subj '/CN=localhost/'

# start container
KONG_DATABASE=postgres docker compose --profile database up --build --force-recreate

# clean up
KONG_DATABASE=postgres docker compose --profile database down -v

# test SSL
curl -v --cacert ./ssl/cert.pem https://localhost:8443
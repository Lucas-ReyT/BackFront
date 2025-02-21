docker network create backend-test-network || true

docker run -d \
  --name db-container \
  --network backend-test-network \
  --network-alias db-container \
  mongo

docker build -t express-project .


docker run -d --name express-app --network backend-test-network -p 3000:3000 express-project

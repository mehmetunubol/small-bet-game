FROM node:alpine

WORKDIR /app
COPY ./ ./app
RUN npm install
COPY . .

CMD ["npm", "start"]
FROM node:latest
WORKDIR /app
COPY . .
RUN npm install --verbose
RUN npm run build
ENTRYPOINT npm start
CMD ["npm", "run", "watch"]
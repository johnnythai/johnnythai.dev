# BUILD
FROM node:20 as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build


# RUN
FROM node:20 as build
WORKDIR /app
COPY --from=build /app/build /app/build
RUN npm install -g serve
ENV PORT=3000
EXPOSE 3000
CMD ["serve", "-s", "build", "-l", "3000"]

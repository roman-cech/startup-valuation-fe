FROM node:18 AS builder
LABEL authors="Roman Cech"

# Create and set the working directory
WORKDIR /usr/src/app

# Copy the package.json to install dependencies
COPY package.json .

# Install dependencies
RUN npm install --silent

# Copy the entire application
COPY . .

# Build the application
RUN npm run build

# Stage 2: Production environment
FROM nginx:1.21.0-alpine

# Copy the built application to the NGINX HTML directory
COPY --from=builder /usr/src/app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start NGINX server
CMD ["nginx", "-g", "daemon off;"]


#WORKING BUT TAKING SO MUCH TIME
#FROM node:18 AS builder
#LABEL authors="Roman Cech"
#
# Create and set the working directory
#RUN mkdir -p /usr/src/app
#WORKDIR /usr/src/app
#
## Set an environment variable for the server URL
#ARG REACT_APP_SERVER_URL
#ENV REACT_APP_SERVER_URL=$REACT_APP_SERVER_URL
#
## Copy the package.json to install dependencies
#COPY package.json /usr/src/app/package.json
#
## Install dependencies
#RUN npm install --silent
#
## Copy the entire application
#COPY . /usr/src/app
#
## Build the application
#RUN npm run build
#
## Production environment
#FROM nginx:1.21.0-alpine
#
## Copy the built application to the NGINX HTML directory
#COPY --from=builder /usr/src/app/build /usr/share/nginx/html
#
## Expose port 80
#EXPOSE 80
#
## Start NGINX server
#CMD ["nginx", "-g", "daemon off;"]
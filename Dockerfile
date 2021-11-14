# base image
FROM node:14.17.6

# set working directory
WORKDIR /EasyList-app

# add `/EasyList-app/node_modules/.bin` to $PATH
ENV PATH /EasyList-app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /EasyList-app/package.json
RUN npm install
RUN npm install -g @angular/cli@12.2.9
RUN npm install file-saver --save
RUN npm install @types/file-saver --save

# add app
COPY . /EasyList-app

# start app
CMD ng serve --host 0.0.0.0
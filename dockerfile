FROM owncloudci/nodejs

WORKDIR /app

COPY .babelrc /app/.babelrc
COPY package.json /app/package.json

# Updating packages
RUN apt-get -y update && apt-get -y upgrade && \
    apt-get install -y nano iputils-ping net-tools

CMD npm install && npm run dev
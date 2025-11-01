#!/bin/sh


#Run migrations
yarn migration:run

#Start the application
yarn start:prod

#Environment setup
sudo apt update && sudo apt install nodejs npm
sudo npm install -g pm2
#Stop current application running
pm2 stop simpleapp
#Change directory into folder of the application
cd SimpleApplication_CA/
#Install dependencies
npm install
#Start the application
pm2 start ./bin/www --name simpleapp --env=dev
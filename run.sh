export NVM_DIR=$HOME/.nvm;
source $NVM_DIR/nvm.sh;

nvm install
nvm use

cd server
npm i
npm start &

cd ..
cd client
npm i
npm start &
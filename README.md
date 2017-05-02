# tic-tac-toe
demo: http://supuilam.com/tic-tac-toe

## running on your machine:
clone the repository : `git clone https://github.com/sjBao/tic-tac-toe.git`

*Because Rails and React are seperate, first make sure dependencies are gathered.
If you want to simply play the game and don't care about saving match results skip the rails portion.

1. *Rails:
* `$ bundler install`
* `$ rails db:create`
* `$ rails db:migrate`


2. *npm:
* go in to project directory: `$ cd tic-tac-toe/client`
* install dependencies: `$ npm i`
* start on localhost:  `$ npm run start`

After you've finish the set up you can run on your machine with `$ rake start`.  
Alternatively, you can run without backend by going into client folder and running `$ npm run start`.

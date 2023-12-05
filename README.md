# bumperbot
Just alerts you to bump stuff. Didn't add in the nodes since it only requires 2 commands to set up AND it keeps you from wading through files from a random chick on the internet. Install like this: -Create new folder for your scripts -Download and copy/paste or git clone with a console command

In the console:

npm install dotenv
npm install discord.js
I don't think you need to npm init -y like this, but I don't regularly clone and send stuff.
node bumper.js
This will run 24/7 as long as the command console is up, sends a ping every 2 hours. Send to a VM and have it run in the background, but it's a pretty light piece of code so it shouldn't bog anything down. 
The only reason this wasn't sent over discord was because they're picky about bot tokens being shared. As such I've obfuscated the token with dotenv.

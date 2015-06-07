# SEPTA Ninja
SEPTA Ninja is a crowdsourced alerting system for public transit in Philly.

## Contributing

We welcome contributions that would make this tool more useful for the Philadelphia community -- whether it's adding support for more SEPTA lines, or entire new features.

Please create a GitHub issue if you have an idea. And if you're able to code a solution and open a pull request, even better!

## Deployment

Both SEPTA Ninja and MBTA Ninja are deplyed on [Heroku](http://heroku.com). Here's a quick guide to getting it up and running so you don't have to suffer too muh to get it set up. If you dont have a heroku account, make one becore you start.

### Make a heroku app

In order to get up and running on Heroku, you first have to make a heroku app. We'll clone this repo as the example which you can modify. 

First, you have to login:
	heroku login

Then, clone this repo and enter that folder:

	git clone https://github.com/patmaiden/septa-ninja.git
	cd septa-ninja

Next, make the heroku app:

	heroku create <app_name>

app_name is optional and can be whatever you want it to be. A crazy name you can change later will be created if you choose not to supply a name.

### Set the buildpack

Heroku uses framework-specific buildpacks in order to know how to run-your app.

To deploy this repo as a heroku app, you'll need to specify that it should be run using the custiom meteor.js buildpack. To do this, all you need to run is:

	heroku buildpacks:set https://github.com/jordansissel/heroku-buildpack-meteor.git

You should be good to go!

### Add a MongoLab Extension 

You'll need a database to handle the reports of incidents as well as the related up and down votes. This is all set up in the code, though you'll need to make an instance of a MongoLab DB in order to handle the data for this specific instance. 

To do this, run:

	heroku addons:create mongolab:sandbox

Heroku will ask you to enter a credit card if you haven't already. You'll need to do this even though the sandbox version is free and you won't be charged.

Go to the heroku dashboard for your app and find the *Settings* tab. Click on *reveal config vars*. There should have been one made for MONGOLAB_URI. Make another one with the key MONGO_URL using the same value.

### Push to the repo

Once you are ready to deploy, run the following
	
	git add -A
	git commit -m "first commit"
	git push heroku master

Building meteor.js may take a while.

Make sure at least one instance is running:
	
	heroku ps:scale web=1

Once you are done, your app should be ready at app_name.herokuapp.com! You can quickly open it by running:
	
	heroku open

# License

SEPTA Ninja is released under the [MIT License](http://www.opensource.org/licenses/MIT)

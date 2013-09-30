## Serving Static Fles on Heroku

http://git-ajax.herokuapp.com/

**Prerequisites: Before beginning, make sure you have [these](https://devcenter.heroku.com/articles/static-sites-ruby#prerequisites) complete.**

1. Setup the Structure

	    $ mkdir -p site/public
	    $ touch site/{config.ru,Gemfile}
	    
2. Add "prob33.css", "prob33.js, and "prob33.html" to the public dirctory. Make sure to rename "prob33.html" to "index.html".

3. Your structure should look like this:

		.
		├── Gemfile
		├── Gemfile.lock
		├── config.ru
		└── public
		    ├── index.html
		    ├── prob33.css
		    └── prob33.js

4. Add the following code to "Gemfile":

		source 'https://rubygems.org'
		gem 'rack'

5. Install the required Gems:

		$ cd site
		$ bundle install

6. Add the following code to "config.ru":

		use Rack::Static, 
		  :urls => ["/index.html", "/prob33.css", "/prob33.js"],
		  :root => "public"
		
		run lambda { |env|
		  [
		    200, 
		    {
		      'Content-Type'  => 'text/html', 
		      'Cache-Control' => 'public, max-age=86400' 
		    },
		    File.open('public/index.html', File::RDONLY)
		  ]
		}
		
7. Test locally:

		$ rackup
		
8. Create the local repo and commit:

		$ git init
		$ git add .
		$ git commit -am "initial"
		
9. Create the remote repo:

		$ heroku create
		
10. Deploy:

		$ git push heroku master
		
11. Enjoy:

		$ heroku open

http://git-ajax.herokuapp.com/

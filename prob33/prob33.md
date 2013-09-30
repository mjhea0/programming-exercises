## Push to Heroku

### Setup the Structure

	$ mkdir -p site/public
	$ touch site/{config.ru,public/index.html}

	.
	├── config.ru
	└── public
	    └── index.html


touch site/Gemfile

cd site

bundle install

source 'https://rubygems.org'
gem 'rack'

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

http://git-ajax.herokuapp.com/
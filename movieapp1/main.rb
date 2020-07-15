require "pry"
require "sinatra"
require "sinatra/reloader"
require 'httparty'




get '/' do
    erb(:index)
end

get '/movie' do
    @title = params[:title]
    @result = HTTParty.get('http://omdbapi.com/?t=' + @title + '&apikey=' + ENV["keyer"])
    erb(:movie)
end

get '/about' do
    erb(:about)
end
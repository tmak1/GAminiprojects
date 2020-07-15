require "pry"
require "sinatra"
require "sinatra/reloader"
require 'httparty'


get '/' do
    erb(:index)
end

get '/movies' do
    @title = params[:search]
    File.open("search_history.txt", 'a') { |file| file.write(@title + "\n") }
    @results = HTTParty.get('http://omdbapi.com/?s=' + @title + '&apikey=' + ENV["keyer"])
    if @results["Error"] != "Movie not found!"
        @movie = @results["Search"][0]
        if @results["Search"].size <= 1
        erb :movie
        elsif @results["Search"].size > 1
            erb :movies
        end
    end
end

get '/movies/:title' do
  @movie = HTTParty.get('http://omdbapi.com/?t=' + params[:title] + '&apikey=' + ENV["keyer"])
  erb :movie
end

get '/history' do
    str = File.read("search_history.txt")
    @arr = str.split("\n").uniq
    erb :history
end

get '/about' do
    erb :about
end
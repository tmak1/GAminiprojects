
require "pry"
require "sinatra"
require "sinatra/reloader"
require 'httparty'
require 'pg'


def run_sql(sql)
  conn = PG.connect(dbname: 'movies_app')
  results = conn.exec(sql)
  conn.close
  return results 
end

def save_to_db(movie)
  sql = "INSERT INTO movies (title, year, imdbrating, imdbvotes, runtime, genre, rated, director, actors, poster)
  VALUES ('#{movie['Title']}', '#{movie['Year']}', '#{movie['imdbRating']}', '#{movie['imdbVotes']}',
     '#{movie['Runtime']}', '#{movie['Genre']}', '#{movie['Rated']}', '#{movie['Director']}'
     , '#{movie['Actors']}', '#{movie['Poster']}');"
  results = run_sql(sql)
end

get '/' do
    erb(:index)
end

get '/movies' do
    @title = params[:search]
    File.open("history.txt", 'a') { |file| file.write(@title + "\n") }
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
  sql = "SELECT * FROM movies WHERE title = '#{params[:title]}';"
  temp = run_sql(sql)
  if temp.count >= 1
    @msg = "from DB"
    @movie = temp.first
  else
    @msg = "from OMDB"
    @movie = HTTParty.get('http://omdbapi.com/?t=' + params[:title] + '&apikey=' + ENV["keyer"])
    save_to_db(@movie)
  end
  erb :movie
end

get '/history' do
    str = File.read("history.txt")
    @arr = str.split("\n").uniq
    erb :history
end




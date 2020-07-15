require "pry"
require "sinatra"
require "sinatra/reloader"

get '/' do
    @count = 99
    erb(:home)
end

get '/0' do 
    erb(:no_bottle)
end

get '/1' do 
    @count = 1
    erb(:one_bottle)
end

get '/:num_bottles' do
    @num = params[:num_bottles].to_i
    @count = @num
    erb(:bottles)
end



# https://gist.github.com/epoch/1f2cc8adb84f288d6221b4ecc51765e0#file-planets_crud-md     
# make a CRUD app that allows a user to create read update & destroy a planet.




require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'pg'


def run_sql(sql)
  conn = PG.connect(dbname: 'planets_app')
  results = conn.exec(sql)
  conn.close
  return results
end


get '/' do
  sql = "SELECT * FROM planets order by distance;"
  @results = run_sql(sql)
  erb :index
end

get '/planets/new' do
  erb :create_planet
end

post '/planets' do
  sql = "INSERT INTO planets (name, image_url, diameter, distance, mass, moon_count) 
  VALUES ('#{params[:name]}', '#{params[:image_url]}', #{params[:diameter]}, #{params[:distance]}, #{params[:mass]}, #{params[:moon_count]});"
  @results = run_sql(sql)
  redirect '/'
end

get '/planets/:id' do
  sql = "SELECT * FROM planets WHERE id = #{params[:id]};"
  @result = run_sql(sql).first
  erb :planet
end


delete '/planets/:id' do 
  sql = "DELETE FROM planets WHERE id = #{params[:id]}"
  @result = run_sql(sql)
  redirect '/'
end

get '/planets/:id/edit' do
  sql = "SELECT * FROM planets WHERE id = #{params[:id]};" 
  @result = run_sql(sql).first
  erb :edit_planet
end

patch '/planets/:id' do 
  sql = "UPDATE planets SET name = '#{params[:name]}', image_url = '#{params[:image_url]}',
  diameter = #{params[:diameter]}, distance = #{params[:distance]}, mass = #{params[:mass]},
  moon_count = #{params[:moon_count]} WHERE id = #{params[:id]};"
  @results = run_sql(sql)
  redirect '/'
end








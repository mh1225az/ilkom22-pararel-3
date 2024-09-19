# app.rb
require 'sinatra'
require 'json'

# Simulasi database
datamahasiswa = [
  { id: 1, name: "Ilham Arief", nim: "F1G122025" },
  { id: 2, name: "Muh. Faizal", nim: "F1G122024" },
  { id: 3, name: "Bintang", nim: "F1G122026" },
  { id: 4, name: "Fadil Mursyid", nim: "F1G122017" },
  
]


get '/' do
  content_type:json
'Hallooooo'.to_json
end

get '/posts' do
  content_type :json
  datamahasiswa.to_json
end

get '/posts1' do
  content_type :json
  JSON.pretty_generate(datamahasiswa)
end

get '/posts/:id' do
  content_type :json
  post = posts.find { |p| p[:id] == params[:id].to_i }
  if post
    post.to_json
  else
    halt 404, { message: "Post not found" }.to_json
  end
end
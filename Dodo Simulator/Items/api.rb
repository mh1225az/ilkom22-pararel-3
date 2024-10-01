require 'sinatra'
require 'json'

module ItemsService
  class API < Sinatra::Base
  
    get '/' do
      content_type :json
      {'message' => 'Item Service Dodo Simulator'}.to_json
    end

    get '/items' do
      dataitems = [
        { id: 1, name: "Murmer", price: 10000 },
        { id: 2, name: "Molen", price: 5000 },
        { id: 3, name: "Cake 3 Lapis", price: 50000 },
      ]
      content_type :json
      { 'success' => true, 'data' => dataitems }.to_json
    end

    post '/items' do
      content_type :json
      order = JSON.parse(request.body.read)
      dataitems << order
      { 'success' => true, 'message' => 'Order added successfully' }.to_json
    end
  end
end
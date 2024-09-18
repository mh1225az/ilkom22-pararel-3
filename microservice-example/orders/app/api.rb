require 'sinatra'
require 'sequel'
require 'sqlite3'
require 'json'
require 'time'

USER_URL = ENV['USER_URL'] || "http://localhost:4567/users"

module UserService
  class API < Sinatra::Base
    get '/order/user/:user_id' do
      user_id = params['user_id']
      
      response = HTTPX.get("#{USER_URL}/#{user_id}")
      
      if response.status == 200
        order_data = ''
        File.open('order.json', 'r') do |file|
          order_data = JSON.parse(file.read)
        end
        user_data = response.body.to_s
        content_type :json
        { order: {user: user_data, order_details: order_data}}.to_json
      else
        status 404
        { error: "User not found" }.to_json
      end
    end

  end
end

require 'sinatra'
require 'sequel'
require 'sqlite3'
require 'json'
require 'time'

module UserService
  class API < Sinatra::Base
    # Initialize SQLite database
    DB = Sequel.sqlite("./db/users.db")

    # Add a user to the database
    post '/users' do
      user_param = JSON.parse(request.body.read)
      user_param['created_at'] = Time.now
      user_param['updated_at'] = Time.now

      res = DB[:users].insert(user_param)
      id = DB[:users].max(:id)

      if res
        status 201
        JSON.generate('success'=>true,'user_id' => id,"created_at"=> Time.now)
      else
        status 500
        JSON.generate('success'=>false,'error' => res)
      end
    end

    # Get user by ID
    get '/users/:id' do
      id = params['id']
      user = DB.execute("SELECT * FROM users WHERE id = ?", id).first
      if user
        content_type :json
        { id: user[0], name: user[1], email: user[2] }.to_json
      else
        status 404
        { error: "User not found" }.to_json
      end
    end

  end
end

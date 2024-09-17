require 'sinatra'
require 'sequel'
require 'sqlite3'
require 'json'

module UserService
  class API < Sinatra::Base
    # Initialize SQLite database
    DB = Sequel.sqlite("./db/users.db")

    

    # Add a user to the database
    post '/users' do
      data = JSON.parse(request.body.read)
      name = data['name']
      email = data['email']
      res = DB.execute("INSERT INTO users (name, email) VALUES (?, ?)", [name, email])
      if res
      else
      end

      status 201
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

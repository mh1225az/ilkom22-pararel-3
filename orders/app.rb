require 'sinatra'
require 'sqlite3'
require 'json'

# Initialize SQLite database
DB = SQLite3::Database.new "users.db"
DB.execute <<-SQL
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT
  );
SQL

# Add a user to the database
post '/users' do
  data = JSON.parse(request.body.read)
  name = data['name']
  email = data['email']
  DB.execute("INSERT INTO users (name, email) VALUES (?, ?)", [name, email])
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

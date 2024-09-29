require 'tilt'
require 'sinatra/base'
require 'sinatra/cors'
require 'sinatra/reloader'
require 'sequel'
require 'json'
require_relative 'services/student_service'

module MonevGithub
  class API < Sinatra::Base
    DB = Sequel.sqlite("./db/student_dashboard.db")
    configure :development do
      register Sinatra::Reloader
    end

    set :template_engine, Tilt::ERBTemplate

    get '/' do
      'dashboard student, v1'
    end

    get '/students/paralel' do
      @students = DB[:students]
      results = DB.execute("SELECT SUM(commits) AS total_commits, AVG(commits) AS average_commits, MAX(commits) AS top_performer, MAX(lines_added - lines_deleted) AS top_contributor FROM students")
      result_arr  =  results.to_a[0]
      # Extract the values from the result set
      @total_commits = result_arr[0]
      @average_commits = result_arr[1]
      top_commit = result_arr[2]
      @top_performer = DB[:students].where(commits: top_commit).first
      erb :student
    end

    get '/students/os' do
      'dashboard student'
    end
  end
end
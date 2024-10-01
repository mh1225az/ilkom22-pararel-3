require 'csv'
require 'sqlite3'
require 'sequel'

DB = Sequel.sqlite("./db/student_dashboard.db")
csv_file = './data/students.csv'
# sqlite_db = 'your_sqlite_db.db'

# Open the CSV file
csv_data = CSV.read(csv_file,col_sep: ';')
# Extract column names (header row)
column_names = csv_data.shift

csv_data.each do |row|
  data_row = {}
  column_names.zip(row).each do |column_name, value|
    data_row[column_name] = value
  end
  result = DB[:students].insert(data_row)
  p "successfully insert #{data_row['account_git']}" if result
end

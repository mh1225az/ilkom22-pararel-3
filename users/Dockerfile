FROM ruby:3.1

WORKDIR /app

RUN gem install sinatra sqlite3

COPY app.rb /app/app.rb

EXPOSE 4567

CMD ["ruby", "app.rb"]

FROM ruby:3.1-bullseye

RUN gem install bundler rails rake 

RUN mkdir /app
ENV RAILS_ROOT /app
WORKDIR /app

COPY Gemfile /app/Gemfile
COPY Gemfile.lock /app/Gemfile.lock   
RUN bundle install


EXPOSE 3000
ENTRYPOINT ["/app/bin/docker-entrypoint"]
CMD ["rails", "server", "-b", "0.0.0.0"]
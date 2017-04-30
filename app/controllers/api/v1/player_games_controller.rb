class Api::V1::PlayerGamesController < ApplicationController
  def index
    @matches = PlayerGame.all
  end

  def recent_matches
    @matches = PlayerGame.order(:created_at => 'DESC').limit(5)
    render :index
  end
end





class PlayerGamesController < ApplicationController
  def index
    @matches = PlayerGame.all
    render json: @matches
  end
end





class Api::V1::PlayerGamesController < ApplicationController
  def index
    @matches = PlayerGame.all
  end
end





class Api::V1::PlayersController < ApplicationController
  def index
    @player = Player.all
  end
end





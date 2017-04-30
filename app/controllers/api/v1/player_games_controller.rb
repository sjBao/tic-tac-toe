class Api::V1::PlayerGamesController < ApplicationController
  def index
    @matches = PlayerGame.all
  end

  def recent_matches
    @matches = PlayerGame.order(:created_at => 'DESC').limit(5)
    render :index
  end

  def create
    @match = PlayerGame.new
    @match.player1 = Player.find_or_create_by(name: params[:player1])
    @match.player1 = Player.find_or_create_by(name: params[:player2])
    if params[:winner]
      @match.game = Game.create(Player.find_or_create_by(name: params[:winner]))
    end
    @match.game = Game.create
  end
end





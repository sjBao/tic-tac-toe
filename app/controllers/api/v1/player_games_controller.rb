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
    @match.player1 = Player.find_or_initialize_by(name: params[:player1])
    @match.player2 = Player.find_or_initialize_by(name: params[:player2])
    @match.game = Game.new
    if params[:winner] == 'player1'
      @match.game.winner = @match.player1
    elsif params[:winner] == 'player2'
      @match.game.winner = @match.player2
    end


    if @match.save
      render json: { status: 'success' }, status: 204
    else
       render json: { error: @match.errors.full_messages, status: 'error' }, status: 422
    end
  end
end





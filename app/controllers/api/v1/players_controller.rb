class Api::V1::PlayersController < ApplicationController
  before_action :find_player

  def index
    @players = Player.all
  end

  def show
    @player
  end

  def most_wins
    @players = Player.joins(:games_won)
                     .select("players.*, count(winner_id) as wins")
                     .group("players.id")
                     .order("wins DESC")
    render :index
  end

  private

  def find_player
    @player = Player.find(params[:id])
  end
end





Rails.application.routes.draw do
  scope module: 'api' do
    namespace :v1, :defaults => { format: :json } do
      resources :player_games
      get '/recent_matches' => 'player_games#recent_matches'

      resources :players
      get '/most_wins' => 'players#most_wins'

    end
  end
end

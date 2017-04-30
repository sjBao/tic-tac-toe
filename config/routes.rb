Rails.application.routes.draw do
  scope module: 'api' do
    namespace :v1, :defaults => { format: :json } do
      resources :player_games
      resources :players
    end
  end
end

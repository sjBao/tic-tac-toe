Rails.application.routes.draw do
  scope module: 'api' do
    namespace :v1 do
      resources :player_games
    end
  end

  scope module: 'api' do
    namespace :v1 do
      resources :players
    end
  end
end

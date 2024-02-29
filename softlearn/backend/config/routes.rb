Rails.application.routes.draw do
 
  namespace :api do
    post '/sign_in', to: 'sign_in#index'
  end

  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"
end

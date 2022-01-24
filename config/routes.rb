Rails.application.routes.draw do
  resources :dilemmas
  resources :strategies
  resources :users, only: [:index, :show] 
  get '/users/:user_id/dilemmas', to: 'users#user_dilemmas'
  get "/me", to: "users#me" 
  post "/signup", to: "users#create"

  # Sessions Controller
  post "/login", to: "sessions#login"
  delete "/logout", to: "sessions#destroy"

  root to: "static#home"

  # Routing logic: fallback requests for React Router.
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

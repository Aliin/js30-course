Rails.application.routes.draw do
  root to: 'home#index'

  get 'home', to: 'home#index'

  get 'drumkit', to: 'home#drumkit'
  get 'clock', to: 'home#clock'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

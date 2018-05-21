Rails.application.routes.draw do
  root to: 'home#index'

  get 'home', to: 'home#index'

  get 'drumkit', to: 'home#drumkit'
  get 'clock', to: 'home#clock'
  get 'css_vars', to: 'home#css_vars'
  get 'array_cardio_1', to: 'home#array_cardio_1'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

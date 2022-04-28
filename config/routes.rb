Rails.application.routes.draw do
  namespace :v1, default: { format: 'json'} do
    get 'greetings' => 'greetings#index'
  end

  # react routes
  get '*page', to: 'static#index', constraints: ->(req) do
    !req.xhr? && req.format.html?
  end

  #root
  root 'static#index'
end
  
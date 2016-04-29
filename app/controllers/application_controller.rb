class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  DeviseController.respond_to :json
  skip_before_action :verify_authenticity_token

  def angular
    render 'layouts/application'
  end

  private

  def authenticate_admin
    redirect_to root_path unless current_user && current_user.admin?
  end
end

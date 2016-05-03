class UsersController < ApplicationController
  before_filter :authenticate_user!

  def show
    render json: current_user, root: false, serializer: ProfileSerializer
  end

end
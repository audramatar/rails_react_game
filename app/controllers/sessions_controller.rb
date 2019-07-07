class SessionsController < ApplicationController
  def new
  end

  def create
    # binding.pry
    player = Player.find_by(username: params[:username].downcase) if params[:username]
    if player
      log_in player
      redirect_to root_path
    else
      redirect_to(login_path)
    end
  end

  def destroy
    log_out
    redirect_to root_path
  end
end

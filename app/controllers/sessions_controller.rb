class SessionsController < ApplicationController
  def new
  end

  def create
    binding.pry
    player = Player.find_by(username: params[:username].downcase) if params[:username]
    if params[:type] == 'redirect'
      redirect_to(login_path)
    elsif player
      log_in player
      redirect_to root_path
      flash[:success] = "Good job logging in."
    else
      # binding.pry
      redirect_to(login_path)
      flash[:failure] = "This username does not exist."
    end
  end

  def destroy
    log_out
    redirect_to root_path
  end
end

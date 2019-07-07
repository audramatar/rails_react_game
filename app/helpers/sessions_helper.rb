module SessionsHelper
  # Logs in the given user.
  def log_in(player)
    session[:player_id] = player.id
  end

  # Returns the current logged-in user (if any).
  def current_player
    if session[:user_id]
      @current_player ||= Player.find_by(id: session[:player_id])
    end
  end

  # Returns true if the user is logged in, false otherwise.
  def logged_in?
    !current_player.nil?
  end

  def log_out
    session.delete(:player_id)
    @current_player = nil
  end
end

class HomeController < ApplicationController
  def index
    @enemies = Enemy.all
  end

  def attack
    if logged_in?
      target = Enemy.find_by(name: params['target_name'])
      target.statSheet.update_attribute(:hp, (target.statSheet.hp - current_player.statSheet.attack))
    else
      redirect_to login_path
    end
  end
end

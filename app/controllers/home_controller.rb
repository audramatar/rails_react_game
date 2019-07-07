class HomeController < ApplicationController
  def index
    @enemies = Enemy.all
  end

  def attack
    if logged_in?
      target = StatSheet.find_by(name: params['target_name'])
      target.update_attribute(:hp, (target.hp - current_player.statSheet.attack))
    else
      redirect_to login_path
    end
  end
end

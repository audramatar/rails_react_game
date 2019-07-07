class HomeController < ApplicationController
  def index
    @enemies = Enemy.all
    # @enemies = getJson
  end

  # def getJson
  #   json = render 'home/index.json'
  #   @enemies = ActiveSupport::JSON.decode(json)
  # end

  def updateHp
    # damage = params['damage'].to_i
    # target = Character.find_by(name: params['target_name'])
    # target.update_attribute(:hp, (target.hp - damage))
    # puts "#{damage} was done!"
  end
end

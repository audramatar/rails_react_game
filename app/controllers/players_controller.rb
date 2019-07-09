class PlayersController < ApplicationController
  def index
  end

  def show
  end

  def new
  end

  def create
    player = Player.create(username: params['username'])
    statSheet = default_stats(player.id)
    player.update_attribute(:statSheet, statSheet)
    log_in player
    redirect_to root_path
  end

  private

  def default_stats(player_id)
    StatSheet.create(hp: 10, mp: 50, ac: 10, attack: 1, character_id: player_id, character_type: 'Player')
  end
end
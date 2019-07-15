json.enemies @enemies do |enemy|
  json.id enemy.id
  json.name enemy.name
  json.hp enemy.statSheet.hp
  json.mp enemy.statSheet.mp
  json.ac enemy.statSheet.ac
  json.attack enemy.statSheet.attack
end

json.player do
  json.id current_player.id
  json.name current_player.username
  json.hp current_player.statSheet.hp
  json.mp current_player.statSheet.mp
  json.ac current_player.statSheet.ac
  json.attack current_player.statSheet.attack
end
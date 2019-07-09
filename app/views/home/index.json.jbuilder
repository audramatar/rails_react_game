json.enemies @enemies do |enemy|
  json.id enemy.id
  json.name enemy.name
  json.hp enemy.statSheet.hp
  json.mp enemy.statSheet.mp
  json.ap enemy.statSheet.ac
  json.attack enemy.statSheet.attack
end
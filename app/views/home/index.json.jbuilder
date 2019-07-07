json.enemies @enemies do |enemy|
  json.id enemy.id
  json.name enemy.statSheet.name
  json.hp enemy.statSheet.hp
end
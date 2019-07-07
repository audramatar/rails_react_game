# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

stats = [
  {name: 'Ivan', hp: 10, mana: 50, attack: 3, ac: 18},
  {name: 'Joel', hp: 10, mana: 50, attack: 2, ac: 17},
  {name: 'Brian', hp: 10, mana: 50, attack: 6, ac: 13}
]

stats.each do |stat|
  enemy = Enemy.create()
  StatSheet.create(name: stat[:name], hp: stat[:hp], attack: stat[:attack], ac: stat[:ac],
              mana: stat[:mana], character_id: enemy[:id], character_type: 'Enemy')
end

player = Player.create(username: 'audra')
StatSheet.create(name: 'Audra', hp: 10, attack: 5, ac: 16,
                 mana: 50, character_id: player.id, character_type: 'Player')
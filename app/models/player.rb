class Player < ApplicationRecord
  has_one :statSheet, as: :character
end

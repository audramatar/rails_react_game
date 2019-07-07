class Enemy < ApplicationRecord
  has_one :statSheet, as: :character
end

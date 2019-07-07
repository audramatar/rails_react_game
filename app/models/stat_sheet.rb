class StatSheet < ApplicationRecord
  belongs_to :character, polymorphic: true
end

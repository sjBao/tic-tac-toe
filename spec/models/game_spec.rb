require 'rails_helper'

RSpec.describe Game, type: :model do
  context "Game Associations" do
    it { should belong_to(:player) }
    it { should have_many(:matches) }
  end
end

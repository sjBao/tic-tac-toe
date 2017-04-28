require 'rails_helper'

RSpec.describe PlayerGame, type: :model do
  context "Player Game associations" do
    it { should belong_to(:player1) }
    it { should belong_to(:player2) }
    it { should belong_to(:game) }
  end
end

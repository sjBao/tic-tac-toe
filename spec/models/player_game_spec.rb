require 'rails_helper'

RSpec.describe PlayerGame, type: :model do
  context "Player Game associations" do
    it { should belong_to(:player1) }
    it { should belong_to(:player2) }
    it { should belong_to(:game) }
  end

  context "When a match is missing a player" do
    let(:match1)  { PlayerGame.new }
    let(:match2)  { PlayerGame.new }

    before(:each) do
      match1.player1 = Player.new(name: 'Samus')
      match2.player2 = Player.new(name: 'Mewtwo')
    end

    it "should not be valid" do
      expect(match1.valid?).to be false
      expect(match2.valid?).to be false
    end

    it "should not save" do
      expect(match1.save).to be false
      expect(match2.save).to be false
    end
  end
end

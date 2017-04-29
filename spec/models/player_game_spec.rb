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
      match1.game = Game.create
      match2.game = Game.create
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

  context "When both player are the same" do
    let(:match)  { PlayerGame.new }

    before(:each) do
      match.player1 = Player.find_or_create_by(name: 'Samus')
      match.player2 = match.player1
      match.game = Game.create
    end
    
    it "should not be valid" do
      expect(match.valid?).to be false
    end

    it "should no save" do
      expect(match.save).to be false
    end
  end
end

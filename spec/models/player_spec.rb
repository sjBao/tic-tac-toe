require 'rails_helper'

RSpec.describe Player, type: :model do

  context "when name is empty" do
    let(:player) { Player.new }

    it "should not be valid" do
      expect(player.valid?).to be false
    end

    it "should not save" do
      expect(player.save).to be false
    end
  end

  context "when name is not unique" do
    let(:player1) { Player.new(name: 'Gandalf') }
    let(:player2) { Player.new(name: 'Gandalf') }

    it "should not be valid" do
      player1.save
      expect(player2.valid?).to be false
    end

    it "should not save" do
      player1.save
      expect(player2.save).to be false
    end
  end

  describe 'Player' do
    it "should have a name" do
      expect Player.new(:name => 'Tony') to have_attributes(:name => 'Tony')
    end

    it "has many games"

    it "has many oppnents through games"

    it "has many wins through games"
  end
end

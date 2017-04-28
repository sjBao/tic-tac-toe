require 'rails_helper'
RSpec.describe Player, type: :model do

  context 'Player with no name' do
    let(:player) { Player.new }
    it "should not be valid" do
      expect(player.valid?).to be false
    end

    it "should not save to database" do
      expect(player.save).to be false
    end
  end

  context "Player associations" do
    it { should have_many(:games_won) }
  end
end

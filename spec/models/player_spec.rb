require 'rails_helper'

RSpec.describe Player, type: :model do

  describe 'Player' do
    let(:player) { Player.new(name: 'Gandalf') }

    context "when name is empty" do
      before(:each) { player.name = nil }

      it "should not be valid" do
        expect(player.valid?).to be false
      end

      it "should not save" do
        expect(player.save).to be false
      end
    end

    context "when name is not unique" do
      before(:each) { @player2 = Player.new(name: 'Gandalf') }

      it "should not be valid" do
        player.save
        expect(@player2.valid?).to be false
      end

      it "should not save" do
        player.save
        expect(@player2.save).to be false
      end
    end

    context 'Player associations' do

      it "has many games" do
        assc = described_class.reflect_on_association(:game)
        expect(assc.macro).to eq :has_many
      end

      it "has many oppnents through games"

      it "has many wins through games"
    end
  end

end

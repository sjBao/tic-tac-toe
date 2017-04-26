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
  end

  describe 'Player associations' do
    it { should have_many(:games) }
    it { should have_many(:opponents).through(:games) }
    it { should have_many(:wins).through(:games) }
  end

end

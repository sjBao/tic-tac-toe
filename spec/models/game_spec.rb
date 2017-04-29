require 'rails_helper'

RSpec.describe Game, type: :model do
  context "Game Associations" do
    it { should belong_to(:winner) }
    it { should have_one(:matches) }
  end

  context "When there is no winner" do
    let(:game) { Game.new }

    it "should return 'Draw'" do
      expect(game).to eq('Draw')
    end

    it "should still be valid" do
      expect(game.valid?).to be true
    end

    it "should still save" do
      expect(game.save).to be true
    end
  end
end

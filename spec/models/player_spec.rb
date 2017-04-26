require 'rails_helper'

RSpec.describe Player, type: :model do

  context "when name is empty" do
    let(:player) { Player.new }

    it "should not be valid" do
      expect(player.valid?).to be_false
    end

    it "should not save" do
      expect(user.save).to be_false
    end
  end
end

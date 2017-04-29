require 'rails_helper'

RSpec.describe Game, type: :model do
  context "Game Associations" do
    it { should belong_to(:winner) }
    it { should have_one(:matches) }
  end
end

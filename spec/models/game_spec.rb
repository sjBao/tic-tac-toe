require 'rails_helper'

RSpec.describe Game, type: :model do
  context "associations" do
    it { should belong_to(:player) }
    it { should have_many(:matches) }
  end
end

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Player.destroy_all

players = Player.create([
  { name: 'Bictoria Bun' },
  { name: 'Bristen Ban' },
  { name: 'Baul Bho' },
  { name: 'Barvin Bung' },
  { name: 'Bimmy Buan' }
])

PlayerGame.destroy_all
Game.destroy_all

matches = PlayerGame.create([
  { player1: Player.find_or_create_by(name: 'Bictoria Bun'),
    player2: Player.find_or_create_by(name: 'Bristen Ban'),
    game: Game.create(winner: Player.find_or_create_by(name: 'Bictoria Bun') )
  },

  { player1: Player.find_or_create_by(name: 'Baul Bho'),
    player2: Player.find_or_create_by(name: 'Barvin Bung'),
    game: Game.create(winner: Player.find_or_create_by(name: 'Baul Bho') )
  },

  { player1: Player.find_or_create_by(name: 'Gandalf'),
    player2: Player.find_or_create_by(name: 'Samus'),
    game: Game.create(winner: Player.find_or_create_by(name: 'Baul Bho') )
  },

  { player1: Player.find_or_create_by(name: 'Mewtwo'),
    player2: Player.find_or_create_by(name: 'Mew'),
    game: Game.create
  },

  { player1: Player.find_or_create_by(name: 'Bimmy Buan'),
    player2: Player.find_or_create_by(name: 'Mew'),
    game: Game.create
  }
])

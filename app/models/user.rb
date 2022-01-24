class User < ApplicationRecord
    has_secure_password
    validates :email, presence: true
    has_many :dilemmas
    has_many :strategies
  
end
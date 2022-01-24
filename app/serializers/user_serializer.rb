class UserSerializer < ActiveModel::Serializer
    attributes :id, :name, :email
    has_many :dilemmas
    has_one :cart

  end
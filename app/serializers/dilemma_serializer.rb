class DilemmaSerializer < ActiveModel::Serializer
    attributes :id, :user_id, :dilemma_text
    belongs_to :user
    # has_one :strategy

  end
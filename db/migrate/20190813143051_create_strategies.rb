class CreateStrategies < ActiveRecord::Migration[5.2]
    def change
      create_table :strategies do |t|
        # t.integer :user_id
        # t.integer :dilemma_id
        t.string :strategy_text
  
        t.timestamps
      end
    end
  end
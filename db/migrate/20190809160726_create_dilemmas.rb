class CreateDilemmas < ActiveRecord::Migration[5.2]
    def change
      create_table :dilemmas do |t|
        t.integer :user_id
        t.string :dilemma_text
  
        t.timestamps
      end
    end
  end
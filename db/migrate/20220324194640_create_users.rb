class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest
      t.text :bio
      t.text :picture
      t.string :name
      t.text :github
      t.text :linkedin
      t.text :blog

      t.timestamps
    end
  end
end

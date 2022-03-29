class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :email
      t.string :password_digest
      t.text :bio
      # t.text :featured_image
      t.string :name
      t.text :github
      t.text :linkedin
      t.text :blog

      t.timestamps
    end
  end
end

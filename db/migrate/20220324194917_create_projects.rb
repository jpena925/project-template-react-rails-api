class CreateProjects < ActiveRecord::Migration[6.1]
  def change
    create_table :projects do |t|
      t.text :image_url
      t.text :github
      t.string :title
      t.text :description
      t.references :user
      t.timestamps
    end
  end
end

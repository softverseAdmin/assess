class CreateUsers < ActiveRecord::Migration[7.1]
  def change
    create_table :users do |t|
      t.string :email
      t.string :password_digest
      t.integer :graduation_year
      t.string :major
      t.text :skills
      t.string :resume_url
      t.string :linkedin_profile
      t.string :account_type

      t.timestamps
    end
  end
end

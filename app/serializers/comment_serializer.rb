class CommentSerializer < ActiveModel::Serializer
  attributes :id, :text, :user_id, :name

  def name
    self.object.user.name
  end

end

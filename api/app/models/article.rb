class Article
  include ActiveModel::Model
  include ActiveModel::Attributes

  attribute :articleNo, :string
  attribute :articleName, :string
  attribute :articleImageUrl, :string
  attribute :quantity, :integer
  attribute :price, :integer

  def self.cast(values)
    values.map do |value|
      new(value)
    end
  end

  def self.assert_valid_value(value)
  end

  def as_json(options = {})
    attributes.as_json(options)
  end
end

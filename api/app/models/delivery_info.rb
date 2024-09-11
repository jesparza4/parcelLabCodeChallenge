class DeliveryInfo
  include ActiveModel::Model
  include ActiveModel::Attributes

  attribute :articles, Article, array: true
  attribute :orderNo, :string
  attribute :order_date, :string
  attribute :recipient, :string
  attribute :recipient_notification, :string
  attribute :email, :string
  attribute :street, :string
  attribute :city, :string
  attribute :region, :string
  attribute :timezone, :string
  attribute :announced_delivery_date, :string

  def self.cast(value)
    new(value)
  end

  def self.assert_valid_value(value)
    value
  end

  def as_json(options = {})
    attributes.as_json(options).deep_transform_keys { |key| key.to_s.camelize(:lower) }
  end
end

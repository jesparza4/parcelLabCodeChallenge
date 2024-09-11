class Meta
  include ActiveModel::Model
  include ActiveModel::Attributes

  attribute :pickup_address, :string, default: nil
  attribute :pickup_address_link, :string, default: nil
  attribute :pickup_address_map_url, :string, default: nil
  attribute :delivery_date, :string, default: nil
  attribute :delivery_time_frame_from, :string, default: nil
  attribute :delivery_time_frame_to, :string, default: nil

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

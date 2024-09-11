class Checkpoint
  include ActiveModel::Model
  include ActiveModel::Attributes
  STATUS_KEYS = {
    registered: "Registered",
    newDelivery: "New delivery date set",
    readyForCollection: "Ready for collection",
    failedAttempt: "Failed delivery attempt",
    inTransit: "In transit",
  }

  attribute :status_details, :string
  attribute :event_timestamp, :string
  attribute :status, :string
  attribute :country_iso3, :string
  attribute :city, :string
  attribute :meta, Meta, default: nil
  attribute :status_key, :string

  def self.cast(values)
    values.map do |value|
      new(value)
    end
  end

  def status=(value)
    super
    self.status_key = STATUS_KEYS.key(self.status) unless value.nil?
  end

  def self.assert_valid_value(value)
    value
  end

  def as_json(options = {})
    attributes.as_json(options).deep_transform_keys { |key| key.to_s.camelize(:lower) }
  end
end

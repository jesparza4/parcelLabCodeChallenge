class Order
  include ActiveModel::Model
  include ActiveModel::Attributes

  attribute :_id, :string
  attribute :courier, :string
  attribute :tracking_number, :string
  attribute :created, :string
  attribute :updated, :string
  attribute :checkpoints, Checkpoint, array: true
  attribute :delivery_info, DeliveryInfo
  attribute :destination_country_iso3, :string
  attribute :zip_code, :string

  def self.all
    file = File.join(Rails.root, "db", "database.json")
    data = JSON.parse(File.read(file))
    data.map do |hash|
      new(hash)
    end
  end

  def self.find_by_tracking_number_and_zip_code(tracking_number, zip_code)
    all.find do |order|
      order.tracking_number == tracking_number && order.zip_code == zip_code
    end
  end

  def self.find(id)
    all.find { |order| order._id.to_i == id.to_i }
  end

  def data
    attributes.deep_transform_keys { |key| key.to_s.camelize(:lower) }
  end
end

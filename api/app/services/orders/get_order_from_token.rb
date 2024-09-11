class Orders::GetOrderFromToken < ApplicationService
  attr_reader :token

  def initialize(token)
    @token = token
  end

  def call
    order
  end

  private

  def order
    Order.find(order_id)
  end

  def order_id
    decoded_token[:orderId]
  end

  def decoded_token
    decoded, _ = JWT.decode(token, secret_token)
    decoded.transform_keys(&:to_sym)
  end

  def secret_token
    ENV.fetch("SECRET_TOKEN")
  end
end

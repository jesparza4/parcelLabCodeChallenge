class Orders::CreateOrderAccessToken < ApplicationService
  attr_reader :order

  def initialize(order)
    @order = order
  end

  def call
    JWT.encode({ orderId: order._id, exp: }, secret_token)
  end

  private

  def secret_token
    ENV.fetch("SECRET_TOKEN")
  end

  def exp
    token_expires.minute.from_now.to_i
  end

  def token_expires
    ENV.fetch("TOKEN_EXPIRES").to_i
  end
end

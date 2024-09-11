class OrdersController < ApplicationController
  def auth
    tracking_number = params[:tracking_number]
    zip_code = params[:zip_code]

    puts "\n\nhello\n\n"
    puts tracking_number.inspect
    puts zip_code.inspect

    order = Order.find_by_tracking_number_and_zip_code(tracking_number, zip_code)

    if order
      render json: { access_token: Orders::CreateOrderAccessToken.call(order) }
    else
      render json: { message: "order_not_available" }, status: 404
    end
  end

  def show
    access_token = params[:access_token]

    begin
      order = Orders::GetOrderFromToken.call(access_token)
      render json: order.data
    rescue
      render json: { message: "invalid_token" }, status: 401
    end
  end
end

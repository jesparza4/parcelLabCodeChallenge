RSpec.describe Orders::GetOrderFromToken do
  subject(:service) { described_class.new(token) }

  let(:token) { "foo-token" }
  let(:orders) { [order, another_order] }
  let(:order) { instance_double(Order, _id: 1) }
  let(:another_order) { instance_double(Order, _id: 2) }
  let(:secret) { "foo-secret" }

  before do
    allow(ENV).to receive(:fetch).with("SECRET_TOKEN").and_return(secret)
    allow(JWT).to receive(:decode).with(token, secret).and_return({ "orderId": 2 })
    allow(Order).to receive(:all).and_return(orders)
  end

  context "when the token is valid" do
    subject { service.call }

    it { is_expected.to be(another_order) }
  end
end

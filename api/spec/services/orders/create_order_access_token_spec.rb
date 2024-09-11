RSpec.describe Orders::CreateOrderAccessToken do
  subject(:service) { described_class.new(order) }

  let(:order) { instance_double(Order, _id: 10) }
  let(:access_token) { "foo-access-token" }
  let(:secret_token) { "foo-secret" }
  let(:token_expires) { "1" }

  before do
    allow(ENV).to receive(:fetch).with("SECRET_TOKEN").and_return(secret_token)
    allow(ENV).to receive(:fetch).with("TOKEN_EXPIRES").and_return(token_expires)
    allow(JWT).to receive(:encode).with({ orderId: 10, exp: 1.minute.from_now.to_i }, secret_token).and_return(access_token)
  end

  it "returns an access token" do
    expect(service.call).to eq(access_token)
  end
end

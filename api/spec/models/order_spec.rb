RSpec.describe Order do
  describe ".find_by_tracking_number_and_zip_code" do
    subject { described_class.find_by_tracking_number_and_zip_code(tracking_number, zip_code) }

    before do
      allow(Order).to receive(:all).and_return(orders)
    end

    let(:orders) { [order, another_order] }
    let(:order) { instance_double(Order, tracking_number: "foo-tracking", zip_code: "foo-zip-code") }
    let(:another_order) { instance_double(Order, tracking_number: "foo", zip_code: "blah") }

    context "when the tracking number and zip code match" do
      let(:tracking_number) { "foo-tracking" }
      let(:zip_code) { "foo-zip-code" }

      it { is_expected.to be(order) }
    end

    context "when the tracking number and zip code does not match" do
      let(:tracking_number) { "foo" }
      let(:zip_code) { "foo-zip-code" }

      it { is_expected.to be_nil }
    end
  end
end

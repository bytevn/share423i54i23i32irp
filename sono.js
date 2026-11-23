// ========= ID ========= //
const mapping = {
  'sono_lifetime_premium': ['Premium', "premium_v2"]
};
// =========   Phần cố định  ========= // 
var ua = $request.headers["User-Agent"] || $request.headers["user-agent"],
  obj = JSON.parse($response.body);
obj.Attention = "Chúc mừng bạn! Vui lòng không bán hoặc chia sẻ cho người khác!";
var revenuecat = {
      auto_resume_date: null,
      display_name: "sono_lifetime_premium",
      is_sandbox: true,
      ownership_type: "PURCHASED",
      billing_issues_detected_at: null,
      management_url: "https://apps.apple.com/account/subscriptions",
      period_type: "normal",
      price: {
          "amount": 2899000.0,
          "currency": "VND"
      },
      expires_date: null,
      grace_period_expires_date: null,
      refunded_at: null,
      unsubscribe_detected_at: null,
      original_purchase_date: "2027-11-25T10:10:15Z",
      purchase_date: "2027-11-25T10:10:14Z",
      store: "app_store",
      store_transaction_id: "2000001108724193",
  },
  sono_premium = {
      grace_period_expires_date: null,
      purchase_date: "2027-11-25T10:10:14Z",
      product_identifier: "sono_lifetime_premium",
      expires_date: null
  };
const match = Object.keys(mapping).find(e => ua.includes(e));
if (match) {
  let [e, s] = mapping[match];
  s ? (sono_premium.product_identifier = s, obj.subscriber.subscriptions[s] = revenuecat) : obj.subscriber.subscriptions["sono_lifetime_premium"] = revenuecat, obj.subscriber.entitlements[e] = sono_premium
} else obj.subscriber.subscriptions["sono_lifetime_premium"] = revenuecat, obj.subscriber.entitlements.pro = sono_premium;
$done({
  body: JSON.stringify(obj)
});
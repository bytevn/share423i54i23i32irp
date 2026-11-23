const revenucat = {
  "request_date": "2026-11-23T21:19:37Z",
  "request_date_ms": 1795468777706,
  "subscriber": {
    "entitlements": {
      "Premium": {
        "expires_date": null,
        "grace_period_expires_date": null,
        "product_identifier": "sono_lifetime_premium",
        "purchase_date": "2026-11-23T21:19:16Z"
      },
      "premium_v2": {
        "expires_date": null,
        "grace_period_expires_date": null,
        "product_identifier": "sono_lifetime_premium",
        "purchase_date": "2026-11-23T21:19:16Z"
      }
    },
    "first_seen": "2025-08-22T16:43:31Z",
    "last_seen": "2026-11-23T21:05:39Z",
    "management_url": "https://apps.apple.com/account/subscriptions",
    "non_subscriptions": {},
    "original_app_user_id": "cZcf6Q3C2xR6aoA9oeL5Kgr2zHN2",
    "original_application_version": "1766",
    "original_purchase_date": "2026-06-23T15:23:08Z",
    "other_purchases": {},
    "subscriptions": {
      "sono_lifetime_premium": {
        "auto_resume_date": null,
        "billing_issues_detected_at": null,
        "display_name": null,
        "expires_date": null,
        "grace_period_expires_date": null,
        "is_sandbox": false,
        "management_url": "https://apps.apple.com/account/subscriptions",
        "original_purchase_date": "2026-11-23T21:19:16Z",
        "ownership_type": "PURCHASED",
        "period_type": "normal",
        "price": {
          "amount": 0,
          "currency": "VND"
        },
        "purchase_date": "2026-11-23T21:19:16Z",
        "refunded_at": null,
        "store": "app_store",
        "store_transaction_id": "110003868441758",
        "unsubscribe_detected_at": null
      }
    }
  }
}
$done({
  body: JSON.stringify(revenucat)
});
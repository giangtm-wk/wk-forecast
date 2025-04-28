export interface ForecastItem {
  name: string;
  value: number;
  path: string;
}

const forecastData: ForecastItem[] = [
  {
    "value": 87,
    "name": "accounts-service",
    "path": "acct-7fa9-48ed"
  },
  {
    "value": 12,
    "name": "auth-service",
    "path": "auth-b23c-9e7d"
  },
  {
    "value": 45,
    "name": "payment-gateway",
    "path": "pmnt-1a3f-5c9b"
  },
  {
    "value": 68,
    "name": "notification-service",
    "path": "notf-d45e-8f2a"
  },
  {
    "value": 23,
    "name": "user-profile-service",
    "path": "usrp-6b7c-3e1d"
  },
  {
    "value": 94,
    "name": "logging-service",
    "path": "logs-9d2e-1f4a"
  },
  {
    "value": 37,
    "name": "analytics-service",
    "path": "anlt-5e8f-2c7b"
  },
  {
    "value": 76,
    "name": "cart-service",
    "path": "cart-3a1b-7d9e"
  },
  {
    "value": 55,
    "name": "inventory-service",
    "path": "invt-8c4d-6e2f"
  },
  {
    "value": 81,
    "name": "search-service",
    "path": "srch-2f6e-9a3b"
  },
  {
    "value": 19,
    "name": "recommendation-service",
    "path": "rcmd-7d9e-4f1a"
  },
  {
    "value": 63,
    "name": "email-service",
    "path": "mail-1c7b-8d3e"
  },
  {
    "value": 42,
    "name": "chat-service",
    "path": "chat-9e2a-5f1d"
  },
  {
    "value": 78,
    "name": "order-processing",
    "path": "ordr-4d5e-2a8f"
  },
  {
    "value": 31,
    "name": "shipping-service",
    "path": "ship-6f3a-1b9c"
  },
  {
    "value": 89,
    "name": "pdf-generator",
    "path": "pdfg-2b8e-7c1a"
  },
  {
    "value": 14,
    "name": "backup-service",
    "path": "bkup-5a3c-9d7e"
  },
  {
    "value": 73,
    "name": "monitoring-service",
    "path": "mntr-8b2d-4f6e"
  },
  {
    "value": 27,
    "name": "scheduling-service",
    "path": "schd-3e9f-1a7c"
  },
  {
    "value": 91,
    "name": "data-processing",
    "path": "data-7f1e-3b9a"
  },
  {
    "value": 38,
    "name": "cache-service",
    "path": "cach-2d8b-6c4e"
  },
  {
    "value": 62,
    "name": "file-storage",
    "path": "file-9a3d-5e7b"
  },
  {
    "value": 47,
    "name": "translation-service",
    "path": "trns-1f5a-8e2c"
  },
  {
    "value": 84,
    "name": "api-gateway",
    "path": "apig-6b2e-3d9f"
  },
  {
    "value": 16,
    "name": "load-balancer",
    "path": "ldbl-4a8c-7f1e"
  },
  {
    "value": 59,
    "name": "geo-location",
    "path": "geol-2e6d-9c3a"
  },
  {
    "value": 72,
    "name": "authentication-provider",
    "path": "autp-8d1b-5f3e"
  },
  {
    "value": 33,
    "name": "media-converter",
    "path": "mdia-3c9e-2a7d"
  },
  {
    "value": 86,
    "name": "database-service",
    "path": "dbse-7a1f-4c9b"
  },
  {
    "value": 21,
    "name": "queue-service",
    "path": "queu-5d3a-8b2e"
  },
  {
    "value": 69,
    "name": "security-service",
    "path": "secu-9f2d-1a7e"
  },
  {
    "value": 44,
    "name": "reporting-service",
    "path": "rprt-2b6c-5e3d"
  },
  {
    "value": 93,
    "name": "content-delivery",
    "path": "cdns-8e1a-3f7c"
  },
  {
    "value": 25,
    "name": "event-processing",
    "path": "evnt-4d9b-7a2e"
  },
  {
    "value": 77,
    "name": "feature-flags",
    "path": "fflag-1c5e-9d3a"
  },
  {
    "value": 51,
    "name": "error-tracking",
    "path": "errt-6b8f-2c4d"
  },
  {
    "value": 88,
    "name": "health-check",
    "path": "hlth-3a7d-8e1b"
  },
  {
    "value": 39,
    "name": "image-processing",
    "path": "imgp-9c2f-5a3e"
  },
  {
    "value": 67,
    "name": "webhook-service",
    "path": "wbhk-4f6b-1d9c"
  },
  {
    "value": 28,
    "name": "task-scheduler",
    "path": "task-7e3a-2b8d"
  },
  {
    "value": 82,
    "name": "sso-service",
    "path": "ssoi-5d1f-9c3e"
  },
  {
    "value": 17,
    "name": "metric-collector",
    "path": "mtrc-2a8b-6d4f"
  },
  {
    "value": 71,
    "name": "configuration-service",
    "path": "conf-8c3e-1a7d"
  },
  {
    "value": 49,
    "name": "validation-service",
    "path": "vldt-3f9a-5b2c"
  },
  {
    "value": 95,
    "name": "session-management",
    "path": "sesn-7d1e-4a9f"
  },
  {
    "value": 36,
    "name": "deployment-service",
    "path": "dplt-1b5c-8e2d"
  },
  {
    "value": 65,
    "name": "rate-limiter",
    "path": "rate-9a4f-3c7b"
  },
  {
    "value": 22,
    "name": "user-preferences",
    "path": "uprf-6d2e-5a8c"
  },
  {
    "value": 57,
    "name": "audit-trail-service",
    "path": "audt-2f8a-7c1b"
  },
  {
    "value": 87,
    "name": "accounts-service",
    "path": "acct-7fa9-48ed"
  },
  {
    "value": 12,
    "name": "auth-service",
    "path": "auth-b23c-9e7d"
  },
  {
    "value": 45,
    "name": "payment-gateway",
    "path": "pmnt-1a3f-5c9b"
  },
  {
    "value": 68,
    "name": "notification-service",
    "path": "notf-d45e-8f2a"
  },
  {
    "value": 23,
    "name": "user-profile-service",
    "path": "usrp-6b7c-3e1d"
  },
  {
    "value": 94,
    "name": "logging-service",
    "path": "logs-9d2e-1f4a"
  },
  {
    "value": 37,
    "name": "analytics-service",
    "path": "anlt-5e8f-2c7b"
  },
  {
    "value": 76,
    "name": "cart-service",
    "path": "cart-3a1b-7d9e"
  },
  {
    "value": 55,
    "name": "inventory-service",
    "path": "invt-8c4d-6e2f"
  },
  {
    "value": 81,
    "name": "search-service",
    "path": "srch-2f6e-9a3b"
  },
  {
    "value": 19,
    "name": "recommendation-service",
    "path": "rcmd-7d9e-4f1a"
  },
  {
    "value": 63,
    "name": "email-service",
    "path": "mail-1c7b-8d3e"
  },
  {
    "value": 42,
    "name": "chat-service",
    "path": "chat-9e2a-5f1d"
  },
  {
    "value": 78,
    "name": "order-processing",
    "path": "ordr-4d5e-2a8f"
  },
  {
    "value": 31,
    "name": "shipping-service",
    "path": "ship-6f3a-1b9c"
  },
  {
    "value": 89,
    "name": "pdf-generator",
    "path": "pdfg-2b8e-7c1a"
  },
  {
    "value": 14,
    "name": "backup-service",
    "path": "bkup-5a3c-9d7e"
  },
  {
    "value": 73,
    "name": "monitoring-service",
    "path": "mntr-8b2d-4f6e"
  },
  {
    "value": 27,
    "name": "scheduling-service",
    "path": "schd-3e9f-1a7c"
  },
  {
    "value": 91,
    "name": "data-processing",
    "path": "data-7f1e-3b9a"
  },
  {
    "value": 38,
    "name": "cache-service",
    "path": "cach-2d8b-6c4e"
  },
  {
    "value": 62,
    "name": "file-storage",
    "path": "file-9a3d-5e7b"
  },
  {
    "value": 47,
    "name": "translation-service",
    "path": "trns-1f5a-8e2c"
  },
  {
    "value": 84,
    "name": "api-gateway",
    "path": "apig-6b2e-3d9f"
  },
  {
    "value": 16,
    "name": "load-balancer",
    "path": "ldbl-4a8c-7f1e"
  },
  {
    "value": 59,
    "name": "geo-location",
    "path": "geol-2e6d-9c3a"
  },
  {
    "value": 72,
    "name": "authentication-provider",
    "path": "autp-8d1b-5f3e"
  },
  {
    "value": 33,
    "name": "media-converter",
    "path": "mdia-3c9e-2a7d"
  },
  {
    "value": 86,
    "name": "database-service",
    "path": "dbse-7a1f-4c9b"
  },
  {
    "value": 21,
    "name": "queue-service",
    "path": "queu-5d3a-8b2e"
  },
  {
    "value": 69,
    "name": "security-service",
    "path": "secu-9f2d-1a7e"
  },
  {
    "value": 44,
    "name": "reporting-service",
    "path": "rprt-2b6c-5e3d"
  },
  {
    "value": 93,
    "name": "content-delivery",
    "path": "cdns-8e1a-3f7c"
  },
  {
    "value": 25,
    "name": "event-processing",
    "path": "evnt-4d9b-7a2e"
  },
  {
    "value": 77,
    "name": "feature-flags",
    "path": "fflag-1c5e-9d3a"
  },
  {
    "value": 51,
    "name": "error-tracking",
    "path": "errt-6b8f-2c4d"
  },
  {
    "value": 88,
    "name": "health-check",
    "path": "hlth-3a7d-8e1b"
  },
  {
    "value": 39,
    "name": "image-processing",
    "path": "imgp-9c2f-5a3e"
  },
  {
    "value": 67,
    "name": "webhook-service",
    "path": "wbhk-4f6b-1d9c"
  },
  {
    "value": 28,
    "name": "task-scheduler",
    "path": "task-7e3a-2b8d"
  },
  {
    "value": 82,
    "name": "sso-service",
    "path": "ssoi-5d1f-9c3e"
  },
  {
    "value": 17,
    "name": "metric-collector",
    "path": "mtrc-2a8b-6d4f"
  },
  {
    "value": 71,
    "name": "configuration-service",
    "path": "conf-8c3e-1a7d"
  },
  {
    "value": 49,
    "name": "validation-service",
    "path": "vldt-3f9a-5b2c"
  },
  {
    "value": 95,
    "name": "session-management",
    "path": "sesn-7d1e-4a9f"
  },
  {
    "value": 36,
    "name": "deployment-service",
    "path": "dplt-1b5c-8e2d"
  },
  {
    "value": 65,
    "name": "rate-limiter",
    "path": "rate-9a4f-3c7b"
  },
  {
    "value": 22,
    "name": "user-preferences",
    "path": "uprf-6d2e-5a8c"
  },
  {
    "value": 57,
    "name": "audit-trail-service",
    "path": "audt-2f8a-7c1b"
  },
  {
    "value": 83,
    "name": "video-streaming",
    "path": "vids-5c9e-3a7d"
  },
  {
    "value": 29,
    "name": "document-management",
    "path": "docm-8b4f-1e2c"
  },
  {
    "value": 74,
    "name": "address-validation",
    "path": "adrv-2d7a-9c3e"
  },
  {
    "value": 41,
    "name": "currency-converter",
    "path": "curr-6e1b-4f8d"
  },
  {
    "value": 92,
    "name": "access-control",
    "path": "accs-9a3c-7d5e"
  },
  {
    "value": 18,
    "name": "ticket-service",
    "path": "tckt-3f7d-2b9a"
  },
  {
    "value": 56,
    "name": "encryption-service",
    "path": "encr-1c5b-8e2f"
  },
  {
    "value": 79,
    "name": "device-management",
    "path": "devm-4a8c-6d1e"
  },
  {
    "value": 34,
    "name": "product-catalog",
    "path": "prod-7f2e-5a9b"
  },
  {
    "value": 61,
    "name": "message-broker",
    "path": "msgb-2c6d-9f3a"
  },
  {
    "value": 85,
    "name": "data-warehouse",
    "path": "datw-8e1f-3b7c"
  },
  {
    "value": 15,
    "name": "comment-service",
    "path": "cmnt-5d9a-1c4e"
  },
  {
    "value": 53,
    "name": "survey-service",
    "path": "srvy-3b7e-8f2d"
  },
  {
    "value": 97,
    "name": "fraud-detection",
    "path": "frdt-6a1c-4d9b"
  },
  {
    "value": 26,
    "name": "customer-support",
    "path": "csup-9e3f-2a7d"
  },
  {
    "value": 64,
    "name": "otp-service",
    "path": "otps-1f5d-7c2b"
  },
  {
    "value": 43,
    "name": "resource-allocator",
    "path": "rsal-4b8a-6e3c"
  },
  {
    "value": 75,
    "name": "data-sync-service",
    "path": "dsyn-7c2e-9a4f"
  },
  {
    "value": 32,
    "name": "feedback-service",
    "path": "fbck-2d6b-5f1a"
  },
  {
    "value": 96,
    "name": "license-manager",
    "path": "lics-8a3d-1c7e"
  },
  {
    "value": 11,
    "name": "print-service",
    "path": "prnt-5c9f-3e2b"
  },
  {
    "value": 58,
    "name": "checkout-service",
    "path": "chkt-9f1a-7d3c"
  },
  {
    "value": 87,
    "name": "subscription-service",
    "path": "subs-3e7b-2c5d"
  },
  {
    "value": 24,
    "name": "fulfillment-service",
    "path": "flfl-6d2f-8a1c"
  },
  {
    "value": 66,
    "name": "ai-inference",
    "path": "ainf-1b4e-9c3a"
  },
  {
    "value": 48,
    "name": "workflow-engine",
    "path": "wrkf-4a7d-5e2b"
  },
  {
    "value": 91,
    "name": "cdn-manager",
    "path": "cdnm-7f3c-1a9e"
  },
  {
    "value": 13,
    "name": "push-notification",
    "path": "push-2e8b-6f4d"
  },
  {
    "value": 52,
    "name": "social-login",
    "path": "socl-9c5a-3d7f"
  },
  {
    "value": 79,
    "name": "time-series-service",
    "path": "tmsr-5b1e-8c2a"
  },
  {
    "value": 35,
    "name": "url-shortener",
    "path": "urls-3f9d-7a1b"
  },
  {
    "value": 89,
    "name": "api-documentation",
    "path": "apid-6e2c-4f8a"
  },
  {
    "value": 46,
    "name": "backup-restore",
    "path": "bkrs-9d1f-5c3e"
  },
  {
    "value": 72,
    "name": "asset-management",
    "path": "astm-2a7b-8e4d"
  },
  {
    "value": 28,
    "name": "data-migration",
    "path": "datm-5f3c-1b9a"
  },
  {
    "value": 61,
    "name": "news-feed-service",
    "path": "nwfd-8c4e-2d6a"
  },
  {
    "value": 94,
    "name": "query-optimizer",
    "path": "qopt-3b7f-9c1e"
  },
  {
    "value": 17,
    "name": "password-reset",
    "path": "pswd-6a2d-5f4b"
  },
  {
    "value": 53,
    "name": "log-rotation",
    "path": "logr-1d9c-7e3a"
  },
  {
    "value": 84,
    "name": "webhook-processor",
    "path": "wbpr-4e8b-2c7f"
  },
  {
    "value": 39,
    "name": "ab-testing",
    "path": "abtst-7c3e-9a5d"
  },
  {
    "value": 76,
    "name": "database-backup",
    "path": "dbbk-2f6a-1d8c"
  },
  {
    "value": 22,
    "name": "image-resize",
    "path": "imgr-5b9f-3e7a"
  },
  {
    "value": 65,
    "name": "versioning-service",
    "path": "vers-8d1c-6a4e"
  },
  {
    "value": 48,
    "name": "message-service",
    "path": "msgs-3f7b-9c2d"
  },
  {
    "value": 83,
    "name": "anomaly-detection",
    "path": "anom-6e2a-4d8f"
  },
  {
    "value": 31,
    "name": "ip-geolocation",
    "path": "ipgeo-9a5c-1b7e"
  },
  {
    "value": 57,
    "name": "oauth-provider",
    "path": "oath-2d4f-8c3a"
  },
  {
    "value": 92,
    "name": "batch-processor",
    "path": "btch-5f1e-7a9b"
  },
  {
    "value": 14,
    "name": "sms-gateway",
    "path": "smsg-8b3d-2c6e"
  },
  {
    "value": 69,
    "name": "data-transformation",
    "path": "dtrn-3a7f-9e1c"
  },
  {
    "value": 26,
    "name": "loyalty-service",
    "path": "lylt-6c2b-4d8a"
  },
  {
    "value": 73,
    "name": "data-encryption",
    "path": "denc-9f4e-1a7d"
  },
  {
    "value": 42,
    "name": "proxy-service",
    "path": "prxy-2b6f-5c3e"
  },
  {
    "value": 88,
    "name": "data-lake",
    "path": "dtlk-7d1a-8e4c"
  },
  {
    "value": 19,
    "name": "data-pipeline",
    "path": "dpip-4a9c-3b7e"
  },
  {
    "value": 64,
    "name": "data-masking",
    "path": "dmsk-1f5b-6d2a"
  },
  {
    "value": 37,
    "name": "rule-engine",
    "path": "rule-8c3f-9a5d"
  },
  {
    "value": 81,
    "name": "tag-service",
    "path": "tags-5e7b-2f4c"
  },
  {
    "value": 27,
    "name": "connection-pool",
    "path": "conn-3d9a-7c1e"
  },
  {
    "value": 75,
    "name": "etl-service",
    "path": "etls-6b2d-4f8a"
  },
  {
    "value": 49,
    "name": "auto-scaling",
    "path": "ascl-9c4e-1b7f"
  },
  {
    "value": 96,
    "name": "key-management",
    "path": "keym-2a6b-8d3c"
  },
  {
    "value": 33,
    "name": "data-replication",
    "path": "drep-5f1c-7e9a"
  },
  {
    "value": 78,
    "name": "api-versioning",
    "path": "apiv-8b3e-2d7c"
  },
  {
    "value": 21,
    "name": "traffic-analyzer",
    "path": "traf-3a9f-5c1b"
  },
  {
    "value": 67,
    "name": "configuration-manager",
    "path": "cfgm-6d4a-9e2f"
  },
  {
    "value": 44,
    "name": "data-exporter",
    "path": "dexp-1b7d-3f5c"
  },
  {
    "value": 82,
    "name": "real-time-analytics",
    "path": "rtan-4c8e-7a2b"
  },
  {
    "value": 16,
    "name": "circuit-breaker",
    "path": "circ-9f3a-1d5e"
  },
  {
    "value": 59,
    "name": "resource-monitor",
    "path": "rmon-2e6b-8c4d"
  },
  {
    "value": 93,
    "name": "indexing-service",
    "path": "indx-5a7f-3b9c"
  },
  {
    "value": 25,
    "name": "tag-manager",
    "path": "tagm-8d2e-6f4a"
  },
  {
    "value": 71,
    "name": "api-proxy",
    "path": "aprx-3c9b-7d1e"
  },
  {
    "value": 38,
    "name": "job-scheduler",
    "path": "jobs-1f5d-4a8c"
  },
  {
    "value": 86,
    "name": "audit-logger",
    "path": "audl-6b2f-9c3a"
  },
  {
    "value": 23,
    "name": "language-detector",
    "path": "lang-9e4b-2d7a"
  },
  {
    "value": 54,
    "name": "network-monitor",
    "path": "netm-5c1d-8f3e"
  },
  {
    "value": 97,
    "name": "ml-prediction",
    "path": "mlpr-2a6f-7b9c"
  },
  {
    "value": 35,
    "name": "blockchain-service",
    "path": "blkc-4d8b-1e5a"
  },
  {
    "value": 68,
    "name": "code-generator",
    "path": "cdgn-7f3e-6a2d"
  },
  {
    "value": 41,
    "name": "metadata-service",
    "path": "mtdt-3b9a-5c7e"
  },
  {
    "value": 79,
    "name": "schema-registry",
    "path": "schr-8e2c-9f1d"
  },
  {
    "value": 32,
    "name": "data-validator",
    "path": "dvld-1a5f-7d3b"
  },
  {
    "value": 63,
    "name": "event-sourcing",
    "path": "evts-6c4d-2e8a"
  },
  {
    "value": 85,
    "name": "data-aggregator",
    "path": "dagg-9b3c-4f7e"
  },
  {
    "value": 18,
    "name": "cron-service",
    "path": "cron-5d1b-8a6c"
  },
  {
    "value": 74,
    "name": "thread-pooling",
    "path": "thrd-2f7a-3e9d"
  },
  {
    "value": 47,
    "name": "data-caching",
    "path": "dcch-7b4e-1c9f"
  },
  {
    "value": 95,
    "name": "graph-database",
    "path": "grph-3a8c-6d2b"
  },
  {
    "value": 29,
    "name": "sla-monitor",
    "path": "slam-8f1d-5e7a"
  },
  {
    "value": 52,
    "name": "captcha-service",
    "path": "cptc-1c9e-4b7d"
  },
  {
    "value": 77,
    "name": "data-catalog",
    "path": "dcat-6a3f-9c5b"
  },
  {
    "value": 43,
    "name": "dependency-resolver",
    "path": "dres-9d2a-7f1e"
  },
  {
    "value": 89,
    "name": "service-mesh",
    "path": "smsh-2b8c-5d3a"
  },
  {
    "value": 24,
    "name": "data-classification",
    "path": "dcls-7e4f-1a9b"
  },
  {
    "value": 56,
    "name": "stream-processor",
    "path": "strm-3c5d-8e2f"
  },
  {
    "value": 98,
    "name": "server-monitoring",
    "path": "srvr-5a7b-2c9e"
  },
  {
    "value": 15,
    "name": "notification-center",
    "path": "ntfc-8d1f-6a3c"
  },
  {
    "value": 62,
    "name": "data-quality",
    "path": "dqlt-1e9a-4b7d"
  },
  {
    "value": 36,
    "name": "query-service",
    "path": "qrys-6c2e-9f5a"
  },
  {
    "value": 81,
    "name": "policy-service",
    "path": "plcy-9a3b-7d5c"
  },
  {
    "value": 28,
    "name": "data-lineage",
    "path": "dlin-2f8e-4c1a"
  },
  {
    "value": 66,
    "name": "api-rate-limiter",
    "path": "aprl-5d7f-3b9e"
  },
  {
    "value": 45,
    "name": "id-generator",
    "path": "idgn-8c1b-6e3d"
  },
  {
    "value": 99,
    "name": "data-cleanup",
    "path": "dcln-3a9c-1f5b"
  },
  {
    "value": 34,
    "name": "message-filter",
    "path": "msgf-7d2e-5a8f"
  },
  {
    "value": 72,
    "name": "connection-manager",
    "path": "cnnm-1b6a-9c4d"
  },
  {
    "value": 51,
    "name": "logging-aggregator",
    "path": "lgag-4e7c-2d9b"
  },
  {
    "value": 83,
    "name": "token-service",
    "path": "tokn-6f3b-8a1e"
  },
  {
    "value": 26,
    "name": "storage-manager",
    "path": "strg-9c5d-3e7a"
  },
  {
    "value": 58,
    "name": "request-router",
    "path": "rqrt-2b8f-5c1d"
  },
  {
    "value": 91,
    "name": "session-tracker",
    "path": "ssnt-7a4e-1f9b"
  },
  {
    "value": 19,
    "name": "performance-monitor",
    "path": "prfm-3d6c-8b2a"
  },
  {
    "value": 76,
    "name": "data-ingestion",
    "path": "ding-5f9e-2c7d"
  },
  {
    "value": 44,
    "name": "integration-service",
    "path": "intg-8b1a-6d3f"
  },
  {
    "value": 61,
    "name": "time-zone-service",
    "path": "tmsz-1c7b-9a5e"
  },
  {
    "value": 87,
    "name": "feature-service",
    "path": "feat-4d2c-7f3a"
  },
  {
    "value": 32,
    "name": "content-filter",
    "path": "cnft-6e9d-3b5a"
  },
  {
    "value": 79,
    "name": "api-discovery",
    "path": "apid-9f1c-5e7b"
  },
  {
    "value": 47,
    "name": "runtime-environment",
    "path": "renv-2a8d-7c4e"
  },
  {
    "value": 94,
    "name": "device-registry",
    "path": "dvcr-5b3f-1a9c"
  },
  {
    "value": 13,
    "name": "data-partitioning",
    "path": "dprt-8c5a-3e7d"
  },
  {
    "value": 55,
    "name": "secret-manager",
    "path": "scrm-1f6b-9d2e"
  },
  {
    "value": 88,
    "name": "identity-provider",
    "path": "idpr-4a7c-2b8f"
  },
  {
    "value": 27,
    "name": "transaction-manager",
    "path": "txmg-7e3d-5c9a"
  },
  {
    "value": 62,
    "name": "workflow-orchestrator",
    "path": "wfor-3b5e-1d7c"
  },
  {
    "value": 46,
    "name": "bot-detection",
    "path": "botd-6c9f-8a2b"
  },
  {
    "value": 84,
    "name": "network-topology",
    "path": "ntop-9d1a-4f7e"
  },
  {
    "value": 22,
    "name": "data-cleansing",
    "path": "dcln-2e8b-6c3d"
  },
  {
    "value": 67,
    "name": "consent-manager",
    "path": "cnsm-5f7a-3b9d"
  },
  {
    "value": 31,
    "name": "service-registry",
    "path": "sreg-8c4f-1e2a"
  },
  {
    "value": 73,
    "name": "process-scheduler",
    "path": "prcs-3a6b-9d5c"
  },
  {
    "value": 48,
    "name": "template-renderer",
    "path": "tmpl-7d1e-5f3b"
  },
  {
    "value": 93,
    "name": "health-monitoring",
    "path": "hlth-1c9a-4b7d"
  },
  {
    "value": 25,
    "name": "graph-service",
    "path": "grph-6e2f-8a3c"
  },
  {
    "value": 53,
    "name": "cluster-manager",
    "path": "clmg-9b5d-2c7e"
  },
  {
    "value": 78,
    "name": "data-archival",
    "path": "darch-4f1a-7e9b"
  },
  {
    "value": 39,
    "name": "thread-manager",
    "path": "thmg-2d8c-5a3f"
  },
];

export default forecastData;

// =============================================================
//  CONFIG.JS — Edit this file once per event/organization
//  Both index.html and admin.html read from this object.
// =============================================================

const CONFIG = {

  // ── Data Mode ─────────────────────────────────────────────
  // "local"   = reads from a local CSV file (no Supabase needed)
  // "supabase" = reads from and writes to Supabase (live/production)
  dataMode: "local",
  localCsvFile: "data/registrations.csv",  // Path relative to index.html

  // ── Organization ─────────────────────────────────────────
  orgName:    "UMKC Conservatory",
  footerText: "© 2026 Rocketship Strategies",
  eventName:  "Welcome To Crescendo 2026",
  logoFile:   "UMKC Logo.png",

  // ── Brand Colors ─────────────────────────────────────────
  primaryColor:     "#667eea",
  primaryDark:      "#5568d3",
  primaryLight:     "#eef0fd",
  backgroundColor:  "#eef0fd",
  textColor:        "#1e1e2e",
  successColor:     "#16a34a",
  dangerColor:      "#ef4444",

  // ── Supabase (only used when dataMode = "supabase") ──────
  supabaseUrl:   "https://quqdgiymyirliaxztahl.supabase.co",
  supabaseKey:   "sb_publishable_Foujpcp7YN7rgtC9v1rBfA_SalQphbr",
  tableName:     "registrations",

};
import { StyleSheet } from "@react-pdf/renderer";

export const PDF_COLORS = {
  black: "#171717",
  muted: "#737373",
  light: "#a3a3a3",
  border: "#e5e5e5",
  bg: "#f5f5f5",
  accent: "#10b981",
  accentLight: "#d1fae5",
  white: "#ffffff",
};

export const pdfStyles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    paddingTop: 56,
    paddingBottom: 52,
    paddingHorizontal: 44,
    fontSize: 9,
    color: PDF_COLORS.black,
    backgroundColor: PDF_COLORS.white,
  },

  // ── Cover ──────────────────────────────────────────────────────────────────
  coverLogoText: {
    fontSize: 26,
    fontFamily: "Helvetica-Bold",
    letterSpacing: 8,
    color: PDF_COLORS.black,
  },
  coverSubtitle: {
    fontSize: 9,
    color: PDF_COLORS.muted,
    marginTop: 5,
    letterSpacing: 4,
  },
  divider: {
    borderBottomWidth: 1,
    borderColor: PDF_COLORS.border,
    marginVertical: 24,
  },
  coverName: {
    fontSize: 22,
    fontFamily: "Helvetica-Bold",
    color: PDF_COLORS.black,
    marginBottom: 8,
  },
  coverMeta: {
    fontSize: 10,
    color: PDF_COLORS.muted,
    marginBottom: 4,
  },
  coverModuleBox: {
    backgroundColor: PDF_COLORS.bg,
    borderRadius: 6,
    padding: 16,
    marginTop: 8,
  },
  coverModuleLabel: {
    fontSize: 8,
    fontFamily: "Helvetica-Bold",
    color: PDF_COLORS.muted,
    letterSpacing: 2,
    marginBottom: 10,
  },
  coverModuleItem: {
    fontSize: 10,
    color: PDF_COLORS.black,
    marginBottom: 5,
  },

  // ── Section header bar ─────────────────────────────────────────────────────
  sectionHeader: {
    backgroundColor: PDF_COLORS.black,
    paddingVertical: 9,
    paddingHorizontal: 14,
    marginBottom: 14,
    borderRadius: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sectionHeaderLeft: {
    flexDirection: "column",
  },
  sectionHeaderTitle: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
    color: PDF_COLORS.white,
    letterSpacing: 1,
  },
  sectionHeaderSub: {
    fontSize: 8,
    color: PDF_COLORS.light,
    marginTop: 2,
  },

  // ── Table ──────────────────────────────────────────────────────────────────
  tableHeaderRow: {
    flexDirection: "row",
    backgroundColor: PDF_COLORS.bg,
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderColor: PDF_COLORS.border,
  },
  tableHeaderCell: {
    fontFamily: "Helvetica-Bold",
    fontSize: 8,
    color: PDF_COLORS.muted,
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: PDF_COLORS.border,
    paddingVertical: 5,
    paddingHorizontal: 8,
    alignItems: "center",
  },
  tableRowAlt: {
    backgroundColor: "#fafafa",
  },
  tableCell: {
    fontSize: 9,
    color: PDF_COLORS.black,
  },
  tableCellMuted: {
    fontSize: 9,
    color: PDF_COLORS.muted,
  },

  // ── Score bar ──────────────────────────────────────────────────────────────
  barContainer: {
    height: 6,
    backgroundColor: PDF_COLORS.border,
    borderRadius: 3,
    overflow: "hidden",
  },
  barFill: {
    height: 6,
    backgroundColor: PDF_COLORS.accent,
    borderRadius: 3,
  },

  // ── Footer ─────────────────────────────────────────────────────────────────
  footer: {
    position: "absolute",
    bottom: 20,
    left: 44,
    right: 44,
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderColor: PDF_COLORS.border,
    paddingTop: 6,
  },
  footerText: {
    fontSize: 7,
    color: PDF_COLORS.light,
  },
});

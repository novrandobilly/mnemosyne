/**
 * FULLY DISABLED TESTS
 * --------------------
 * Tests listed here are completely unavailable in the admin test panel.
 * - The toggle switch is hidden — the test cannot be enabled or disabled by the admin.
 * - The row is greyed out with an "Unavailable" badge.
 *
 * To disable a test, add its slug here. Slugs match TEST_ORDER in useTGetTestBank.ts.
 *
 * Available slugs:
 *   /papikostick | /disc | /eas4 | /eas5 | /eas6 | /eas7 | /eas10
 *   /a5 | /dr | /da5 | /st7 | /intray1 | /intray2
 */

type TestSlug =
  | "/papikostick"
  | "/disc"
  | "/eas4"
  | "/eas5"
  | "/eas6"
  | "/eas7"
  | "/eas10"
  | "/a5"
  | "/dr"
  | "/da5"
  | "/st7"
  | "/intray1"
  | "/intray2";

const FULLY_DISABLED_TEST_SLUGS: TestSlug[] = [
  "/intray1",
  "/intray2",
  "/papikostick",
  "/disc",
];

/** Use this Set for type-safe lookups against plain `string` slugs from the API. */
export const FULLY_DISABLED_SLUGS = new Set<string>(FULLY_DISABLED_TEST_SLUGS);

import { describe, expect, it } from "vitest";
import { visitItemIdsForReplace } from "./visit-item-replace";

describe("visit item replace", () => {
  it("should_skip_replace_until_the_visit_items_have_loaded", () => {
    expect(visitItemIdsForReplace(undefined, [])).toBeNull();
    expect(visitItemIdsForReplace(undefined, [4, 9])).toBeNull();
  });

  it("should_replace_with_the_form_list_after_a_load_including_an_intentional_clear", () => {
    expect(visitItemIdsForReplace([{ id: 4 }], [4, 9])).toEqual([4, 9]);
    expect(visitItemIdsForReplace([], [])).toEqual([]);
  });
});

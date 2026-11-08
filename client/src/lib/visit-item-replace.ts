// A replace writes the form list over the visit, including an empty list,
// which deletes stored prescriptions or test requests. The form list is empty
// until that query resolves, so an unresolved query must not be saved.
export function visitItemIdsForReplace<T>(
  loadedItems: unknown,
  formIds: readonly T[],
): T[] | null {
  if (!Array.isArray(loadedItems)) return null;
  return [...formIds];
}

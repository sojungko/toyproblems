const hasCycle = (linkedList) => {
  let tortoise = linkedList; //Don't use const because it'll get reassigned in while loop
  let hare = linkedList;
  while (hare.next && hare.next.next) {
    hare = hare.next.next;
    tortoise = tortoise.next;
    if (hare.value === tortoise.value) {
      return true;
    }
  }
  return false;
}
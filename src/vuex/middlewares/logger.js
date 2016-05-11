const onInit = (state, store) => {
  console.log('[onInit]State -> ', state);
  console.log('[onInit]Store -> ', store);
};

const onMutation = (mutation, state, store) => {
  console.log(`[onMutation]Mutation type -> ${mutation.type}`);
  console.log(`[onMutation]Mutation payload -> `, mutation.paylaod);
  console.log(`[onMutation]Mutation store -> `, store);
}

export default {
  onInit,
  onMutation
}

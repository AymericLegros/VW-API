import { PubSub } from 'apollo-server';

const pubsub = new PubSub();
const UPDATE_ADDED = 'UPDATE_ADDED';

export default {
  Subscription: {
    updateAdded: {
      // Additional event labels can be passed to asyncIterator creation
      subscribe: async () => await pubsub.asyncIterator([UPDATE_ADDED]),
    },
  },
  Mutation: {
    addUpdate: async (root, args, context) => {
      await pubsub.publish(UPDATE_ADDED, { updateAdded: args });
      return await UpdateService.addUpdate(args);
    },
  },
}
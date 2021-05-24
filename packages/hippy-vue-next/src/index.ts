import { createRenderer } from 'vue';
import * as nodeOps from './runtime/node-ops';
import { setApp } from './util';
import Native from './runtime/native';

const {
  render,
  createApp: originalCreateApp,
} = createRenderer<Node, Element>({
  patchProp(el: Element, key: string, prevValue: any, nextValue: any) {

  },
  ...nodeOps,
});


function createApp(rootEl: Element) {
  const app = originalCreateApp(rootEl);
  setApp(app);
  return app;
}

export {
  Native,
  createApp,
  render,
};

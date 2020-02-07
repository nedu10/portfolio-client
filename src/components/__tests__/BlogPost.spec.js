import Vuex from "vuex";
import { shallow, createLocalVue } from "@vue/test-utils";
import BlogPost from "@/components/BlogPost.vue";
import TestHelpers from "test-helpers";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("BlogPost", () => {
  let wrapper;
  let store;

  let h;
  beforeEach(() => {
    store = new Vuex.Store({});
    wrapper = shallow(BlogPost, { localVue, store });
    h = new TestHelpers(wrapper, expect);
  });
});

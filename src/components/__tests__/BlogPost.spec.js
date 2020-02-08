import Vuex from "vuex";
import { shallowMount, createLocalVue } from "@vue/test-utils";
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
    wrapper = shallowMount(BlogPost, { localVue, store });
    h = new TestHelpers(wrapper, expect);
  });

  it("wrapper without errors", () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});

// Import `shallowMount` from Vue Test Utils and the component being tested
// import { shallowMount } from "@vue/test-utils";

// Mount the component
// const wrapper = shallowMount(BlogPost);

// Here are some Jest tests, though you can
// use any test runner/assertion library combo you prefer
// describe("BlogPost", () => {
// Inspect the raw component options
// it('has a created hook', () => {
//   expect(typeof BlogPost.created).toBe('function')
// })

// it("wrapper without errors", () => {
//   expect(wrapper.isVueInstance()).toBeTruthy();
// });

// Evaluate the results of functions in
// the raw component options
// it('sets the correct default data', () => {
//   expect(typeof BlogPost.data).toBe('function')
//   const defaultData = BlogPost.data()
//   expect(defaultData.message).toBe('hello!')
// })

// Inspect the component instance on mount
// it('correctly sets the message when created', () => {
//   expect(wrapper.vm.$data.message).toBe('bye!')
// })

// Mount an instance and inspect the render output
// it('renders the correct message', () => {
//   expect(wrapper.text()).toBe('bye!')
// })
// });

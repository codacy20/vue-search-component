import { shallowMount } from "@vue/test-utils";
import Tags from "../../src/components/Home/Tags.vue";
import sinon from "sinon";

describe("Tags.vue", () => {
  it("chooseTag should emit when clicking on tag", () => {
    const spy = sinon.spy();
    const tag = { name: "Popular", url: "popular" };
    const wrapper = shallowMount(Tags, {
      propsData: { tag },
      methods: { emitEvent: spy },
    });

    const container = wrapper.find(".tags-container");
    container.trigger("click");

    sinon.assert.calledOnce(spy);
  });
});

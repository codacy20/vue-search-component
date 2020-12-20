import { shallowMount } from "@vue/test-utils";
import Searchbox from "../../src/components/Home/Searchbox.vue";
import Tags from "../../src/components/Home/Tags.vue";
import sinon from "sinon";
import { expect } from "chai";

describe("Searchbox.vue", () => {
  it("should render tags", () => {
    const tags = [
      { name: "Tag1", url: "tag1" },
      { name: "Tag2", url: "tag2" },
    ];

    const wrapper = shallowMount(Searchbox, {
      propsData: { tags },
    });

    const tagElements = wrapper.findAllComponents(Tags);

    expect(tagElements.length).to.equal(2);
  });

  it("should set a placeholder for input", () => {
    const title = "test-title";
    const wrapper = shallowMount(Searchbox, {
      propsData: { title },
    });

    const input = wrapper.find("#searchbox");

    expect(input.attributes("placeholder")).to.equal(title);
  });

  it("should emit change when input gets text", () => {
    const spy = sinon.spy();

    const wrapper = shallowMount(Searchbox, {
      methods: { search: spy },
    });

    const input = wrapper.find("#searchbox");
    input.setValue("test");
    input.trigger("change");

    sinon.assert.calledOnce(spy);
  });
});

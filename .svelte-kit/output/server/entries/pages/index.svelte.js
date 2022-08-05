import { c as create_ssr_component, a as add_attribute, b as each, e as escape, v as validate_component } from "../../_app/immutable/chunks/index-511472e1.js";
import { e as episodes, t as title, d as description } from "../../_app/immutable/chunks/podcast-d16fdb06.js";
const Episode = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { episodeClass } = $$props;
  if ($$props.episodeClass === void 0 && $$bindings.episodeClass && episodeClass !== void 0)
    $$bindings.episodeClass(episodeClass);
  return `<ul${add_attribute("class", episodeClass, 0)} id="${"track-list"}">${each(episodes, ({ title: title2, description: description2, url }, i) => {
    return `<li${add_attribute("id", i + 1, 0)} class="${"mt-4"}">
			<h2 class="${"inline-block mt-4"}">${escape(title2)}</h2>
			<figure class="${"border-b-2 pb-2 mb-6"}"><audio controls${add_attribute("src", url, 0)} class="${"w-full mt-4 mb-3"}"></audio>
			<figcaption>
					<p>${escape(description2)}</p>
				</figcaption></figure>
		</li>`;
  })}</ul>`;
});
let shortText = 160;
function truncateText(text, length) {
  if (text.length <= length) {
    return text;
  }
  return text.substr(0, length) + "\u2026";
}
const Podcast = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { podcastClass } = $$props;
  let bodyCopy = truncateText;
  if ($$props.podcastClass === void 0 && $$bindings.podcastClass && podcastClass !== void 0)
    $$bindings.podcastClass(podcastClass);
  return `<section class="${escape(podcastClass, true) + " border-b-2 pb-6 mb-1"}" aria-label="${"summary"}"><img class="${"row-span-1 rounded drop-shadow-md"}" alt="${"'I relate therefore I am', A portrait of Descartes with a semi-transparent grid of people on top"}" src="${"/MBOE-social-mindfulness_cover-1x.jpeg"}" srcset="${"/MBOE-social-mindfulness_cover-1x.jpeg 1x,\n								/MBOE-social-mindfulness_cover-1halfx.jpeg 1.5x,\n								/MBOE-social-mindfulness_cover-3x.jpeg 3x,\n								/MBOE-social-mindfulness_cover-4x.jpeg 4x"}">
	<div class="${"row-span-2 mt-3 md:-mt-3"}"><h1>${escape(title)}</h1>
		<p class="${""}">${escape(bodyCopy(description, shortText))}</p>
		<button class="${"float-right underline text-sm font-sans font-semibold underline-offset-1 decoration-2 " + escape("mt-[-51px]", true)}">${escape("More")}</button></div>
</section>`;
});
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Podcast, "Podcast").$$render(
    $$result,
    {
      podcastClass: "max-w-xl grid md:grid-cols-[220px_561px] gap-x-2"
    },
    {},
    {}
  )}
${validate_component(Episode, "Episode").$$render($$result, { episodeClass: "max-w-xl" }, {}, {})}`;
});
export {
  Routes as default
};

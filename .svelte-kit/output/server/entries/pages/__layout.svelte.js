import { c as create_ssr_component, a as add_attribute, e as escape, v as validate_component } from "../../_app/immutable/chunks/index-511472e1.js";
const logo = "/_app/immutable/assets/mindfulness-connected-logo_t-41df87ca.svg";
const LinkAsButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { link } = $$props;
  let { cta } = $$props;
  let { LinkAsButtonClass } = $$props;
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  if ($$props.cta === void 0 && $$bindings.cta && cta !== void 0)
    $$bindings.cta(cta);
  if ($$props.LinkAsButtonClass === void 0 && $$bindings.LinkAsButtonClass && LinkAsButtonClass !== void 0)
    $$bindings.LinkAsButtonClass(LinkAsButtonClass);
  return `<a${add_attribute("href", link, 0)} class="${escape(LinkAsButtonClass, true) + " rounded-full border-2 border-teal-50 px-6 py-1 uppercase tracking-widest text-xs font-bold font-sans font-semibold text-black no-underline hover:no-underline"}">${escape(cta)}</a>`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<header>
	<link rel="${"stylesheet"}" href="${"https://use.typekit.net/edm6svv.css"}">

	<nav class="${"flex py-4 border-b-2 mb-4"}"><a class="${"md:ml-8 ml-4"}" href="${"https://www.mindfulnessconnected.com"}"><img class="${"w-[120px]"}"${add_attribute("src", logo, 0)} alt="${"Mindfulness Connected"}"></a>
		${validate_component(LinkAsButton, "LinkAsButton").$$render(
    $$result,
    {
      LinkAsButtonClass: "ml-auto md:mr-8 mr-4",
      cta: "Buy the book",
      link: "https://www.mindfulnessconnected.com/shop/social-mindfulness"
    },
    {},
    {}
  )}</nav>

	<div class="${"corner"}"></div>
</header>`;
});
const app = "";
const __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-1izrdc8.svelte-1izrdc8{flex:1;display:flex;flex-direction:column;padding:1rem;width:100%;max-width:1024px;margin:0 auto;box-sizing:border-box}footer.svelte-1izrdc8.svelte-1izrdc8{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:40px}footer.svelte-1izrdc8 a.svelte-1izrdc8{font-weight:bold}@media(min-width: 480px){footer.svelte-1izrdc8.svelte-1izrdc8{padding:40px 0}}",
  map: null
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

<main class="${"svelte-1izrdc8"}">${slots.default ? slots.default({}) : ``}</main>

<footer class="${"svelte-1izrdc8"}"><p>Visit <a href="${"https://www.mindfulnessconnected.com/mboe"}" class="${"svelte-1izrdc8"}">mindfulnessconnected.com/mboe</a> to learn about our programme</p>
</footer>`;
});
export {
  _layout as default
};

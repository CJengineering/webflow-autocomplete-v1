"use strict";
(() => {
  // bin/live-reload.js
  new EventSource(`${"http://localhost:3000"}/esbuild`).addEventListener("change", () => location.reload());

  // src/utils/newsFilter.ts
  var newsFilter = (name) => {
    const sources = document.querySelectorAll(`[cj-attr="${name}"]`);
    console.log("this is the sources", sources.length);
    const input = document.querySelector(`[cj-attr-input="${name}"]`);
    const handleInput = (event) => {
      const target = event.target;
      const inputValue = target.value.toLowerCase();
      console.log("this is the input value", inputValue);
      sources.forEach((source) => {
        const sourceText = source.textContent?.toLowerCase() || "";
        const isMatch = sourceText.includes(inputValue);
        console.log("PARENT", source, "TEXT", sourceText, "MATCH", isMatch);
        if (inputValue === "") {
          source.style.display = "block";
        } else if (isMatch) {
          source.style.display = "block";
        } else {
          source.style.display = "none";
        }
      });
    };
    input.addEventListener("input", handleInput);
  };

  // src/utils/initDynamicFilters.ts
  var initializeDynamicFilters = () => {
    const inputs = document.querySelectorAll("input[cj-attr-input]");
    console.log("Inputs ", inputs);
    inputs.forEach((input) => {
      const attrValue = input.getAttribute("cj-attr-input");
      if (attrValue) {
        console.log("Input names ", attrValue);
        newsFilter(attrValue);
      }
    });
  };

  // src/index.ts
  window.fsAttributes = window.fsAttributes || [];
  window.fsAttributes.push([
    "cmsload",
    (listInstances) => {
      console.log("custom code loaded");
      window.Webflow ||= [];
      window.Webflow.push(() => {
        initializeDynamicFilters();
        const filterDiv = document.getElementById("filter");
        const loader = document.getElementById("loader");
        if (filterDiv && loader) {
          filterDiv.classList.remove("hide");
          loader.style.display = "none";
        }
      });
    }
  ]);
})();
//# sourceMappingURL=index.js.map

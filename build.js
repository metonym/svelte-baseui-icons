const fs = require("fs");
const pkg = require("./package.json");
const { cleanDir, generateFromFolder } = require("svg-to-svelte");

function build() {
  const { moduleNames } = generateFromFolder(
    "node_modules/baseui/src/icon/svg",
    "lib",
    {
      clean: true,
    }
  );

  cleanDir("docs");

  const docs = [
    "# docs",
    `> ${moduleNames.length} icons from baseui@9.72.0.`,
    "## Usage",
    "```html",
    `<script>
       import Icon from "svelte-baseui-icons/lib/{ModuleName}";
     </script>

     <Icon />`,
    "```",
    "## List of icons by `ModuleName`",
    moduleNames.map((moduleName) => `- ${moduleName}`).join("\n"),
  ];

  fs.writeFileSync("docs/README.md", docs.join("\n"));
}

build();

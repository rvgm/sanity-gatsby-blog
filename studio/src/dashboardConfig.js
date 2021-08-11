export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "61136996693e9e7ca5ce4d9b",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-tmcgpu7z",
                  apiId: "44e03c23-bb2d-4711-9784-91cca7d13d52",
                },
                {
                  buildHookId: "6113699636336b7adb50b1f8",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-ip9f8ng3",
                  apiId: "39b71dff-3929-4248-a5cf-15fd9cf8a6b3",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/rvgm/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-ip9f8ng3.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};

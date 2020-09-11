module: {
  rules: [
    {
      test: /\.(t|j)sx?$/,
      use: { loader: "awesome-typescript-loader" },
    },
    {
      enforce: "pre",
      test: /\.js$/,
      loader: "source-map-loader",
    },
    {
      entry: "index.tsx",
    },
  ];
}

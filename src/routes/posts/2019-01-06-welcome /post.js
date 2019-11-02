export default {
  title: `Tutorial for blog`,
  tags: ['Javascript'],
  spoiler: "A brief discription and explanation of the rendering mechaine of famous javascript frameworks",
  getContent: () => import('./document.mdx'),
}
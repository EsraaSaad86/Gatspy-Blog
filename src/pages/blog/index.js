import * as React from "react";
import Layout from "../layout";
import { graphql, Link } from "gatsby";

const blog = ({ data }) => {
  return (
    <Layout pageTitle="Blog Page">
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <h2>
            <Link to={`/blog/${node.slug}`}>{node.frontmatter.title}</Link>
          </h2>
          <p>Posted in {node.frontmatter.data}</p>
        </article>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date
          title
        }
        id
        slug
      }
    }
  }
`;

export default blog;

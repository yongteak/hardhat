import React from "react";
import { styled } from "linaria/react";
import SEO from "./SEO";
import LandingNavigation from "./LandingNavigation";
import LandingFooter from "./LandingFooter";
import Banner, { DefaultBanner } from "./ui/Banner";
import { tm } from "../themes";
import defaultProps from "./ui/default-props";
import { DefaultBannerProps } from "./ui/types";

const { defaultBannerContent } = defaultProps;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  main {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-color: ${tm(({ colors }) => colors.neutral0)};
  }
  height: 100vh;
  min-width: 320px;
`;

type Props = React.PropsWithChildren<{
  seo: {
    title: string;
  };
}>;

const LandingLayout = ({ children, seo }: Props) => {
  return (
    <Container>
      <Banner
        content={defaultBannerContent}
        renderContent={({ content }: DefaultBannerProps) => (
          <DefaultBanner content={content} />
        )}
      />
      <LandingNavigation />
      <SEO seo={seo} />
      <main>{children}</main>
      <LandingFooter />
    </Container>
  );
};

export default LandingLayout;

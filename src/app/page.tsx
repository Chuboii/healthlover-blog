import BlurBg from "@/components/blur bg/BlurBg";
import ExplorePosts from "@/components/explore posts/ExplorePosts";
import MightAlsoLikePost from "@/components/might also like/MightAlsoLikePost";
import Navbar from "@/components/navbar/Navbar";
import NewPostDisplay from "@/components/new post display/NewPostDisplay";
import Newsletter from "@/components/newsletter/Newsletter";
import Recommendation from "@/components/recommendation/Recommendation";
import SearchForm from "@/components/search form/SearchForm";
import WelcomeTexts from "@/components/welcome texts/WelcomeTexts";
import { Container, Wrap, Wrapper } from "./HomeStyle.style";

export default function Home() {
  return (
    <Container>
  <Navbar/>
      <WelcomeTexts />
      <Wrapper>
        <NewPostDisplay />
        <Wrap>
        <Newsletter />
          <Recommendation />
        </Wrap>
        </Wrapper>
      <ExplorePosts />
      <MightAlsoLikePost />
      <SearchForm />
      <BlurBg />
      
    </Container>
  );
}

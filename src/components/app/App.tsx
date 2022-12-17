import { ContentContainer } from "../content-container/content-container";
import { Footer } from "../footer/footer";
import { Header } from "../header/header";

const App = () => {
  return (
    <div className="app">
      <Header />
      <ContentContainer>
        <>First</>
        <>Second</>
        <>Third</>
      </ContentContainer>
      <Footer />
    </div>
  );
}

export default App;

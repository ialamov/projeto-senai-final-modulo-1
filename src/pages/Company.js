import Header from "../components/shared/Header";
import Forms from "../components/Forms";
import Footer from "../components/shared/Footer";

export default function Company() {
  

  return (
    <div>
      <header>
        <Header />
      </header>
      <section className="container-company">
        <Forms />
      </section>
      <Footer />
    </div>
  )

}
import FormProduct from "../components/FormProduct";
import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";

export default function Product() {
  return (
    <div>
      <Header/>
      <section className="container-company">
        <FormProduct />
      </section>
      <Footer />
    </div>
  )
}
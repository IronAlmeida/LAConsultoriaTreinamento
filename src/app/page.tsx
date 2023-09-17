import Header from "../components/header";
import Banner from "../components/banner";
import Servicos from "../components/servicos";
import Image from "next/image";
import Empresa from "../components/empresa";
import Clientes from "../components/clientes";
import Depoimentos from "../components/depoimentos";
import Widget from "../components/widget";
import Footer from "../components/footer";

export default function Home() {
  return (
    <body>
      <Header color="transparent" position="fixed" />
      <Banner />
      <Servicos />
      <Empresa />
      <Clientes />
      <Depoimentos />
      <Widget />
      <Footer />
    </body>
  );
}

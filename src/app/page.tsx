import GiriosNamaiForm from "./components/form/GiriosNamaiForm";
import IndividualiuNamuKvartalas from "./components/IndividualiuNamuKvartalas/IndividualiuNamuKvartalas";
import Rome from "./components/rome/Rome";
import FunkcionalumasIr from "./components/tobulasDerinysTarp/FunkcionalumasIr";
import IsmanumoIrPatogumo from "./components/tobulasDerinysTarp/IsmanumoIrPatogumo";
import TobulasDerinysTarpGamtos from "./components/tobulasDerinysTarpGamtos/TobulasDerinysTarpGamtos";

export default function page() {
  return (
    <>
      <IndividualiuNamuKvartalas />
      <IsmanumoIrPatogumo />
      <FunkcionalumasIr />
      <div className="hidden md:block">
        <Rome />
      </div>
      <TobulasDerinysTarpGamtos />
      <GiriosNamaiForm />
    </>
  );
}

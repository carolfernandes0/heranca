import { Bebe } from "./src/model/Bebe";
import { PessoaFisica } from "./src/model/PessoaFisica";
import { PessoaJuridica} from "./src/model/PessoaJuridica";

const um = new PessoaJuridica (`Carolina`, `74321905`);
um.setNome(`juca`)
um.setCnpj(`2889154`)
console.log(um.getNome());
console.log(um.getCnpj());

const dois = new PessoaFisica (`luca`, `388106354`);
dois.setNome(`Carol`);
dois.setCpf(`28893892764`);
console.log(dois.getNome());
console.log(dois.getCpf());


const tres = new Bebe (`bibi`, `beatriz`, 2, 6)
tres.setId(`kiki`);
tres.setNome(`kiara`);
tres.setPeso(23);
tres.setAltura(87);
console.log(tres.getId());
console.log(tres.getNome());
console.log(tres.getPeso());
console.log(tres.getAltura());
import { userSeed } from "./userSeed";
import { tecnicoSeed } from "./tecnicoSeed";
import { tecnicoTipoSeed } from "./tecnicoTipoSeed";
import { categoriaSeed } from "./categoriaSeed";
import { SubcategiaSeed } from "./subCategoria";
import { tiketStatusSeed } from "./tiketStatus";
import { empresaSeed } from "./empresaSeed";
import { tiketSeed } from "./tiketSeed";
import { ClienteSeed } from "./clienteSeed";
import { prioridadeSeed } from "./prioridadeSeed";
import { empresaTipoSeed } from "./empresaTipoSeed";

const Seed = (number) => {


    Promise.all(
        [
            empresaTipoSeed(number),
            prioridadeSeed(number),
            userSeed(number),
            tecnicoTipoSeed(number),
            tecnicoSeed(number),
            SubcategiaSeed(number),
            categoriaSeed(number),
            tiketStatusSeed(number),
            empresaSeed(number),
            ClienteSeed(number),
            tiketSeed(number)

        ]
    ).then((values) => console.log(values))






}

Seed(20)
export { Seed }
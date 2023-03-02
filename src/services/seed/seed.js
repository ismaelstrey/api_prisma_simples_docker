import { userSeed } from "./userSeed";
import { tecnicoSeed } from "./tecnicoSeed";
import { tecnicoTipoSeed } from "./tecnicoTipoSeed";

const Seed = async (number) => {
    await userSeed(number)
    await tecnicoTipoSeed(number)
    await tecnicoSeed(number)
}

Seed(20)
export { Seed }